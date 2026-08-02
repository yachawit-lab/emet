"""
Integrity gates.

Each gate here is one of the failure modes recorded in playbook §2c, turned from a
thing an analyst has to remember into a thing the code checks. The gates decide
confidence; nothing upstream of this module is allowed to.

The governing rule, and the reason this file exists at all:

    Sources that disagree are NEVER averaged. Averaging a good number with a bad
    one produces a number that is wrong and looks fine. Emit both, mark DISPUTED,
    and let the desk see the conflict.
"""

from __future__ import annotations

from datetime import datetime

from .model import (
    DISPUTED,
    SINGLE,
    STALE,
    VERIFIED,
    Field,
    Series,
)

# How stale a field may be before it stops counting as current, by kind.
# Daily bars are expected to be a day old — that's not staleness, that's the interval.
TTL_SECONDS = {
    "intraday": 45 * 60,
    "daily": 5 * 24 * 3600,
}


def agree(
    candidates: dict[str, float],
    tol_bps: float,
    as_of: datetime | None = None,
    unit: str | None = None,
) -> Field:
    """Cross-source agreement.

    `candidates` maps source id -> value. Tolerance is in basis points of the
    median, so it scales across a 4,000 gold print and a 27,000 index print.

    This is the gate for the 2026-07-29 incident: two web feeds implied gold ~4,040
    when it was really ~4,020. Both were single reads. Under this gate that pair
    comes back DISPUTED with both values visible, instead of one confident average.
    """
    live = {s: v for s, v in candidates.items() if v is not None}
    if not live:
        return Field(value=None, confidence="MISSING", note="no source returned a value")

    if len(live) == 1:
        src, val = next(iter(live.items()))
        return Field(
            value=round(val, 4),
            confidence=SINGLE,
            unit=unit,
            sources=[src],
            as_of=as_of,
            note="single source — not corroborated",
        )

    vals = sorted(live.values())
    mid = vals[len(vals) // 2]
    if mid == 0:
        return Field(value=None, confidence="MISSING", note="median of zero")

    spread_bps = (vals[-1] - vals[0]) / abs(mid) * 10_000

    if spread_bps <= tol_bps:
        return Field(
            value=round(mid, 4),
            confidence=VERIFIED,
            unit=unit,
            sources=sorted(live),
            as_of=as_of,
            note=f"{len(live)} sources agree within {spread_bps:.1f} bps",
        )

    # --- outlier rejection ------------------------------------------------------
    # With three or more sources, a single deviant must not veto the rest. Judging
    # the whole set by max-minus-min means one frozen feed drags everything to
    # DISPUTED precisely when the market is moving and a read matters most — which
    # is exactly when a restamping source (gold-api, measured) will deviate.
    #
    # So: cluster around the MEDIAN, which a lone outlier cannot move, and keep the
    # agreeing group. Two independent sources still have to agree — one survivor is
    # not a cluster, it is an opinion.
    if len(live) >= 3:
        inliers = {s: v for s, v in live.items() if abs(v - mid) / abs(mid) * 10_000 <= tol_bps}
        outliers = {
            s: (v - mid) / abs(mid) * 10_000 for s, v in live.items() if s not in inliers
        }
        if len(inliers) >= 2:
            ivals = sorted(inliers.values())
            imid = ivals[len(ivals) // 2]
            ispread = (ivals[-1] - ivals[0]) / abs(imid) * 10_000
            worst = max(outliers, key=lambda s: abs(outliers[s]))
            return Field(
                value=round(imid, 4),
                confidence=VERIFIED,
                unit=unit,
                sources=sorted(inliers),
                as_of=as_of,
                excluded=outliers,
                note=(
                    f"{len(inliers)} of {len(live)} sources agree within {ispread:.1f} bps; "
                    f"excluded {worst} at {outliers[worst]:+.0f} bps — check that feed"
                ),
            )

    return Field(
        value={s: round(v, 4) for s, v in sorted(live.items())},
        confidence=DISPUTED,
        unit=unit,
        sources=sorted(live),
        as_of=as_of,
        note=(
            f"sources disagree by {spread_bps:.1f} bps (tolerance {tol_bps:.0f}) — "
            "NOT averaged; resolve against a live broker print before sizing"
        ),
    )


def check_freshness(f: Field, now: datetime, kind: str) -> Field:
    """Demote anything past its TTL. A stale field may still be informative, but it
    may never serve as the anchor (playbook §2a)."""
    if f.as_of is None or f.confidence in ("MISSING", DISPUTED):
        return f
    age = (now - f.as_of).total_seconds()
    if age > TTL_SECONDS.get(kind, TTL_SECONDS["intraday"]):
        f.confidence = STALE
        f.note = f"age {int(age)}s exceeds {kind} TTL"
    return f


def reconcile_atr(points: float | None, pct: float | None, price: float | None) -> str | None:
    """ATR in points, ATR as a percentage, and price must describe the same thing.

    Returns None when consistent, or a reason string when not. This is the direct
    check for the vendor-mislabelling row in §2c — an "ATR 11.86" on an instrument
    trading at 4,000 with a real ATR near 84 fails here by a factor of seven.
    """
    if None in (points, pct, price) or price == 0:
        return None
    implied = points / price * 100
    if pct == 0:
        return "reported ATR% is zero"
    ratio = implied / pct
    if not (0.8 <= ratio <= 1.25):
        return (
            f"ATR points ({points:.2f}) implies {implied:.2f}% at price {price:.2f}, "
            f"but {pct:.2f}% was reported — off by {ratio:.1f}x"
        )
    return None


def roll_suspect(futures: Series, spot: Series) -> str | None:
    """Detect a futures feed echoing the previous contract.

    On 2026-07-28 Yahoo's GC=F printed 4,075.90 with a high/low band matching the
    *prior* session's spot range. The tell is that the futures bar's range sits on
    top of yesterday's spot range while today's spot has moved off it.
    """
    if len(futures.bars) < 2 or len(spot.bars) < 2:
        return None

    f_last, s_last, s_prev = futures.bars[-1], spot.bars[-1], spot.bars[-2]

    def overlap(a_lo: float, a_hi: float, b_lo: float, b_hi: float) -> float:
        span = min(a_hi, b_hi) - max(a_lo, b_lo)
        width = max(a_hi - a_lo, 1e-9)
        return max(span, 0.0) / width

    with_prev = overlap(f_last.low, f_last.high, s_prev.low, s_prev.high)
    with_today = overlap(f_last.low, f_last.high, s_last.low, s_last.high)

    if with_prev > 0.9 and with_today < 0.5:
        return (
            f"futures band {f_last.low:.2f}-{f_last.high:.2f} matches the PRIOR spot "
            f"session ({with_prev:.0%} overlap) but not today's ({with_today:.0%}) — "
            "possible contract-roll artifact; anchoring on spot"
        )
    return None


def sanity_bounds(symbol: str, price: float, bounds: tuple[float, float]) -> str | None:
    """Last-resort range check. Catches a decimal slip or a symbol collision that
    every other gate would happily pass along."""
    lo, hi = bounds
    if not (lo <= price <= hi):
        return f"{symbol} price {price:.2f} outside sane range {lo}-{hi}"
    return None

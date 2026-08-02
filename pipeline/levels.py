"""
Support and resistance, derived from bars already fetched.

market.json previously published only bars[-1] and bars[-2] — of 125 daily bars
fetched, it used two and discarded 123. But market-agent's brief is trend and KEY
LEVELS, and /scan §3 fuses "trend + levels" from it. Two candles cannot produce a
level, so the agent would have gone back to WebSearch for exactly the numbers the
pipeline exists to supply.

Everything here costs zero extra requests: same bars, already hashed, already in
memory.

Design rule: levels are reported WITH their distance from price. An agent asked to
work out how far 27,954 is from 28,274 will occasionally get it wrong, and a level
misplaced by a decimal is a stop in the wrong place.
"""

from __future__ import annotations

from .model import Bar


def rolling_extremes(bars: list[Bar], windows: tuple[int, ...] = (5, 20, 60)) -> dict:
    """Highest high and lowest low over the last N sessions."""
    out: dict[str, float] = {}
    for w in windows:
        if len(bars) < w:
            continue
        window = bars[-w:]
        out[f"high_{w}d"] = round(max(b.high for b in window), 4)
        out[f"low_{w}d"] = round(min(b.low for b in window), 4)
    return out


def swing_points(bars: list[Bar], k: int = 2, keep: int = 4) -> dict:
    """Fractal swing highs and lows.

    A bar is a swing high when its high exceeds the highs of the k bars on each
    side — the standard fractal definition. These are where price actually turned,
    which is what makes them levels rather than arithmetic.

    The last k bars can never qualify (no right-hand side yet), so recent structure
    confirms with a lag. That is a property of the definition, not a bug.
    """
    highs, lows = [], []
    for i in range(k, len(bars) - k):
        window = bars[i - k : i + k + 1]
        if bars[i].high == max(b.high for b in window):
            highs.append(round(bars[i].high, 4))
        if bars[i].low == min(b.low for b in window):
            lows.append(round(bars[i].low, 4))
    return {"swing_highs": highs[-keep:], "swing_lows": lows[-keep:]}


def floor_pivots(prior: Bar) -> dict:
    """Classic floor-trader pivots from the prior session's H/L/C."""
    p = (prior.high + prior.low + prior.close) / 3
    rng = prior.high - prior.low
    return {
        "P": round(p, 4),
        "R1": round(2 * p - prior.low, 4),
        "R2": round(p + rng, 4),
        "R3": round(prior.high + 2 * (p - prior.low), 4),
        "S1": round(2 * p - prior.high, 4),
        "S2": round(p - rng, 4),
        "S3": round(prior.low - 2 * (prior.high - p), 4),
    }


def nearest(price: float, levels: dict[str, float]) -> dict:
    """Closest level above and below price, with distances.

    Distances are given in points AND as a percentage so the agent can size against
    ATR without doing arithmetic on numbers it might misread.
    """
    above = {k: v for k, v in levels.items() if v > price}
    below = {k: v for k, v in levels.items() if v < price}

    out: dict[str, dict] = {}
    if above:
        k = min(above, key=lambda k: above[k] - price)
        out["resistance"] = {
            "level": k,
            "price": above[k],
            "distance": round(above[k] - price, 4),
            "distance_pct": round((above[k] - price) / price * 100, 3),
        }
    if below:
        k = max(below, key=lambda k: below[k])
        out["support"] = {
            "level": k,
            "price": below[k],
            "distance": round(price - below[k], 4),
            "distance_pct": round((price - below[k]) / price * 100, 3),
        }
    return out


def build(bars: list[Bar], price: float | None) -> dict:
    """Full level map for one instrument."""
    if len(bars) < 3:
        return {}

    out: dict = {"rolling": rolling_extremes(bars)}
    out.update(swing_points(bars))
    out["pivots"] = floor_pivots(bars[-2])

    if isinstance(price, (int, float)):
        # Flatten every named level into one namespace so "nearest" means nearest
        # overall, not nearest within some arbitrary category.
        flat: dict[str, float] = dict(out["rolling"])
        flat.update({f"pivot_{k}": v for k, v in out["pivots"].items()})
        for i, v in enumerate(out["swing_highs"]):
            flat[f"swing_high_{i}"] = v
        for i, v in enumerate(out["swing_lows"]):
            flat[f"swing_low_{i}"] = v
        out["nearest"] = nearest(price, flat)

    return out

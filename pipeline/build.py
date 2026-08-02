"""
Build one feed bundle into feed/latest/.

Run:  python -m pipeline.build [--out feed/latest] [--instrument XAUUSD]

Design notes that matter when reading this:

  - Nothing here raises on a source failure. A source that doesn't answer becomes an
    entry in the coverage list, and the bundle ships. "What we could not get" is a
    first-class output — the desk's Data-gaps section is generated from it rather
    than reconstructed from an agent's memory.

  - feed/latest/ is OVERWRITTEN every run. It is always exactly this handful of
    files. History is git history: `git log -p feed/latest/market.json` is the time
    series, and `git show <sha>:feed/latest/market.json` retrieves any past bundle.
    Nothing accumulates in the working tree.

  - The freshness verdict (playbook §2a) is computed HERE, in code, and published as
    manifest.desk_grade. An LLM deciding for itself whether it is allowed to size a
    trade is precisely the check that should not be an LLM's to make.

  - Anchor price and indicator bars are allowed to come from DIFFERENT instruments
    (see XAUUSD below). When they do, the bar source is recorded and the caveat is
    published — volatility transfers across the basis, levels do not.
"""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path
from typing import Any, Callable

from . import indicators as ind
from . import sessions
from .gates import agree, check_freshness, reconcile_atr, sanity_bounds
from .model import (
    DISPUTED,
    MISSING,
    STALE,
    VERIFIED,
    Quote,
    Series,
    iso,
    utcnow,
)
from .sources import crypto, goldapi, yahoo
from .sources.http import FetchError

SCHEMA_VERSION = 1

# Each instrument declares where its ANCHOR comes from and, separately, where its
# BARS come from. Keeping those independent is what lets gold anchor on spot while
# deriving its indicators from the only keyless gold bars that exist.
INSTRUMENTS: dict[str, dict[str, Any]] = {
    "XAUUSD": {
        "market": sessions.METALS_FX,
        "intraday_window": sessions.UTC_DAY,
        "quotes": [lambda: goldapi.fetch_quote("XAU")],
        "bars": lambda: yahoo.fetch("GC=F", "1d", "6mo"),
        # range=1d returns a payload with no timestamps for GC=F; range=5d returns
        # ~1000 bars with volume. The window slice below cuts it back to one day.
        "intraday": lambda: yahoo.fetch("GC=F", "5m", "5d"),
        # Tokenized gold on Binance — 24/7, Tier A, keyless. Used ONLY to detect a
        # restamped spot quote, never as an anchor candidate: it carries its own
        # premium, so treating it as a second read of spot would repeat the GC=F
        # category error at smaller scale.
        "proxy_check": {
            "fetch": lambda: crypto.fetch_ticker("XAUTUSDT"),
            "label": "XAUT (tokenized gold)",
            "alarm_bps": 75.0,
        },
        "bars_caveat": (
            "bars are GC=F futures; anchor is spot. ATR/RSI/MACD transfer across the "
            "basis, but bar-derived LEVELS are futures levels — do not read them as spot"
        ),
        # GC=F is a DIFFERENT INSTRUMENT trading ~156 bps above spot. If the spot
        # quote is unavailable, gold has no anchor — falling back to these bars would
        # publish a 63-point error wearing a spot label.
        "bars_are_proxy": True,
        "tol_bps": 10.0,
        "bounds": (500.0, 10_000.0),
    },
    "NAS100": {
        "market": sessions.US_EQUITY,
        "intraday_window": sessions.US_RTH,
        # No independent keyless second source since Stooq went behind a bot-check,
        # so this anchors SINGLE and says so. Adding a Twelve Data key would make it
        # VERIFIED — that is the one place a free API key would buy real integrity.
        "quotes": [],
        "bars": lambda: yahoo.fetch("^NDX", "1d", "6mo"),
        "intraday": lambda: yahoo.fetch("^NDX", "5m", "1d"),
        "bars_caveat": None,
        "tol_bps": 5.0,
        "bounds": (5_000.0, 60_000.0),
    },
    "BTCUSD": {
        "market": sessions.CRYPTO,
        "intraday_window": sessions.ROLLING_24H,
        # Two independent Tier-A exchange sources, no keys. The agreement gate is
        # genuinely exercised here rather than trivially satisfied.
        "quotes": [crypto.fetch_ticker, crypto.fetch_deribit_index],
        "bars": lambda: crypto.fetch_klines("BTCUSDT", "1d", 200),
        "intraday": lambda: crypto.fetch_klines("BTCUSDT", "5m", 288),
        "bars_caveat": None,
        "tol_bps": 25.0,
        "bounds": (1_000.0, 500_000.0),
    },
}


class Run:
    """Accumulates one bundle: fields, provenance, and everything that went wrong."""

    def __init__(self) -> None:
        self.now = utcnow()
        self.coverage: list[dict[str, str]] = []
        self.warnings: list[str] = []

    def gap(self, instrument: str, what: str, why: str) -> None:
        self.coverage.append({"instrument": instrument, "field": what, "reason": why})

    def warn(self, msg: str) -> None:
        self.warnings.append(msg)


def _try(run: Run, instrument: str, label: str, fn: Callable, *args, **kwargs):
    try:
        return fn(*args, **kwargs)
    except FetchError as e:
        run.gap(instrument, label, str(e))
        return None
    except Exception as e:  # a parser bug must not take the whole bundle down
        run.gap(instrument, label, f"unexpected {type(e).__name__}: {e}")
        return None


def build_instrument(run: Run, name: str, cfg: dict) -> tuple[dict, dict, dict]:
    """Returns (market_values, indicator_values, provenance) for one instrument."""

    quotes: list[Quote] = []
    for i, fetcher in enumerate(cfg["quotes"]):
        q = _try(run, name, f"quote[{i}]", fetcher)
        if q:
            quotes.append(q)

    daily: Series | None = _try(run, name, "daily bars", cfg["bars"])
    intraday: Series | None = _try(run, name, "intraday bars", cfg["intraday"])

    if not daily and not quotes:
        run.gap(name, "*", "no anchor and no bars — instrument skipped")
        return {}, {}, {}

    prov: dict[str, Any] = {}

    # --- anchor price -----------------------------------------------------------
    # Quote sources win outright when present. Bar closes are NOT mixed in: for gold
    # the bars are futures, and folding a 155 bps basis into the anchor would corrupt
    # it in exactly the way the agreement gate exists to prevent.
    if quotes:
        candidates = {q.source: q.price for q in quotes}
        anchor_as_of = max(q.as_of for q in quotes)
        kind = "intraday"
    elif cfg.get("bars_are_proxy"):
        # No quote, and the bars belong to a different instrument. There is no anchor.
        # Refusing to publish one is the whole point — a proxy price with the real
        # instrument's name on it is worse than an admitted gap.
        why = (
            f"anchor source unavailable and bars ({(intraday or daily).source}) are a "
            "PROXY instrument, not this one — refusing to anchor on them"
        )
        run.gap(name, "price", why)
        run.warn(f"{name}: {why}")
        candidates, anchor_as_of, kind = {}, (intraday or daily).as_of, "daily"
    else:
        src = intraday or daily
        candidates = {src.source: src.last.close}
        anchor_as_of = src.as_of
        kind = "intraday" if intraday else "daily"

    price = agree(candidates, cfg["tol_bps"], as_of=anchor_as_of, unit="price")
    price = check_freshness(price, run.now, kind)
    prov["price"] = price.to_provenance(run.now)

    # A DISPUTED price holds a dict, so there is no single number to bounds-check.
    if isinstance(price.value, (int, float)):
        if msg := sanity_bounds(name, price.value, cfg["bounds"]):
            run.warn(f"{name}: {msg}")
            price.confidence = MISSING
            price.note = msg

    # --- market-hours gate ------------------------------------------------------
    # A source can hand back a fresh timestamp on a market that is shut. The TTL
    # check believes the timestamp; this does not.
    market = cfg.get("market", sessions.CRYPTO)
    open_now, why_closed = sessions.is_open(market, run.now)
    prov["market_hours"] = {"market": market, "open": open_now, "detail": why_closed}
    if not open_now and price.confidence not in (MISSING,):
        price.confidence = STALE
        price.note = f"{why_closed} — last price cannot be current regardless of its timestamp"
        run.gap(name, "price_freshness", why_closed)

    # --- proxy divergence check -------------------------------------------------
    # Catches a restamped quote even while the market is open, which the calendar
    # above cannot: if our anchor is frozen and the 24/7 proxy has moved, the spread
    # blows out. A divergence means one of the two is wrong — so we flag, not correct.
    if (pc := cfg.get("proxy_check")) and isinstance(price.value, (int, float)):
        proxy = _try(run, name, "proxy check", pc["fetch"])
        if proxy:
            spread_bps = (proxy.price - price.value) / price.value * 10_000
            status = "ok" if abs(spread_bps) <= pc["alarm_bps"] else "DIVERGENT"
            prov["proxy_check"] = {
                "label": pc["label"],
                "source": proxy.source,
                "proxy_price": round(proxy.price, 4),
                "anchor": round(price.value, 4),
                "spread_bps": round(spread_bps, 1),
                "alarm_bps": pc["alarm_bps"],
                "status": status,
            }
            if status == "DIVERGENT":
                msg = (
                    f"anchor {price.value:.2f} diverges {spread_bps:+.0f} bps from "
                    f"{pc['label']} {proxy.price:.2f} (alarm {pc['alarm_bps']:.0f}) — "
                    "one of the two is wrong; anchor is suspect"
                )
                run.warn(f"{name}: {msg}")
                run.gap(name, "price", msg)
                price.confidence = DISPUTED
                price.note = msg

    # --- basis diagnostic -------------------------------------------------------
    # Recorded, never corrected for and never averaged away. A basis that suddenly
    # moves is a signal that one of the two feeds has broken.
    if quotes and daily and isinstance(price.value, (int, float)):
        bar_px = daily.last.close
        basis = bar_px - price.value
        prov["basis_vs_bars"] = {
            "bar_source": daily.source,
            "bar_close": round(bar_px, 4),
            "anchor": round(price.value, 4),
            "basis": round(basis, 4),
            "basis_bps": round(basis / price.value * 10_000, 1),
        }

    # --- session structure ------------------------------------------------------
    market: dict[str, Any] = {
        "instrument": name,
        "price": price.to_value(),
        "price_confidence": price.confidence,
        "price_sources": price.sources,
        "as_of": iso(anchor_as_of),
    }

    if daily:
        bars = daily.bars
        prior = bars[-2] if len(bars) >= 2 else None
        market["session"] = {
            "open": round(bars[-1].open, 4),
            "high": round(bars[-1].high, 4),
            "low": round(bars[-1].low, 4),
            "source": daily.source,
        }
        if prior:
            market["prior_session"] = {
                "high": round(prior.high, 4),
                "low": round(prior.low, 4),
                "close": round(prior.close, 4),
            }
            market["gap"] = round(bars[-1].open - prior.close, 4)
        if cfg.get("bars_caveat"):
            market["caveat"] = cfg["bars_caveat"]
    else:
        run.gap(name, "session", "no daily bars — levels and indicators unavailable")

    # --- indicators, all derived ------------------------------------------------
    indicators: dict[str, Any] = {"instrument": name}

    if daily:
        closes = [b.close for b in daily.bars]
        atr_pts = ind.atr(daily.bars)
        # ATR% is expressed against the bar source's own price, not the anchor —
        # mixing the two across a basis would produce a percentage of nothing.
        bar_px = daily.last.close
        atr_pct = round(atr_pts / bar_px * 100, 3) if (atr_pts and bar_px) else None

        if msg := reconcile_atr(atr_pts, atr_pct, bar_px):
            run.warn(f"{name}: ATR reconciliation failed — {msg}")
            run.gap(name, "atr", msg)
            atr_pts = atr_pct = None

        indicators.update(
            {
                "timeframe": "1d",
                "atr14": atr_pts,
                "atr14_pct": atr_pct,
                "rsi14": ind.rsi(closes),
                "macd": ind.macd(closes),
                "ema": ind.ema_stack(closes),
                "derived_from": daily.source,
            }
        )
        if cfg.get("bars_caveat"):
            indicators["caveat"] = cfg["bars_caveat"]

    if intraday:
        window = cfg.get("intraday_window", sessions.ROLLING_24H)
        bars_w, vwap_field, or_meaningful = sessions.latest_window(intraday.bars, window)

        v = ind.vwap(bars_w)
        indicators[vwap_field] = v
        indicators["vwap_state"] = (
            None if v is None else ("above" if bars_w[-1].close > v else "below")
        )
        indicators["intraday_from"] = intraday.source
        indicators["intraday_window"] = {"kind": window, "bars": len(bars_w)}

        # An opening range is only meaningful against a real session open. Crypto has
        # none, and futures run nearly around the clock — publishing a number anchored
        # to wherever the fetch happened to start would be worse than publishing none.
        if or_meaningful:
            indicators["opening_range_15m"] = ind.opening_range(bars_w, 15)
        else:
            indicators["opening_range_15m"] = None
            run.gap(name, "opening_range_15m", f"no session open to anchor to ({window})")

        if v is None:
            run.gap(name, vwap_field, "intraday bars carry no volume")
    else:
        run.gap(name, "vwap", "no intraday source — VWAP and OR unavailable")

    prov["raw_hashes"] = {
        s.source: s.raw_sha256 for s in ([*quotes, daily, intraday]) if s
    }
    return market, indicators, prov


def desk_grade(markets: dict[str, dict], now: datetime) -> dict:
    """The playbook §2a verdict, computed rather than self-assessed.

    Reported per instrument AND as a bundle-level floor, because a scan is only as
    actionable as its weakest anchor.
    """
    per: dict[str, str] = {}
    for name, m in markets.items():
        conf = m.get("price_confidence")
        try:
            as_of = datetime.strptime(m["as_of"], "%Y-%m-%dT%H:%M:%SZ").replace(
                tzinfo=now.tzinfo
            )
            age = (now - as_of).total_seconds()
        except Exception:
            per[name] = "RE_ANCHOR"
            continue

        if conf in (DISPUTED, MISSING) or conf == STALE or age > 2 * 3600:
            per[name] = "RE_ANCHOR"
        elif age <= 30 * 60 and conf == VERIFIED:
            per[name] = "SIZEABLE"
        else:
            # Fresh but uncorroborated (SINGLE) tops out at map-only. One source is
            # not a read — playbook §2c.
            per[name] = "MAP_ONLY"

    order = {"RE_ANCHOR": 0, "MAP_ONLY": 1, "SIZEABLE": 2}
    floor = min(per.values(), key=lambda g: order[g]) if per else "RE_ANCHOR"
    return {"per_instrument": per, "bundle": floor}


def render_digest(manifest: dict, markets: dict, indicators: dict, prov: dict) -> str:
    L = [
        f"# Feed digest — {manifest['generated_at']}",
        "",
        f"**Desk grade: {manifest['desk_grade']['bundle']}** "
        f"(schema v{manifest['schema_version']}, run `{manifest['run_id']}`)",
        "",
        "> Feed is corroboration. The live broker print remains primary truth (playbook §2b).",
        "",
    ]

    for name in markets:
        m, i = markets[name], indicators.get(name, {})
        grade = manifest["desk_grade"]["per_instrument"].get(name, "?")
        px = m["price"]
        px_s = (
            " vs ".join(f"`{k}` {v}" for k, v in px.items())
            if isinstance(px, dict) else px
        )
        L += [
            f"## {name} — {grade}",
            f"- price: **{px_s}** ({m['price_confidence']}) as-of {m['as_of']}",
        ]
        if s := m.get("session"):
            line = f"- session: O {s['open']} H {s['high']} L {s['low']}"
            if m.get("gap") is not None:
                line += f" · gap {m['gap']:+}"
            L.append(line)
        if p := m.get("prior_session"):
            L.append(f"- prior: H {p['high']} L {p['low']} C {p['close']}")
        if b := prov.get(name, {}).get("basis_vs_bars"):
            L.append(
                f"- basis: bars (`{b['bar_source']}`) run {b['basis']:+} "
                f"({b['basis_bps']:+} bps) vs anchor"
            )
        if i.get("atr14"):
            L.append(f"- ATR14: {i['atr14']} pts ({i['atr14_pct']}%) · RSI14: {i.get('rsi14')}")
        if i.get("ema"):
            L.append(f"- EMA: {i['ema']['state']}")
        if i.get("macd"):
            L.append(f"- MACD: {i['macd']['state']} (hist {i['macd']['hist']})")
        # The VWAP key names its own window, so read whichever one is present rather
        # than assuming a session VWAP exists.
        for vk in ("vwap_session", "vwap_utc_day", "vwap_24h"):
            if i.get(vk):
                label = {"vwap_session": "VWAP (session)",
                         "vwap_utc_day": "VWAP (UTC day)",
                         "vwap_24h": "VWAP (rolling 24h)"}[vk]
                L.append(f"- {label}: {i[vk]} — price {i['vwap_state']}")
                break
        if o := i.get("opening_range_15m"):
            L.append(f"- OR15: {o['low']}–{o['high']}")
        if pc := prov.get(name, {}).get("proxy_check"):
            L.append(
                f"- proxy check: {pc['label']} {pc['proxy_price']} "
                f"({pc['spread_bps']:+} bps) — {pc['status']}"
            )
        if mh := prov.get(name, {}).get("market_hours"):
            if not mh["open"]:
                L.append(f"- ⚠ {mh['detail']}")
        if c := m.get("caveat"):
            L.append(f"- ⚠ {c}")
        L.append("")

    if manifest["coverage"]:
        L += ["## Data gaps", ""]
        L += [
            f"- `{c['instrument']}` **{c['field']}** — {c['reason']}"
            for c in manifest["coverage"]
        ]
        L.append("")

    if manifest["warnings"]:
        L += ["## Warnings", ""] + [f"- {w}" for w in manifest["warnings"]] + [""]

    return "\n".join(L)


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description="Build a feed bundle into feed/latest/.")
    ap.add_argument("--out", default="feed/latest", help="output directory")
    ap.add_argument("--instrument", action="append", help="limit to these (repeatable)")
    args = ap.parse_args(argv)

    run = Run()
    wanted = args.instrument or list(INSTRUMENTS)

    markets: dict[str, dict] = {}
    indicators: dict[str, dict] = {}
    provenance: dict[str, dict] = {}

    for name in wanted:
        cfg = INSTRUMENTS.get(name)
        if not cfg:
            run.gap(name, "*", "unknown instrument — not in INSTRUMENTS")
            continue
        print(f"[build] {name} ...", file=sys.stderr)
        m, i, p = build_instrument(run, name, cfg)
        if m:
            markets[name], indicators[name], provenance[name] = m, i, p

    manifest = {
        "schema_version": SCHEMA_VERSION,
        "run_id": run.now.strftime("%Y%m%dT%H%M%SZ"),
        "generated_at": iso(run.now),
        "instruments": sorted(markets),
        "desk_grade": desk_grade(markets, run.now),
        "coverage": run.coverage,
        "warnings": run.warnings,
    }

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    for fname, payload in {
        "market.json": markets,
        "indicators.json": indicators,
        "provenance.json": provenance,
    }.items():
        (out / fname).write_text(
            json.dumps(payload, indent=2, sort_keys=True) + "\n", encoding="utf-8"
        )

    (out / "digest.md").write_text(
        render_digest(manifest, markets, indicators, provenance), encoding="utf-8"
    )

    # Sizes are reported, never enforced. If a bundle grows uncomfortable we will
    # have the trend already recorded rather than a guessed limit to argue with.
    #
    # manifest.json is excluded deliberately: it is written after this measurement,
    # so including it would report the PREVIOUS run's size. Excluding it also makes
    # the total mean the thing worth tracking — bytes an agent might actually read.
    sizes = {
        p.name: p.stat().st_size
        for p in sorted(out.iterdir())
        if p.is_file() and p.name != "manifest.json"
    }
    manifest["bytes"] = sizes
    manifest["bytes_total"] = sum(sizes.values())
    (out / "manifest.json").write_text(
        json.dumps(manifest, indent=2, sort_keys=True) + "\n", encoding="utf-8"
    )

    print(f"[build] wrote {out}/ — {manifest['bytes_total']:,} bytes total", file=sys.stderr)
    for n, b in sizes.items():
        print(f"        {n:20s} {b:>7,} B", file=sys.stderr)
    print(f"[build] desk_grade = {manifest['desk_grade']['bundle']}", file=sys.stderr)
    for n, g in manifest["desk_grade"]["per_instrument"].items():
        print(f"        {n:10s} {g}", file=sys.stderr)
    if run.coverage:
        print(f"[build] {len(run.coverage)} coverage gap(s)", file=sys.stderr)
    for w in run.warnings:
        print(f"[warn]  {w}", file=sys.stderr)

    # Exit 0 even with gaps: an incomplete bundle that says so is the product.
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

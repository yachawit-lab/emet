"""
MT5 local publisher — writes feed/local/mt5.json from a running Exness terminal.

    python -m pipeline.publishers.mt5_local

Runs on Windows only, with the MT5 terminal open and logged in. It CANNOT run in
GitHub Actions (the MetaTrader5 package is Windows-only and needs the desktop
terminal live), which is why this is a separate publisher rather than a source
adapter: the cloud build reads the file it leaves behind.

READ-ONLY. It calls symbol_info_tick and symbol_select and nothing else. No order,
position, or account-modifying call appears in this file.

Why bother when we already have web feeds:

  - It is the feed your fills actually execute against, so its basis is your real
    basis, not a reference market's.
  - Its timestamps are HONEST. On 2026-08-02 (Sunday, spot metals shut) gold-api
    claimed a 12-minute-old price and Twelve Data reported is_market_open=true,
    while this terminal correctly reported its last XAUUSD tick as 34.5 hours old.
    A source that admits staleness is worth more than one that hides it.
  - USTECm is the only independent second source for NAS100 we have found. Twelve
    Data's free tier does not carry indices, and the QQQ ratio route is deprecated.

Symbols are Exness-specific (the 'm' suffix). Verified present on this account:
XAUUSDm, USTECm, BTCUSDm — discovered from symbols_get(), not assumed.
"""

from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

# Desk instrument -> broker symbol. Keep the desk's names on the left so the rest of
# the pipeline never has to know what a broker calls things.
SYMBOL_MAP = {
    "XAUUSD": "XAUUSDm",
    "NAS100": "USTECm",
    "BTCUSD": "BTCUSDm",
}

OUT = Path("feed/local/mt5.json")


def publish(out: Path = OUT) -> int:
    try:
        import MetaTrader5 as mt5
    except ImportError:
        print("MetaTrader5 package not installed (Windows only) — nothing published.",
              file=sys.stderr)
        return 1

    if not mt5.initialize():
        print(f"MT5 terminal not available: {mt5.last_error()}", file=sys.stderr)
        return 1

    try:
        ti = mt5.terminal_info()
        ai = mt5.account_info()
        now = datetime.now(timezone.utc)

        quotes: dict[str, dict] = {}
        missing: list[str] = []

        for desk_name, broker_sym in SYMBOL_MAP.items():
            if not mt5.symbol_select(broker_sym, True):
                missing.append(f"{desk_name}: cannot select {broker_sym}")
                continue
            t = mt5.symbol_info_tick(broker_sym)
            if not t or not t.bid:
                missing.append(f"{desk_name}: no tick for {broker_sym}")
                continue

            tick_time = datetime.fromtimestamp(t.time, tz=timezone.utc)
            quotes[desk_name] = {
                "broker_symbol": broker_sym,
                "bid": t.bid,
                "ask": t.ask,
                # Mid, not bid: the desk sizes off a mid-market reference and the
                # spread is published separately so it can be reasoned about.
                "mid": round((t.bid + t.ask) / 2, 5),
                "spread": round(t.ask - t.bid, 5),
                "tick_time": tick_time.strftime("%Y-%m-%dT%H:%M:%SZ"),
                "tick_age_s": int((now - tick_time).total_seconds()),
            }

        doc = {
            "published_at": now.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "terminal": {
                "name": ti.name if ti else None,
                "build": ti.build if ti else None,
                "server": ai.server if ai else None,
            },
            "quotes": quotes,
            "missing": missing,
        }

        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(json.dumps(doc, indent=2, sort_keys=True) + "\n", encoding="utf-8")

        print(f"[mt5] wrote {out} — {len(quotes)} quote(s)", file=sys.stderr)
        for k, q in quotes.items():
            print(f"      {k:8s} {q['mid']:>12.2f}  spread {q['spread']:>7.2f}  "
                  f"age {q['tick_age_s'] / 60:>7.1f} min", file=sys.stderr)
        for m in missing:
            print(f"[mt5] missing: {m}", file=sys.stderr)
        return 0
    finally:
        mt5.shutdown()


if __name__ == "__main__":
    raise SystemExit(publish())

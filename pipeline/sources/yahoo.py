"""
Yahoo Finance chart API — free OHLCV, no API key, daily or intraday.

Tier B, same as Stooq. Two things this module deliberately does NOT do:

  - It does not read any indicator value Yahoo computes. We take OHLCV only and
    derive indicators ourselves (see pipeline/indicators.py). Reading a vendor's
    ATR is what produced the "daily ATR 11.86 on an instrument whose real ATR is
    84.5" entry in playbook §2c.
  - It does not silently prefer the futures symbol. GC=F is fetched separately and
    only ever used as a roll-check corroborator, never as the gold anchor.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone

from ..model import TIER_B, Bar, Series, sha256, utcnow
from .http import FetchError, get

URL = (
    "https://query1.finance.yahoo.com/v8/finance/chart/{symbol}"
    "?interval={interval}&range={range}"
)


def fetch(symbol: str, interval: str = "1d", range_: str = "6mo") -> Series:
    raw = get(URL.format(symbol=symbol, interval=interval, range=range_))
    try:
        doc = json.loads(raw)
        result = doc["chart"]["result"][0]
        stamps = result["timestamp"]
        q = result["indicators"]["quote"][0]
    except (KeyError, IndexError, TypeError, json.JSONDecodeError) as e:
        raise FetchError(f"yahoo: unexpected payload for {symbol}: {e}") from e

    bars: list[Bar] = []
    for i, ts in enumerate(stamps):
        o, h, l, c = q["open"][i], q["high"][i], q["low"][i], q["close"][i]
        # Yahoo pads gaps with nulls; a bar missing a close is not a bar.
        if None in (o, h, l, c):
            continue
        vol = q.get("volume", [None] * len(stamps))[i]
        bars.append(
            Bar(
                ts=datetime.fromtimestamp(ts, tz=timezone.utc),
                open=float(o),
                high=float(h),
                low=float(l),
                close=float(c),
                volume=float(vol) if vol else None,
            )
        )

    if not bars:
        raise FetchError(f"yahoo: no usable bars for {symbol}")

    bars.sort(key=lambda b: b.ts)
    return Series(
        symbol=symbol,
        source=f"yahoo:{symbol}:{interval}",
        tier=TIER_B,
        interval=interval,
        bars=bars,
        fetched_at=utcnow(),
        raw_sha256=sha256(raw),
    )

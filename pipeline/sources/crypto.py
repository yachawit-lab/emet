"""
Binance and Deribit — both keyless, both Tier A (exchange direct).

This is the only instrument in Phase 1 with two genuinely independent Tier-A sources,
so BTC is where the cross-source agreement gate gets a real workout rather than a
theoretical one. Measured 2026-08-02: Binance 63,483.32 vs Deribit index 63,419.90,
a 10 bps spread — comfortably inside tolerance, and the pair resolves to VERIFIED.

Deribit's index is a multi-exchange composite, so it is not merely a second read of
the same order book. That independence is what makes the agreement meaningful.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone

from ..model import TIER_A, Bar, Quote, Series, sha256, utcnow
from .http import FetchError, get

BINANCE_KLINES = "https://api.binance.com/api/v3/klines?symbol={symbol}&interval={interval}&limit={limit}"
BINANCE_TICKER = "https://api.binance.com/api/v3/ticker/price?symbol={symbol}"
DERIBIT_INDEX = "https://www.deribit.com/api/v2/public/get_index_price?index_name={index}"


def fetch_klines(symbol: str = "BTCUSDT", interval: str = "1d", limit: int = 200) -> Series:
    raw = get(BINANCE_KLINES.format(symbol=symbol, interval=interval, limit=limit))
    try:
        rows = json.loads(raw)
    except json.JSONDecodeError as e:
        raise FetchError(f"binance: bad JSON for {symbol}: {e}") from e

    bars: list[Bar] = []
    for r in rows:
        try:
            bars.append(
                Bar(
                    ts=datetime.fromtimestamp(r[0] / 1000, tz=timezone.utc),
                    open=float(r[1]),
                    high=float(r[2]),
                    low=float(r[3]),
                    close=float(r[4]),
                    volume=float(r[5]),
                )
            )
        except (IndexError, ValueError, TypeError):
            continue

    if not bars:
        raise FetchError(f"binance: no usable klines for {symbol}")

    bars.sort(key=lambda b: b.ts)
    return Series(
        symbol=symbol,
        source=f"binance:{symbol}:{interval}",
        tier=TIER_A,
        interval=interval,
        bars=bars,
        fetched_at=utcnow(),
        raw_sha256=sha256(raw),
    )


def fetch_ticker(symbol: str = "BTCUSDT") -> Quote:
    raw = get(BINANCE_TICKER.format(symbol=symbol))
    try:
        price = float(json.loads(raw)["price"])
    except (KeyError, ValueError, TypeError, json.JSONDecodeError) as e:
        raise FetchError(f"binance: unexpected ticker for {symbol}: {e}") from e

    now = utcnow()
    return Quote(
        symbol=symbol,
        source=f"binance:{symbol}:ticker",
        tier=TIER_A,
        price=price,
        # Binance's ticker carries no timestamp; fetch time is the honest as-of.
        as_of=now,
        fetched_at=now,
        raw_sha256=sha256(raw),
    )


def fetch_deribit_index(index: str = "btc_usd") -> Quote:
    raw = get(DERIBIT_INDEX.format(index=index))
    try:
        price = float(json.loads(raw)["result"]["index_price"])
    except (KeyError, ValueError, TypeError, json.JSONDecodeError) as e:
        raise FetchError(f"deribit: unexpected payload for {index}: {e}") from e

    now = utcnow()
    return Quote(
        symbol=index,
        source=f"deribit:{index}:index",
        tier=TIER_A,
        price=price,
        as_of=now,
        fetched_at=now,
        raw_sha256=sha256(raw),
    )

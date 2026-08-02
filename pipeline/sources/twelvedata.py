"""
Twelve Data — free tier, 800 requests/day, API key required.

Scope is deliberately narrow: **spot gold only**. What the free tier offers and why
the rest is excluded, measured 2026-08-02:

  XAU/USD  ✅  4042.76, exchange "Forex" — a genuine independent spot read, and the
               reason this adapter exists. Agrees with gold-api and the Exness feed
               to within ~3 bps.
  NDX      ❌  404 on the free tier. Indices are a paid product, so this does NOT
               solve the NAS100 single-source cap — MT5's USTECm does.
  QQQ      ✅  resolves, but playbook §2b deprecated ratio conversion after QQQ
               x41.06 implied a NAS100 level 90 points off NDX cash. Not usable.
  BTC/USD  ⚠️  resolves, but the payload reports exchange "Binance" — it is the SAME
               order book we already read directly. Adding it would manufacture
               agreement between two copies of one source, which is worse than
               having one source, because it looks like corroboration.

That last one is the trap worth remembering: independence is a property of where the
number came from, not of which vendor handed it to you.

Key is read from TWELVEDATA_API_KEY. Absent key -> FetchError -> ordinary coverage
gap, so the pipeline still runs for anyone who hasn't set one.
"""

from __future__ import annotations

import json
import os
from datetime import datetime, timezone

from ..model import TIER_B, Quote, sha256, utcnow
from .http import FetchError, get

QUOTE_URL = "https://api.twelvedata.com/quote?symbol={symbol}&apikey={key}"


def _key() -> str:
    key = os.environ.get("TWELVEDATA_API_KEY", "").strip()
    if not key:
        raise FetchError("twelvedata: TWELVEDATA_API_KEY not set")
    return key


def fetch_quote(symbol: str = "XAU/USD") -> Quote:
    raw = get(QUOTE_URL.format(symbol=symbol, key=_key()))
    try:
        doc = json.loads(raw)
    except json.JSONDecodeError as e:
        raise FetchError(f"twelvedata: bad JSON for {symbol}: {e}") from e

    # Errors arrive as HTTP 200 with a status field, not as a failure status code.
    if isinstance(doc, dict) and doc.get("status") == "error":
        raise FetchError(f"twelvedata: {doc.get('message', 'unknown error')[:120]}")

    try:
        price = float(doc["close"])
        as_of = datetime.fromtimestamp(int(doc["timestamp"]), tz=timezone.utc)
    except (KeyError, ValueError, TypeError) as e:
        raise FetchError(f"twelvedata: unexpected payload for {symbol}: {e}") from e

    if price <= 0:
        raise FetchError(f"twelvedata: non-positive price for {symbol}")

    # NOTE: `is_market_open` is reported but deliberately NOT trusted. On 2026-08-02,
    # a Sunday with spot metals shut since Friday 21:00 UTC, this field returned true
    # while the Exness terminal's last real tick was 34.5 hours old. pipeline.sessions
    # decides whether a market is open; vendors only get to report a price.
    return Quote(
        symbol=symbol,
        source=f"twelvedata:{symbol}:quote",
        tier=TIER_B,
        price=price,
        as_of=as_of,
        fetched_at=utcnow(),
        raw_sha256=sha256(raw),
    )

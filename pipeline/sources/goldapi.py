"""
gold-api.com — keyless spot XAU/USD.

Why this exists: Yahoo has no working spot-gold symbol (XAUUSD=X and XAU=X both
404), and Stooq now sits behind a JS bot-challenge. The only keyless gold instruments
Yahoo serves are GC=F (futures) and GLD (ETF), and the playbook rules out both as
anchors — GC=F carries the roll artifact from §2c, and GLD would need exactly the
ratio conversion §2b deprecated after the QQQ x41.06 error put NAS100 90 points off.

Measured 2026-08-02: spot 4043.70 vs GC=F 4107.0 — a 155 bps basis. Anchoring gold
on the futures symbol would misplace every level by 63 points.

Quote-only: no bars, so no indicators come from here.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone

from ..model import TIER_B, Quote, sha256, utcnow
from .http import FetchError, get

URL = "https://api.gold-api.com/price/{symbol}"


def fetch_quote(symbol: str = "XAU") -> Quote:
    raw = get(URL.format(symbol=symbol))
    try:
        doc = json.loads(raw)
        price = float(doc["price"])
        # updatedAt is ISO-8601 with a trailing Z.
        as_of = datetime.fromisoformat(doc["updatedAt"].replace("Z", "+00:00"))
    except (KeyError, ValueError, TypeError, json.JSONDecodeError) as e:
        raise FetchError(f"gold-api: unexpected payload for {symbol}: {e}") from e

    if price <= 0:
        raise FetchError(f"gold-api: non-positive price for {symbol}")

    return Quote(
        symbol=symbol,
        source=f"gold-api:{symbol}:spot",
        tier=TIER_B,
        price=price,
        as_of=as_of.astimezone(timezone.utc),
        fetched_at=utcnow(),
        raw_sha256=sha256(raw),
    )

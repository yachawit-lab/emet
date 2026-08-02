"""
Reads feed/local/mt5.json — the file left behind by pipeline.publishers.mt5_local.

This is the bridge between a Windows-only data source and a Linux cloud build. The
publisher runs wherever the terminal lives; the build reads its output wherever it
runs, and the ordinary freshness gate decides whether that output still counts.

Tier A: it is an execution venue's own feed, not an aggregator's view of one. But
note it is a CFD quote, so the recorded basis matters — playbook §2b has XAUUSD at
≈0 vs spot and USTEC at ≈+1pt vs NDX cash.

The `as_of` is the terminal's real tick time, NOT the publish time. That distinction
is the whole value of this source: when the market is shut, this reports an honest
34-hour-old timestamp while web vendors restamp the same price as current.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

from ..model import TIER_A, Quote, sha256, utcnow
from .http import FetchError

PATH = Path("feed/local/mt5.json")


def fetch_quote(instrument: str, path: Path = PATH) -> Quote:
    if not path.exists():
        raise FetchError(f"mt5: {path} not present — publisher has not run here")

    raw = path.read_bytes()
    try:
        doc = json.loads(raw)
        q = doc["quotes"][instrument]
        price = float(q["mid"])
        as_of = datetime.strptime(q["tick_time"], "%Y-%m-%dT%H:%M:%SZ").replace(
            tzinfo=timezone.utc
        )
    except KeyError as e:
        raise FetchError(f"mt5: no quote for {instrument} in {path.name} ({e})") from e
    except (ValueError, TypeError, json.JSONDecodeError) as e:
        raise FetchError(f"mt5: malformed {path.name}: {e}") from e

    if price <= 0:
        raise FetchError(f"mt5: non-positive mid for {instrument}")

    return Quote(
        symbol=q.get("broker_symbol", instrument),
        source=f"mt5:{q.get('broker_symbol', instrument)}:tick",
        tier=TIER_A,
        price=price,
        as_of=as_of,
        fetched_at=utcnow(),
        raw_sha256=sha256(raw),
    )

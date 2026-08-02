"""
CNBC quote service — keyless, no auth. Used for NDX.

Read what this is and is not before trusting it as corroboration.

NDX is a COMPUTED INDEX with a single official value published by Nasdaq. CNBC and
Yahoo both republish that same number — measured 2026-08-02, CNBC 28,274.195 against
Yahoo 28,274.1953, identical to three decimals. They agree because they copy one
source, not because they independently observed a market.

So this is a TRANSPORT-ERROR check, not a second opinion on price. It catches the
first §2c failure mode — a stale cached crawl, or a payload we misparsed — and
nothing more. The genuinely independent read on NAS100 is MT5's USTECm, because that
is the broker's own book and the thing actually traded.

Worth being precise about, because the distinction does not apply to gold: XAU/USD
is OTC with no official price, so there every source really is quoting its own book
and agreement means something.
"""

from __future__ import annotations

import json
from datetime import datetime, time, timezone

from ..model import TIER_B, Quote, sha256, utcnow
from .http import FetchError, get

URL = (
    "https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol"
    "?symbols={symbol}&requestMethod=itv&exthrs=1"
)

# US cash close, used when CNBC reports a date with no time component.
US_CLOSE = time(20, 0)


def _parse_last_time(raw: str) -> datetime:
    """CNBC returns a full timestamp intraday and a bare date once closed."""
    for fmt in ("%Y-%m-%dT%H:%M:%S.%f%z", "%Y-%m-%dT%H:%M:%S%z", "%Y-%m-%dT%H:%M:%S"):
        try:
            dt = datetime.strptime(raw, fmt)
            return dt if dt.tzinfo else dt.replace(tzinfo=timezone.utc)
        except ValueError:
            continue
    # Date only: anchor to that day's cash close rather than midnight, so the age is
    # honest. Midnight would overstate staleness by 20 hours and midday would
    # understate it — the close is the moment the value actually stopped moving.
    try:
        d = datetime.strptime(raw, "%Y-%m-%d").date()
    except ValueError as e:
        raise FetchError(f"cnbc: unparseable last_time {raw!r}") from e
    return datetime.combine(d, US_CLOSE, tzinfo=timezone.utc)


def fetch_quote(symbol: str = "NDX") -> Quote:
    raw = get(URL.format(symbol=symbol))
    try:
        q = json.loads(raw)["FormattedQuoteResult"]["FormattedQuote"][0]
    except (KeyError, IndexError, TypeError, json.JSONDecodeError) as e:
        raise FetchError(f"cnbc: unexpected payload for {symbol}: {e}") from e

    if "last" not in q:
        raise FetchError(f"cnbc: no last price for {symbol} (code {q.get('code')})")

    try:
        # Values arrive comma-formatted, e.g. "28,274.195".
        price = float(str(q["last"]).replace(",", ""))
    except ValueError as e:
        raise FetchError(f"cnbc: unparseable last {q['last']!r}") from e

    if price <= 0:
        raise FetchError(f"cnbc: non-positive last for {symbol}")

    as_of = _parse_last_time(str(q.get("last_time", "")))

    return Quote(
        symbol=symbol,
        source=f"cnbc:{symbol}:quote",
        tier=TIER_B,
        price=price,
        as_of=as_of,
        fetched_at=utcnow(),
        raw_sha256=sha256(raw),
    )

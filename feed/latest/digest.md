# Feed digest — 2026-11-24T04:47:22Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261124T044722Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **None** (MISSING) as-of 2026-11-24T04:37:18Z
- session: O 3636.3999 H 3676.7 L 3618.5 · gap -15.0
- prior: H 3691.0 L 3552.3 C 3651.3999
- ATR14: 103.0249 pts (2.843%) · RSI14: 32.14
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -32.2385)
- VWAP (UTC day): 3649.0092 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26746.0957** (STALE) as-of 2026-11-23T21:00:00Z
- session: O 26889.291 H 27018.8828 L 26386.416 · gap +1860.3105
- prior: H 26429.0898 L 24910.4805 C 25028.9805
- ATR14: 850.2275 pts (3.179%) · RSI14: 41.99
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -134.3087)
- VWAP (session): 26726.9246 — price below
- OR15: 26392.9004–26866.623
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 04:47)

## BTCUSD — MAP_ONLY
- price: **60528.2** (SINGLE) as-of 2026-11-24T04:47:23Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 166069 min old — excluded from anchor
- `XAUUSD` **quote[1]** — https://api.gold-api.com/price/XAU -> URLError: <urlopen error [Errno -2] Name or service not known>
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price** — anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 166072 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 391 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 04:47)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 163961 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
- XAUUSD: anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them

# Feed digest — 2026-11-12T01:53:50Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261112T015350Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3983.5** (SINGLE) as-of 2026-11-12T01:53:31Z
- session: O 3994.0 H 4005.5 L 3973.5 · gap -36.2
- prior: H 4156.2002 L 4020.8 C 4030.2
- basis: bars (`yahoo:GC=F:1d`) run +11.1001 (+27.9 bps) vs anchor
- ATR14: 88.2281 pts (2.209%) · RSI14: 41.99
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 9.6608)
- VWAP (UTC day): 3991.713 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28374.252** (STALE) as-of 2026-11-11T21:00:00Z
- session: O 28267.334 H 28593.5234 L 28102.748 · gap +526.5449
- prior: H 27990.3398 L 27421.1797 C 27740.7891
- ATR14: 667.3331 pts (2.352%) · RSI14: 45.95
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -77.3656)
- VWAP (session): 28373.6261 — price above
- OR15: 28153.6719–28319.1543
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 01:53)

## BTCUSD — MAP_ONLY
- price: **73571.62** (SINGLE) as-of 2026-11-12T01:53:51Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 148616 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 148619 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 218 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 01:53)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 146508 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

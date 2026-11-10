# Feed digest — 2026-11-10T02:44:18Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261110T024418Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4115.0** (SINGLE) as-of 2026-11-10T02:43:59Z
- session: O 4149.0 H 4156.2002 L 4125.2002 · gap +34.5
- prior: H 4157.7002 L 4062.5 C 4114.5
- basis: bars (`yahoo:GC=F:1d`) run +10.7002 (+26.0 bps) vs anchor
- ATR14: 83.9605 pts (2.035%) · RSI14: 51.19
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 19.9431)
- VWAP (UTC day): 4137.8105 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27907.625** (STALE) as-of 2026-11-09T21:00:00Z
- session: O 27263.4277 H 28025.7734 L 27227.5332 · gap +273.4375
- prior: H 27316.0898 L 26887.6895 C 26989.9902
- ATR14: 659.5311 pts (2.363%) · RSI14: 41.1
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -204.8919)
- VWAP (session): 27757.0971 — price above
- OR15: 27234.5762–27569.6855
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 02:44)

## BTCUSD — MAP_ONLY
- price: **74732.53** (SINGLE) as-of 2026-11-10T02:44:19Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 145786 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 145789 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 268 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 02:44)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 143678 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

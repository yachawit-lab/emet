# Feed digest — 2026-11-09T23:10:04Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261109T231004Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4138.7998** (SINGLE) as-of 2026-11-09T23:09:59Z
- session: O 4149.0 H 4149.0 L 4147.2002 · gap +74.1001
- prior: H 4116.2002 L 4035.1001 C 4074.8999
- basis: bars (`yahoo:GC=F:1d`) run +9.0 (+21.7 bps) vs anchor
- ATR14: 85.7041 pts (2.066%) · RSI14: 52.67
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 18.7114)
- VWAP (UTC day): 4123.8917 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27907.625** (STALE) as-of 2026-11-09T21:00:00Z
- session: O 27263.4277 H 28025.7734 L 27227.5332 · gap +273.4375
- prior: H 27316.0898 L 26887.6895 C 26989.9902
- ATR14: 659.5311 pts (2.363%) · RSI14: 41.1
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -204.8919)
- VWAP (session): 27730.9066 — price above
- OR15: 27234.5762–27569.6855
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:10)

## BTCUSD — MAP_ONLY
- price: **75032.74** (SINGLE) as-of 2026-11-09T23:10:06Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 145572 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 145575 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 54 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:10)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 143464 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-10-09T12:29:48Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261009T122948Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4186.3999** (SINGLE) as-of 2026-10-09T12:29:20Z
- session: O 4159.7002 H 4233.7002 L 4156.1001 · gap +2.7002
- prior: H 4170.7002 L 4128.1001 C 4157.0
- basis: bars (`yahoo:GC=F:1d`) run +18.5 (+44.2 bps) vs anchor
- ATR14: 88.9197 pts (2.115%) · RSI14: 42.28
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -7.0899)
- VWAP (UTC day): 4206.8003 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30725.8086** (STALE) as-of 2026-10-08T20:00:00Z
- session: O 30985.2305 H 31125.1309 L 30556.4004 · gap -174.8496
- prior: H 31170.1191 L 30904.4609 C 31160.0801
- ATR14: 387.3006 pts (1.261%) · RSI14: 58.76
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 55.3487)
- VWAP (session): 30839.6072 — price below
- OR15: 30960.2031–31036.6328
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:29)

## BTCUSD — MAP_ONLY
- price: **83028.21** (SINGLE) as-of 2026-10-09T12:29:49Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 100292 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 100295 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 990 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:29)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 98184 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

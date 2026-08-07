# Feed digest — 2026-08-07T04:35:41Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260807T043541Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4268.7998** (SINGLE) as-of 2026-08-07T04:35:17Z
- session: O 4298.2998 H 4328.3999 L 4288.0 · gap +56.2998
- prior: H 4297.0 L 4228.0 C 4242.0
- basis: bars (`yahoo:GC=F:1d`) run +56.2002 (+131.7 bps) vs anchor
- ATR14: 75.7027 pts (1.75%) · RSI14: 64.17
- EMA: mixed / no clean stack
- MACD: bullish (hist 37.1549)
- VWAP (UTC day): 4306.3066 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29373.334** (STALE) as-of 2026-08-06T20:00:00Z
- session: O 29224.3809 H 29569.7598 L 29123.3809 · gap -263.4082
- prior: H 29946.9395 L 29468.3301 C 29487.7891
- ATR14: 632.867 pts (2.155%) · RSI14: 54.35
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 152.2902)
- VWAP (session): 29423.8044 — price below
- OR15: 29128.0488–29354.502
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 04:35)

## BTCUSD — MAP_ONLY
- price: **64282.81** (SINGLE) as-of 2026-08-07T04:35:43Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 9098 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 9101 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 516 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 04:35)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 6990 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

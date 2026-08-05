# Feed digest — 2026-08-05T23:36:55Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260805T233655Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4274.8999** (SINGLE) as-of 2026-08-05T23:36:44Z
- session: O 4307.0 H 4322.0 L 4304.8999 · gap +211.6001
- prior: H 4095.3999 L 4048.8 C 4095.3999
- basis: bars (`yahoo:GC=F:1d`) run +46.6001 (+109.0 bps) vs anchor
- ATR14: 79.6079 pts (1.842%) · RSI14: 63.6
- EMA: mixed / no clean stack
- MACD: bullish (hist 28.8765)
- VWAP (UTC day): 4255.6464 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29487.791** (STALE) as-of 2026-08-05T20:00:00Z
- session: O 29863.2676 H 29946.9355 L 29468.3301 · gap +130.1074
- prior: H 29831.4004 L 29109.2598 C 29733.1602
- ATR14: 647.2135 pts (2.195%) · RSI14: 55.5
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 131.0707)
- VWAP (session): 29712.7336 — price below
- OR15: 29795.9883–29928.2559
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:36)

## BTCUSD — MAP_ONLY
- price: **64619.3** (SINGLE) as-of 2026-08-05T23:36:56Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 7359 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 7362 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 141 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:36)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 5251 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

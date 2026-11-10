# Feed digest — 2026-11-10T20:20:40Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261110T202040Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4033.1001** (SINGLE) as-of 2026-11-10T20:20:28Z
- session: O 4149.0 H 4156.2002 L 4020.8 · gap +34.5
- prior: H 4157.7002 L 4062.5 C 4114.5
- basis: bars (`yahoo:GC=F:1d`) run +4.5 (+11.2 bps) vs anchor
- ATR14: 90.6533 pts (2.245%) · RSI14: 44.75
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 14.3208)
- VWAP (UTC day): 4074.3664 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27668.938** (STALE) as-of 2026-11-10T20:20:41Z
- session: O 27649.6348 H 27990.3359 L 27421.1816 · gap -257.9961
- prior: H 28025.7695 L 27227.5293 C 27907.6309
- basis: bars (`yahoo:^NDX:1d`) run -0.7388 (-0.3 bps) vs anchor
- ATR14: 653.0754 pts (2.36%) · RSI14: 39.53
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -163.9198)
- VWAP (session): 27677.0105 — price below
- OR15: 27541.0–27758.5898
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:20)

## BTCUSD — MAP_ONLY
- price: **73634.98** (SINGLE) as-of 2026-11-10T20:20:41Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 146843 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 146846 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:20)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 144735 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

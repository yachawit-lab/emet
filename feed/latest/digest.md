# Feed digest — 2026-11-10T18:45:48Z

**Desk grade: MAP_ONLY** (schema v1, run `20261110T184548Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4034.1001** (SINGLE) as-of 2026-11-10T18:45:28Z
- session: O 4149.0 H 4156.2002 L 4020.8 · gap +34.5
- prior: H 4157.7002 L 4062.5 C 4114.5
- basis: bars (`yahoo:GC=F:1d`) run -0.7002 (-1.7 bps) vs anchor
- ATR14: 90.6533 pts (2.248%) · RSI14: 44.48
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 14.0527)
- VWAP (UTC day): 4076.0615 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **27569.292** (SINGLE) as-of 2026-11-10T18:45:50Z
- session: O 27649.6348 H 27990.3359 L 27421.1816 · gap -257.9961
- prior: H 28025.7695 L 27227.5293 C 27907.6309
- basis: bars (`yahoo:^NDX:1d`) run +2.4385 (+0.9 bps) vs anchor
- ATR14: 653.0754 pts (2.369%) · RSI14: 38.93
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -170.0762)
- VWAP (session): 27686.1156 — price below
- OR15: 27541.0–27758.5898

## BTCUSD — MAP_ONLY
- price: **73441.49** (SINGLE) as-of 2026-11-10T18:45:51Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 146748 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 146751 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 144640 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

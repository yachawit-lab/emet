# Feed digest — 2026-10-23T17:47:42Z

**Desk grade: MAP_ONLY** (schema v1, run `20261023T174742Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3995.7** (SINGLE) as-of 2026-10-23T17:47:14Z
- session: O 4042.2 H 4050.2 L 3989.2 · gap -18.2
- prior: H 4164.2998 L 4036.8 C 4060.3999
- basis: bars (`yahoo:GC=F:1d`) run +11.9001 (+29.8 bps) vs anchor
- ATR14: 79.2325 pts (1.977%) · RSI14: 30.7
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -6.3454)
- VWAP (UTC day): 4024.7506 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29016.501** (SINGLE) as-of 2026-10-23T17:47:40Z
- session: O 28847.8164 H 29161.0293 L 28825.7246 · gap -110.873
- prior: H 29411.7598 L 28855.0996 C 28958.6895
- basis: bars (`yahoo:^NDX:1d`) run -0.083 (-0.0 bps) vs anchor
- ATR14: 475.0101 pts (1.637%) · RSI14: 37.61
- EMA: mixed / no clean stack
- MACD: bearish (hist -207.7492)
- VWAP (session): 29021.9544 — price below
- OR15: 28830.168–28959.7773

## BTCUSD — MAP_ONLY
- price: **81508.42** (SINGLE) as-of 2026-10-23T17:47:45Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 120770 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 120773 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 118662 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

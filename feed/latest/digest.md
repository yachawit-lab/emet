# Feed digest — 2026-08-10T14:46:50Z

**Desk grade: MAP_ONLY** (schema v1, run `20260810T144650Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4351.2002** (SINGLE) as-of 2026-08-10T14:46:31Z
- session: O 4400.0 H 4421.5 L 4373.8999 · gap +59.2998
- prior: H 4371.5 L 4274.0 C 4340.7002
- basis: bars (`yahoo:GC=F:1d`) run +54.0 (+124.1 bps) vs anchor
- ATR14: 78.9267 pts (1.792%) · RSI14: 67.91
- EMA: mixed / no clean stack
- MACD: bullish (hist 45.8072)
- VWAP (UTC day): 4395.755 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29763.356** (SINGLE) as-of 2026-08-10T14:46:51Z
- session: O 29709.4863 H 29784.207 L 29610.0156 · gap -12.8145
- prior: H 29747.1504 L 29452.7109 C 29722.3008
- basis: bars (`yahoo:^NDX:1d`) run -1.313 (-0.4 bps) vs anchor
- ATR14: 582.9259 pts (1.959%) · RSI14: 57.58
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 195.114)
- VWAP (session): 29707.1829 — price above
- OR15: 29612.5391–29724.0469

## BTCUSD — MAP_ONLY
- price: **64778.2** (SINGLE) as-of 2026-08-10T14:46:51Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 14029 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 14032 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 11921 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

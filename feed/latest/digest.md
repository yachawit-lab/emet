# Feed digest — 2026-10-22T18:10:44Z

**Desk grade: MAP_ONLY** (schema v1, run `20261022T181044Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4040.5** (SINGLE) as-of 2026-10-22T18:10:41Z
- session: O 4159.0 H 4164.2998 L 4049.1001 · gap +9.0
- prior: H 4160.6001 L 4122.2998 C 4150.0
- basis: bars (`yahoo:GC=F:1d`) run +19.6001 (+48.5 bps) vs anchor
- ATR14: 78.9715 pts (1.945%) · RSI14: 34.04
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -0.3664)
- VWAP (UTC day): 4090.6645 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28953.004** (SINGLE) as-of 2026-10-22T18:10:45Z
- session: O 29304.3008 H 29411.7617 L 28917.5176 · gap -518.2188
- prior: H 29928.3105 L 29593.6992 C 29822.5195
- basis: bars (`yahoo:^NDX:1d`) run -0.3106 (-0.1 bps) vs anchor
- ATR14: 481.2991 pts (1.662%) · RSI14: 36.63
- EMA: mixed / no clean stack
- MACD: bearish (hist -204.1079)
- VWAP (session): 29155.9865 — price below
- OR15: 29290.1367–29379.8164

## BTCUSD — MAP_ONLY
- price: **80991.65** (SINGLE) as-of 2026-10-22T18:10:46Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 119353 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 119356 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 117245 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

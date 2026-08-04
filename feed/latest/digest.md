# Feed digest — 2026-08-04T17:25:11Z

**Desk grade: MAP_ONLY** (schema v1, run `20260804T172511Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4101.1001** (SINGLE) as-of 2026-08-04T17:24:42Z
- session: O 4109.6001 H 4163.7998 L 4098.2002 · gap +75.9001
- prior: H 4083.5 L 4026.5 C 4033.7
- basis: bars (`yahoo:GC=F:1d`) run +55.3999 (+135.1 bps) vs anchor
- ATR14: 73.1886 pts (1.761%) · RSI14: 54.14
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 17.1864)
- VWAP (UTC day): 4129.249 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29682.523** (SINGLE) as-of 2026-08-04T17:25:13Z
- session: O 29109.2578 H 29683.4434 L 29109.2578 · gap +332.457
- prior: H 28842.3594 L 28196.8809 C 28776.8008
- basis: bars (`yahoo:^NDX:1d`) run -0.2007 (-0.1 bps) vs anchor
- ATR14: 649.6194 pts (2.189%) · RSI14: 57.57
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 75.1518)
- VWAP (session): 29446.5876 — price above
- OR15: 29134.4238–29327.2148

## BTCUSD — MAP_ONLY
- price: **63984.88** (SINGLE) as-of 2026-08-04T17:25:13Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 5547 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 5550 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 3439 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

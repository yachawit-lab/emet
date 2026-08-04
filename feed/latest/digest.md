# Feed digest — 2026-08-04T19:09:46Z

**Desk grade: MAP_ONLY** (schema v1, run `20260804T190946Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4083.8** (SINGLE) as-of 2026-08-04T19:09:42Z
- session: O 4109.6001 H 4163.7998 L 4098.2002 · gap +75.9001
- prior: H 4083.5 L 4026.5 C 4033.7
- basis: bars (`yahoo:GC=F:1d`) run +52.4998 (+128.6 bps) vs anchor
- ATR14: 73.1886 pts (1.769%) · RSI14: 52.79
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 15.8973)
- VWAP (UTC day): 4130.8025 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29804.679** (SINGLE) as-of 2026-08-04T19:09:47Z
- session: O 29109.2578 H 29803.7402 L 29109.2578 · gap +332.457
- prior: H 28842.3594 L 28196.8809 C 28776.8008
- basis: bars (`yahoo:^NDX:1d`) run -0.9388 (-0.3 bps) vs anchor
- ATR14: 658.2121 pts (2.208%) · RSI14: 58.41
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 82.9004)
- VWAP (session): 29514.1343 — price above
- OR15: 29134.4238–29327.2148

## BTCUSD — MAP_ONLY
- price: **64285.18** (SINGLE) as-of 2026-08-04T19:09:48Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 5652 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 5655 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 3544 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-10-19T19:09:36Z

**Desk grade: MAP_ONLY** (schema v1, run `20261019T190936Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4145.2002** (SINGLE) as-of 2026-10-19T19:09:32Z
- session: O 4185.0 H 4211.2002 L 4155.6001 · gap +3.8999
- prior: H 4220.3999 L 4167.5 C 4181.1001
- basis: bars (`yahoo:GC=F:1d`) run +19.8999 (+48.0 bps) vs anchor
- ATR14: 81.7379 pts (1.962%) · RSI14: 42.11
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 4.4916)
- VWAP (UTC day): 4182.8523 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29574.078** (SINGLE) as-of 2026-10-19T19:09:37Z
- session: O 29539.3125 H 29788.7598 L 29461.3203 · gap +351.7617
- prior: H 29822.9102 L 29073.2891 C 29187.5508
- basis: bars (`yahoo:^NDX:1d`) run -0.328 (-0.1 bps) vs anchor
- ATR14: 445.4372 pts (1.506%) · RSI14: 41.87
- EMA: mixed / no clean stack
- MACD: bearish (hist -200.2194)
- VWAP (session): 29616.4555 — price below
- OR15: 29533.7656–29609.5098

## BTCUSD — MAP_ONLY
- price: **81758.09** (SINGLE) as-of 2026-10-19T19:09:38Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 115092 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 115095 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 112984 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

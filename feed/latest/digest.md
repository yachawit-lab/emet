# Feed digest — 2026-10-28T18:42:23Z

**Desk grade: MAP_ONLY** (schema v1, run `20261028T184223Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4054.1001** (SINGLE) as-of 2026-10-28T18:41:57Z
- session: O 4073.6001 H 4084.1001 L 4040.6001 · gap -1.0
- prior: H 4079.3999 L 4001.6001 C 4074.6001
- basis: bars (`yahoo:GC=F:1d`) run -9.5 (-23.4 bps) vs anchor
- ATR14: 74.9817 pts (1.854%) · RSI14: 36.95
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.1045)
- VWAP (UTC day): 4058.8284 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29830.09** (SINGLE) as-of 2026-10-28T18:42:23Z
- session: O 29732.0352 H 29842.4863 L 29618.4219 · gap +80.5957
- prior: H 29719.6309 L 29340.5391 C 29651.4395
- basis: bars (`yahoo:^NDX:1d`) run -0.0002 (-0.0 bps) vs anchor
- ATR14: 453.4486 pts (1.52%) · RSI14: 49.65
- EMA: mixed / no clean stack
- MACD: bearish (hist -83.6223)
- VWAP (session): 29697.3416 — price above
- OR15: 29712.6797–29794.043

## BTCUSD — MAP_ONLY
- price: **81090.91** (SINGLE) as-of 2026-10-28T18:42:24Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 128024 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 128027 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 125916 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

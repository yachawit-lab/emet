# Feed digest — 2026-11-03T19:59:55Z

**Desk grade: MAP_ONLY** (schema v1, run `20261103T195955Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3920.8** (SINGLE) as-of 2026-11-03T19:59:27Z
- session: O 3960.5 H 3980.7 L 3904.1001 · gap -9.1001
- prior: H 3980.8 L 3889.0 C 3969.6001
- basis: bars (`yahoo:GC=F:1d`) run +14.0 (+35.7 bps) vs anchor
- ATR14: 81.7252 pts (2.077%) · RSI14: 34.05
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -10.8445)
- VWAP (UTC day): 3941.9048 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28132.15** (SINGLE) as-of 2026-11-03T19:59:56Z
- session: O 28085.4961 H 28307.8984 L 28085.4961 · gap +95.6758
- prior: H 28753.3906 L 27967.4395 C 27989.8203
- basis: bars (`yahoo:^NDX:1d`) run +1.4457 (+0.5 bps) vs anchor
- ATR14: 524.7517 pts (1.865%) · RSI14: 34.16
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -190.1696)
- VWAP (session): 28209.3131 — price below
- OR15: 28098.0703–28242.1758

## BTCUSD — MAP_ONLY
- price: **77525.8** (SINGLE) as-of 2026-11-03T19:59:56Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 136742 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 136745 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 134634 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

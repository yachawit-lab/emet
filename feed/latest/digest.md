# Feed digest — 2026-11-20T19:13:18Z

**Desk grade: MAP_ONLY** (schema v1, run `20261120T191318Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3527.3501** (SINGLE) as-of 2026-11-20T19:13:06Z
- session: O 3633.8 H 3638.1001 L 3503.2 · gap -51.7
- prior: H 3759.5 L 3620.6001 C 3685.5
- basis: bars (`yahoo:GC=F:1d`) run +1.25 (+3.5 bps) vs anchor
- ATR14: 101.132 pts (2.866%) · RSI14: 21.92
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -37.6287)
- VWAP (UTC day): 3556.9232 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **25385.136** (SINGLE) as-of 2026-11-20T19:13:19Z
- session: O 26184.7637 H 26429.0898 L 25374.0039 · gap -332.2871
- prior: H 27749.3496 L 26481.8203 C 26517.0508
- basis: bars (`yahoo:^NDX:1d`) run -6.5735 (-2.6 bps) vs anchor
- ATR14: 729.441 pts (2.874%) · RSI14: 27.95
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -172.6407)
- VWAP (session): 25807.1967 — price below
- OR15: 26048.2363–26190.3672

## BTCUSD — MAP_ONLY
- price: **58032.3** (SINGLE) as-of 2026-11-20T19:13:19Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 161175 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 161178 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 159067 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

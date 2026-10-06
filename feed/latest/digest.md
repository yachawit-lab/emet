# Feed digest — 2026-10-06T17:21:33Z

**Desk grade: MAP_ONLY** (schema v1, run `20261006T172133Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4163.1001** (SINGLE) as-of 2026-10-06T17:21:10Z
- session: O 4169.2002 H 4208.0 L 4130.7002 · gap +12.4004
- prior: H 4198.8999 L 4150.3999 C 4156.7998
- basis: bars (`yahoo:GC=F:1d`) run +28.6001 (+68.7 bps) vs anchor
- ATR14: 92.0942 pts (2.197%) · RSI14: 38.17
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -17.8527)
- VWAP (UTC day): 4177.2623 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **31237.618** (SINGLE) as-of 2026-10-06T17:21:34Z
- session: O 31255.3965 H 31361.3691 L 31208.1973 · gap +178.957
- prior: H 31117.3594 L 30798.4199 C 31076.4395
- basis: bars (`yahoo:^NDX:1d`) run -1.3543 (-0.4 bps) vs anchor
- ATR14: 374.56 pts (1.199%) · RSI14: 69.96
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 99.4622)
- VWAP (session): 31293.1734 — price below
- OR15: 31208.1973–31309.6855

## BTCUSD — MAP_ONLY
- price: **85481.28** (SINGLE) as-of 2026-10-06T17:21:35Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 96264 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 96267 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 94156 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

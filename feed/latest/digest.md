# Feed digest — 2026-11-24T16:54:20Z

**Desk grade: MAP_ONLY** (schema v1, run `20261124T165420Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3565.5** (SINGLE) as-of 2026-11-24T16:54:14Z
- session: O 3636.3999 H 3676.7 L 3557.5 · gap -15.0
- prior: H 3691.0 L 3552.3 C 3651.3999
- basis: bars (`yahoo:GC=F:1d`) run +5.0 (+14.0 bps) vs anchor
- ATR14: 107.3821 pts (3.007%) · RSI14: 30.31
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -35.6209)
- VWAP (UTC day): 3619.3968 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **26096.111** (SINGLE) as-of 2026-11-24T16:54:21Z
- session: O 26298.1426 H 26433.5977 L 25935.4648 · gap -447.957
- prior: H 27018.8809 L 26386.4199 C 26746.0996
- basis: bars (`yahoo:^NDX:1d`) run -2.1403 (-0.8 bps) vs anchor
- ATR14: 847.3993 pts (3.247%) · RSI14: 38.67
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -124.7631)
- VWAP (session): 26158.4748 — price below
- OR15: 26137.2539–26332.8926

## BTCUSD — MAP_ONLY
- price: **59568.4** (SINGLE) as-of 2026-11-24T16:54:21Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 166796 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 166799 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 164688 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

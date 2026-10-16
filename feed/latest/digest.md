# Feed digest — 2026-10-16T15:27:53Z

**Desk grade: MAP_ONLY** (schema v1, run `20261016T152753Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4176.3999** (SINGLE) as-of 2026-10-16T15:27:38Z
- session: O 4192.1001 H 4220.2002 L 4167.5 · gap +22.0
- prior: H 4197.7002 L 4120.8999 C 4170.1001
- basis: bars (`yahoo:GC=F:1d`) run +25.5 (+61.1 bps) vs anchor
- ATR14: 83.7348 pts (1.993%) · RSI14: 45.64
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 4.4735)
- VWAP (UTC day): 4196.8193 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29487.048** (SINGLE) as-of 2026-10-16T15:27:54Z
- session: O 29797.0977 H 29822.9141 L 29452.1035 · gap -138.502
- prior: H 29985.6191 L 29408.4102 C 29935.5996
- basis: bars (`yahoo:^NDX:1d`) run -0.421 (-0.1 bps) vs anchor
- ATR14: 406.3944 pts (1.378%) · RSI14: 38.38
- EMA: mixed / no clean stack
- MACD: bearish (hist -171.2702)
- VWAP (session): 29655.9955 — price below
- OR15: 29656.2793–29822.9141

## BTCUSD — MAP_ONLY
- price: **81535.99** (SINGLE) as-of 2026-10-16T15:27:55Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 110550 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 110553 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 108442 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

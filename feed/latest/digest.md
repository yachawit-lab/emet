# Feed digest — 2026-09-11T16:57:29Z

**Desk grade: MAP_ONLY** (schema v1, run `20260911T165729Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4363.1001** (SINGLE) as-of 2026-09-11T16:57:27Z
- session: O 4359.3999 H 4444.8999 L 4333.0 · gap -5.1001
- prior: H 4420.0 L 4330.7002 C 4364.5
- basis: bars (`yahoo:GC=F:1d`) run +42.6001 (+97.6 bps) vs anchor
- ATR14: 78.9077 pts (1.791%) · RSI14: 50.75
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -25.7316)
- VWAP (UTC day): 4397.227 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29406.178** (SINGLE) as-of 2026-09-11T16:57:30Z
- session: O 29331.4805 H 29473.1172 L 29313.5117 · gap +227.9707
- prior: H 29250.4102 L 29038.2207 C 29103.5098
- basis: bars (`yahoo:^NDX:1d`) run -0.262 (-0.1 bps) vs anchor
- ATR14: 368.0766 pts (1.252%) · RSI14: 51.24
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -18.5634)
- VWAP (session): 29399.4345 — price above
- OR15: 29326.4863–29408.8047

## BTCUSD — MAP_ONLY
- price: **77863.62** (SINGLE) as-of 2026-09-11T16:57:31Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 60240 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 60243 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 58131 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

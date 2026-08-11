# Feed digest — 2026-08-11T16:13:34Z

**Desk grade: MAP_ONLY** (schema v1, run `20260811T161334Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4380.5** (SINGLE) as-of 2026-08-11T16:13:06Z
- session: O 4446.8999 H 4495.0 L 4415.7002 · gap +85.1001
- prior: H 4390.1001 L 4336.1001 C 4361.7998
- basis: bars (`yahoo:GC=F:1d`) run +62.1001 (+141.8 bps) vs anchor
- ATR14: 81.0262 pts (1.824%) · RSI14: 69.66
- EMA: mixed / no clean stack
- MACD: bullish (hist 49.0929)
- VWAP (UTC day): 4450.4006 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29554.96** (SINGLE) as-of 2026-08-11T16:13:34Z
- session: O 29694.6973 H 29705.7988 L 29535.2129 · gap +72.8965
- prior: H 29784.2109 L 29606.4707 C 29621.8008
- basis: bars (`yahoo:^NDX:1d`) run +0.1552 (+0.1 bps) vs anchor
- ATR14: 553.709 pts (1.873%) · RSI14: 55.38
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 176.0133)
- VWAP (session): 29619.0668 — price below
- OR15: 29576.5215–29698.6289

## BTCUSD — MAP_ONLY
- price: **63531.65** (SINGLE) as-of 2026-08-11T16:13:35Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 15556 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 15559 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 13448 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

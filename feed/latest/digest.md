# Feed digest — 2026-08-05T17:06:50Z

**Desk grade: MAP_ONLY** (schema v1, run `20260805T170650Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4245.2998** (SINGLE) as-of 2026-08-05T17:06:44Z
- session: O 4133.7998 H 4325.5 L 4121.6001 · gap +38.3999
- prior: H 4095.3999 L 4048.8 C 4095.3999
- basis: bars (`yahoo:GC=F:1d`) run +53.6001 (+126.3 bps) vs anchor
- ATR14: 79.8579 pts (1.858%) · RSI14: 62.57
- EMA: mixed / no clean stack
- MACD: bullish (hist 27.4342)
- VWAP (UTC day): 4247.3541 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29637.264** (SINGLE) as-of 2026-08-05T17:06:51Z
- session: O 29863.2676 H 29946.9355 L 29574.3965 · gap +130.1074
- prior: H 29831.4004 L 29109.2598 C 29733.1602
- basis: bars (`yahoo:^NDX:1d`) run +0.1383 (+0.0 bps) vs anchor
- ATR14: 639.641 pts (2.158%) · RSI14: 56.96
- EMA: mixed / no clean stack
- MACD: bullish (hist 140.613)
- VWAP (session): 29769.0649 — price below
- OR15: 29795.9883–29928.2559

## BTCUSD — MAP_ONLY
- price: **64582.22** (SINGLE) as-of 2026-08-05T17:06:52Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 6969 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 6972 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 4861 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

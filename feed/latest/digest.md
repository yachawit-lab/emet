# Feed digest — 2026-09-02T17:04:16Z

**Desk grade: MAP_ONLY** (schema v1, run `20260902T170416Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4369.8999** (SINGLE) as-of 2026-09-02T17:03:52Z
- session: O 4377.2002 H 4444.3999 L 4329.2002 · gap +29.2002
- prior: H 4402.0 L 4329.1001 C 4348.0
- basis: bars (`yahoo:GC=F:1d`) run +47.0 (+107.6 bps) vs anchor
- ATR14: 80.2529 pts (1.817%) · RSI14: 51.97
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -22.8403)
- VWAP (UTC day): 4385.6589 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29123.222** (SINGLE) as-of 2026-09-02T17:04:21Z
- session: O 29015.9961 H 29165.623 L 28971.8984 · gap -61.2246
- prior: H 29267.4199 L 28953.2598 C 29077.2207
- basis: bars (`yahoo:^NDX:1d`) run -0.2259 (-0.1 bps) vs anchor
- ATR14: 413.6364 pts (1.42%) · RSI14: 47.5
- EMA: mixed / no clean stack
- MACD: bearish (hist -48.6084)
- VWAP (session): 29090.6748 — price above
- OR15: 28991.8105–29067.0371

## BTCUSD — MAP_ONLY
- price: **77120.31** (SINGLE) as-of 2026-09-02T17:04:22Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 47286 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 47289 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 45178 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

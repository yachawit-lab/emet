# Feed digest — 2026-08-21T13:49:32Z

**Desk grade: MAP_ONLY** (schema v1, run `20260821T134932Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4590.3999** (SINGLE) as-of 2026-08-21T13:49:09Z
- session: O 4577.0 H 4661.7002 L 4565.5 · gap +60.7002
- prior: H 4530.0 L 4486.0 C 4516.2998
- basis: bars (`yahoo:GC=F:1d`) run +53.2002 (+115.9 bps) vs anchor
- ATR14: 85.8152 pts (1.848%) · RSI14: 74.39
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 35.7317)
- VWAP (UTC day): 4624.5455 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29243.899** (SINGLE) as-of 2026-08-21T13:49:32Z
- session: O 29359.5977 H 29366.1191 L 29228.1758 · gap +146.4375
- prior: H 29378.8008 L 29118.0703 C 29213.1602
- basis: bars (`yahoo:^NDX:1d`) run -0.0006 (-0.0 bps) vs anchor
- ATR14: 455.2588 pts (1.557%) · RSI14: 49.12
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -6.011)
- VWAP (session): 29276.4566 — price below
- OR15: 29232.8398–29365.0

## BTCUSD — MAP_ONLY
- price: **77438.76** (SINGLE) as-of 2026-08-21T13:49:33Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 29812 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 29815 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 27704 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

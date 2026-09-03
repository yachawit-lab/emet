# Feed digest — 2026-09-03T15:07:57Z

**Desk grade: MAP_ONLY** (schema v1, run `20260903T150757Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4500.3999** (SINGLE) as-of 2026-09-03T15:07:54Z
- session: O 4436.3999 H 4543.7002 L 4426.7002 · gap +70.1001
- prior: H 4390.2002 L 4292.2002 C 4366.2998
- basis: bars (`yahoo:GC=F:1d`) run +27.3003 (+60.7 bps) vs anchor
- ATR14: 86.0488 pts (1.9%) · RSI14: 58.75
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.0694)
- VWAP (UTC day): 4492.7754 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29382.071** (SINGLE) as-of 2026-09-03T15:07:57Z
- session: O 29234.418 H 29395.3633 L 29160.9629 · gap +91.0879
- prior: H 29165.6191 L 28971.9004 C 29143.3301
- basis: bars (`yahoo:^NDX:1d`) run -3.8835 (-1.3 bps) vs anchor
- ATR14: 389.7366 pts (1.327%) · RSI14: 51.22
- EMA: mixed / no clean stack
- MACD: bearish (hist -34.5506)
- VWAP (session): 29270.1716 — price above
- OR15: 29160.9629–29310.1738

## BTCUSD — MAP_ONLY
- price: **80685.91** (SINGLE) as-of 2026-09-03T15:07:58Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 48610 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 48613 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 46502 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

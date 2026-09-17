# Feed digest — 2026-09-17T17:33:00Z

**Desk grade: MAP_ONLY** (schema v1, run `20260917T173300Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4362.7998** (SINGLE) as-of 2026-09-17T17:32:45Z
- session: O 4301.3999 H 4423.2998 L 4294.5 · gap -86.1001
- prior: H 4413.1001 L 4273.2998 C 4387.5
- basis: bars (`yahoo:GC=F:1d`) run +37.2002 (+85.3 bps) vs anchor
- ATR14: 111.8485 pts (2.542%) · RSI14: 48.2
- EMA: mixed / no clean stack
- MACD: bearish (hist -26.4944)
- VWAP (UTC day): 4375.2239 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29421.768** (SINGLE) as-of 2026-09-17T17:33:02Z
- session: O 29401.5391 H 29458.5605 L 29305.9043 · gap +456.4785
- prior: H 29235.8906 L 28753.2891 C 28945.0605
- basis: bars (`yahoo:^NDX:1d`) run -0.3149 (-0.1 bps) vs anchor
- ATR14: 385.9732 pts (1.312%) · RSI14: 52.49
- EMA: mixed / no clean stack
- MACD: bearish (hist -31.2362)
- VWAP (session): 29393.4402 — price above
- OR15: 29308.9238–29412.2305

## BTCUSD — MAP_ONLY
- price: **76821.5** (SINGLE) as-of 2026-09-17T17:33:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 68915 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 68918 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 66807 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

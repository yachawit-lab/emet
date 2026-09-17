# Feed digest — 2026-09-17T15:36:52Z

**Desk grade: MAP_ONLY** (schema v1, run `20260917T153652Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4362.2002** (SINGLE) as-of 2026-09-17T15:36:45Z
- session: O 4301.3999 H 4423.2998 L 4294.5 · gap -86.1001
- prior: H 4413.1001 L 4273.2998 C 4387.5
- basis: bars (`yahoo:GC=F:1d`) run +36.2998 (+83.2 bps) vs anchor
- ATR14: 111.8485 pts (2.543%) · RSI14: 48.08
- EMA: mixed / no clean stack
- MACD: bearish (hist -26.5901)
- VWAP (UTC day): 4372.0093 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29410.0** (SINGLE) as-of 2026-09-17T15:36:53Z
- session: O 29401.5391 H 29444.1641 L 29305.9043 · gap +456.4785
- prior: H 29235.8906 L 28753.2891 C 28945.0605
- basis: bars (`yahoo:^NDX:1d`) run -0.8438 (-0.3 bps) vs anchor
- ATR14: 384.9448 pts (1.309%) · RSI14: 52.31
- EMA: mixed / no clean stack
- MACD: bearish (hist -32.021)
- VWAP (session): 29377.5984 — price above
- OR15: 29308.9238–29412.2305

## BTCUSD — MAP_ONLY
- price: **76585.07** (SINGLE) as-of 2026-09-17T15:36:54Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 68799 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 68802 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 66691 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

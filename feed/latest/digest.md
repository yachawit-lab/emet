# Feed digest — 2026-10-23T10:56:32Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261023T105632Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4021.2** (SINGLE) as-of 2026-10-23T10:56:13Z
- session: O 4042.2 H 4047.8 L 4000.8999 · gap -18.2
- prior: H 4164.2998 L 4036.8 C 4060.3999
- basis: bars (`yahoo:GC=F:1d`) run +17.3 (+43.0 bps) vs anchor
- ATR14: 78.3968 pts (1.941%) · RSI14: 32.58
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.3734)
- VWAP (UTC day): 4029.6136 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28958.6875** (STALE) as-of 2026-10-22T20:00:00Z
- session: O 29304.3008 H 29411.7598 L 28855.0996 · gap -518.2188
- prior: H 29928.3105 L 29593.6992 C 29822.5195
- ATR14: 485.7567 pts (1.677%) · RSI14: 36.68
- EMA: mixed / no clean stack
- MACD: bearish (hist -203.7254)
- VWAP (session): 29079.071 — price below
- OR15: 29290.1367–29379.8164
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:56)

## BTCUSD — MAP_ONLY
- price: **81593.28** (SINGLE) as-of 2026-10-23T10:56:33Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 120359 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 120362 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 897 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:56)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 118251 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

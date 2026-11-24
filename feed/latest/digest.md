# Feed digest — 2026-11-24T23:16:43Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261124T231643Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3559.8999** (SINGLE) as-of 2026-11-24T23:16:15Z
- session: O 3559.3 H 3562.0 L 3556.1001 · gap -92.0999
- prior: H 3691.0 L 3552.3 C 3651.3999
- basis: bars (`yahoo:GC=F:1d`) run -3.0 (-8.4 bps) vs anchor
- ATR14: 105.6749 pts (2.971%) · RSI14: 29.88
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -36.4888)
- VWAP (UTC day): 3609.6847 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26214.168** (STALE) as-of 2026-11-24T21:00:00Z
- session: O 26298.1426 H 26433.5977 L 25935.4648 · gap -447.957
- prior: H 27018.8809 L 26386.4199 C 26746.0996
- ATR14: 847.3993 pts (3.233%) · RSI14: 39.24
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -117.0924)
- VWAP (session): 26178.6565 — price below
- OR15: 26137.2539–26332.8926
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:16)

## BTCUSD — MAP_ONLY
- price: **59963.76** (SINGLE) as-of 2026-11-24T23:16:44Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 167179 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 167182 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 61 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:16)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 165071 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

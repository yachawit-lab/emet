# Feed digest — 2026-11-25T03:32:40Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261125T033240Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3552.0** (SINGLE) as-of 2026-11-25T03:32:15Z
- session: O 3559.3 H 3573.8999 L 3532.3999 · gap -2.5999
- prior: H 3676.7 L 3545.3999 C 3561.8999
- basis: bars (`yahoo:GC=F:1d`) run +3.1001 (+8.7 bps) vs anchor
- ATR14: 103.4788 pts (2.911%) · RSI14: 29.8
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -34.4064)
- VWAP (UTC day): 3548.9183 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26214.168** (STALE) as-of 2026-11-24T21:00:00Z
- session: O 26298.1426 H 26433.5977 L 25935.4648 · gap -447.957
- prior: H 27018.8809 L 26386.4199 C 26746.0996
- ATR14: 847.3993 pts (3.233%) · RSI14: 39.24
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -117.0924)
- VWAP (session): 26175.517 — price below
- OR15: 26137.2539–26332.8926
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 03:32)

## BTCUSD — MAP_ONLY
- price: **59434.45** (SINGLE) as-of 2026-11-25T03:32:41Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 167435 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 167438 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 317 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 03:32)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 165327 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

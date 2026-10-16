# Feed digest — 2026-10-16T22:51:40Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261016T225140Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4166.1001** (STALE) as-of 2026-10-16T22:51:39Z
- session: O 4192.1001 H 4220.2002 L 4167.5 · gap +22.0
- prior: H 4197.7002 L 4120.8999 C 4170.1001
- basis: bars (`yahoo:GC=F:1d`) run +20.6001 (+49.4 bps) vs anchor
- ATR14: 83.7348 pts (2.0%) · RSI14: 44.08
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 3.5035)
- VWAP (UTC day): 4193.6397 — price below
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29187.5488** (STALE) as-of 2026-10-16T20:00:00Z
- session: O 29797.0977 H 29822.9141 L 29073.2852 · gap -138.502
- prior: H 29985.6191 L 29408.4102 C 29935.5996
- ATR14: 433.4527 pts (1.485%) · RSI14: 35.23
- EMA: mixed / no clean stack
- MACD: bearish (hist -190.354)
- VWAP (session): 29419.9699 — price below
- OR15: 29656.2793–29822.9141
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:51)

## BTCUSD — MAP_ONLY
- price: **81682.83** (SINGLE) as-of 2026-10-16T22:51:42Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 110994 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 110997 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 96 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:51)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 108886 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-10-19T11:58:10Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261019T115810Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4167.0** (SINGLE) as-of 2026-10-19T11:57:59Z
- session: O 4185.0 H 4211.0 L 4176.0 · gap +3.8999
- prior: H 4220.3999 L 4167.5 C 4181.1001
- basis: bars (`yahoo:GC=F:1d`) run +22.7002 (+54.5 bps) vs anchor
- ATR14: 80.2664 pts (1.916%) · RSI14: 44.47
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 6.0615)
- VWAP (UTC day): 4196.1691 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29187.5488** (STALE) as-of 2026-10-16T20:00:00Z
- session: O 29797.0996 H 29822.9102 L 29073.2891 · gap -138.5
- prior: H 29985.6191 L 29408.4102 C 29935.5996
- ATR14: 433.4525 pts (1.485%) · RSI14: 35.23
- EMA: mixed / no clean stack
- MACD: bearish (hist -190.3538)
- VWAP (session): 29406.5632 — price below
- OR15: 29656.2793–29822.9141
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:58)

## BTCUSD — MAP_ONLY
- price: **82259.77** (SINGLE) as-of 2026-10-19T11:58:12Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 114660 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 114663 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3838 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:58)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 112552 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

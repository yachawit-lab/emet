# Feed digest — 2026-10-10T00:02:37Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261010T000237Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4195.6001** (STALE) as-of 2026-10-10T00:02:15Z
- session: O 4159.7002 H 4232.7002 L 4156.1001 · gap +2.7002
- prior: H 4170.7002 L 4128.1001 C 4157.0
- basis: bars (`yahoo:GC=F:1d`) run +24.6997 (+58.9 bps) vs anchor
- ATR14: 88.8483 pts (2.105%) · RSI14: 43.94
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -6.1071)
- VWAP (UTC day): 4210.3914 — price above
- ⚠ spot metals/FX closed — weekend
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30883.1484** (STALE) as-of 2026-10-09T20:00:00Z
- session: O 30900.0645 H 30946.7383 L 30770.0547 · gap +174.2539
- prior: H 31125.1309 L 30556.4004 C 30725.8105
- ATR14: 375.4201 pts (1.216%) · RSI14: 60.89
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 35.0312)
- VWAP (session): 30850.6982 — price above
- OR15: 30799.5059–30945.8203
- ⚠ US equities closed — weekend

## BTCUSD — MAP_ONLY
- price: **82530.57** (SINGLE) as-of 2026-10-10T00:02:39Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 100985 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — weekend
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 100988 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 167 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — weekend
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 98877 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

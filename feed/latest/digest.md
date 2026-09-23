# Feed digest — 2026-09-23T22:57:01Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260923T225701Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4291.7002** (SINGLE) as-of 2026-09-23T22:56:42Z
- session: O 4324.3999 H 4328.7998 L 4320.8999 · gap -52.0
- prior: H 4414.1001 L 4327.6001 C 4376.3999
- basis: bars (`yahoo:GC=F:1d`) run +33.0996 (+77.1 bps) vs anchor
- ATR14: 100.6937 pts (2.328%) · RSI14: 42.24
- EMA: mixed / no clean stack
- MACD: bearish (hist -18.9666)
- VWAP (UTC day): 4340.8915 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30470.293** (STALE) as-of 2026-09-23T20:00:00Z
- session: O 30706.2324 H 30706.2324 L 30353.8848 · gap +223.8828
- prior: H 30557.3398 L 29933.2207 C 30482.3496
- ATR14: 413.8448 pts (1.358%) · RSI14: 65.47
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 118.2818)
- VWAP (session): 30473.0722 — price below
- OR15: 30611.4121–30696.2754
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:57)

## BTCUSD — MAP_ONLY
- price: **84564.83** (SINGLE) as-of 2026-09-23T22:57:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 77879 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 77882 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 101 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:57)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 75771 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

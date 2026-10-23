# Feed digest — 2026-10-23T23:09:14Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261023T230914Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **3996.8999** (STALE) as-of 2026-10-23T23:08:45Z
- session: O 4042.2 H 4050.2 L 3989.2 · gap -18.2
- prior: H 4164.2998 L 4036.8 C 4060.3999
- basis: bars (`yahoo:GC=F:1d`) run +13.1001 (+32.8 bps) vs anchor
- ATR14: 79.2325 pts (1.976%) · RSI14: 30.84
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -6.1922)
- VWAP (UTC day): 4023.877 — price below
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28957.5273** (STALE) as-of 2026-10-23T20:00:00Z
- session: O 28847.8164 H 29161.0293 L 28825.7246 · gap -110.873
- prior: H 29411.7598 L 28855.0996 C 28958.6895
- ATR14: 475.0082 pts (1.64%) · RSI14: 36.67
- EMA: mixed / no clean stack
- MACD: bearish (hist -211.5059)
- VWAP (session): 29010.9122 — price below
- OR15: 28830.168–28959.7773
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:09)

## BTCUSD — MAP_ONLY
- price: **80649.95** (SINGLE) as-of 2026-10-23T23:09:15Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 121091 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 121094 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 113 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:09)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 118983 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

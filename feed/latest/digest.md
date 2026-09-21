# Feed digest — 2026-09-21T23:17:36Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260921T231736Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4364.7002** (SINGLE) as-of 2026-09-21T23:17:34Z
- session: O 4382.5 H 4403.7002 L 4382.0 · gap -42.3999
- prior: H 4439.7998 L 4372.2002 C 4424.8999
- basis: bars (`yahoo:GC=F:1d`) run +36.0996 (+82.7 bps) vs anchor
- ATR14: 103.9794 pts (2.363%) · RSI14: 48.28
- EMA: mixed / no clean stack
- MACD: bearish (hist -17.9239)
- VWAP (UTC day): 4390.2285 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30482.3516** (STALE) as-of 2026-09-21T20:00:00Z
- session: O 29947.1641 H 30557.334 L 29933.2188 · gap +302.9941
- prior: H 29647.8008 L 29371.8906 C 29644.1699
- ATR14: 418.571 pts (1.373%) · RSI14: 65.69
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 76.9973)
- VWAP (session): 30295.2414 — price above
- OR15: 29941.4043–30045.6953
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:17)

## BTCUSD — MAP_ONLY
- price: **86579.59** (SINGLE) as-of 2026-09-21T23:17:37Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 75020 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 75023 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 122 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:17)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 72912 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

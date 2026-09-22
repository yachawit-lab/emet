# Feed digest — 2026-09-22T10:52:37Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260922T105237Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4329.2998** (SINGLE) as-of 2026-09-22T10:52:36Z
- session: O 4382.5 H 4414.1001 L 4327.6001 · gap -1.3999
- prior: H 4422.1001 L 4360.2998 C 4383.8999
- basis: bars (`yahoo:GC=F:1d`) run +40.7002 (+94.0 bps) vs anchor
- ATR14: 104.1702 pts (2.384%) · RSI14: 45.82
- EMA: mixed / no clean stack
- MACD: bearish (hist -17.869)
- VWAP (UTC day): 4365.8437 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30482.3516** (STALE) as-of 2026-09-21T20:00:00Z
- session: O 29947.1602 H 30557.3398 L 29933.2207 · gap +302.9902
- prior: H 29647.8008 L 29371.8906 C 29644.1699
- ATR14: 418.5714 pts (1.373%) · RSI14: 65.69
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 76.9972)
- VWAP (session): 30309.3774 — price above
- OR15: 29941.4043–30045.6953
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:52)

## BTCUSD — MAP_ONLY
- price: **85872.48** (SINGLE) as-of 2026-09-22T10:52:39Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 75715 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 75718 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 893 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:52)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 73607 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

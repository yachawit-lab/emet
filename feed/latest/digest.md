# Feed digest — 2026-09-23T10:40:57Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260923T104057Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4317.6001** (SINGLE) as-of 2026-09-23T10:40:41Z
- session: O 4394.7002 H 4407.5 L 4345.2998 · gap +18.3003
- prior: H 4414.1001 L 4327.6001 C 4376.3999
- basis: bars (`yahoo:GC=F:1d`) run +37.1997 (+86.2 bps) vs anchor
- ATR14: 101.1723 pts (2.323%) · RSI14: 44.52
- EMA: mixed / no clean stack
- MACD: bearish (hist -17.0521)
- VWAP (UTC day): 4370.4871 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30732.3965** (STALE) as-of 2026-09-22T20:00:00Z
- session: O 29947.1602 H 30557.3398 L 29933.2207 · gap +302.9902
- prior: H 29647.8008 L 29371.8906 C 29644.1699
- ATR14: 418.5714 pts (1.373%) · RSI14: 65.69
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 76.9972)
- VWAP (session): 30655.64 — price above
- OR15: 30507.2852–30629.375
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:40)

## BTCUSD — MAP_ONLY
- price: **85861.24** (SINGLE) as-of 2026-09-23T10:40:58Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 77143 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 77146 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 881 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:40)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 75035 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-09-16T22:56:27Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260916T225627Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4268.5** (SINGLE) as-of 2026-09-16T22:56:13Z
- session: O 4301.3999 H 4314.0 L 4294.5 · gap -31.3999
- prior: H 4358.2002 L 4301.6001 C 4332.7998
- basis: bars (`yahoo:GC=F:1d`) run +42.2002 (+98.9 bps) vs anchor
- ATR14: 103.2919 pts (2.396%) · RSI14: 40.98
- EMA: mixed / no clean stack
- MACD: bearish (hist -36.0255)
- VWAP (UTC day): 4356.2253 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28945.0605** (STALE) as-of 2026-09-16T20:00:00Z
- session: O 29110.0449 H 29235.8906 L 28753.2949 · gap +172.2051
- prior: H 29142.8008 L 28899.4297 C 28937.8398
- ATR14: 376.163 pts (1.3%) · RSI14: 44.02
- EMA: mixed / no clean stack
- MACD: bearish (hist -59.3867)
- VWAP (session): 29083.317 — price below
- OR15: 29068.2402–29115.5918
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:56)

## BTCUSD — MAP_ONLY
- price: **75617.81** (SINGLE) as-of 2026-09-16T22:56:28Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 67798 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 67801 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 100 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:56)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 65690 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

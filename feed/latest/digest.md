# Feed digest — 2026-09-17T10:52:38Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260917T105238Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4323.3999** (SINGLE) as-of 2026-09-17T10:52:15Z
- session: O 4301.3999 H 4374.3999 L 4294.5 · gap -86.1001
- prior: H 4413.1001 L 4273.2998 C 4387.5
- basis: bars (`yahoo:GC=F:1d`) run +31.2002 (+72.2 bps) vs anchor
- ATR14: 109.2914 pts (2.51%) · RSI14: 44.79
- EMA: mixed / no clean stack
- MACD: bearish (hist -29.3917)
- VWAP (UTC day): 4342.3546 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28945.0605** (STALE) as-of 2026-09-16T20:00:00Z
- session: O 29110.0391 H 29235.8906 L 28753.2891 · gap +172.1992
- prior: H 29142.8008 L 28899.4297 C 28937.8398
- ATR14: 376.1634 pts (1.3%) · RSI14: 44.02
- EMA: mixed / no clean stack
- MACD: bearish (hist -59.3867)
- VWAP (session): 29082.8513 — price below
- OR15: 29068.2402–29115.5918
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:52)

## BTCUSD — MAP_ONLY
- price: **76275.75** (SINGLE) as-of 2026-09-17T10:52:39Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 68515 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 68518 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 893 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:52)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 66407 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

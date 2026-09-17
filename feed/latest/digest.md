# Feed digest — 2026-09-17T22:51:17Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260917T225117Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4343.5** (SINGLE) as-of 2026-09-17T22:50:50Z
- session: O 4381.6001 H 4388.5 L 4380.5 · gap -5.8999
- prior: H 4413.1001 L 4273.2998 C 4387.5
- basis: bars (`yahoo:GC=F:1d`) run +43.8999 (+101.1 bps) vs anchor
- ATR14: 103.2199 pts (2.353%) · RSI14: 47.15
- EMA: mixed / no clean stack
- MACD: bearish (hist -27.2985)
- VWAP (UTC day): 4376.8178 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29446.9805** (STALE) as-of 2026-09-17T20:00:00Z
- session: O 29401.5391 H 29494.9531 L 29305.9043 · gap +456.4785
- prior: H 29235.8906 L 28753.2891 C 28945.0605
- ATR14: 388.5745 pts (1.32%) · RSI14: 52.88
- EMA: mixed / no clean stack
- MACD: bearish (hist -29.6207)
- VWAP (session): 29408.1933 — price above
- OR15: 29308.9238–29408.873
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:51)

## BTCUSD — MAP_ONLY
- price: **76323.75** (SINGLE) as-of 2026-09-17T22:51:18Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 69233 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 69236 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 95 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:51)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 67125 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

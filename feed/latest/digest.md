# Feed digest — 2026-09-25T23:18:17Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260925T231817Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4286.2002** (STALE) as-of 2026-09-25T23:18:01Z
- session: O 4309.5 H 4351.6001 L 4289.2002 · gap +11.5
- prior: H 4338.0 L 4278.2998 C 4298.0
- basis: bars (`yahoo:GC=F:1d`) run +34.2998 (+80.0 bps) vs anchor
- ATR14: 97.7822 pts (2.263%) · RSI14: 42.72
- EMA: mixed / no clean stack
- MACD: bearish (hist -19.3408)
- VWAP (UTC day): 4320.3632 — price above
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30608.1348** (STALE) as-of 2026-09-25T20:00:00Z
- session: O 30517.457 H 30667.5586 L 30413.5859 · gap +38.5977
- prior: H 30529.3496 L 30204.1602 C 30478.8594
- ATR14: 390.7061 pts (1.276%) · RSI14: 64.72
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 145.7195)
- VWAP (session): 30578.4603 — price above
- OR15: 30506.4883–30613.0
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:18)

## BTCUSD — MAP_ONLY
- price: **84060.17** (SINGLE) as-of 2026-09-25T23:18:19Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 80780 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 80783 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 122 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:18)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 78672 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

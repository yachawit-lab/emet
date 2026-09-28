# Feed digest — 2026-09-28T12:46:21Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260928T124621Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4148.7998** (SINGLE) as-of 2026-09-28T12:46:07Z
- session: O 4315.0 H 4315.6001 L 4172.7002 · gap -6.2002
- prior: H 4351.6001 L 4289.2002 C 4321.2002
- basis: bars (`yahoo:GC=F:1d`) run +33.6001 (+81.0 bps) vs anchor
- ATR14: 101.4027 pts (2.425%) · RSI14: 33.67
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -26.084)
- VWAP (UTC day): 4211.228 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30608.1348** (STALE) as-of 2026-09-25T20:00:00Z
- session: O 30517.4609 H 30667.5605 L 30413.5898 · gap +38.6016
- prior: H 30529.3496 L 30204.1602 C 30478.8594
- ATR14: 390.706 pts (1.276%) · RSI14: 64.72
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 145.7192)
- VWAP (session): 30579.4421 — price above
- OR15: 30506.4883–30613.0
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:46)

## BTCUSD — MAP_ONLY
- price: **83439.71** (SINGLE) as-of 2026-09-28T12:46:22Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 84468 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 84471 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3886 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:46)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 82360 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

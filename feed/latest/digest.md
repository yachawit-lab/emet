# Feed digest — 2026-10-30T12:02:04Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261030T120204Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3963.5** (SINGLE) as-of 2026-10-30T12:01:43Z
- session: O 4033.6001 H 4038.2 L 3974.7 · gap +2.2002
- prior: H 4081.7 L 4016.3 C 4031.3999
- basis: bars (`yahoo:GC=F:1d`) run +15.1001 (+38.1 bps) vs anchor
- ATR14: 74.5609 pts (1.874%) · RSI14: 32.23
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -6.1519)
- VWAP (UTC day): 4000.3271 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29402.5078** (STALE) as-of 2026-10-29T20:00:00Z
- session: O 29421.1797 H 29517.8008 L 29257.0508 · gap -391.9805
- prior: H 29848.7109 L 29618.4199 C 29813.1602
- ATR14: 461.1986 pts (1.569%) · RSI14: 44.39
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -74.3647)
- VWAP (session): 29375.7228 — price above
- OR15: 29257.0547–29433.5156
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:02)

## BTCUSD — MAP_ONLY
- price: **77235.57** (SINGLE) as-of 2026-10-30T12:02:12Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 130504 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 130507 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 962 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:02)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 128396 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

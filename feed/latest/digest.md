# Feed digest — 2026-10-29T23:57:13Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261029T235713Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4009.1001** (SINGLE) as-of 2026-10-29T23:57:10Z
- session: O 4033.6001 H 4038.2 L 4021.0 · gap -18.0
- prior: H 4097.2002 L 4036.8999 C 4051.6001
- basis: bars (`yahoo:GC=F:1d`) run +12.3999 (+30.9 bps) vs anchor
- ATR14: 72.926 pts (1.813%) · RSI14: 35.23
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.2157)
- VWAP (UTC day): 4040.1964 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29402.5078** (STALE) as-of 2026-10-29T20:00:00Z
- session: O 29421.1777 H 29517.7988 L 29257.0547 · gap -391.9824
- prior: H 29848.7109 L 29618.4199 C 29813.1602
- ATR14: 461.1983 pts (1.569%) · RSI14: 44.39
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -74.3648)
- VWAP (session): 29373.5571 — price above
- OR15: 29257.0547–29433.5156
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:57)

## BTCUSD — MAP_ONLY
- price: **77816.62** (SINGLE) as-of 2026-10-29T23:57:14Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 129779 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 129782 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 161 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:57)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 127671 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

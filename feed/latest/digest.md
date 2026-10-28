# Feed digest — 2026-10-28T12:01:14Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261028T120114Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4046.3999** (SINGLE) as-of 2026-10-28T12:00:56Z
- session: O 4073.6001 H 4084.1001 L 4040.5 · gap -1.0
- prior: H 4079.3999 L 4001.6001 C 4074.6001
- basis: bars (`yahoo:GC=F:1d`) run +13.3001 (+32.9 bps) vs anchor
- ATR14: 74.9889 pts (1.847%) · RSI14: 38.06
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -3.1409)
- VWAP (UTC day): 4060.7309 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29651.4414** (STALE) as-of 2026-10-27T20:00:00Z
- session: O 29407.1895 H 29719.6309 L 29340.5391 · gap +133.7891
- prior: H 29404.4395 L 29011.9102 C 29273.4004
- ATR14: 471.0935 pts (1.589%) · RSI14: 47.24
- EMA: mixed / no clean stack
- MACD: bearish (hist -134.5122)
- VWAP (session): 29582.6123 — price above
- OR15: 29389.7441–29529.0332
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:01)

## BTCUSD — MAP_ONLY
- price: **81202.25** (SINGLE) as-of 2026-10-28T12:01:15Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 127623 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 127626 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 961 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:01)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 125515 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

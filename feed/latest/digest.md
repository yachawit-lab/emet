# Feed digest — 2026-11-11T20:03:56Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261111T200356Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **None** (MISSING) as-of 2026-11-11T19:53:36Z
- session: O 4043.7 H 4074.7 L 3990.5 · gap +13.5
- prior: H 4156.2002 L 4020.8 C 4030.2
- ATR14: 90.1924 pts (2.258%) · RSI14: 41.96
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 9.6289)
- VWAP (UTC day): 4034.8771 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28455.304** (STALE) as-of 2026-11-11T20:03:51Z
- session: O 28267.334 H 28593.5234 L 28102.748 · gap +526.5449
- prior: H 27990.3398 L 27421.1797 C 27740.7891
- basis: bars (`yahoo:^NDX:1d`) run +1.5105 (+0.5 bps) vs anchor
- ATR14: 667.3371 pts (2.345%) · RSI14: 46.64
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -72.0987)
- VWAP (session): 28373.6261 — price above
- OR15: 28153.6719–28319.1543
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:03)

## BTCUSD — MAP_ONLY
- price: **74379.04** (SINGLE) as-of 2026-11-11T20:03:57Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 148266 min old — excluded from anchor
- `XAUUSD` **quote[1]** — https://api.gold-api.com/price/XAU -> URLError: <urlopen error [Errno -2] Name or service not known>
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price** — anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 148269 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:03)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 146158 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
- XAUUSD: anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them

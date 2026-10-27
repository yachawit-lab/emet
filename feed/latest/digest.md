# Feed digest — 2026-10-27T11:31:29Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261027T113129Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4014.0** (SINGLE) as-of 2026-10-27T11:31:24Z
- session: O 4032.8 H 4038.8999 L 4001.8999 · gap -5.5999
- prior: H 4044.0 L 3990.8999 C 4038.3999
- basis: bars (`yahoo:GC=F:1d`) run +9.3999 (+23.4 bps) vs anchor
- ATR14: 74.4898 pts (1.851%) · RSI14: 33.69
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -7.9033)
- VWAP (UTC day): 4018.911 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29273.4043** (STALE) as-of 2026-10-26T20:00:00Z
- session: O 29051.5801 H 29404.4395 L 29011.9102 · gap +94.0508
- prior: H 29161.0293 L 28825.7207 C 28957.5293
- ATR14: 473.0059 pts (1.616%) · RSI14: 41.77
- EMA: mixed / no clean stack
- MACD: bearish (hist -185.199)
- VWAP (session): 29275.6697 — price below
- OR15: 29012.5996–29170.7539
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:31)

## BTCUSD — MAP_ONLY
- price: **79816.64** (SINGLE) as-of 2026-10-27T11:31:31Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 126154 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 126157 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 931 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:31)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 124045 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

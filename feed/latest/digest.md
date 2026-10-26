# Feed digest — 2026-10-26T23:53:41Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261026T235341Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4006.5** (SINGLE) as-of 2026-10-26T23:53:16Z
- session: O 4032.8 H 4032.8999 L 4022.2 · gap +24.9001
- prior: H 4050.2 L 3989.1001 C 4007.8999
- basis: bars (`yahoo:GC=F:1d`) run +16.7 (+41.7 bps) vs anchor
- ATR14: 75.3664 pts (1.873%) · RSI14: 32.79
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -8.2432)
- VWAP (UTC day): 4024.449 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29273.4043** (STALE) as-of 2026-10-26T20:00:00Z
- session: O 29051.5781 H 29404.4375 L 29011.9141 · gap +94.0488
- prior: H 29161.0293 L 28825.7207 C 28957.5293
- ATR14: 473.0057 pts (1.616%) · RSI14: 41.77
- EMA: mixed / no clean stack
- MACD: bearish (hist -185.1988)
- VWAP (session): 29268.4374 — price above
- OR15: 29012.5996–29170.7539
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:53)

## BTCUSD — MAP_ONLY
- price: **79992.53** (SINGLE) as-of 2026-10-26T23:53:43Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 125456 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 125459 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 158 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:53)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 123348 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

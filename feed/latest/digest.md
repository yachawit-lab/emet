# Feed digest — 2026-10-15T23:04:16Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261015T230416Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4165.2002** (SINGLE) as-of 2026-10-15T23:04:16Z
- session: O 4192.1001 H 4193.8999 L 4185.8999 · gap +84.2002
- prior: H 4193.5 L 4095.0 C 4107.8999
- basis: bars (`yahoo:GC=F:1d`) run +20.7998 (+49.9 bps) vs anchor
- ATR14: 85.85 pts (2.051%) · RSI14: 43.89
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.9773)
- VWAP (UTC day): 4171.62 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29935.5938** (STALE) as-of 2026-10-15T20:00:00Z
- session: O 29526.7051 H 29985.623 L 29408.4102 · gap -424.1152
- prior: H 30436.5996 L 29861.0605 C 29950.8203
- ATR14: 400.4637 pts (1.338%) · RSI14: 44.34
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -123.1031)
- VWAP (session): 29725.106 — price above
- OR15: 29471.3066–29625.9609
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:04)

## BTCUSD — MAP_ONLY
- price: **82237.95** (SINGLE) as-of 2026-10-15T23:04:18Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 109566 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 109569 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 108 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:04)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 107458 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

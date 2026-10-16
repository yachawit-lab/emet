# Feed digest — 2026-10-16T10:35:13Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261016T103513Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4184.6001** (SINGLE) as-of 2026-10-16T10:35:08Z
- session: O 4192.1001 H 4213.2998 L 4167.5 · gap +22.0
- prior: H 4197.7002 L 4120.8999 C 4170.1001
- basis: bars (`yahoo:GC=F:1d`) run +19.6001 (+46.8 bps) vs anchor
- ATR14: 83.242 pts (1.98%) · RSI14: 45.87
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 4.6203)
- VWAP (UTC day): 4194.5299 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29935.5938** (STALE) as-of 2026-10-15T20:00:00Z
- session: O 29526.7109 H 29985.6191 L 29408.4102 · gap -424.1094
- prior: H 30436.5996 L 29861.0605 C 29950.8203
- ATR14: 400.4635 pts (1.338%) · RSI14: 44.34
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -123.1027)
- VWAP (session): 29734.593 — price above
- OR15: 29471.3066–29625.9609
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:35)

## BTCUSD — MAP_ONLY
- price: **82104.59** (SINGLE) as-of 2026-10-16T10:35:20Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 110257 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 110260 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 875 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:35)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 108149 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

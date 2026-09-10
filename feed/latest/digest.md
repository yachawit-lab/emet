# Feed digest — 2026-09-10T22:35:41Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260910T223541Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4319.5** (SINGLE) as-of 2026-09-10T22:35:25Z
- session: O 4359.3999 H 4365.7998 L 4357.8999 · gap -56.6001
- prior: H 4416.0 L 4397.3999 C 4416.0
- basis: bars (`yahoo:GC=F:1d`) run +40.5 (+93.8 bps) vs anchor
- ATR14: 74.1397 pts (1.7%) · RSI14: 47.46
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -28.1655)
- VWAP (UTC day): 4412.2815 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29103.5137** (STALE) as-of 2026-09-10T20:00:00Z
- session: O 29097.334 H 29250.4121 L 29038.2207 · gap -324.2168
- prior: H 29563.5996 L 29334.4004 C 29421.5508
- ATR14: 367.9589 pts (1.264%) · RSI14: 46.05
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -25.5344)
- VWAP (session): 29155.4445 — price below
- OR15: 29038.2207–29173.9473
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:35)

## BTCUSD — MAP_ONLY
- price: **76988.15** (SINGLE) as-of 2026-09-10T22:35:43Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 59138 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 59141 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 80 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:35)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 57030 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

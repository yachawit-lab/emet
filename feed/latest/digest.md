# Feed digest — 2026-10-06T12:39:59Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261006T123959Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4175.8999** (SINGLE) as-of 2026-10-06T12:39:40Z
- session: O 4169.2002 H 4208.0 L 4130.7002 · gap +12.4004
- prior: H 4198.8999 L 4150.3999 C 4156.7998
- basis: bars (`yahoo:GC=F:1d`) run +27.8999 (+66.8 bps) vs anchor
- ATR14: 92.0942 pts (2.191%) · RSI14: 39.56
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -17.0805)
- VWAP (UTC day): 4170.5243 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **31076.4414** (STALE) as-of 2026-10-05T20:00:00Z
- session: O 30812.7598 H 31117.3594 L 30798.4199 · gap +4.8301
- prior: H 31017.5293 L 30737.0703 C 30807.9297
- ATR14: 381.4547 pts (1.227%) · RSI14: 68.3
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 86.7887)
- VWAP (session): 31007.402 — price above
- OR15: 30798.9355–30961.7754
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:39)

## BTCUSD — MAP_ONLY
- price: **86249.4** (SINGLE) as-of 2026-10-06T12:40:01Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 95982 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 95985 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1000 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:39)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 93874 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

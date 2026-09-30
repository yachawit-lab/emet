# Feed digest — 2026-09-30T23:50:13Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260930T235013Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4156.7998** (SINGLE) as-of 2026-09-30T23:49:48Z
- session: O 4190.1001 H 4192.0 L 4181.7998 · gap +10.3999
- prior: H 4218.1001 L 4145.2002 C 4179.7002
- basis: bars (`yahoo:GC=F:1d`) run +27.8003 (+66.9 bps) vs anchor
- ATR14: 94.9707 pts (2.27%) · RSI14: 34.71
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -29.1447)
- VWAP (UTC day): 4209.2775 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30408.502** (STALE) as-of 2026-09-30T20:00:00Z
- session: O 30421.6758 H 30630.4512 L 30408.502 · gap +82.3457
- prior: H 30429.9707 L 30235.6602 C 30339.3301
- ATR14: 378.9553 pts (1.246%) · RSI14: 60.21
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 74.8786)
- VWAP (session): 30546.3985 — price below
- OR15: 30415.502–30517.7773
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:50)

## BTCUSD — MAP_ONLY
- price: **83518.14** (SINGLE) as-of 2026-09-30T23:50:15Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 88012 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 88015 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 154 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:50)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 85904 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

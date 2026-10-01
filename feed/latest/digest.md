# Feed digest — 2026-10-01T12:19:59Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261001T121959Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4179.6001** (SINGLE) as-of 2026-10-01T12:19:50Z
- session: O 4190.1001 H 4222.7998 L 4169.3999 · gap +3.3999
- prior: H 4251.1001 L 4178.2002 C 4186.7002
- basis: bars (`yahoo:GC=F:1d`) run +26.7998 (+64.1 bps) vs anchor
- ATR14: 96.0194 pts (2.283%) · RSI14: 37.19
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -25.6505)
- VWAP (UTC day): 4197.3776 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30408.502** (STALE) as-of 2026-09-30T20:00:00Z
- session: O 30421.6797 H 30630.4492 L 30408.5 · gap +82.3496
- prior: H 30429.9707 L 30235.6602 C 30339.3301
- ATR14: 378.9552 pts (1.246%) · RSI14: 60.21
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 74.8785)
- VWAP (session): 30548.9395 — price below
- OR15: 30415.1621–30517.7773
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:19)

## BTCUSD — MAP_ONLY
- price: **83931.83** (SINGLE) as-of 2026-10-01T12:20:01Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 88762 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 88765 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 980 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:19)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 86654 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

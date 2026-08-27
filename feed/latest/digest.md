# Feed digest — 2026-08-27T21:05:55Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260827T210555Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4602.6001** (SINGLE) as-of 2026-08-27T21:05:51Z
- session: O 4650.0 H 4697.7002 L 4616.1001 · gap +51.7998
- prior: H 4615.2998 L 4598.2002 C 4598.2002
- basis: bars (`yahoo:GC=F:1d`) run +51.6001 (+112.1 bps) vs anchor
- ATR14: 75.1351 pts (1.614%) · RSI14: 72.08
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 25.9277)
- VWAP (UTC day): 4653.4343 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29641.56** (STALE) as-of 2026-08-27T21:05:56Z
- session: O 29480.9883 H 29643.5312 L 29366.4238 · gap +256.4688
- prior: H 29296.7695 L 29096.8398 C 29224.5195
- basis: bars (`yahoo:^NDX:1d`) run +0.0005 (+0.0 bps) vs anchor
- ATR14: 431.6834 pts (1.456%) · RSI14: 54.86
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -23.5603)
- VWAP (session): 29521.3654 — price above
- OR15: 29389.0117–29523.2305
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:05)

## BTCUSD — MAP_ONLY
- price: **80044.35** (SINGLE) as-of 2026-08-27T21:05:56Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 38888 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 38891 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:05)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 36780 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

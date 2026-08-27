# Feed digest — 2026-08-27T23:14:04Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260827T231404Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4604.8999** (SINGLE) as-of 2026-08-27T23:13:51Z
- session: O 4656.0 H 4664.7998 L 4653.8999 · gap +57.7998
- prior: H 4615.2998 L 4598.2002 C 4598.2002
- basis: bars (`yahoo:GC=F:1d`) run +58.3003 (+126.6 bps) vs anchor
- ATR14: 72.785 pts (1.561%) · RSI14: 72.45
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 26.5021)
- VWAP (UTC day): 4653.5294 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29641.5605** (STALE) as-of 2026-08-27T20:00:00Z
- session: O 29480.9883 H 29643.5312 L 29366.4238 · gap +256.4688
- prior: H 29296.7695 L 29096.8398 C 29224.5195
- ATR14: 431.6834 pts (1.456%) · RSI14: 54.86
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -23.5603)
- VWAP (session): 29521.3654 — price above
- OR15: 29389.0117–29523.2305
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:14)

## BTCUSD — MAP_ONLY
- price: **80222.34** (SINGLE) as-of 2026-08-27T23:14:06Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 39016 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 39019 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 118 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:14)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 36908 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

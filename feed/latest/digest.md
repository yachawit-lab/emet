# Feed digest — 2026-08-28T04:22:15Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260828T042215Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4584.7998** (SINGLE) as-of 2026-08-28T04:21:51Z
- session: O 4656.0 H 4664.7998 L 4628.0 · gap +46.2998
- prior: H 4609.7002 L 4609.7002 C 4609.7002
- basis: bars (`yahoo:GC=F:1d`) run +47.3003 (+103.2 bps) vs anchor
- ATR14: 67.8663 pts (1.465%) · RSI14: 71.19
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 18.9335)
- VWAP (UTC day): 4640.7022 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29641.5605** (STALE) as-of 2026-08-27T20:00:00Z
- session: O 29480.9902 H 29643.5293 L 29366.4199 · gap +256.4707
- prior: H 29296.7695 L 29096.8398 C 29224.5195
- ATR14: 431.6832 pts (1.456%) · RSI14: 54.86
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -23.5603)
- VWAP (session): 29525.2868 — price above
- OR15: 29389.0117–29523.2305
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 04:22)

## BTCUSD — MAP_ONLY
- price: **79899.38** (SINGLE) as-of 2026-08-28T04:22:17Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 39324 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 39327 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 502 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 04:22)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 37216 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

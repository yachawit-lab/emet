# Feed digest — 2026-08-27T17:15:39Z

**Desk grade: MAP_ONLY** (schema v1, run `20260827T171539Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4611.5** (SINGLE) as-of 2026-08-27T17:15:20Z
- session: O 4650.0 H 4697.7002 L 4616.1001 · gap +51.7998
- prior: H 4615.2998 L 4598.2002 C 4598.2002
- basis: bars (`yahoo:GC=F:1d`) run +55.3999 (+120.1 bps) vs anchor
- ATR14: 75.1351 pts (1.61%) · RSI14: 72.6
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 26.7382)
- VWAP (UTC day): 4652.4663 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29606.963** (SINGLE) as-of 2026-08-27T17:15:40Z
- session: O 29480.9883 H 29609.4844 L 29366.4238 · gap +256.4688
- prior: H 29296.7695 L 29096.8398 C 29224.5195
- basis: bars (`yahoo:^NDX:1d`) run -0.2189 (-0.1 bps) vs anchor
- ATR14: 429.2525 pts (1.45%) · RSI14: 54.44
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -25.7781)
- VWAP (session): 29503.722 — price above
- OR15: 29389.0117–29523.2305

## BTCUSD — MAP_ONLY
- price: **80688.34** (SINGLE) as-of 2026-08-27T17:15:41Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 38658 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 38661 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 36550 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

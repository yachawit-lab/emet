# Feed digest — 2026-08-13T22:25:28Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260813T222528Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4357.6001** (SINGLE) as-of 2026-08-13T22:25:22Z
- session: O 4408.2002 H 4412.6001 L 4406.6001 · gap -0.6997
- prior: H 4434.0 L 4406.2998 C 4408.8999
- basis: bars (`yahoo:GC=F:1d`) run +52.5 (+120.5 bps) vs anchor
- ATR14: 68.3531 pts (1.55%) · RSI14: 68.37
- EMA: mixed / no clean stack
- MACD: bullish (hist 43.9517)
- VWAP (UTC day): 4440.3853 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30084.502** (STALE) as-of 2026-08-13T20:00:00Z
- session: O 29784.0625 H 30168.0488 L 29757.6172 · gap +41.4629
- prior: H 29881.5 L 29715.8809 C 29742.5996
- ATR14: 538.0583 pts (1.788%) · RSI14: 60.14
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 184.0684)
- VWAP (session): 30071.7244 — price above
- OR15: 29757.6172–29944.5293
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:25)

## BTCUSD — MAP_ONLY
- price: **63542.27** (SINGLE) as-of 2026-08-13T22:25:29Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 18807 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 18810 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 69 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:25)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 16699 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-08-14T09:41:26Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260814T094126Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4353.5** (SINGLE) as-of 2026-08-14T09:41:23Z
- session: O 4408.2002 H 4419.3999 L 4365.5 · gap +44.6001
- prior: H 4445.0 L 4350.0 C 4363.6001
- basis: bars (`yahoo:GC=F:1d`) run +53.8999 (+123.8 bps) vs anchor
- ATR14: 73.3583 pts (1.664%) · RSI14: 66.05
- EMA: mixed / no clean stack
- MACD: bullish (hist 38.2984)
- VWAP (UTC day): 4385.8891 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30084.502** (STALE) as-of 2026-08-13T20:00:00Z
- session: O 29784.0605 H 30168.0508 L 29757.6191 · gap +41.4609
- prior: H 29881.5 L 29715.8809 C 29742.5996
- ATR14: 542.904 pts (1.805%) · RSI14: 59.62
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 178.9614)
- VWAP (session): 30081.348 — price above
- OR15: 29757.6172–29944.5293
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 09:41)

## BTCUSD — MAP_ONLY
- price: **62690.66** (SINGLE) as-of 2026-08-14T09:41:28Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 19483 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 19486 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 821 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 09:41)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 17375 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

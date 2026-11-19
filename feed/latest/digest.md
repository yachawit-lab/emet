# Feed digest — 2026-11-19T01:52:24Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261119T015224Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3753.45** (SINGLE) as-of 2026-11-19T01:52:02Z
- session: O 3855.2 H 3759.3999 L 3727.3999 · gap -9.0
- prior: H 3894.0 L 3839.2 C 3864.2
- basis: bars (`yahoo:GC=F:1d`) run -0.3499 (-0.9 bps) vs anchor
- ATR14: 91.1031 pts (2.427%) · RSI14: 29.78
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -18.0643)
- VWAP (UTC day): 3748.3104 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27116.2578** (STALE) as-of 2026-11-18T21:00:00Z
- session: O 27177.4102 H 27236.123 L 26848.9238 · gap +175.6309
- prior: H 27258.8398 L 26580.8594 C 27001.7793
- ATR14: 653.7848 pts (2.411%) · RSI14: 37.62
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -61.2167)
- VWAP (session): 27058.6327 — price above
- OR15: 26927.3066–27213.4336
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 01:52)

## BTCUSD — MAP_ONLY
- price: **62653.51** (SINGLE) as-of 2026-11-19T01:52:26Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 158694 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 158697 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 216 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 01:52)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 156586 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

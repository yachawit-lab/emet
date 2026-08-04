# Feed digest — 2026-08-04T00:15:11Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260804T001511Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4064.8999** (SINGLE) as-of 2026-08-04T00:14:53Z
- session: O 4109.6001 H 4119.3999 L 4104.6001 · gap +60.5
- prior: H 4102.3999 L 4022.3999 C 4049.1001
- basis: bars (`yahoo:GC=F:1d`) run +50.3999 (+124.0 bps) vs anchor
- ATR14: 69.7618 pts (1.695%) · RSI14: 50.89
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 16.1715)
- VWAP (UTC day): 4114.4666 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28776.8027** (STALE) as-of 2026-08-03T20:00:00Z
- session: O 28278.5879 H 28842.3574 L 28196.877 · gap +4.3887
- prior: H 28606.7793 L 27954.2402 C 28274.1992
- ATR14: 629.8485 pts (2.189%) · RSI14: 50.01
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -32.8822)
- VWAP (session): 28631.7717 — price above
- OR15: 28202.1738–28417.9219
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 00:15)

## BTCUSD — MAP_ONLY
- price: **63415.12** (SINGLE) as-of 2026-08-04T00:15:13Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 4517 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 4520 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 179 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 00:15)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 2409 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

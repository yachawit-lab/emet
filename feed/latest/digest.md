# Feed digest — 2026-08-04T12:30:28Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260804T123028Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4068.0** (SINGLE) as-of 2026-08-04T12:30:24Z
- session: O 4109.6001 H 4141.7998 L 4098.2002 · gap +75.9001
- prior: H 4083.5 L 4026.5 C 4033.7
- basis: bars (`yahoo:GC=F:1d`) run +56.5 (+138.9 bps) vs anchor
- ATR14: 71.6172 pts (1.736%) · RSI14: 51.96
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 15.1443)
- VWAP (UTC day): 4117.3414 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28776.8027** (STALE) as-of 2026-08-03T20:00:00Z
- session: O 28278.5898 H 28842.3594 L 28196.8809 · gap +4.3906
- prior: H 28606.7793 L 27954.2402 C 28274.1992
- ATR14: 629.8484 pts (2.189%) · RSI14: 50.01
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -32.8823)
- VWAP (session): 28646.976 — price above
- OR15: 28202.1738–28417.9219
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:30)

## BTCUSD — MAP_ONLY
- price: **63768.11** (SINGLE) as-of 2026-08-04T12:30:29Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 5252 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 5255 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 990 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:30)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 3144 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

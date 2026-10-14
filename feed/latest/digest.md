# Feed digest — 2026-10-14T23:14:41Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261014T231441Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4103.3999** (SINGLE) as-of 2026-10-14T23:14:27Z
- session: O 4128.2998 H 4132.7002 L 4122.7002 · gap -49.0
- prior: H 4224.7998 L 4169.7002 C 4177.2998
- basis: bars (`yahoo:GC=F:1d`) run +22.2002 (+54.1 bps) vs anchor
- ATR14: 82.7024 pts (2.005%) · RSI14: 36.19
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -1.9963)
- VWAP (UTC day): 4135.9227 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29950.8164** (STALE) as-of 2026-10-14T20:00:00Z
- session: O 30316.0254 H 30436.5977 L 29861.0605 · gap -253.4551
- prior: H 30595.8008 L 30372.3008 C 30569.4805
- ATR14: 386.8663 pts (1.292%) · RSI14: 44.55
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -86.0927)
- VWAP (session): 30105.2547 — price below
- OR15: 30292.8848–30405.3027
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:14)

## BTCUSD — MAP_ONLY
- price: **81605.48** (SINGLE) as-of 2026-10-14T23:14:43Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 108137 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 108140 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 119 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:14)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 106029 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

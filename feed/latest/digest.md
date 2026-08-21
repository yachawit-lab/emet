# Feed digest — 2026-08-21T06:38:13Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260821T063813Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4566.5** (SINGLE) as-of 2026-08-21T06:38:08Z
- session: O 4577.0 H 4613.0 L 4565.5 · gap +60.7002
- prior: H 4530.0 L 4486.0 C 4516.2998
- basis: bars (`yahoo:GC=F:1d`) run +41.8999 (+91.8 bps) vs anchor
- ATR14: 82.3366 pts (1.787%) · RSI14: 73.14
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 33.4853)
- VWAP (UTC day): 4589.8173 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29213.1641** (STALE) as-of 2026-08-20T20:00:00Z
- session: O 29295.1504 H 29378.8008 L 29118.0703 · gap -130.8691
- prior: H 29652.3008 L 29288.75 C 29426.0195
- ATR14: 478.5126 pts (1.638%) · RSI14: 48.71
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 23.0451)
- VWAP (session): 29245.2613 — price below
- OR15: 29257.5371–29377.0371
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 06:38)

## BTCUSD — MAP_ONLY
- price: **75507.39** (SINGLE) as-of 2026-08-21T06:38:14Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 29380 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 29383 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 638 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 06:38)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 27272 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-09-04T10:28:53Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260904T102853Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4470.7002** (SINGLE) as-of 2026-09-04T10:28:26Z
- session: O 4522.0 H 4537.7998 L 4506.6001 · gap +30.2998
- prior: H 4510.0 L 4426.0 C 4491.7002
- basis: bars (`yahoo:GC=F:1d`) run +47.5 (+106.2 bps) vs anchor
- ATR14: 80.961 pts (1.792%) · RSI14: 58.37
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -17.9621)
- VWAP (UTC day): 4520.4736 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29482.3203** (STALE) as-of 2026-09-03T20:00:00Z
- session: O 29234.4199 H 29538.7598 L 29160.9609 · gap +91.0898
- prior: H 29165.6191 L 28971.9004 C 29143.3301
- ATR14: 399.9788 pts (1.357%) · RSI14: 52.69
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -27.9128)
- VWAP (session): 29458.5218 — price above
- OR15: 29160.9629–29310.1738
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:28)

## BTCUSD — MAP_ONLY
- price: **80932.51** (SINGLE) as-of 2026-09-04T10:28:54Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 49771 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 49774 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 869 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:28)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 47663 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

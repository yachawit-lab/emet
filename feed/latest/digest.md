# Feed digest — 2026-10-20T10:51:57Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261020T105157Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4122.2998** (SINGLE) as-of 2026-10-20T10:51:37Z
- session: O 4162.3999 H 4166.5 L 4130.1001 · gap +2.2998
- prior: H 4211.2002 L 4155.6001 C 4160.1001
- basis: bars (`yahoo:GC=F:1d`) run +16.2002 (+39.3 bps) vs anchor
- ATR14: 78.4994 pts (1.897%) · RSI14: 39.87
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 3.7461)
- VWAP (UTC day): 4146.5855 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29529.3438** (STALE) as-of 2026-10-19T20:00:00Z
- session: O 29539.3105 H 29788.7598 L 29461.3203 · gap +351.7598
- prior: H 29822.9102 L 29073.2891 C 29187.5508
- ATR14: 445.4372 pts (1.508%) · RSI14: 41.17
- EMA: mixed / no clean stack
- MACD: bearish (hist -203.0529)
- VWAP (session): 29613.4297 — price below
- OR15: 29533.7656–29609.5098
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:51)

## BTCUSD — MAP_ONLY
- price: **81416.68** (SINGLE) as-of 2026-10-20T10:51:58Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 116034 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 116037 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 892 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:51)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 113926 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

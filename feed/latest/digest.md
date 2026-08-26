# Feed digest — 2026-08-26T06:40:15Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260826T064015Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4631.8999** (SINGLE) as-of 2026-08-26T06:40:12Z
- session: O 4715.7002 H 4730.8999 L 4681.7998 · gap +77.6001
- prior: H 4638.1001 L 4626.2002 C 4638.1001
- basis: bars (`yahoo:GC=F:1d`) run +50.8003 (+109.7 bps) vs anchor
- ATR14: 77.0393 pts (1.645%) · RSI14: 75.79
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 33.9883)
- VWAP (UTC day): 4703.6917 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29209.2285** (STALE) as-of 2026-08-25T20:00:00Z
- session: O 29231.1797 H 29338.7695 L 29077.7207 · gap +208.0
- prior: H 29151.9707 L 28875.9609 C 29023.1797
- ATR14: 450.5583 pts (1.543%) · RSI14: 48.93
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -46.1523)
- VWAP (session): 29189.4763 — price above
- OR15: 29234.6953–29304.7051
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 06:40)

## BTCUSD — MAP_ONLY
- price: **78867.49** (SINGLE) as-of 2026-08-26T06:40:16Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 36582 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 36585 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 640 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 06:40)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 34474 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

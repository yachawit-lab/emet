# Feed digest — 2026-08-26T11:57:18Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260826T115718Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4622.7002** (SINGLE) as-of 2026-08-26T11:57:13Z
- session: O 4715.7002 H 4730.8999 L 4668.7998 · gap +77.6001
- prior: H 4638.1001 L 4626.2002 C 4638.1001
- basis: bars (`yahoo:GC=F:1d`) run +50.6997 (+109.7 bps) vs anchor
- ATR14: 77.0393 pts (1.648%) · RSI14: 75.45
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 33.3948)
- VWAP (UTC day): 4693.6517 — price below
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
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:57)

## BTCUSD — MAP_ONLY
- price: **78544.06** (SINGLE) as-of 2026-08-26T11:57:20Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 36899 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 36902 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 957 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:57)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 34791 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

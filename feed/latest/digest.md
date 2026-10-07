# Feed digest — 2026-10-07T12:33:21Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261007T123321Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4089.1001** (SINGLE) as-of 2026-10-07T12:33:17Z
- session: O 4195.0 H 4197.7998 L 4135.1001 · gap +7.8999
- prior: H 4212.3999 L 4130.7002 C 4187.1001
- basis: bars (`yahoo:GC=F:1d`) run +50.3999 (+123.3 bps) vs anchor
- ATR14: 90.2864 pts (2.181%) · RSI14: 34.26
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -16.7989)
- VWAP (UTC day): 4157.5645 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **31224.6855** (STALE) as-of 2026-10-06T20:00:00Z
- session: O 31255.4004 H 31361.3691 L 31208.1992 · gap +178.9609
- prior: H 31117.3594 L 30798.4199 C 31076.4395
- ATR14: 374.5596 pts (1.2%) · RSI14: 69.84
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 98.7131)
- VWAP (session): 31285.8786 — price below
- OR15: 31208.1973–31309.6855
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:33)

## BTCUSD — MAP_ONLY
- price: **83543.29** (SINGLE) as-of 2026-10-07T12:33:22Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 97415 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 97418 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 993 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:33)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 95307 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-10-06T23:48:50Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261006T234850Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4167.2998** (SINGLE) as-of 2026-10-06T23:48:41Z
- session: O 4195.0 H 4197.7998 L 4189.2998 · gap +38.2002
- prior: H 4198.8999 L 4150.3999 C 4156.7998
- basis: bars (`yahoo:GC=F:1d`) run +28.4004 (+68.2 bps) vs anchor
- ATR14: 89.5014 pts (2.133%) · RSI14: 38.64
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -17.5974)
- VWAP (UTC day): 4180.2994 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **31224.6855** (STALE) as-of 2026-10-06T20:00:00Z
- session: O 31255.3965 H 31361.3691 L 31208.1973 · gap +178.957
- prior: H 31117.3594 L 30798.4199 C 31076.4395
- ATR14: 374.5596 pts (1.2%) · RSI14: 69.84
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 98.7268)
- VWAP (session): 31284.6344 — price below
- OR15: 31208.1973–31309.6855
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:48)

## BTCUSD — MAP_ONLY
- price: **85573.6** (SINGLE) as-of 2026-10-06T23:48:52Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 96651 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 96654 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 75 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:48)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 94543 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

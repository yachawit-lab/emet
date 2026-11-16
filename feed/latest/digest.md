# Feed digest — 2026-11-16T21:11:15Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261116T211115Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3853.4199** (SINGLE) as-of 2026-11-16T21:10:57Z
- session: O 3869.7 H 3904.3 L 3835.2 · gap -16.6001
- prior: H 3927.2 L 3871.1001 C 3886.3
- basis: bars (`yahoo:GC=F:1d`) run +0.3801 (+1.0 bps) vs anchor
- ATR14: 90.11 pts (2.338%) · RSI14: 34.21
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -10.0651)
- VWAP (UTC day): 3867.1999 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27197.152** (STALE) as-of 2026-11-16T21:11:16Z
- session: O 27543.6445 H 27621.6406 L 27149.1465 · gap -400.0957
- prior: H 28295.8008 L 27609.7109 C 27943.7402
- basis: bars (`yahoo:^NDX:1d`) run +0.0003 (+0.0 bps) vs anchor
- ATR14: 674.0073 pts (2.478%) · RSI14: 37.56
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -35.6232)
- VWAP (session): 27377.6419 — price below
- OR15: 27404.6094–27609.375
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:11)

## BTCUSD — MAP_ONLY
- price: **64912.47** (SINGLE) as-of 2026-11-16T21:11:17Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 155533 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 155536 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:11)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 153425 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

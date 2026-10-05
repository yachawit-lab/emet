# Feed digest — 2026-10-05T13:27:39Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261005T132739Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4153.6001** (SINGLE) as-of 2026-10-05T13:27:37Z
- session: O 4169.3999 H 4198.8999 L 4152.2998 · gap +7.1001
- prior: H 4259.0 L 4153.7998 C 4162.2998
- basis: bars (`yahoo:GC=F:1d`) run +27.5 (+66.2 bps) vs anchor
- ATR14: 93.0965 pts (2.227%) · RSI14: 36.42
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -21.362)
- VWAP (UTC day): 4182.1141 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30807.9316** (STALE) as-of 2026-10-02T20:00:00Z
- session: O 30869.1406 H 31017.5293 L 30737.0703 · gap +367.5801
- prior: H 30616.2402 L 30274.6504 C 30501.5605
- ATR14: 386.2635 pts (1.254%) · RSI14: 65.3
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 71.3482)
- VWAP (session): 30856.5832 — price below
- OR15: 30804.8555–30916.5332
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 13:27)

## BTCUSD — MAP_ONLY
- price: **86024.77** (SINGLE) as-of 2026-10-05T13:27:41Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 94590 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 94593 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3928 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 13:27)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 92482 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

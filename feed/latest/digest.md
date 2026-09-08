# Feed digest — 2026-09-08T22:41:16Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260908T224116Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4353.7002** (SINGLE) as-of 2026-09-08T22:40:51Z
- session: O 4399.0 H 4403.0 L 4396.6001 · gap -30.7998
- prior: H 4429.7998 L 4429.7998 C 4429.7998
- basis: bars (`yahoo:GC=F:1d`) run +44.2998 (+101.8 bps) vs anchor
- ATR14: 78.5999 pts (1.787%) · RSI14: 50.13
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -25.9024)
- VWAP (UTC day): 4438.0016 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29507.7012** (STALE) as-of 2026-09-08T20:00:00Z
- session: O 29645.1836 H 29655.7305 L 29400.7012 · gap +101.0332
- prior: H 29655.2207 L 29440.1504 C 29544.1504
- ATR14: 377.3549 pts (1.279%) · RSI14: 52.95
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -3.6033)
- VWAP (session): 29536.948 — price below
- OR15: 29440.8086–29653.1875
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:41)

## BTCUSD — MAP_ONLY
- price: **78470.25** (SINGLE) as-of 2026-09-08T22:41:18Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 56263 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 56266 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 85 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:41)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 54155 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

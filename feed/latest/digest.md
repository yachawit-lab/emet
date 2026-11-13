# Feed digest — 2026-11-13T13:50:53Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261113T135053Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3903.3** (SINGLE) as-of 2026-11-13T13:50:53Z
- session: O 3883.3 H 3926.1001 L 3879.1001 · gap -2.0
- prior: H 4005.8999 L 3856.7 C 3885.3
- basis: bars (`yahoo:GC=F:1d`) run -4.1999 (-10.8 bps) vs anchor
- ATR14: 91.0768 pts (2.336%) · RSI14: 37.08
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.4781)
- VWAP (UTC day): 3903.0528 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28289.1875** (STALE) as-of 2026-11-12T21:00:00Z
- session: O 27953.9102 H 28548.5508 L 27940.5801 · gap -420.3398
- prior: H 28593.5195 L 28102.75 C 28374.25
- ATR14: 663.0915 pts (2.344%) · RSI14: 45.3
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -22.6579)
- VWAP (session): 28306.7568 — price below
- OR15: 27948.3887–28285.7559

## BTCUSD — MAP_ONLY
- price: **69646.25** (SINGLE) as-of 2026-11-13T13:50:57Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 150773 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 150776 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1071 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 148665 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

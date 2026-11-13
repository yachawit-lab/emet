# Feed digest — 2026-11-13T01:05:05Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261113T010505Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3891.8999** (SINGLE) as-of 2026-11-13T01:04:46Z
- session: O 3883.3 H 3895.2 L 3879.1001 · gap -117.2
- prior: H 4074.7 L 3989.6001 C 4000.5
- basis: bars (`yahoo:GC=F:1d`) run -3.8999 (-10.0 bps) vs anchor
- ATR14: 92.4808 pts (2.379%) · RSI14: 35.97
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.445)
- VWAP (UTC day): 3889.4251 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28289.1875** (STALE) as-of 2026-11-12T21:00:00Z
- session: O 27953.9082 H 28548.5508 L 27940.584 · gap -420.3418
- prior: H 28593.5195 L 28102.75 C 28374.25
- ATR14: 663.0912 pts (2.344%) · RSI14: 45.3
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -22.6581)
- VWAP (session): 28285.8881 — price below
- OR15: 27948.3887–28285.7559
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 01:05)

## BTCUSD — MAP_ONLY
- price: **70777.95** (SINGLE) as-of 2026-11-13T01:05:11Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 150007 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 150010 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 169 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 01:05)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 147899 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

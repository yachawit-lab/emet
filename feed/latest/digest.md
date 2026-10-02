# Feed digest — 2026-10-02T23:46:43Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261002T234643Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4141.7998** (STALE) as-of 2026-10-02T23:46:28Z
- session: O 4204.6001 H 4259.0 L 4153.7998 · gap +2.3003
- prior: H 4222.7998 L 4169.3999 C 4202.2998
- basis: bars (`yahoo:GC=F:1d`) run +30.3003 (+73.2 bps) vs anchor
- ATR14: 96.673 pts (2.317%) · RSI14: 34.74
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -24.2456)
- VWAP (UTC day): 4203.1843 — price below
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30807.9316** (STALE) as-of 2026-10-02T20:00:00Z
- session: O 30869.1406 H 31017.5254 L 30737.0664 · gap +367.5801
- prior: H 30616.2402 L 30274.6504 C 30501.5605
- ATR14: 386.2633 pts (1.254%) · RSI14: 65.31
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 71.3483)
- VWAP (session): 30856.6172 — price below
- OR15: 30804.8555–30916.5332
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:46)

## BTCUSD — MAP_ONLY
- price: **84542.35** (SINGLE) as-of 2026-10-02T23:46:45Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 90889 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 90892 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 151 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:46)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 88781 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

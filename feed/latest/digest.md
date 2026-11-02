# Feed digest — 2026-11-02T22:28:36Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261102T222836Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3947.7** (SINGLE) as-of 2026-11-02T22:28:25Z
- session: O 3890.0 H 3980.8 L 3889.0 · gap -8.8999
- prior: H 4038.2 L 3879.3 C 3898.8999
- basis: bars (`yahoo:GC=F:1d`) run +8.9001 (+22.5 bps) vs anchor
- ATR14: 82.1194 pts (2.076%) · RSI14: 34.74
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.1712)
- VWAP (UTC day): 3941.8156 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27989.82** (STALE) as-of 2026-11-02T22:15:59Z
- session: O 28561.166 H 28753.3926 L 27967.4414 · gap +176.3164
- prior: H 28713.4492 L 28093.2402 C 28384.8496
- basis: bars (`yahoo:^NDX:1d`) run +0.0003 (+0.0 bps) vs anchor
- ATR14: 540.6497 pts (1.932%) · RSI14: 32.04
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -178.6335)
- VWAP (session): 28473.6965 — price below
- OR15: 28500.7539–28606.0059
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:28)

## BTCUSD — MAP_ONLY
- price: **76729.59** (SINGLE) as-of 2026-11-02T22:28:37Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 135451 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 135454 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:28)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 133343 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

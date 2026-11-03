# Feed digest — 2026-11-03T02:18:49Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261103T021849Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3945.6001** (SINGLE) as-of 2026-11-03T02:18:25Z
- session: O 3960.5 H 3974.5 L 3952.3 · gap +61.6001
- prior: H 4038.2 L 3879.3 C 3898.8999
- basis: bars (`yahoo:GC=F:1d`) run +7.3999 (+18.8 bps) vs anchor
- ATR14: 80.9623 pts (2.048%) · RSI14: 34.35
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.4009)
- VWAP (UTC day): 3962.8581 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27989.8203** (STALE) as-of 2026-11-02T21:00:00Z
- session: O 28561.166 H 28753.3926 L 27967.4414 · gap +176.3164
- prior: H 28713.4492 L 28093.2402 C 28384.8496
- ATR14: 540.6497 pts (1.932%) · RSI14: 32.04
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -178.6335)
- VWAP (session): 28469.9148 — price below
- OR15: 28500.7539–28606.0059
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 02:18)

## BTCUSD — MAP_ONLY
- price: **76822.21** (SINGLE) as-of 2026-11-03T02:18:55Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 135681 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 135684 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 243 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 02:18)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 133573 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

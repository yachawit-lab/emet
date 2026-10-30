# Feed digest — 2026-10-30T23:47:21Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261030T234721Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **3876.3999** (STALE) as-of 2026-10-30T23:47:14Z
- session: O 4033.6001 H 4038.2 L 3879.3 · gap +2.2002
- prior: H 4081.7 L 4016.3 C 4031.3999
- basis: bars (`yahoo:GC=F:1d`) run +8.5 (+21.9 bps) vs anchor
- ATR14: 81.3752 pts (2.095%) · RSI14: 27.24
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -12.1316)
- VWAP (UTC day): 3949.6112 — price below
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28384.8457** (STALE) as-of 2026-10-30T20:00:00Z
- session: O 28604.916 H 28713.4453 L 28093.2441 · gap -797.5938
- prior: H 29517.8008 L 29257.0508 C 29402.5098
- ATR14: 521.7748 pts (1.838%) · RSI14: 34.9
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -127.9152)
- VWAP (session): 28439.5215 — price below
- OR15: 28529.2168–28666.1172
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:47)

## BTCUSD — MAP_ONLY
- price: **77168.29** (SINGLE) as-of 2026-10-30T23:47:23Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 131209 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 131212 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 151 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:47)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 129101 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

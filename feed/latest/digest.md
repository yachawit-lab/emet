# Feed digest — 2026-09-14T23:08:01Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260914T230801Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4294.3999** (SINGLE) as-of 2026-09-14T23:07:39Z
- session: O 4340.2998 H 4343.6001 L 4332.6001 · gap -68.6001
- prior: H 4444.8999 L 4333.0 C 4408.8999
- basis: bars (`yahoo:GC=F:1d`) run +41.8999 (+97.6 bps) vs anchor
- ATR14: 78.7263 pts (1.816%) · RSI14: 45.98
- EMA: mixed / no clean stack
- MACD: bearish (hist -27.8431)
- VWAP (UTC day): 4338.3562 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29127.1582** (STALE) as-of 2026-09-14T20:00:00Z
- session: O 28890.9316 H 29285.502 L 28867.668 · gap -477.5078
- prior: H 29473.1191 L 29313.5098 C 29368.4395
- ATR14: 377.5564 pts (1.296%) · RSI14: 46.74
- EMA: mixed / no clean stack
- MACD: bearish (hist -32.832)
- VWAP (session): 29107.3952 — price above
- OR15: 28868.6641–28938.5078
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:08)

## BTCUSD — MAP_ONLY
- price: **78410.87** (SINGLE) as-of 2026-09-14T23:08:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 64930 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 64933 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 112 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:08)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 62822 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

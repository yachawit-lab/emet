# Feed digest — 2026-09-15T10:57:12Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260915T105712Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4283.7998** (SINGLE) as-of 2026-09-15T10:57:10Z
- session: O 4340.2998 H 4358.2002 L 4301.6001 · gap -11.6001
- prior: H 4396.7998 L 4293.0 C 4351.8999
- basis: bars (`yahoo:GC=F:1d`) run +32.4004 (+75.6 bps) vs anchor
- ATR14: 79.7724 pts (1.848%) · RSI14: 44.61
- EMA: mixed / no clean stack
- MACD: bearish (hist -28.9645)
- VWAP (UTC day): 4329.1785 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29127.1582** (STALE) as-of 2026-09-14T20:00:00Z
- session: O 28890.9297 H 29285.5 L 28867.6699 · gap -477.5098
- prior: H 29473.1191 L 29313.5098 C 29368.4395
- ATR14: 377.5562 pts (1.296%) · RSI14: 46.74
- EMA: mixed / no clean stack
- MACD: bearish (hist -32.8318)
- VWAP (session): 29117.5286 — price above
- OR15: 28868.6641–28938.5078
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:57)

## BTCUSD — MAP_ONLY
- price: **77013.17** (SINGLE) as-of 2026-09-15T10:57:13Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 65639 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 65642 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 897 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:57)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 63531 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

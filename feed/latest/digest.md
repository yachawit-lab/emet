# Feed digest — 2026-10-26T12:09:53Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261026T120953Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4018.8** (SINGLE) as-of 2026-10-26T12:09:44Z
- session: O 4012.2 H 4036.2 L 3990.8999 · gap +4.3
- prior: H 4050.2 L 3989.1001 C 4007.8999
- basis: bars (`yahoo:GC=F:1d`) run +11.4 (+28.4 bps) vs anchor
- ATR14: 76.8165 pts (1.906%) · RSI14: 33.7
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -7.7965)
- VWAP (UTC day): 4019.1325 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28957.5273** (STALE) as-of 2026-10-23T20:00:00Z
- session: O 28847.8203 H 29161.0293 L 28825.7207 · gap -110.8691
- prior: H 29411.7598 L 28855.0996 C 28958.6895
- ATR14: 475.0084 pts (1.64%) · RSI14: 36.67
- EMA: mixed / no clean stack
- MACD: bearish (hist -211.5058)
- VWAP (session): 29015.7495 — price below
- OR15: 28830.168–28959.7773
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:09)

## BTCUSD — MAP_ONLY
- price: **80199.9** (SINGLE) as-of 2026-10-26T12:09:55Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 124752 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 124755 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3850 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:09)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 122644 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

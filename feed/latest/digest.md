# Feed digest — 2026-10-27T23:46:59Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261027T234659Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4061.2** (SINGLE) as-of 2026-10-27T23:46:55Z
- session: O 4073.6001 H 4077.8999 L 4070.7 · gap +35.2002
- prior: H 4044.0 L 3990.8999 C 4038.3999
- basis: bars (`yahoo:GC=F:1d`) run +9.6999 (+23.9 bps) vs anchor
- ATR14: 74.6683 pts (1.834%) · RSI14: 38.79
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.8719)
- VWAP (UTC day): 4041.8335 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29651.4414** (STALE) as-of 2026-10-27T20:00:00Z
- session: O 29407.1895 H 29719.6309 L 29340.5449 · gap +133.7891
- prior: H 29404.4395 L 29011.9102 C 29273.4004
- ATR14: 471.0935 pts (1.589%) · RSI14: 47.24
- EMA: mixed / no clean stack
- MACD: bearish (hist -134.5121)
- VWAP (session): 29578.2701 — price above
- OR15: 29389.7441–29529.0332
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:46)

## BTCUSD — MAP_ONLY
- price: **80886.28** (SINGLE) as-of 2026-10-27T23:47:01Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 126889 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 126892 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 151 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:46)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 124781 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

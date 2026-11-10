# Feed digest — 2026-11-10T14:13:59Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261110T141359Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4055.1001** (SINGLE) as-of 2026-11-10T14:13:32Z
- session: O 4149.0 H 4156.2002 L 4046.5 · gap +34.5
- prior: H 4157.7002 L 4062.5 C 4114.5
- basis: bars (`yahoo:GC=F:1d`) run +10.6999 (+26.4 bps) vs anchor
- ATR14: 88.8176 pts (2.185%) · RSI14: 46.64
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 16.1204)
- VWAP (UTC day): 4099.5926 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27907.625** (STALE) as-of 2026-11-09T21:00:00Z
- session: O 27263.4297 H 28025.7695 L 27227.5293 · gap +273.4395
- prior: H 27316.0898 L 26887.6895 C 26989.9902
- ATR14: 659.5309 pts (2.363%) · RSI14: 41.1
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -204.8915)
- VWAP (session): 27757.0971 — price above
- OR15: 27234.5762–27569.6855

## BTCUSD — MAP_ONLY
- price: **73852.77** (SINGLE) as-of 2026-11-10T14:14:00Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 146476 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 146479 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1094 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 144368 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

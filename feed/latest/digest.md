# Feed digest — 2026-11-14T00:53:17Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261114T005317Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **3887.6001** (STALE) as-of 2026-11-14T00:52:56Z
- session: O 3883.3 H 3927.2 L 3871.1001 · gap -2.0
- prior: H 4005.8999 L 3856.7 C 3885.3
- basis: bars (`yahoo:GC=F:1d`) run -0.0 (-0.0 bps) vs anchor
- ATR14: 91.7267 pts (2.359%) · RSI14: 36.05
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -5.212)
- VWAP (UTC day): 3895.1443 — price below
- ⚠ spot metals/FX closed — weekend
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27943.7363** (STALE) as-of 2026-11-13T21:00:00Z
- session: O 28265.5371 H 28295.7988 L 27609.7129 · gap -23.6523
- prior: H 28548.5508 L 27940.5801 C 28289.1895
- ATR14: 664.7352 pts (2.379%) · RSI14: 42.66
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.4402)
- VWAP (session): 27869.6829 — price above
- OR15: 28109.8145–28295.7988
- ⚠ US equities closed — weekend

## BTCUSD — MAP_ONLY
- price: **68271.51** (SINGLE) as-of 2026-11-14T00:53:18Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 151435 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — weekend
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 151438 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 157 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — weekend
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 149327 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

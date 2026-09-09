# Feed digest — 2026-09-09T22:33:48Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260909T223348Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4404.5** (SINGLE) as-of 2026-09-09T22:33:23Z
- session: O 4448.0 H 4450.3999 L 4445.2998 · gap +54.1001
- prior: H 4406.1001 L 4384.3999 C 4393.8999
- basis: bars (`yahoo:GC=F:1d`) run +41.1001 (+93.3 bps) vs anchor
- ATR14: 77.8305 pts (1.751%) · RSI14: 53.28
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -23.7597)
- VWAP (UTC day): 4445.2479 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29421.5527** (STALE) as-of 2026-09-09T20:00:00Z
- session: O 29431.9414 H 29563.5977 L 29334.4043 · gap -75.7578
- prior: H 29655.7305 L 29400.6992 C 29507.6992
- ATR14: 366.7736 pts (1.247%) · RSI14: 51.4
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -4.434)
- VWAP (session): 29443.161 — price below
- OR15: 29393.2598–29478.8516
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:33)

## BTCUSD — MAP_ONLY
- price: **77963.41** (SINGLE) as-of 2026-09-09T22:33:53Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 57696 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 57699 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 78 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:33)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 55588 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

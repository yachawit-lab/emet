# Feed digest — 2026-09-15T22:53:49Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260915T225349Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4294.7998** (SINGLE) as-of 2026-09-15T22:53:41Z
- session: O 4333.5 H 4339.5 L 4330.8999 · gap -18.3999
- prior: H 4396.7998 L 4293.0 C 4351.8999
- basis: bars (`yahoo:GC=F:1d`) run +41.0 (+95.5 bps) vs anchor
- ATR14: 105.7485 pts (2.439%) · RSI14: 42.64
- EMA: mixed / no clean stack
- MACD: bearish (hist -34.9033)
- VWAP (UTC day): 4329.9513 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28937.8379** (STALE) as-of 2026-09-15T20:00:00Z
- session: O 29100.1641 H 29142.8047 L 28899.4336 · gap -26.9961
- prior: H 29285.5 L 28867.6699 C 29127.1602
- ATR14: 367.9716 pts (1.272%) · RSI14: 43.88
- EMA: mixed / no clean stack
- MACD: bearish (hist -50.9388)
- VWAP (session): 28988.9372 — price below
- OR15: 29066.1934–29136.2598
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:53)

## BTCUSD — MAP_ONLY
- price: **75668.67** (SINGLE) as-of 2026-09-15T22:53:51Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 66356 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 66359 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 98 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:53)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 64248 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

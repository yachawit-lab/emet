# Feed digest — 2026-08-21T20:41:44Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260821T204144Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4610.2998** (SINGLE) as-of 2026-08-21T20:41:40Z
- session: O 4577.0 H 4690.3999 L 4565.5 · gap +60.7002
- prior: H 4530.0 L 4486.0 C 4516.2998
- basis: bars (`yahoo:GC=F:1d`) run +58.2002 (+126.2 bps) vs anchor
- ATR14: 87.8652 pts (1.882%) · RSI14: 75.2
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 37.3207)
- VWAP (UTC day): 4640.7532 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29308.859** (STALE) as-of 2026-08-21T20:41:45Z
- session: O 29359.5977 H 29405.123 L 29142.4414 · gap +146.4375
- prior: H 29378.8008 L 29118.0703 C 29213.1602
- basis: bars (`yahoo:^NDX:1d`) run +0.0004 (+0.0 bps) vs anchor
- ATR14: 463.0961 pts (1.58%) · RSI14: 49.97
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -1.8654)
- VWAP (session): 29284.9596 — price above
- OR15: 29232.8398–29365.0
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:41)

## BTCUSD — MAP_ONLY
- price: **77463.72** (SINGLE) as-of 2026-08-21T20:41:45Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 30224 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 30227 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:41)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 28116 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

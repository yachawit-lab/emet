# Feed digest — 2026-08-18T20:41:01Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260818T204101Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4339.0** (SINGLE) as-of 2026-08-18T20:40:36Z
- session: O 4473.3999 H 4493.1001 L 4388.3999 · gap +55.6001
- prior: H 4428.5 L 4386.5 C 4417.7998
- basis: bars (`yahoo:GC=F:1d`) run +52.8999 (+121.9 bps) vs anchor
- ATR14: 75.5414 pts (1.72%) · RSI14: 63.85
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 28.5645)
- VWAP (UTC day): 4440.5048 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29490.958** (STALE) as-of 2026-08-18T20:41:03Z
- session: O 29594.8887 H 29677.2871 L 29425.084 · gap -400.4922
- prior: H 30195.7207 L 29971.9199 C 29995.3809
- basis: bars (`yahoo:^NDX:1d`) run -0.001 (-0.0 bps) vs anchor
- ATR14: 501.4846 pts (1.7%) · RSI14: 52.2
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 111.9548)
- VWAP (session): 29522.2489 — price below
- OR15: 29540.2891–29676.7695
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:41)

## BTCUSD — MAP_ONLY
- price: **64584.83** (SINGLE) as-of 2026-08-18T20:41:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 25903 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 25906 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:41)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 23795 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

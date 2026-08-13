# Feed digest — 2026-08-13T09:46:36Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260813T094636Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4381.1001** (SINGLE) as-of 2026-08-13T09:46:21Z
- session: O 4468.7998 H 4509.1001 L 4420.2998 · gap +59.8999
- prior: H 4434.0 L 4406.2998 C 4408.8999
- basis: bars (`yahoo:GC=F:1d`) run +56.5 (+129.0 bps) vs anchor
- ATR14: 75.0817 pts (1.692%) · RSI14: 69.73
- EMA: mixed / no clean stack
- MACD: bullish (hist 45.7066)
- VWAP (UTC day): 4457.4808 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29742.6035** (STALE) as-of 2026-08-12T20:00:00Z
- session: O 29875.1797 H 29881.5 L 29715.8809 · gap +349.6992
- prior: H 29705.8008 L 29427.6094 C 29525.4805
- ATR14: 546.7208 pts (1.838%) · RSI14: 57.08
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 172.1163)
- VWAP (session): 29780.5148 — price below
- OR15: 29750.5879–29876.7266
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 09:46)

## BTCUSD — MAP_ONLY
- price: **63657.25** (SINGLE) as-of 2026-08-13T09:46:37Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 18049 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 18052 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 827 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 09:46)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 15941 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

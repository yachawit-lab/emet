# Feed digest — 2026-09-11T10:31:18Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260911T103118Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4350.2998** (SINGLE) as-of 2026-09-11T10:30:57Z
- session: O 4359.3999 H 4402.0 L 4341.3999 · gap -5.1001
- prior: H 4420.0 L 4330.7002 C 4364.5
- basis: bars (`yahoo:GC=F:1d`) run +39.6001 (+91.0 bps) vs anchor
- ATR14: 75.2434 pts (1.714%) · RSI14: 49.64
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -26.7399)
- VWAP (UTC day): 4375.6918 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29103.5137** (STALE) as-of 2026-09-10T20:00:00Z
- session: O 29097.3398 H 29250.4102 L 29038.2207 · gap -324.2109
- prior: H 29563.5996 L 29334.4004 C 29421.5508
- ATR14: 367.9589 pts (1.264%) · RSI14: 46.05
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -25.5347)
- VWAP (session): 29158.8457 — price below
- OR15: 29038.2207–29173.9473
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:31)

## BTCUSD — MAP_ONLY
- price: **77010.52** (SINGLE) as-of 2026-09-11T10:31:20Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 59853 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 59856 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 871 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:31)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 57745 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

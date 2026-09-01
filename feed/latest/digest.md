# Feed digest — 2026-09-01T22:36:46Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260901T223646Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4330.2002** (SINGLE) as-of 2026-09-01T22:36:20Z
- session: O 4377.2002 H 4381.0 L 4373.5 · gap -53.8999
- prior: H 4466.8999 L 4410.8999 C 4431.1001
- basis: bars (`yahoo:GC=F:1d`) run +43.6997 (+100.9 bps) vs anchor
- ATR14: 74.3933 pts (1.701%) · RSI14: 48.84
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -16.7047)
- VWAP (UTC day): 4420.9704 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29077.2207** (STALE) as-of 2026-09-01T20:00:00Z
- session: O 29056.5781 H 29267.4219 L 28953.2559 · gap -400.3926
- prior: H 29483.9004 L 29304.4902 C 29456.9707
- ATR14: 430.553 pts (1.481%) · RSI14: 46.81
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -39.672)
- VWAP (session): 29102.0737 — price below
- OR15: 28993.6113–29088.1582
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:36)

## BTCUSD — MAP_ONLY
- price: **77136.37** (SINGLE) as-of 2026-09-01T22:36:48Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 46179 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 46182 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 81 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:36)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 44071 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

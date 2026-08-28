# Feed digest — 2026-08-28T21:28:25Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260828T212825Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4456.3999** (STALE) as-of 2026-08-28T21:27:58Z
- session: O 4656.0 H 4688.0 L 4495.0 · gap +46.2998
- prior: H 4609.7002 L 4609.7002 C 4609.7002
- basis: bars (`yahoo:GC=F:1d`) run +47.7002 (+107.0 bps) vs anchor
- ATR14: 77.7163 pts (1.725%) · RSI14: 59.14
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 10.7649)
- VWAP (UTC day): 4592.5164 — price below
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29433.428** (STALE) as-of 2026-08-28T21:15:59Z
- session: O 29545.9004 H 29752.7812 L 29383.918 · gap -95.6602
- prior: H 29643.5293 L 29366.4199 C 29641.5605
- basis: bars (`yahoo:^NDX:1d`) run -0.0003 (-0.0 bps) vs anchor
- ATR14: 427.1961 pts (1.451%) · RSI14: 51.74
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.1484)
- VWAP (session): 29528.324 — price below
- OR15: 29518.7812–29645.0449
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:28)

## BTCUSD — MAP_ONLY
- price: **77423.9** (SINGLE) as-of 2026-08-28T21:28:26Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 40350 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 40353 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:28)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 38242 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-08-25T06:38:54Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260825T063854Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4651.7998** (SINGLE) as-of 2026-08-25T06:38:48Z
- session: O 4710.1001 H 4755.0 L 4670.7002 · gap +69.3003
- prior: H 4670.8999 L 4635.1001 C 4640.7998
- basis: bars (`yahoo:GC=F:1d`) run +55.2002 (+118.7 bps) vs anchor
- ATR14: 82.9405 pts (1.762%) · RSI14: 76.69
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 39.1748)
- VWAP (UTC day): 4716.2587 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29023.1816** (STALE) as-of 2026-08-24T20:00:00Z
- session: O 29094.7207 H 29151.9707 L 28875.9609 · gap -214.1387
- prior: H 29405.1191 L 29142.4395 C 29308.8594
- ATR14: 460.942 pts (1.588%) · RSI14: 46.31
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -36.856)
- VWAP (session): 29029.5031 — price below
- OR15: 28914.75–29087.8828
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 06:38)

## BTCUSD — MAP_ONLY
- price: **80509.56** (SINGLE) as-of 2026-08-25T06:38:56Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 35141 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 35144 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 639 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 06:38)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 33033 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-08-17T12:02:31Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260817T120231Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4397.1001** (SINGLE) as-of 2026-08-17T12:02:02Z
- session: O 4440.0 H 4473.2002 L 4422.2998 · gap +59.6001
- prior: H 4397.1001 L 4315.0 C 4380.3999
- basis: bars (`yahoo:GC=F:1d`) run +55.6997 (+126.7 bps) vs anchor
- ATR14: 76.4914 pts (1.718%) · RSI14: 68.5
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 36.2199)
- VWAP (UTC day): 4454.4146 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30046.1406** (STALE) as-of 2026-08-14T20:00:00Z
- session: O 30167.1309 H 30179.8203 L 29934.6602 · gap +82.6309
- prior: H 30168.0508 L 29757.6191 C 30084.5
- ATR14: 517.1372 pts (1.721%) · RSI14: 59.63
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 179.4507)
- VWAP (session): 30031.0887 — price above
- OR15: 30079.9746–30176.6797
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:02)

## BTCUSD — MAP_ONLY
- price: **63574.44** (SINGLE) as-of 2026-08-17T12:02:33Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 23945 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 23948 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3843 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:02)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 21837 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

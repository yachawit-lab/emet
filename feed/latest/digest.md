# Feed digest — 2026-08-18T07:58:02Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260818T075802Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4398.2002** (SINGLE) as-of 2026-08-18T07:57:35Z
- session: O 4473.3999 H 4493.1001 L 4441.3999 · gap +55.6001
- prior: H 4428.5 L 4386.5 C 4417.7998
- basis: bars (`yahoo:GC=F:1d`) run +59.1997 (+134.6 bps) vs anchor
- ATR14: 73.4414 pts (1.648%) · RSI14: 68.86
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 32.7446)
- VWAP (UTC day): 4461.5326 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29995.3809** (STALE) as-of 2026-08-17T20:00:00Z
- session: O 30167.1309 H 30179.8203 L 29934.6602 · gap +82.6309
- prior: H 30168.0508 L 29757.6191 C 30084.5
- ATR14: 517.1389 pts (1.721%) · RSI14: 59.63
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 179.456)
- VWAP (session): 30082.6984 — price below
- OR15: 30078.8848–30172.9453
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 07:58)

## BTCUSD — MAP_ONLY
- price: **64124.19** (SINGLE) as-of 2026-08-18T07:58:04Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 25140 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 25143 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 718 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 07:58)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 23032 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

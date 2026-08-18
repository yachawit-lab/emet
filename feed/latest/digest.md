# Feed digest — 2026-08-18T13:58:26Z

**Desk grade: MAP_ONLY** (schema v1, run `20260818T135826Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4394.5** (SINGLE) as-of 2026-08-18T13:58:05Z
- session: O 4473.3999 H 4493.1001 L 4430.8999 · gap +55.6001
- prior: H 4428.5 L 4386.5 C 4417.7998
- basis: bars (`yahoo:GC=F:1d`) run +57.2002 (+130.2 bps) vs anchor
- ATR14: 73.4414 pts (1.65%) · RSI14: 68.57
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 32.3808)
- VWAP (UTC day): 4455.4725 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29552.577** (SINGLE) as-of 2026-08-18T13:58:27Z
- session: O 29594.8887 H 29677.2871 L 29510.5527 · gap -451.252
- prior: H 30179.8203 L 29934.6602 C 30046.1406
- basis: bars (`yahoo:^NDX:1d`) run +0.296 (+0.1 bps) vs anchor
- ATR14: 522.6352 pts (1.768%) · RSI14: 52.96
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 133.9531)
- VWAP (session): 29590.0916 — price below
- OR15: 29540.2891–29676.7695

## BTCUSD — MAP_ONLY
- price: **64142.87** (SINGLE) as-of 2026-08-18T13:58:28Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 25500 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 25503 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 23392 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

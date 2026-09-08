# Feed digest — 2026-09-08T17:09:18Z

**Desk grade: MAP_ONLY** (schema v1, run `20260908T170918Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4400.1001** (SINGLE) as-of 2026-09-08T17:08:50Z
- session: O 4466.5 H 4488.7998 L 4425.1001 · gap +36.7002
- prior: H 4429.7998 L 4429.7998 C 4429.7998
- basis: bars (`yahoo:GC=F:1d`) run +39.0 (+88.6 bps) vs anchor
- ATR14: 80.7785 pts (1.82%) · RSI14: 52.93
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -23.2794)
- VWAP (UTC day): 4445.3437 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29595.055** (SINGLE) as-of 2026-09-08T17:09:10Z
- session: O 29645.1836 H 29655.7305 L 29400.7012 · gap +101.0332
- prior: H 29655.2207 L 29440.1504 C 29544.1504
- basis: bars (`yahoo:^NDX:1d`) run -0.5062 (-0.2 bps) vs anchor
- ATR14: 377.3549 pts (1.275%) · RSI14: 54.34
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 1.9391)
- VWAP (session): 29531.3422 — price above
- OR15: 29440.8086–29653.1875

## BTCUSD — MAP_ONLY
- price: **78725.58** (SINGLE) as-of 2026-09-08T17:09:20Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 55931 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 55934 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 53823 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

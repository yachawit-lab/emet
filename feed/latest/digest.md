# Feed digest — 2026-09-30T18:35:57Z

**Desk grade: MAP_ONLY** (schema v1, run `20260930T183557Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4153.7002** (SINGLE) as-of 2026-09-30T18:35:48Z
- session: O 4216.2002 H 4251.1001 L 4178.2002 · gap +36.5
- prior: H 4218.1001 L 4145.2002 C 4179.7002
- basis: bars (`yahoo:GC=F:1d`) run +29.3999 (+70.8 bps) vs anchor
- ATR14: 99.2993 pts (2.374%) · RSI14: 34.55
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -29.2405)
- VWAP (UTC day): 4211.6226 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30532.418** (SINGLE) as-of 2026-09-30T18:35:58Z
- session: O 30421.6758 H 30630.4512 L 30415.1621 · gap +82.3457
- prior: H 30429.9707 L 30235.6602 C 30339.3301
- basis: bars (`yahoo:^NDX:1d`) run -0.0 (-0.0 bps) vs anchor
- ATR14: 378.9632 pts (1.241%) · RSI14: 61.74
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 82.7803)
- VWAP (session): 30554.722 — price below
- OR15: 30415.502–30517.7773

## BTCUSD — MAP_ONLY
- price: **83801.98** (SINGLE) as-of 2026-09-30T18:35:59Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 87698 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 87701 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 85590 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

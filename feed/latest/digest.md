# Feed digest — 2026-09-30T16:56:24Z

**Desk grade: MAP_ONLY** (schema v1, run `20260930T165624Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4157.8999** (SINGLE) as-of 2026-09-30T16:56:18Z
- session: O 4216.2002 H 4251.1001 L 4182.1001 · gap +36.5
- prior: H 4218.1001 L 4145.2002 C 4179.7002
- basis: bars (`yahoo:GC=F:1d`) run +31.0 (+74.6 bps) vs anchor
- ATR14: 99.1922 pts (2.368%) · RSI14: 35.19
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -28.8703)
- VWAP (UTC day): 4214.4733 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30572.312** (SINGLE) as-of 2026-09-30T16:56:25Z
- session: O 30421.6758 H 30630.4512 L 30415.1621 · gap +82.3457
- prior: H 30429.9707 L 30235.6602 C 30339.3301
- basis: bars (`yahoo:^NDX:1d`) run -0.2651 (-0.1 bps) vs anchor
- ATR14: 378.9632 pts (1.24%) · RSI14: 62.2
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 85.3093)
- VWAP (session): 30552.7567 — price above
- OR15: 30415.1621–30517.7773

## BTCUSD — MAP_ONLY
- price: **84300.22** (SINGLE) as-of 2026-09-30T16:56:26Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 87598 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 87601 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 85490 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

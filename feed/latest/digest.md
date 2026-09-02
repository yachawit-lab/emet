# Feed digest — 2026-09-02T17:24:53Z

**Desk grade: MAP_ONLY** (schema v1, run `20260902T172453Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4367.7998** (SINGLE) as-of 2026-09-02T17:24:52Z
- session: O 4377.2002 H 4444.3999 L 4329.2002 · gap +29.2002
- prior: H 4402.0 L 4329.1001 C 4348.0
- basis: bars (`yahoo:GC=F:1d`) run +47.8003 (+109.4 bps) vs anchor
- ATR14: 80.2529 pts (1.817%) · RSI14: 51.89
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -22.9233)
- VWAP (UTC day): 4385.94 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29102.752** (SINGLE) as-of 2026-09-02T17:24:53Z
- session: O 29015.9961 H 29165.623 L 28971.8984 · gap -61.2246
- prior: H 29267.4199 L 28953.2598 C 29077.2207
- basis: bars (`yahoo:^NDX:1d`) run +0.2148 (+0.1 bps) vs anchor
- ATR14: 400.3334 pts (1.376%) · RSI14: 46.92
- EMA: mixed / no clean stack
- MACD: bearish (hist -48.8024)
- VWAP (session): 29090.9543 — price above
- OR15: 28991.8105–29067.0371

## BTCUSD — MAP_ONLY
- price: **77040.94** (SINGLE) as-of 2026-09-02T17:24:54Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 47307 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 47310 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 45199 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-11-02T14:38:52Z

**Desk grade: MAP_ONLY** (schema v1, run `20261102T143852Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3961.7** (SINGLE) as-of 2026-11-02T14:38:23Z
- session: O 3890.0 H 3961.0 L 3889.0 · gap -8.8999
- prior: H 4038.2 L 3879.3 C 3898.8999
- basis: bars (`yahoo:GC=F:1d`) run -4.2 (-10.6 bps) vs anchor
- ATR14: 80.7051 pts (2.039%) · RSI14: 34.84
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.1138)
- VWAP (UTC day): 3923.4239 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28538.401** (SINGLE) as-of 2026-11-02T14:38:53Z
- session: O 28561.166 H 28586.5527 L 28492.0176 · gap +176.3164
- prior: H 28713.4492 L 28093.2402 C 28384.8496
- basis: bars (`yahoo:^NDX:1d`) run -8.7018 (-3.0 bps) vs anchor
- ATR14: 498.9177 pts (1.749%) · RSI14: 36.97
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -144.1797)
- VWAP (session): 28551.8564 — price below
- OR15: 28525.9824–28580.6797

## BTCUSD — MAP_ONLY
- price: **77804.85** (SINGLE) as-of 2026-11-02T14:38:54Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 134981 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 134984 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 132873 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

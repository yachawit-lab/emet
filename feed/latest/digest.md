# Feed digest — 2026-11-12T14:32:01Z

**Desk grade: MAP_ONLY** (schema v1, run `20261112T143201Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3902.6001** (SINGLE) as-of 2026-11-12T14:31:32Z
- session: O 3994.0 H 4005.8999 L 3887.7 · gap -6.5
- prior: H 4074.7 L 3989.6001 C 4000.5
- basis: bars (`yahoo:GC=F:1d`) run +8.2998 (+21.3 bps) vs anchor
- ATR14: 92.2522 pts (2.359%) · RSI14: 37.11
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 1.9064)
- VWAP (UTC day): 3942.1025 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28024.372** (SINGLE) as-of 2026-11-12T14:32:02Z
- session: O 27953.9082 H 28044.0176 L 27940.584 · gap -420.3418
- prior: H 28593.5195 L 28102.75 C 28374.25
- basis: bars (`yahoo:^NDX:1d`) run +0.2823 (+0.1 bps) vs anchor
- ATR14: 650.6423 pts (2.322%) · RSI14: 43.39
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -39.5392)
- OR15: 27958.8477–28024.6543

## BTCUSD — MAP_ONLY
- price: **71872.57** (SINGLE) as-of 2026-11-12T14:32:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 149374 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 149377 min old — excluded from anchor
- `NAS100` **vwap_session** — intraday bars carry no volume
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 147266 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-10-26T19:04:58Z

**Desk grade: MAP_ONLY** (schema v1, run `20261026T190458Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4011.1001** (SINGLE) as-of 2026-10-26T19:04:46Z
- session: O 4012.2 H 4043.8999 L 3990.8999 · gap +4.3
- prior: H 4050.2 L 3989.1001 C 4007.8999
- basis: bars (`yahoo:GC=F:1d`) run +16.2998 (+40.6 bps) vs anchor
- ATR14: 77.3664 pts (1.921%) · RSI14: 33.34
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -7.9752)
- VWAP (UTC day): 4024.2801 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29301.583** (SINGLE) as-of 2026-10-26T19:04:58Z
- session: O 29051.5781 H 29404.4375 L 29011.9141 · gap +94.0488
- prior: H 29161.0293 L 28825.7207 C 28957.5293
- basis: bars (`yahoo:^NDX:1d`) run +0.001 (+0.0 bps) vs anchor
- ATR14: 473.0057 pts (1.614%) · RSI14: 42.18
- EMA: mixed / no clean stack
- MACD: bearish (hist -183.4004)
- VWAP (session): 29260.6182 — price above
- OR15: 29012.5996–29170.7539

## BTCUSD — MAP_ONLY
- price: **79908.31** (SINGLE) as-of 2026-10-26T19:04:59Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 125167 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 125170 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 123059 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

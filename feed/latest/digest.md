# Feed digest — 2026-10-27T16:48:22Z

**Desk grade: MAP_ONLY** (schema v1, run `20261027T164822Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4062.5** (SINGLE) as-of 2026-10-27T16:47:54Z
- session: O 4032.8 H 4078.8999 L 4001.6001 · gap -5.5999
- prior: H 4044.0 L 3990.8999 C 4038.3999
- basis: bars (`yahoo:GC=F:1d`) run +11.1001 (+27.3 bps) vs anchor
- ATR14: 77.3683 pts (1.899%) · RSI14: 39.11
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.6996)
- VWAP (UTC day): 4036.193 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29630.181** (SINGLE) as-of 2026-10-27T16:48:23Z
- session: O 29407.1895 H 29713.2676 L 29340.5449 · gap +133.7891
- prior: H 29404.4395 L 29011.9102 C 29273.4004
- basis: bars (`yahoo:^NDX:1d`) run -1.1185 (-0.4 bps) vs anchor
- ATR14: 470.6388 pts (1.588%) · RSI14: 46.94
- EMA: mixed / no clean stack
- MACD: bearish (hist -135.9414)
- VWAP (session): 29527.4986 — price above
- OR15: 29389.7441–29529.0332

## BTCUSD — MAP_ONLY
- price: **80412.9** (SINGLE) as-of 2026-10-27T16:48:24Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 126470 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 126473 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 124362 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

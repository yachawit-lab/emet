# Feed digest — 2026-09-14T18:27:12Z

**Desk grade: MAP_ONLY** (schema v1, run `20260914T182712Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4308.3999** (SINGLE) as-of 2026-09-14T18:27:08Z
- session: O 4375.0 H 4396.7998 L 4293.0 · gap -33.8999
- prior: H 4444.8999 L 4333.0 C 4408.8999
- basis: bars (`yahoo:GC=F:1d`) run +44.1001 (+102.4 bps) vs anchor
- ATR14: 81.5549 pts (1.874%) · RSI14: 47.01
- EMA: mixed / no clean stack
- MACD: bearish (hist -26.8092)
- VWAP (UTC day): 4338.4521 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29243.024** (SINGLE) as-of 2026-09-14T18:27:23Z
- session: O 28890.9316 H 29285.502 L 28867.668 · gap -477.5078
- prior: H 29473.1191 L 29313.5098 C 29368.4395
- basis: bars (`yahoo:^NDX:1d`) run +1.2572 (+0.4 bps) vs anchor
- ATR14: 377.5564 pts (1.291%) · RSI14: 48.56
- EMA: mixed / no clean stack
- MACD: bearish (hist -25.3574)
- VWAP (session): 29078.9348 — price above
- OR15: 28868.6641–28938.5078

## BTCUSD — MAP_ONLY
- price: **79196.48** (SINGLE) as-of 2026-09-14T18:27:24Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 64649 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 64652 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 62541 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

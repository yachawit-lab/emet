# Feed digest — 2026-09-03T17:17:36Z

**Desk grade: MAP_ONLY** (schema v1, run `20260903T171736Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4486.6001** (SINGLE) as-of 2026-09-03T17:17:24Z
- session: O 4436.3999 H 4558.5 L 4426.7002 · gap +70.1001
- prior: H 4390.2002 L 4292.2002 C 4366.2998
- basis: bars (`yahoo:GC=F:1d`) run +49.2998 (+109.9 bps) vs anchor
- ATR14: 87.1059 pts (1.92%) · RSI14: 59.17
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -19.5461)
- VWAP (UTC day): 4501.4253 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29451.134** (SINGLE) as-of 2026-09-03T17:17:37Z
- session: O 29234.418 H 29494.334 L 29160.9629 · gap +91.0879
- prior: H 29165.6191 L 28971.9004 C 29143.3301
- basis: bars (`yahoo:^NDX:1d`) run -0.4504 (-0.2 bps) vs anchor
- ATR14: 409.1584 pts (1.389%) · RSI14: 52.25
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -30.663)
- VWAP (session): 29345.1444 — price above
- OR15: 29160.9629–29310.1738

## BTCUSD — MAP_ONLY
- price: **81135.87** (SINGLE) as-of 2026-09-03T17:17:37Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 48740 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 48743 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 46632 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

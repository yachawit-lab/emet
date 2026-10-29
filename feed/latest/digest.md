# Feed digest — 2026-10-29T18:51:41Z

**Desk grade: MAP_ONLY** (schema v1, run `20261029T185141Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4010.7** (SINGLE) as-of 2026-10-29T18:51:40Z
- session: O 4081.3999 H 4081.7 L 4017.0 · gap +29.7998
- prior: H 4097.2002 L 4036.8999 C 4051.6001
- basis: bars (`yahoo:GC=F:1d`) run +7.9001 (+19.7 bps) vs anchor
- ATR14: 75.3617 pts (1.875%) · RSI14: 35.02
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.4008)
- VWAP (UTC day): 4041.1509 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29310.343** (SINGLE) as-of 2026-10-29T18:51:32Z
- session: O 29421.1777 H 29517.7988 L 29257.0547 · gap -391.9824
- prior: H 29848.7109 L 29618.4199 C 29813.1602
- basis: bars (`yahoo:^NDX:1d`) run +7.4343 (+2.5 bps) vs anchor
- ATR14: 461.1982 pts (1.573%) · RSI14: 43.48
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -79.7893)
- VWAP (session): 29381.1937 — price below
- OR15: 29257.0547–29433.5156

## BTCUSD — MAP_ONLY
- price: **80713.75** (SINGLE) as-of 2026-10-29T18:51:43Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 129474 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 129477 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 127366 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-11-05T13:54:47Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261105T135447Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **None** (MISSING) as-of 2026-11-05T13:44:47Z
- session: O 3940.8 H 4155.7998 L 4067.0 · gap -132.2
- prior: H 4081.2 L 3928.2 C 4073.0
- ATR14: 87.02 pts (2.107%) · RSI14: 51.27
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 9.4528)
- VWAP (UTC day): 4129.0622 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28437.166** (STALE) as-of 2026-11-04T21:00:00Z
- session: O 28346.8105 H 28829.6602 L 28276.2207 · gap +166.5508
- prior: H 28307.9004 L 28085.5 C 28180.2598
- ATR14: 533.6562 pts (1.877%) · RSI14: 38.47
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -164.1709)
- VWAP (session): 28573.0783 — price below
- OR15: 28286.498–28671.4961

## BTCUSD — MAP_ONLY
- price: **79711.33** (SINGLE) as-of 2026-11-05T13:54:49Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 139257 min old — excluded from anchor
- `XAUUSD` **quote[1]** — https://api.gold-api.com/price/XAU -> URLError: <urlopen error [Errno -2] Name or service not known>
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price** — anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 139260 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1075 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 137149 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
- XAUUSD: anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them

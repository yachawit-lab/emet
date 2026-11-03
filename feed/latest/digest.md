# Feed digest — 2026-11-03T20:17:39Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261103T201739Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **None** (MISSING) as-of 2026-11-03T20:07:35Z
- session: O 3960.5 H 3980.7 L 3904.1001 · gap -9.1001
- prior: H 3980.8 L 3889.0 C 3969.6001
- ATR14: 81.7252 pts (2.079%) · RSI14: 33.79
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.138)
- VWAP (UTC day): 3941.6792 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28151.881** (STALE) as-of 2026-11-03T20:17:40Z
- session: O 28085.4961 H 28307.8984 L 28085.4961 · gap +95.6758
- prior: H 28753.3906 L 27967.4395 C 27989.8203
- basis: bars (`yahoo:^NDX:1d`) run -0.1583 (-0.1 bps) vs anchor
- ATR14: 524.7517 pts (1.864%) · RSI14: 34.41
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -189.0128)
- VWAP (session): 28209.1753 — price below
- OR15: 28098.0703–28242.1758
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:17)

## BTCUSD — MAP_ONLY
- price: **77596.58** (SINGLE) as-of 2026-11-03T20:17:40Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 136760 min old — excluded from anchor
- `XAUUSD` **quote[1]** — https://api.gold-api.com/price/XAU -> URLError: <urlopen error [Errno -2] Name or service not known>
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price** — anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 136763 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:17)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 134652 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
- XAUUSD: anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them

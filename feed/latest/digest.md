# Feed digest — 2026-11-06T19:53:53Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261106T195353Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **None** (MISSING) as-of 2026-11-06T19:43:50Z
- session: O 4098.5 H 4116.2002 L 4037.0 · gap -15.0
- prior: H 4155.7998 L 4067.0 C 4113.5
- ATR14: 86.4603 pts (2.122%) · RSI14: 47.08
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 11.7917)
- VWAP (UTC day): 4067.8184 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **27066.996** (SINGLE) as-of 2026-11-06T19:53:54Z
- session: O 27045.2559 H 27316.0938 L 26887.6934 · gap +415.4453
- prior: H 28078.1895 L 26606.4297 C 26629.8105
- basis: bars (`yahoo:^NDX:1d`) run +1.0724 (+0.4 bps) vs anchor
- ATR14: 630.5875 pts (2.33%) · RSI14: 32.27
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -265.8303)
- VWAP (session): 27093.6232 — price below
- OR15: 26953.0957–27206.5625

## BTCUSD — MAP_ONLY
- price: **75678.93** (SINGLE) as-of 2026-11-06T19:53:55Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 141056 min old — excluded from anchor
- `XAUUSD` **quote[1]** — https://api.gold-api.com/price/XAU -> URLError: <urlopen error [Errno -2] Name or service not known>
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price** — anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 141059 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 138948 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
- XAUUSD: anchor source unavailable and bars (yahoo:GC=F:5m) are a PROXY instrument, not this one — refusing to anchor on them

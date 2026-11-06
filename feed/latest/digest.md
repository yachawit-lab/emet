# Feed digest — 2026-11-06T20:06:01Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261106T200601Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4063.1001** (SINGLE) as-of 2026-11-06T20:05:35Z
- session: O 4098.5 H 4116.2002 L 4037.0 · gap -15.0
- prior: H 4155.7998 L 4067.0 C 4113.5
- basis: bars (`yahoo:GC=F:1d`) run +8.5999 (+21.2 bps) vs anchor
- ATR14: 86.4603 pts (2.123%) · RSI14: 46.95
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 11.6704)
- VWAP (UTC day): 4067.836 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27071.465** (STALE) as-of 2026-11-06T20:06:02Z
- session: O 27045.2559 H 27316.0938 L 26887.6934 · gap +415.4453
- prior: H 28078.1895 L 26606.4297 C 26629.8105
- basis: bars (`yahoo:^NDX:1d`) run +3.4745 (+1.3 bps) vs anchor
- ATR14: 630.5875 pts (2.329%) · RSI14: 32.35
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -265.3918)
- VWAP (session): 27093.2715 — price above
- OR15: 26953.0957–27206.5625
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:06)

## BTCUSD — MAP_ONLY
- price: **75797.83** (SINGLE) as-of 2026-11-06T20:06:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 141068 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 141071 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:06)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 138960 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

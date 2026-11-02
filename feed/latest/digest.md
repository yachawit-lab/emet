# Feed digest — 2026-11-02T20:51:17Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261102T205117Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3944.8** (SINGLE) as-of 2026-11-02T20:50:55Z
- session: O 3890.0 H 3980.8 L 3889.0 · gap -8.8999
- prior: H 4038.2 L 3879.3 C 3898.8999
- basis: bars (`yahoo:GC=F:1d`) run +7.4 (+18.8 bps) vs anchor
- ATR14: 82.1194 pts (2.078%) · RSI14: 34.26
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.452)
- VWAP (UTC day): 3941.4763 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27982.657** (STALE) as-of 2026-11-02T20:51:18Z
- session: O 28561.166 H 28753.3926 L 27968.207 · gap +176.3164
- prior: H 28713.4492 L 28093.2402 C 28384.8496
- basis: bars (`yahoo:^NDX:1d`) run -0.8718 (-0.3 bps) vs anchor
- ATR14: 540.595 pts (1.932%) · RSI14: 31.98
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -179.1463)
- VWAP (session): 28473.6965 — price below
- OR15: 28500.7539–28606.0059
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:51)

## BTCUSD — MAP_ONLY
- price: **76774.51** (SINGLE) as-of 2026-11-02T20:51:18Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 135353 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 135356 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:51)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 133245 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

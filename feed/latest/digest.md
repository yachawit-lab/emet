# Feed digest — 2026-11-18T21:13:02Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261118T211302Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3728.95** (SINGLE) as-of 2026-11-18T21:13:01Z
- session: O 3855.2 H 3859.3 L 3721.8 · gap -9.0
- prior: H 3894.0 L 3839.2 C 3864.2
- basis: bars (`yahoo:GC=F:1d`) run -0.0501 (-0.1 bps) vs anchor
- ATR14: 91.503 pts (2.454%) · RSI14: 28.79
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -19.6087)
- VWAP (UTC day): 3772.289 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27116.259** (STALE) as-of 2026-11-18T21:13:08Z
- session: O 27177.4102 H 27236.123 L 26848.9238 · gap +175.6309
- prior: H 27258.8398 L 26580.8594 C 27001.7793
- basis: bars (`yahoo:^NDX:1d`) run -0.0012 (-0.0 bps) vs anchor
- ATR14: 653.7848 pts (2.411%) · RSI14: 37.62
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -61.2167)
- VWAP (session): 27058.6327 — price above
- OR15: 26927.3066–27213.4336
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:13)

## BTCUSD — MAP_ONLY
- price: **62396.13** (SINGLE) as-of 2026-11-18T21:13:08Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 158415 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 158418 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:13)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 156307 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

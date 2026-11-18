# Feed digest — 2026-11-18T19:30:00Z

**Desk grade: MAP_ONLY** (schema v1, run `20261118T193000Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3731.1201** (SINGLE) as-of 2026-11-18T19:30:01Z
- session: O 3855.2 H 3859.3 L 3729.3999 · gap -9.0
- prior: H 3894.0 L 3839.2 C 3864.2
- basis: bars (`yahoo:GC=F:1d`) run -0.2202 (-0.6 bps) vs anchor
- ATR14: 90.9602 pts (2.438%) · RSI14: 28.87
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -19.4811)
- VWAP (UTC day): 3774.3354 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **27116.92** (SINGLE) as-of 2026-11-18T19:30:01Z
- session: O 27177.4102 H 27236.123 L 26848.9238 · gap +175.6309
- prior: H 27258.8398 L 26580.8594 C 27001.7793
- basis: bars (`yahoo:^NDX:1d`) run +1.6093 (+0.6 bps) vs anchor
- ATR14: 653.7843 pts (2.411%) · RSI14: 37.65
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -61.0789)
- VWAP (session): 27057.9663 — price above
- OR15: 26927.3066–27213.4336

## BTCUSD — MAP_ONLY
- price: **62786.92** (SINGLE) as-of 2026-11-18T19:30:02Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 158312 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 158315 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 156204 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

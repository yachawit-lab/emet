# Feed digest — 2026-11-09T15:00:25Z

**Desk grade: MAP_ONLY** (schema v1, run `20261109T150025Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4121.7002** (SINGLE) as-of 2026-11-09T15:00:24Z
- session: O 4074.3 H 4143.2998 L 4062.5 · gap -0.5999
- prior: H 4116.2002 L 4035.1001 C 4074.8999
- basis: bars (`yahoo:GC=F:1d`) run +6.6997 (+16.3 bps) vs anchor
- ATR14: 86.1827 pts (2.088%) · RSI14: 51.32
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 17.4734)
- VWAP (UTC day): 4118.8612 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **27661.709** (SINGLE) as-of 2026-11-09T15:00:25Z
- session: O 27263.4277 H 27697.4121 L 27227.5332 · gap +273.4375
- prior: H 27316.0898 L 26887.6895 C 26989.9902
- basis: bars (`yahoo:^NDX:1d`) run +2.0742 (+0.7 bps) vs anchor
- ATR14: 636.0768 pts (2.299%) · RSI14: 38.8
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -220.4533)
- VWAP (session): 27505.6646 — price above
- OR15: 27234.5762–27569.6855

## BTCUSD — MAP_ONLY
- price: **74751.75** (SINGLE) as-of 2026-11-09T15:00:26Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 145082 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 145085 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 142974 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

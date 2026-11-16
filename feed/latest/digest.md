# Feed digest — 2026-11-16T14:36:51Z

**Desk grade: MAP_ONLY** (schema v1, run `20261116T143651Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3875.75** (SINGLE) as-of 2026-11-16T14:36:28Z
- session: O 3869.7 H 3904.3 L 3835.2 · gap -16.6001
- prior: H 3927.2 L 3871.1001 C 3886.3
- basis: bars (`yahoo:GC=F:1d`) run -8.05 (-20.8 bps) vs anchor
- ATR14: 90.11 pts (2.33%) · RSI14: 34.93
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -9.178)
- VWAP (UTC day): 3867.8027 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **27444.632** (SINGLE) as-of 2026-11-16T14:36:52Z
- session: O 27543.6445 H 27543.6445 L 27401.1953 · gap -400.0957
- prior: H 28295.8008 L 27609.7109 C 27943.7402
- basis: bars (`yahoo:^NDX:1d`) run +10.4188 (+3.8 bps) vs anchor
- ATR14: 656.0038 pts (2.389%) · RSI14: 39.18
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -19.1647)
- VWAP (session): 27468.8722 — price below
- OR15: 27404.6094–27533.3945

## BTCUSD — MAP_ONLY
- price: **65249.97** (SINGLE) as-of 2026-11-16T14:36:53Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 155139 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 155142 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 153031 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

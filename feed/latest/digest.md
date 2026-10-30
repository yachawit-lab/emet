# Feed digest — 2026-10-30T18:28:43Z

**Desk grade: MAP_ONLY** (schema v1, run `20261030T182843Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3879.3** (SINGLE) as-of 2026-10-30T18:28:13Z
- session: O 4033.6001 H 4038.2 L 3886.3 · gap +2.2002
- prior: H 4081.7 L 4016.3 C 4031.3999
- basis: bars (`yahoo:GC=F:1d`) run +9.4 (+24.2 bps) vs anchor
- ATR14: 80.8752 pts (2.08%) · RSI14: 27.41
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.8891)
- VWAP (UTC day): 3955.78 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28164.386** (SINGLE) as-of 2026-10-30T18:28:25Z
- session: O 28604.916 H 28713.4453 L 28150.6777 · gap -797.5938
- prior: H 29517.8008 L 29257.0508 C 29402.5098
- basis: bars (`yahoo:^NDX:1d`) run +21.5261 (+7.6 bps) vs anchor
- ATR14: 517.6724 pts (1.837%) · RSI14: 33.5
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -140.6107)
- VWAP (session): 28506.9611 — price below
- OR15: 28529.2168–28666.1172

## BTCUSD — MAP_ONLY
- price: **76751.11** (SINGLE) as-of 2026-10-30T18:28:45Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 130891 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 130894 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 128783 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

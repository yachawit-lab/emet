# Feed digest — 2026-10-30T18:53:52Z

**Desk grade: MAP_ONLY** (schema v1, run `20261030T185352Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3880.3999** (SINGLE) as-of 2026-10-30T18:53:43Z
- session: O 4033.6001 H 4038.2 L 3885.8999 · gap +2.2002
- prior: H 4081.7 L 4016.3 C 4031.3999
- basis: bars (`yahoo:GC=F:1d`) run +12.3001 (+31.7 bps) vs anchor
- ATR14: 80.9038 pts (2.078%) · RSI14: 27.6
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.6338)
- VWAP (UTC day): 3954.646 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28100.835** (SINGLE) as-of 2026-10-30T18:53:53Z
- session: O 28604.916 H 28713.4453 L 28102.4199 · gap -797.5938
- prior: H 29517.8008 L 29257.0508 C 29402.5098
- basis: bars (`yahoo:^NDX:1d`) run +66.1005 (+23.5 bps) vs anchor
- ATR14: 521.1194 pts (1.85%) · RSI14: 33.37
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -141.8217)
- VWAP (session): 28488.2932 — price below
- OR15: 28529.2168–28666.1172

## BTCUSD — MAP_ONLY
- price: **76289.26** (SINGLE) as-of 2026-10-30T18:53:54Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 130916 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 130919 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 128808 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

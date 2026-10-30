# Feed digest — 2026-10-30T17:06:22Z

**Desk grade: MAP_ONLY** (schema v1, run `20261030T170622Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3896.5** (SINGLE) as-of 2026-10-30T17:06:13Z
- session: O 4033.6001 H 4038.2 L 3900.8999 · gap +2.2002
- prior: H 4081.7 L 4016.3 C 4031.3999
- basis: bars (`yahoo:GC=F:1d`) run +7.2 (+18.5 bps) vs anchor
- ATR14: 79.8324 pts (2.045%) · RSI14: 28.11
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -10.9318)
- VWAP (UTC day): 3962.2719 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28366.629** (SINGLE) as-of 2026-10-30T17:06:23Z
- session: O 28604.916 H 28713.4453 L 28348.6602 · gap -797.5938
- prior: H 29517.8008 L 29257.0508 C 29402.5098
- basis: bars (`yahoo:^NDX:1d`) run +1.1093 (+0.4 bps) vs anchor
- ATR14: 503.5308 pts (1.775%) · RSI14: 34.78
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -129.0069)
- VWAP (session): 28559.5014 — price below
- OR15: 28529.2168–28666.1172

## BTCUSD — MAP_ONLY
- price: **77224.71** (SINGLE) as-of 2026-10-30T17:06:24Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 130808 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 130811 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 128700 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-10-13T18:27:00Z

**Desk grade: MAP_ONLY** (schema v1, run `20261013T182700Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4162.7002** (SINGLE) as-of 2026-10-13T18:26:44Z
- session: O 4195.5 H 4224.7998 L 4169.7002 · gap +4.8999
- prior: H 4242.2998 L 4178.1001 C 4190.6001
- basis: bars (`yahoo:GC=F:1d`) run +19.1997 (+46.1 bps) vs anchor
- ATR14: 84.8641 pts (2.029%) · RSI14: 40.64
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -0.2989)
- VWAP (UTC day): 4196.882 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30551.102** (SINGLE) as-of 2026-10-13T18:27:01Z
- session: O 30404.1953 H 30595.8047 L 30372.2988 · gap -260.5039
- prior: H 30813.9609 L 30618.6406 C 30664.6992
- basis: bars (`yahoo:^NDX:1d`) run -0.0004 (-0.0 bps) vs anchor
- ATR14: 362.1337 pts (1.185%) · RSI14: 54.35
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -27.4412)
- VWAP (session): 30516.2852 — price above
- OR15: 30377.0723–30570.4355

## BTCUSD — MAP_ONLY
- price: **83044.82** (SINGLE) as-of 2026-10-13T18:27:02Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 106409 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 106412 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 104301 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

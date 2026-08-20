# Feed digest — 2026-08-20T14:22:06Z

**Desk grade: MAP_ONLY** (schema v1, run `20260820T142206Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4487.1001** (SINGLE) as-of 2026-08-20T14:21:40Z
- session: O 4580.0 H 4583.7998 L 4506.0 · gap +90.6001
- prior: H 4524.1001 L 4327.6001 C 4489.3999
- basis: bars (`yahoo:GC=F:1d`) run +55.8999 (+124.6 bps) vs anchor
- ATR14: 84.8326 pts (1.867%) · RSI14: 70.41
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 30.9481)
- VWAP (UTC day): 4539.9968 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29282.127** (SINGLE) as-of 2026-08-20T14:22:07Z
- session: O 29295.1484 H 29378.8047 L 29222.8203 · gap -130.8711
- prior: H 29652.3008 L 29288.75 C 29426.0195
- basis: bars (`yahoo:^NDX:1d`) run +0.6035 (+0.2 bps) vs anchor
- ATR14: 474.3759 pts (1.62%) · RSI14: 49.26
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 29.2954)
- VWAP (session): 29294.6189 — price below
- OR15: 29257.5371–29377.0371

## BTCUSD — MAP_ONLY
- price: **71560.31** (SINGLE) as-of 2026-08-20T14:22:07Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 28404 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 28407 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 26296 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

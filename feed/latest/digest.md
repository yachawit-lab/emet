# Feed digest — 2026-08-20T13:50:23Z

**Desk grade: MAP_ONLY** (schema v1, run `20260820T135023Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4484.2002** (SINGLE) as-of 2026-08-20T13:50:10Z
- session: O 4580.0 H 4583.7998 L 4506.0 · gap +90.6001
- prior: H 4524.1001 L 4327.6001 C 4489.3999
- basis: bars (`yahoo:GC=F:1d`) run +50.6997 (+113.1 bps) vs anchor
- ATR14: 84.8326 pts (1.871%) · RSI14: 70.06
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 30.4312)
- VWAP (UTC day): 4540.0535 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29282.127** (SINGLE) as-of 2026-08-20T13:50:24Z
- session: O 29295.1484 H 29378.8047 L 29251.9824 · gap -130.8711
- prior: H 29652.3008 L 29288.75 C 29426.0195
- basis: bars (`yahoo:^NDX:1d`) run +1.9375 (+0.7 bps) vs anchor
- ATR14: 472.2929 pts (1.613%) · RSI14: 49.28
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 29.3805)
- VWAP (session): 29322.3252 — price below
- OR15: 29257.5371–29377.0371

## BTCUSD — MAP_ONLY
- price: **71591.25** (SINGLE) as-of 2026-08-20T13:50:25Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 28372 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 28375 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 26264 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

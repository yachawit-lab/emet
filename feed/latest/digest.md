# Feed digest — 2026-09-24T17:48:00Z

**Desk grade: MAP_ONLY** (schema v1, run `20260924T174800Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4260.7002** (SINGLE) as-of 2026-09-24T17:47:56Z
- session: O 4324.3999 H 4338.0 L 4278.2998 · gap +6.0
- prior: H 4407.5 L 4310.7002 C 4318.3999
- basis: bars (`yahoo:GC=F:1d`) run +37.1997 (+87.3 bps) vs anchor
- ATR14: 100.5046 pts (2.338%) · RSI14: 40.28
- EMA: mixed / no clean stack
- MACD: bearish (hist -20.9154)
- VWAP (UTC day): 4305.7045 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30408.823** (SINGLE) as-of 2026-09-24T17:48:01Z
- session: O 30225.1855 H 30529.3477 L 30204.1641 · gap -245.1035
- prior: H 30706.2305 L 30353.8809 C 30470.2891
- basis: bars (`yahoo:^NDX:1d`) run -1.6824 (-0.6 bps) vs anchor
- ATR14: 407.512 pts (1.34%) · RSI14: 64.22
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 133.4651)
- VWAP (session): 30326.6142 — price above
- OR15: 30208.3008–30319.0508

## BTCUSD — MAP_ONLY
- price: **84186.58** (SINGLE) as-of 2026-09-24T17:48:02Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 79010 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 79013 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 76902 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

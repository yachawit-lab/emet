# Feed digest — 2026-09-17T17:45:15Z

**Desk grade: MAP_ONLY** (schema v1, run `20260917T174515Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4361.1001** (SINGLE) as-of 2026-09-17T17:44:45Z
- session: O 4301.3999 H 4423.2998 L 4294.5 · gap -86.1001
- prior: H 4413.1001 L 4273.2998 C 4387.5
- basis: bars (`yahoo:GC=F:1d`) run +40.5 (+92.9 bps) vs anchor
- ATR14: 111.8485 pts (2.541%) · RSI14: 48.33
- EMA: mixed / no clean stack
- MACD: bearish (hist -26.3923)
- VWAP (UTC day): 4375.5838 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29431.868** (SINGLE) as-of 2026-09-17T17:45:18Z
- session: O 29401.5391 H 29458.5605 L 29305.9043 · gap +456.4785
- prior: H 29235.8906 L 28753.2891 C 28945.0605
- basis: bars (`yahoo:^NDX:1d`) run +0.88 (+0.3 bps) vs anchor
- ATR14: 385.9732 pts (1.311%) · RSI14: 52.66
- EMA: mixed / no clean stack
- MACD: bearish (hist -30.5154)
- VWAP (session): 29394.2576 — price above
- OR15: 29308.9238–29408.873

## BTCUSD — MAP_ONLY
- price: **76613.19** (SINGLE) as-of 2026-09-17T17:45:19Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 68927 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 68930 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 66819 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

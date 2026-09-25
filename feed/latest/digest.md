# Feed digest — 2026-09-25T11:01:32Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260925T110132Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4312.7998** (SINGLE) as-of 2026-09-25T11:01:28Z
- session: O 4309.5 H 4345.2998 L 4290.2998 · gap +11.5
- prior: H 4338.0 L 4278.2998 C 4298.0
- basis: bars (`yahoo:GC=F:1d`) run +29.2002 (+67.7 bps) vs anchor
- ATR14: 97.2536 pts (2.24%) · RSI14: 44.87
- EMA: mixed / no clean stack
- MACD: bearish (hist -17.9687)
- VWAP (UTC day): 4318.184 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30478.8555** (STALE) as-of 2026-09-24T20:00:00Z
- session: O 30225.1895 H 30529.3496 L 30204.1602 · gap -245.0996
- prior: H 30706.2305 L 30353.8809 C 30470.2891
- ATR14: 407.5154 pts (1.337%) · RSI14: 65.56
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 138.0372)
- VWAP (session): 30369.5281 — price above
- OR15: 30208.3008–30319.0508
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:01)

## BTCUSD — MAP_ONLY
- price: **84722.67** (SINGLE) as-of 2026-09-25T11:01:34Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 80044 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 80047 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 902 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:01)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 77936 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

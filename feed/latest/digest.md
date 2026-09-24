# Feed digest — 2026-09-24T23:12:28Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260924T231228Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4274.5** (SINGLE) as-of 2026-09-24T23:12:27Z
- session: O 4309.5 H 4312.7998 L 4303.1001 · gap -8.8999
- prior: H 4407.5 L 4310.7002 C 4318.3999
- basis: bars (`yahoo:GC=F:1d`) run +33.5 (+78.4 bps) vs anchor
- ATR14: 97.3332 pts (2.259%) · RSI14: 41.0
- EMA: mixed / no clean stack
- MACD: bearish (hist -20.2708)
- VWAP (UTC day): 4305.5493 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30478.8555** (STALE) as-of 2026-09-24T20:00:00Z
- session: O 30225.1855 H 30529.3477 L 30204.1641 · gap -245.1035
- prior: H 30706.2305 L 30353.8809 C 30470.2891
- ATR14: 407.515 pts (1.337%) · RSI14: 65.56
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 138.0369)
- VWAP (session): 30365.3156 — price above
- OR15: 30208.3008–30319.0508
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:12)

## BTCUSD — MAP_ONLY
- price: **84347.64** (SINGLE) as-of 2026-09-24T23:12:30Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 79334 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 79337 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 116 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:12)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 77226 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

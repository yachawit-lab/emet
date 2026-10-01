# Feed digest — 2026-10-01T18:44:44Z

**Desk grade: MAP_ONLY** (schema v1, run `20261001T184444Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4179.0** (SINGLE) as-of 2026-10-01T18:44:20Z
- session: O 4190.1001 H 4222.7998 L 4169.3999 · gap +3.3999
- prior: H 4251.1001 L 4178.2002 C 4186.7002
- basis: bars (`yahoo:GC=F:1d`) run +28.6001 (+68.4 bps) vs anchor
- ATR14: 96.0194 pts (2.282%) · RSI14: 37.33
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -25.5739)
- VWAP (UTC day): 4198.26 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30538.045** (SINGLE) as-of 2026-10-01T18:44:45Z
- session: O 30533.6016 H 30616.2402 L 30274.6523 · gap +125.1016
- prior: H 30630.4492 L 30408.5 C 30408.5
- basis: bars (`yahoo:^NDX:1d`) run +0.1308 (+0.0 bps) vs anchor
- ATR14: 376.2861 pts (1.232%) · RSI14: 61.92
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 66.5057)
- VWAP (session): 30429.5622 — price above
- OR15: 30475.752–30576.4414

## BTCUSD — MAP_ONLY
- price: **84900.68** (SINGLE) as-of 2026-10-01T18:44:46Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 89147 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 89150 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 87039 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

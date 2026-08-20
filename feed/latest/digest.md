# Feed digest — 2026-08-20T20:46:43Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260820T204643Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4519.7002** (SINGLE) as-of 2026-08-20T20:46:40Z
- session: O 4580.0 H 4597.1001 L 4506.0 · gap +90.6001
- prior: H 4524.1001 L 4327.6001 C 4489.3999
- basis: bars (`yahoo:GC=F:1d`) run +54.5 (+120.6 bps) vs anchor
- ATR14: 85.7827 pts (1.875%) · RSI14: 71.65
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 32.9393)
- VWAP (UTC day): 4554.2376 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29213.165** (STALE) as-of 2026-08-20T20:46:44Z
- session: O 29295.1484 H 29378.8047 L 29118.0664 · gap -130.8711
- prior: H 29652.3008 L 29288.75 C 29426.0195
- basis: bars (`yahoo:^NDX:1d`) run -0.0009 (-0.0 bps) vs anchor
- ATR14: 481.8596 pts (1.649%) · RSI14: 48.44
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 24.8682)
- VWAP (session): 29247.3422 — price below
- OR15: 29257.5371–29377.0371
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:46)

## BTCUSD — MAP_ONLY
- price: **72706.96** (SINGLE) as-of 2026-08-20T20:46:45Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 28789 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 28792 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:46)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 26681 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

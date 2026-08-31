# Feed digest — 2026-08-31T12:33:14Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260831T123314Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4448.8999** (SINGLE) as-of 2026-08-31T12:33:07Z
- session: O 4483.2002 H 4521.5 L 4445.6001 · gap +5.1001
- prior: H 4625.5 L 4451.7998 C 4478.1001
- basis: bars (`yahoo:GC=F:1d`) run +53.5 (+120.3 bps) vs anchor
- ATR14: 76.3065 pts (1.695%) · RSI14: 58.5
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 0.4753)
- VWAP (UTC day): 4488.1258 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29433.4277** (STALE) as-of 2026-08-28T20:00:00Z
- session: O 29545.9004 H 29752.7793 L 29383.9199 · gap -95.6602
- prior: H 29643.5293 L 29366.4199 C 29641.5605
- ATR14: 427.1958 pts (1.451%) · RSI14: 51.74
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.1483)
- VWAP (session): 29527.7828 — price below
- OR15: 29518.7812–29645.0449
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:33)

## BTCUSD — MAP_ONLY
- price: **78064.11** (SINGLE) as-of 2026-08-31T12:33:16Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 44135 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 44138 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3873 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:33)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 42027 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

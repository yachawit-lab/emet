# Feed digest — 2026-10-20T15:47:29Z

**Desk grade: MAP_ONLY** (schema v1, run `20261020T154729Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4133.2998** (SINGLE) as-of 2026-10-20T15:47:08Z
- session: O 4162.3999 H 4174.8999 L 4130.1001 · gap +2.2998
- prior: H 4211.2002 L 4155.6001 C 4160.1001
- basis: bars (`yahoo:GC=F:1d`) run +17.0 (+41.1 bps) vs anchor
- ATR14: 79.0994 pts (1.906%) · RSI14: 40.85
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 4.4992)
- VWAP (UTC day): 4148.3488 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29550.851** (SINGLE) as-of 2026-10-20T15:47:30Z
- session: O 29393.9648 H 29711.5293 L 29208.8281 · gap -135.3848
- prior: H 29788.7598 L 29461.3203 C 29529.3496
- basis: bars (`yahoo:^NDX:1d`) run -0.1049 (-0.0 bps) vs anchor
- ATR14: 449.5275 pts (1.521%) · RSI14: 41.54
- EMA: mixed / no clean stack
- MACD: bearish (hist -200.8739)
- VWAP (session): 29513.4088 — price above
- OR15: 29222.4414–29387.1133

## BTCUSD — MAP_ONLY
- price: **82296.81** (SINGLE) as-of 2026-10-20T15:47:31Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 116330 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 116333 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 114221 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

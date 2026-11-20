# Feed digest — 2026-11-20T20:58:02Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261120T205802Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3516.8201** (SINGLE) as-of 2026-11-20T20:57:36Z
- session: O 3633.8 H 3638.1001 L 3502.8999 · gap -51.7
- prior: H 3759.5 L 3620.6001 C 3685.5
- basis: bars (`yahoo:GC=F:1d`) run -0.8201 (-2.3 bps) vs anchor
- ATR14: 101.1534 pts (2.877%) · RSI14: 21.59
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -38.4328)
- VWAP (UTC day): 3554.924 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **24974.948** (STALE) as-of 2026-11-20T20:58:00Z
- session: O 26184.7637 H 26429.0898 L 24910.4785 · gap -332.2871
- prior: H 27749.3496 L 26481.8203 C 26517.0508
- basis: bars (`yahoo:^NDX:1d`) run -9.7664 (-3.9 bps) vs anchor
- ATR14: 762.55 pts (3.054%) · RSI14: 26.3
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -199.0217)
- VWAP (session): 25727.938 — price below
- OR15: 26048.2363–26190.3672
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:58)

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 161280 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 161283 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:58)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote[1]** — https://www.deribit.com/api/v2/public/get_index_price?index_name=btc_usd -> HTTP 503
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 159172 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` ***** — no anchor and no bars — instrument skipped

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-11-21T01:31:06Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261121T013106Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **3539.0** (STALE) as-of 2026-11-21T01:30:37Z
- session: O 3633.8 H 3638.1001 L 3502.8999 · gap -51.7
- prior: H 3759.5 L 3620.6001 C 3685.5
- basis: bars (`yahoo:GC=F:1d`) run +0.0 (+0.0 bps) vs anchor
- ATR14: 101.1534 pts (2.858%) · RSI14: 22.19
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -36.965)
- VWAP (UTC day): 3554.0757 — price below
- ⚠ spot metals/FX closed — weekend
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **25028.9824** (STALE) as-of 2026-11-20T21:00:00Z
- session: O 26184.7637 H 26429.0898 L 24910.4785 · gap -332.2871
- prior: H 27749.3496 L 26481.8203 C 26517.0508
- ATR14: 762.5528 pts (3.047%) · RSI14: 26.54
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -194.9468)
- VWAP (session): 25727.938 — price below
- OR15: 26048.2363–26190.3672
- ⚠ US equities closed — weekend

## BTCUSD — MAP_ONLY
- price: **58846.2** (SINGLE) as-of 2026-11-21T01:31:07Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 161553 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — weekend
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 161556 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 195 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — weekend
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 159445 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-08-13T14:48:08Z

**Desk grade: MAP_ONLY** (schema v1, run `20260813T144808Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4383.7002** (SINGLE) as-of 2026-08-13T14:47:52Z
- session: O 4468.7998 H 4509.1001 L 4408.7998 · gap +59.8999
- prior: H 4434.0 L 4406.2998 C 4408.8999
- basis: bars (`yahoo:GC=F:1d`) run +46.1997 (+105.4 bps) vs anchor
- ATR14: 75.0889 pts (1.695%) · RSI14: 69.36
- EMA: mixed / no clean stack
- MACD: bullish (hist 45.2152)
- VWAP (UTC day): 4449.3344 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30125.91** (SINGLE) as-of 2026-08-13T14:48:09Z
- session: O 29784.0625 H 30159.5566 L 29757.6172 · gap +41.4629
- prior: H 29881.5 L 29715.8809 C 29742.5996
- basis: bars (`yahoo:^NDX:1d`) run +0.0002 (+0.0 bps) vs anchor
- ATR14: 537.452 pts (1.784%) · RSI14: 60.48
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 186.704)
- VWAP (session): 30018.4905 — price above
- OR15: 29757.6172–29944.5293

## BTCUSD — MAP_ONLY
- price: **63858.25** (SINGLE) as-of 2026-08-13T14:48:10Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 18350 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 18353 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 16242 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

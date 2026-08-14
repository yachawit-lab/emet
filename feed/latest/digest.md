# Feed digest — 2026-08-14T14:41:22Z

**Desk grade: MAP_ONLY** (schema v1, run `20260814T144122Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4387.1001** (SINGLE) as-of 2026-08-14T14:40:54Z
- session: O 4408.2002 H 4454.6001 L 4365.5 · gap +44.6001
- prior: H 4445.0 L 4350.0 C 4363.6001
- basis: bars (`yahoo:GC=F:1d`) run +59.5 (+135.6 bps) vs anchor
- ATR14: 75.8726 pts (1.706%) · RSI14: 67.96
- EMA: mixed / no clean stack
- MACD: bullish (hist 40.8001)
- VWAP (UTC day): 4409.6171 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30054.973** (SINGLE) as-of 2026-08-14T14:41:23Z
- session: O 30167.125 H 30179.8223 L 30037.8418 · gap +82.625
- prior: H 30168.0508 L 29757.6191 C 30084.5
- basis: bars (`yahoo:^NDX:1d`) run +0.1852 (+0.1 bps) vs anchor
- ATR14: 509.7672 pts (1.696%) · RSI14: 59.75
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 180.0262)
- VWAP (session): 30117.8698 — price below
- OR15: 30079.9746–30176.6797

## BTCUSD — MAP_ONLY
- price: **62697.97** (SINGLE) as-of 2026-08-14T14:41:23Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 19783 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 19786 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 17675 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-09-18T22:34:43Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260918T223443Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4379.0** (STALE) as-of 2026-09-18T22:34:40Z
- session: O 4381.6001 H 4439.7998 L 4372.2002 · gap -18.1001
- prior: H 4423.2998 L 4294.5 C 4399.7002
- basis: bars (`yahoo:GC=F:1d`) run +36.8999 (+84.3 bps) vs anchor
- ATR14: 108.688 pts (2.461%) · RSI14: 49.57
- EMA: mixed / no clean stack
- MACD: bearish (hist -21.426)
- VWAP (UTC day): 4409.1943 — price above
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29644.168** (STALE) as-of 2026-09-18T20:00:00Z
- session: O 29529.6445 H 29647.7988 L 29371.8887 · gap +82.6641
- prior: H 29494.9492 L 29305.9004 C 29446.9805
- ATR14: 380.5293 pts (1.284%) · RSI14: 55.83
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 3.1556)
- VWAP (session): 29489.6266 — price above
- OR15: 29514.3613–29560.2988
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:34)

## BTCUSD — MAP_ONLY
- price: **81170.72** (SINGLE) as-of 2026-09-18T22:34:44Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 70657 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 70660 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 79 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:34)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 68549 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

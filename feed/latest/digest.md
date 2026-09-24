# Feed digest — 2026-09-24T11:01:22Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260924T110122Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4259.7998** (SINGLE) as-of 2026-09-24T11:01:21Z
- session: O 4324.3999 H 4338.0 L 4278.2998 · gap +6.0
- prior: H 4407.5 L 4310.7002 C 4318.3999
- basis: bars (`yahoo:GC=F:1d`) run +34.1001 (+80.1 bps) vs anchor
- ATR14: 100.5046 pts (2.341%) · RSI14: 40.0
- EMA: mixed / no clean stack
- MACD: bearish (hist -21.1707)
- VWAP (UTC day): 4310.6737 — price below
- proxy check: XAUT (tokenized gold) 4260.33 (+1.2 bps) — ok
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30470.293** (STALE) as-of 2026-09-23T20:00:00Z
- session: O 30706.2305 H 30706.2305 L 30353.8809 · gap +223.8809
- prior: H 30557.3398 L 29933.2207 C 30482.3496
- ATR14: 413.8449 pts (1.358%) · RSI14: 65.47
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 118.2816)
- VWAP (session): 30466.8069 — price above
- OR15: 30611.4121–30696.2754
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:01)

## BTCUSD — SIZEABLE
- price: **83570.95** (VERIFIED) as-of 2026-09-24T11:01:24Z
- session: O 84397.6 H 84622.01 L 82874.93 · gap +0.0
- prior: H 87278.54 L 83500.01 C 84397.6
- basis: bars (`binance:BTCUSDT:1d`) run +0.01 (+0.0 bps) vs anchor
- ATR14: 2484.0249 pts (2.972%) · RSI14: 62.6
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 446.0706)
- VWAP (rolling 24h): 84304.9707 — price below

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 78603 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 78606 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 901 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:01)
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 76495 min old — excluded from anchor
- `BTCUSD` **opening_range_15m** — no session open to anchor to (rolling_24h)

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

# Feed digest — 2026-08-21T14:20:22Z

**Desk grade: MAP_ONLY** (schema v1, run `20260821T142022Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4591.2002** (SINGLE) as-of 2026-08-21T14:20:09Z
- session: O 4577.0 H 4661.7002 L 4565.5 · gap +60.7002
- prior: H 4530.0 L 4486.0 C 4516.2998
- basis: bars (`yahoo:GC=F:1d`) run +51.0 (+111.1 bps) vs anchor
- ATR14: 85.8152 pts (1.849%) · RSI14: 74.34
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 35.6423)
- VWAP (UTC day): 4626.0389 — price above
- proxy check: XAUT (tokenized gold) 4569.15 (-48.0 bps) — ok
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29143.847** (SINGLE) as-of 2026-08-21T14:20:24Z
- session: O 29359.5977 H 29366.1191 L 29142.4414 · gap +146.4375
- prior: H 29378.8008 L 29118.0703 C 29213.1602
- basis: bars (`yahoo:^NDX:1d`) run +0.9928 (+0.3 bps) vs anchor
- ATR14: 460.3101 pts (1.579%) · RSI14: 47.85
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -12.3327)
- VWAP (session): 29239.799 — price below
- OR15: 29232.8398–29365.0

## BTCUSD — SIZEABLE
- price: **76568.99** (VERIFIED) as-of 2026-08-21T14:20:25Z
- session: O 73027.02 H 79500.0 L 73027.02 · gap +1.87
- prior: H 73400.0 L 68902.22 C 73025.15
- basis: bars (`binance:BTCUSDT:1d`) run +0.01 (+0.0 bps) vs anchor
- ATR14: 2124.273 pts (2.774%) · RSI14: 84.47
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 1255.6161)
- VWAP (rolling 24h): 75456.8216 — price above

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 29842 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 29845 min old — excluded from anchor
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 27734 min old — excluded from anchor
- `BTCUSD` **opening_range_15m** — no session open to anchor to (rolling_24h)

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

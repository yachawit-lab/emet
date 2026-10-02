# Feed digest — 2026-10-02T11:47:55Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261002T114755Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4180.1001** (SINGLE) as-of 2026-10-02T11:47:52Z
- session: O 4204.6001 H 4226.7998 L 4162.8999 · gap +2.3003
- prior: H 4222.7998 L 4169.3999 C 4202.2998
- basis: bars (`yahoo:GC=F:1d`) run +31.1001 (+74.4 bps) vs anchor
- ATR14: 93.723 pts (2.226%) · RSI14: 37.8
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -21.7503)
- VWAP (UTC day): 4204.6772 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30501.5605** (STALE) as-of 2026-10-01T20:00:00Z
- session: O 30533.5996 H 30616.2402 L 30274.6504 · gap +125.0996
- prior: H 30630.4492 L 30408.5 C 30408.5
- ATR14: 376.2829 pts (1.234%) · RSI14: 61.45
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 64.1665)
- VWAP (session): 30449.5613 — price above
- OR15: 30475.752–30576.4414
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:47)

## BTCUSD — MAP_ONLY
- price: **86472.29** (SINGLE) as-of 2026-10-02T11:47:56Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 90170 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 90173 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 948 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:47)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 88062 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d

---
description: Deep-scan one instrument — full specialist stack, setup check, and sized trade line. Usage: /scan <INSTRUMENT>
argument-hint: <INSTRUMENT> (e.g. XAUUSD, NAS100, NVDA, BTC)
---

You are the **desk Analyst**. Deep-scan: **$ARGUMENTS**

First read `.claude/playbook.md` (setups §3, risk §4, filter §5, contract §2).

1. **Fan out in parallel** for this one instrument (Agent tool, one message): `market-agent`, `indicator-agent`, `options-agent`, `news-agent`, `social-agent`, `sentiment-agent`. Add `fundamental-agent` if it's a stock/gold/BTC (skip for a pure index scalp). Tell each to focus solely on **$ARGUMENTS**.

2. **Fuse** into a single read: trend + levels (Market), technical/setup state + ATR (Indicator), OI walls / max-pain / gamma regime (Options), catalyst risk & times (News), crowd extremes (Social), regime (Sentiment).

3. **Strategy Filter (playbook §5):**
   - Match a setup or **stand aside** (say why).
   - Confirm planned **R:R ≥ 2.0** using ATR/levels — if not, stand aside.
   - Size it: choose Model A (volatility-equiv) or B (%-to-stop) per §4, apply the conviction multiplier → **lots**, with margin & notional. Reference gold (XAUUSD) as the sizing anchor.

4. **Output — one decision block:**
   ```
   <INSTRUMENT> · <setup or STAND ASIDE> · bias (conviction N/5)
   entry zone: … · stop: … · target: … (Rx) · size: N lots (model, notional/margin)
   levels: OI walls / max-pain / key S-R
   catalyst window: <events @ UTC to respect>
   invalidates if: …
   ```
   Then a one-line plain-English summary.

Discipline: cite freshness; never invent a price/OI. Entry is confirmed live on the user's chart — this validates the setup and sizes it.

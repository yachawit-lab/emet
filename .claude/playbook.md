# Trading Desk — Playbook (single source of truth)

This file defines the universe, priority, setups, risk, sizing, and the output
contract for the multi-agent desk. Every specialist and command reads from here.
Lines marked **EDIT ME** are yours to tune.

---

## 1. Universe & priority

Attention/budget flows top-down. Gold gets the deepest read, index the lightest.

1. **Gold** — XAUUSD (proxies: GLD, GC, gold miners)
2. **Nasdaq & tech** — NAS100 / QQQ / NDX, plus the stock watchlist below
3. **Crypto** — BTC (Deribit + CME options); ETH secondary
4. **Index** — SPX500, US30, and NAS100 as an index read

### Stock watchlist (Nasdaq/tech) — big, liquid, day-tradeable

- **Core mega-cap (always scanned):** NVDA, TSLA, AAPL, AMZN, META, MSFT, GOOGL, AMD
- **Momentum / high-beta pool (scan when active):** AVGO, NFLX, PLTR, COIN, SMCI, MU, MSTR
- **Dynamic — "stocks of the day" (up to 3):** whatever the News + Social specialists
  surface as the session's real movers — gappers, earnings reactions, unusual volume,
  heavy social buzz. **Must clear a liquidity bar** (large-cap or very high volume) to
  be added — no illiquid lottery tickets. These get scanned *in addition to* the core list.

So a full sweep covers ~15 names + up to 3 movers of the day. **EDIT ME** to taste.

`/scan <INSTRUMENT>` overrides priority for whatever you name.

Broker context: **CFDs** (lots + leverage). Sizing is in **lots**, not shares.
Reference asset for volatility-equivalent sizing is **gold (XAUUSD)**.

---

## 2. The output contract (every specialist uses this)

Keep it compact and scannable. Never invent data.

```
[TAG] <INSTRUMENT>  bias: LONG|SHORT|NEUTRAL (conviction N/5)
  levels: support X / resistance Y | ATR ~Z%
  note: <one line, the "why">
  as-of: <time UTC or "prev close"> · source: <cite> · CONFIDENCE: live|delayed ~15m|stale
```

Data discipline (all agents):
- **Cite** every number with a source and a timestamp.
- **Never fabricate** a price, OI value, or headline. If unavailable, say so.
- Flag freshness: `live` / `delayed ~15m` / `prev close` / `stale`.
- Web quotes are delayed ~15 min — good for bias/levels/catalysts, **not** tick entries.

---

## 3. The setups (the only trades the filter approves)

Match one of these or **stand aside**. Each lists its trigger, stop, target, and
which specialists must confirm.

| Setup | Trigger | Stop | Target | Confirmed by |
|---|---|---|---|---|
| **VWAP Bounce** | Price reclaims & holds VWAP in a trending tape | Below the reclaim swing / other side of VWAP | Prior day level or next OI wall; ≥2R | Indicator (VWAP), Market (trend) |
| **Opening Range Breakout** | Break of first 5/15-min range **on volume** | Opposite side of the range | Measured move of the range; ≥2R | Indicator (OR, volume), News (catalyst ok) |
| **Trend Pullback** | Pullback to rising/falling EMA or prior structure in an established trend | Below the pullback swing | Trend continuation to next level; ≥2R | Market (trend), Indicator (EMA) |
| **Gap-and-Go** | Gap **with a catalyst**, continuation off the open | Below the opening candle | Next level / measured move; ≥2R | News (catalyst REQUIRED), Market |
| **Mean Reversion** | Fade an extreme into an OI wall / max-pain, **positive-gamma** regime | Beyond the extreme | VWAP / range mid; ≥2R | Options (gamma, wall), Sentiment |
| **Breakout Retest** | Break a level, retest holds | Below the retest low | Next OI wall / level; ≥2R | Market, Options (wall), Indicator |

Options/OI note: high-OI **call walls / put walls / max-pain** are the primary
structural levels. **Positive gamma** = fade extremes (favor Mean Reversion,
VWAP Bounce). **Negative gamma** = moves amplify (favor breakout/trend setups,
size down, respect squeeze risk).

---

## 4. Risk model — "both, depends on setup"

Default is volatility-equivalent; defined-stop setups use %-to-stop. **2R minimum** on every trade.

**Base risk unit = $250** ( ≈ 1% of ~$25k capital ). **EDIT ME.**

- **Model A — Volatility-equivalent (default, intraday):** size each instrument to
  the same **target daily swing = base risk unit**. Compute lots with
  `equivalentLot(targetSwing, { unitsPerLot, price, atrPct })` from `lib/position-size.ts`.
  Use for VWAP Bounce, Trend Pullback, Mean Reversion.
- **Model B — %-risk-to-stop (defined-stop setups):** risk the base unit across the
  distance to the stop → units → lots. Use for ORB, Gap-and-Go, Breakout Retest
  (where the stop distance is structural, not volatility-derived).

**Conviction scaling** (from the Analyst's fused conviction):

| Conviction | Multiplier |
|---|---|
| ≤ 2/5 | 0.5× (or skip) |
| 3/5 | 1.0× (base) |
| 4/5 | 1.25× |
| 5/5 | 1.5× (cap) |

**Minimum R:R = 2.0.** Anything under 2R → **stand aside**, no exceptions.

**Daily guardrails (EDIT ME):**
- Max daily loss: **3R (≈ $750)** → stop trading for the day.
- Max concurrent open risk: **2R**.
- After 2 consecutive losses: half size until a green trade.

---

## 5. The Strategy Filter (Analyst runs this after fusing specialists)

1. Fuse the 7 specialist verdicts → regime + best instrument (in priority order) + levels.
2. Does it match a setup in §3? **No → stand aside.**
3. Is planned R:R ≥ 2.0? **No → stand aside.**
4. Size it: pick Model A/B (§4), apply conviction multiplier → **lots**, margin, notional.
5. Emit one actionable line:
   `<INSTRUMENT> · <setup> · bias · entry zone · stop · target (Rx) · N lots · invalidates if <…>`
6. If guardrails hit (§4), say so and refuse the trade.

---

## 6. Two-pass session rhythm (Bangkok, UTC+7)

US regular open = 20:30 BKK (summer) / 21:30 BKK (winter). The desk runs twice:

- **Pass 1 — First Sign (scheduled, automatic).** A cloud routine runs `/premarket`
  ~1–1.5h before the open, whether or not the laptop is on. The user reads it on their
  phone during the commute home. This is the day's **thesis**: regime, catalysts, levels,
  the focus list.
- **Pass 2 — Confirmation (manual, at home before the open).** The user runs
  `/premarket confirm` and pastes (or summarizes) Pass 1. The desk re-sweeps fresh and
  **compares against the First Sign**, ending on one of:
  - **CONFIRMED** — thesis intact, levels/regime hold → trade the plan.
  - **CAUTION / CHANGED** — something moved since Pass 1 (news broke, gap shifted, regime
    flipped) → what changed, and whether the plan still stands or to stand aside.

The value is the **diff**: Pass 1 sets expectations early; Pass 2 catches anything
"unprecedented" that happened while the user was travelling, so they don't walk into a
stale thesis at the open.

---

## 7. Journaling back into Ledger (post-session)

Draft entries mapping to `lib/types.ts` `Trade` fields: `setup`, `thesis`,
`grade` (A+/A/B/C), `emotion`, `confidence` (1–5), `tags`
(from MISTAKE/QUALITY/MARKET tag sets), `followedPlan`, and `review`
(right / wrong / thesisCorrect / oneChange). Never invent fills — only journal
trades the user actually took.

---
description: Full pre-market desk sweep across the whole watchlist. Pass 1 = First Sign; run "/premarket confirm" at home for Pass 2. 
argument-hint: [confirm] — add "confirm" for the second (at-home) confirmation pass
---

You are the **desk Analyst**. Run the pre-market sweep.

Argument: **$ARGUMENTS** — if it contains **confirm**, this is **Pass 2 (Confirmation)**; otherwise **Pass 1 (First Sign)**.

First read `.claude/playbook.md` (universe + watchlist §1, contract §2 + freshness gate §2a +
live anchor §2b, setups §3, risk §4, filter §5 + entry contract §5a, **Macro Core §5b**,
two-pass rhythm §6).

## 1. Fan out in parallel

Spawn all seven specialists (Agent tool) in ONE message so they run concurrently:
`market-agent`, `indicator-agent`, `options-agent`, `news-agent`, `social-agent`, `sentiment-agent`, `fundamental-agent`.

**This is the session's one macro derivation.** `news-agent`, `sentiment-agent`, and
`fundamental-agent` answer instrument-independent questions — calendar, regime, rates. Their
output becomes the **Macro Core** that every `/scan` today reuses instead of re-deriving
(§5b). Instruct those three to be exhaustive on the session calendar (**exact UTC times**),
the rates/real-yield backdrop, and the risk regime, and to tag anything genuinely
instrument-specific (gold ↔ real yields, Nasdaq ↔ mega-cap earnings) under that instrument.

Tell them to cover the **whole universe in priority order** — do NOT collapse to one instrument:
- **Nasdaq/tech** (deepest read) → **Gold** → **BTC** → **Index**.
- Nasdaq/tech means the **full stock watchlist** (playbook §1): the 8 core mega-caps, the momentum pool where active, **plus** any **"stocks of the day"** the News and Social specialists nominate (gappers, earnings, unusual volume — must clear the liquidity bar).
- Explicitly instruct `news-agent` and `social-agent` to each nominate **up to 3 movers of the day**.

## 1b. Write the Macro Core (do this before fusing)

Write **`scans/macro_YYYYMMDD.md`** from the three macro specialists' output. Every `/scan`
today reads this file instead of respawning them (§5b). Structure:

```markdown
# Macro Core — YYYY-MM-DD
Derived once at <HH:MM UTC> by /premarket. Reused by all /scan runs today.

## Session calendar (UTC)     <- exact times, every event through Friday, columns:
                                 Time | Event | Consensus | Actual | Prior | Tier
                                 Actual = "pending" for events that haven't printed yet,
                                 "Data unavailable" if a print happened but couldn't be
                                 sourced. Once Actual is in, state actual vs. consensus
                                 explicitly (§2d) — that beat/miss is the tradeable fact,
                                 not the print alone.
## Regime                     <- VIX + term structure, F&G, breadth, credit, positioning
## Rates & USD                <- 10Y nominal, 10Y TIPS real, Fed path + hike odds (ONE number)
## Live catalysts             <- what is actually moving markets, with timestamps
## Per-instrument macro       <- gold <-> real yields; Nasdaq <-> earnings; BTC <-> risk appetite
## Event-risk windows         <- flat-by times
## Data gaps                  <- what could not be sourced
```

Rule: **one session, one macro truth.** If two instruments need the Fed hike odds, they get the
same number from this file — never two independently-derived ones.

## 2. Fuse

Sentiment regime first (the frame), then per-instrument bias in priority order. Merge the nominated movers into the tech list. Call out conflicts between specialists explicitly.

## 3. Apply the Strategy Filter (playbook §5)

For each instrument (priority order): does a playbook setup line up? For those that do, note setup, trigger to watch, key levels (incl. OI walls / max-pain), provisional size + stop for a **2R** target.

## 4. Output

**If Pass 1 (First Sign):**
- **Regime & catalysts** — sentiment + today's news events with UTC times; flag event-risk windows.
- **Per instrument (priority order)** — bias, key levels, OI structure, setup(s) to watch, invalidation.
- **Movers of the day** — the nominated names and why.
- **Focus list** — the 1–3 highest-conviction opportunities and their triggers.
- **Stand-aside notes** — avoid-list / guardrail blocks.
- End with a compact **"First Sign summary"** block the user can screenshot to their phone.

**If Pass 2 (Confirmation):**
- Ask the user to paste or summarize the Pass 1 First Sign if they haven't. If unavailable, proceed fresh and say so.
- Re-sweep, then lead with the **DIFF vs First Sign**:
  - **CONFIRMED** — thesis/levels/regime intact → trade the plan (restate the focus list).
  - **CAUTION / CHANGED** — what moved since Pass 1 (news broke, gap shifted, regime flipped), and whether each focus idea still stands or is now stand-aside.
- Then the same per-instrument + focus list, updated to now.

**Before showing the final output to the user, convert every clock time in it to Bangkok time
(UTC+7), shown as BKK only** (§2c) — session calendar, event-risk windows, movers' timestamps,
the First Sign summary block. The Macro Core file you wrote in step 1b stays in UTC; only the
chat-facing output gets converted.

Discipline: cite freshness (delayed ~15m / prev close). Never invent prices or OI. This is a *map*, not a fire signal — entries are confirmed live on the user's own chart.

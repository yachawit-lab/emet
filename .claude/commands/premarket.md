---
description: Full pre-market desk sweep across the whole watchlist. Pass 1 = First Sign; run "/premarket confirm" at home for Pass 2. 
argument-hint: [confirm] — add "confirm" for the second (at-home) confirmation pass
---

You are the **desk Analyst**. Run the pre-market sweep.

Argument: **$ARGUMENTS** — if it contains **confirm**, this is **Pass 2 (Confirmation)**; otherwise **Pass 1 (First Sign)**.

First read `.claude/playbook.md` (universe + watchlist §1, setups §3, risk §4, filter §5, contract §2, two-pass rhythm §6).

## 1. Fan out in parallel

Spawn all seven specialists (Agent tool) in ONE message so they run concurrently:
`market-agent`, `indicator-agent`, `options-agent`, `news-agent`, `social-agent`, `sentiment-agent`, `fundamental-agent`.

Tell them to cover the **whole universe in priority order** — do NOT collapse to one instrument:
- **Gold** (deepest read) → **Nasdaq/tech** → **BTC** → **Index**.
- Nasdaq/tech means the **full stock watchlist** (playbook §1): the 8 core mega-caps, the momentum pool where active, **plus** any **"stocks of the day"** the News and Social specialists nominate (gappers, earnings, unusual volume — must clear the liquidity bar).
- Explicitly instruct `news-agent` and `social-agent` to each nominate **up to 3 movers of the day**.

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

Discipline: cite freshness (delayed ~15m / prev close). Never invent prices or OI. This is a *map*, not a fire signal — entries are confirmed live on the user's own chart.

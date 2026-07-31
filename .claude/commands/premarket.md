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
- **Nasdaq/tech** (deepest read) → **Gold** → **BTC** (weekends only, see below) → **Index**.
- Nasdaq/tech means the **full stock watchlist** (playbook §1): the 8 core mega-caps, the momentum pool where active, **plus** any **"stocks of the day"** the News and Social specialists nominate (gappers, earnings, unusual volume — must clear the liquidity bar).
- Explicitly instruct `news-agent` and `social-agent` to each nominate **up to 3 movers of the day**.

**BTC gate (§1 "BTC — weekend-default, weekday opt-in"):** check today's day of week first. **Sat/Sun** → include BTC in the sweep as normal. **Mon-Fri** → skip BTC in this automatic sweep entirely (don't spend specialist budget on it); note in the output that BTC was skipped per the weekday default and can be pulled with an explicit `/ask` or `/scan BTC` if wanted.

## 1b. Write the Macro Core (do this before fusing)

Write **`scans/macro_YYYYMMDD.md`** from the three macro specialists' output. Every `/scan`
today reads this file instead of respawning them (§5b). **Convert every clock time to BKK before
writing (§2c)** — the specialists reasoned in UTC, the file is BKK. Structure:

```markdown
# Macro Core — YYYY-MM-DD
Derived once at <HH:MM BKK> by /premarket. Reused by all /scan runs today.

## Session calendar (BKK)     <- exact times, every event through Friday, columns:
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
## Event-risk windows         <- event times + tier (§4a), as warnings not restrictions
## Data gaps                  <- what could not be sourced
## Sources                    <- consolidated, deduped link list from all three macro
                                 specialists (§2d) — every citation, not a sample
```

Rule: **one session, one macro truth.** If two instruments need the Fed hike odds, they get the
same number from this file — never two independently-derived ones.

## 1c. Write the Structure Core (§5d)

`options-agent`'s sweep already covers the whole universe in one pass — use it to seed
**`scans/structure_YYYYMMDD.md`**, one section per instrument, so today's `/scan` and `/gamma`
calls don't respawn it for data that only changes once a day.

**Write it in full sentences, not compressed tag-lines.** This file gets read directly by the
user, not just by later `/scan` runs — the same "everything the user reads should actually be
readable" logic as §2c's timezone rule. Each instrument section should explain the gamma call,
the key levels, and the break-check trigger in plain prose a person can follow without decoding
shorthand, while still keeping the levels themselves in a scannable table. Structure per
instrument:

```markdown
# Structure Core — YYYY-MM-DD
Seeded at <HH:MM BKK> by /premarket. Each section refreshes independently when stale — either a
new day, or price closing through one of that instrument's break-check levels.

## <INSTRUMENT>
As of <HH:MM BKK>, based on options open interest as of <prev-close date> (OI updates once
daily via OCC — this is normal, not staleness).

### Gamma regime
State POSITIVE / NEGATIVE / UNKNOWN as a labeled finding, with one or two sentences on why —
cite net GEX and the zero-gamma flip level if sourced, or say plainly that no source was
reachable rather than guessing. Note the ±slop on any proxy-derived level.

### The key levels
A table: call wall, pin band (if one exists), max-pain, put wall — each with its raw strike,
the converted price in this instrument's terms, and the OI size behind it.

### The call
One or two sentences: pin or accelerate, and why — cite whether today's actual price action
corroborates the OI-implied levels, if it does.

### Break-check levels
State the upside and downside trigger explicitly, each with one sentence on what's beyond it
(the next magnet, or the absence of one — an air pocket is worth naming as such).

### Conversion & limits
If proxy-derived (e.g. GLD→gold, QQQ→NAS100), state the ratio, the sources of slop, and the
practical takeaway: these levels say which side of a line price is on, not where to place a
tick-precise stop.

### What's missing
Plain-sentence list of what couldn't be sourced, not a bare fragment list.
```

Convert to BKK before writing (§2c). Every wall/flip carries the same ±slop caveat options-agent
already flags — this file is a cache of that read, not a promotion to tick-precision.

## 2. Fuse

Sentiment regime first (the frame), then per-instrument bias in priority order. Merge the nominated movers into the tech list. Call out conflicts between specialists explicitly.

**Screen every read against §2e before it reaches the Macro Core file.** A self-contradicting
citation, a result for an event that hasn't happened, a category error, or a figure two other
specialists independently contradict → reject that agent's whole pass, never average its number
in, and record the rejection in the file's data gaps. A fabricated figure written into the Macro
Core propagates to every `/scan` that reuses it all day — this screen is the last chance to catch it.

## 3. Apply the Strategy Filter (playbook §5)

For each instrument (priority order): does a playbook setup line up? For those that do, note setup, trigger to watch, key levels (incl. OI walls / max-pain), provisional size + stop for a **2R** target.

**Apply the event-risk warnings (§4a)** — these do **not** block a setup or downgrade it to
map-only. Size normally, and attach the ⚠️ tier-1/tier-2 volatility warning to any idea sitting
inside a window. Record the event times in the Macro Core's event-risk section: §4a supplies the
warning language, the specialists supply the times.

## 4. Output

**If Pass 1 (First Sign):**
- **Regime & catalysts** — sentiment + today's news events with BKK times; flag event-risk windows.
- **Per instrument (priority order)** — bias, key levels, OI structure, setup(s) to watch, invalidation.
- **Movers of the day** — the nominated names and why.
- **Focus list** — the 1–3 highest-conviction opportunities and their triggers.
- **Stand-aside notes** — avoid-list / guardrail blocks.
- **Sources** — consolidated, deduped link list from all seven specialists (§2d). Mandatory in
  both the chat output and the Macro Core file — see the template's `## Sources` section below.
- End with a compact **"First Sign summary"** block the user can screenshot to their phone.

**If Pass 2 (Confirmation):**
- Ask the user to paste or summarize the Pass 1 First Sign if they haven't. If unavailable, proceed fresh and say so.
- Re-sweep, then lead with the **DIFF vs First Sign**:
  - **CONFIRMED** — thesis/levels/regime intact → trade the plan (restate the focus list).
  - **CAUTION / CHANGED** — what moved since Pass 1 (news broke, gap shifted, regime flipped), and whether each focus idea still stands or is now stand-aside.
- Then the same per-instrument + focus list, updated to now.

**Before showing the final output to the user, convert every clock time in it to Bangkok time
(UTC+7), shown as BKK only** (§2c) — session calendar, event-risk windows, movers' timestamps,
the First Sign summary block. The Macro Core file you wrote in step 1b is already in BKK (§2c) —
both the chat output and the saved file are BKK, only the specialists' own internal reasoning
stays UTC.

Discipline: cite freshness (delayed ~15m / prev close). Never invent prices or OI. This is a *map*, not a fire signal — entries are confirmed live on the user's own chart.

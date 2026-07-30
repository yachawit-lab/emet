# Structure Core — 2026-07-30

Seeded at 22:39 BKK by `/scan gold` — this is the desk's first Structure Core entry (playbook
§5d). Each instrument section below refreshes independently, either when a new day starts or
when price closes through one of the break-check levels listed for that instrument — whichever
comes first.

---

## GOLD (XAUUSD, via the GLD proxy)

**As of 22:39 BKK**, based on the prior trading day's options open interest (OCC snapshot from
2026-07-29 — this is standard; listed OI only updates once daily and can't reflect intraday
moves).

### Gamma regime: unknown, and that's a reported finding, not a gap being smoothed over

No source for GLD's net gamma exposure or its zero-gamma flip level could be reached — Barchart
and OptionCharts have this data gated, and CME's page didn't load. Rather than invent a number,
the regime is being reported as **UNKNOWN**.

There's one directional clue worth naming, but it's genuinely unverified: the August 21 monthly
options book is heavily call-weighted (put/call ratio of just 0.13). *If* the dealers on the
other side of those calls are short them — the usual setup when customers are buying calls to
chase gold higher — that would imply short gamma above the current price. But there's no way to
confirm which side of those trades the dealers are actually on, so this stays a hypothesis, not
a finding. For sizing purposes, an unknown gamma regime is treated the same as a positive one:
no haircut applied (playbook §4).

### The key levels

| Level | GLD strike | Gold equivalent | What it is |
|---|---|---|---|
| Call wall | 380–381 | 4,143–4,153 | 4,862 + 5,837 contracts (Jul 31 weekly) |
| Pin band (top) | 377 | 4,111 | 2,556 contracts |
| Pin band (bottom) | 375 | 4,089 | 3,693 contracts |
| Max pain | 370 | 4,034 | Computed here; corroborated elsewhere at ~371 / 4,045 |
| Put wall | 360 | 3,925 | 8,454 puts (Jul 31 weekly) |

Put/call ratio: **0.48** on the Jul 31 weekly (strikes 355–400), but **0.13** on the Aug 21
monthly (strikes 340–420) — an extreme call skew a month out.

### The call: pin first, then accelerate on a break

Price is expected to hold inside the **4,089–4,111** pin band unless one of the two edges
actually breaks. What makes this band worth trusting: it isn't just a theoretical OI cluster —
today's real price action already retested 4,088–4,089 and held, and separately broke out
through 4,100, both landing almost exactly on strikes in this same band. That's a strong
coincidence between the options structure and the tape.

If price closes **above 4,143**, that's the breakout trigger — the next magnets above are
4,198 (GLD 385), 4,253 (GLD 390), and 4,362 (GLD 400).

If price closes **below 4,089**, that's the breakdown trigger — and there's very little standing
in the way below it. No real put support exists again until 3,925 (GLD 360), so a genuine break
of 4,089 is likely to move fast rather than grind.

### Converting between GLD and gold — and why the numbers above aren't tick-precise

At the time of this snapshot, GLD traded at $375.92 against a gold anchor of 4,099, giving a
conversion ratio of **10.904** gold points per GLD point. That ratio carries a standing error
margin of roughly **±15 gold points**, from a few compounding sources: GLD quotes can run about
15 minutes behind spot, GLD's price drifts slightly from its net asset value because of the
fund's 0.40% fee, the user's broker itself runs at a small basis to spot, and options strikes are
only quoted in whole dollars, which is itself about 10.9 gold points of rounding.

**Practical takeaway:** use these levels to know which side of a line price is sitting on — not
to place a stop at the exact number.

### What's missing

- No COMEX (GC) strike-level open interest — the CME page was unreachable, so GLD is standing in
  as the full proxy rather than being cross-checked against the futures market directly.
- Gold-miner options (GDX) weren't pulled this pass — deprioritized in favor of the GLD/GC read.
- The two further-dated expiries checked (August 7 and August 14) returned identical put-OI
  figures across all three expiries — a clear data artifact, not real numbers. Both were
  discarded entirely rather than partially trusted.

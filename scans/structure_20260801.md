# Structure Core — 2026-08-01 (Saturday)
Seeded at 16:30 BKK by `/premarket` (BTC-only scope this run — the user asked for a Bitcoin-only
sweep, so only the BTC section below was derived; the other instruments were not touched today).
Each section refreshes independently when stale — either a new day, or price closing through one
of that instrument's break-check levels.

## BTC

As of 16:00 BKK (09:00 UTC), based on Deribit open interest as of 2026-08-01, one day after the
2026-07-31 monthly expiry settled and rolled off roughly 30% of the prior book. This section is a
post-settlement read, not a pre-settlement one — treat any BTC options figure dated Jul 31 or
earlier as describing the book that no longer exists.

### Gamma regime

**UNKNOWN.** There is no reputable public net-GEX or zero-gamma-flip series for BTC the way there
is for equity index options — every figure in circulation is a paywalled vendor model. One source
found during this sweep (a low-tier blog dated Jul 28) claimed BTC was in negative gamma, but its
own underlying page actually said positive gamma when checked directly — the claim contradicted
its own citation, so it was rejected outright rather than used. Because gamma is genuinely unknown
rather than confirmed positive or negative, size against it with the neutral 1.0× multiplier per
playbook §4, not the 0.75× negative-gamma haircut — but don't read "unknown" as quiet confirmation
of positive gamma either.

### The key levels

| Level | Strike | Notional / size | Note |
|---|---|---|---|
| Call wall | $70,000 | $943M | 2nd call wall at $72,000 ($888M) |
| Put wall | $60,000 | $1.17B | Largest single strike in the book; became the top position *during* July as positioning turned defensive for August |
| Max-pain | $64,000 | $9.6B notional, 149,000 contracts, P/C 0.28 | This is the **settled** Jul 31 expiry figure, not a forward one — price pinned to it within ~0.5% at settlement, but it does not carry forward to the Aug 7 weekly or Aug 28 monthly, and no forward max-pain figure could be sourced |

Book size post-settlement: $20.48B total notional OI across 321,563 contracts, down from $27.65B
pre-expiry (confirms the ~30% roll-off). Forward concentration by expiry: Sep 25 leads at $6.25B,
Dec 25 at $6.02B, Aug 28 (the next monthly) at only $3.15B — the near-dated August book is thin
relative to September/December, which argues for less pinning force over the next two weeks than
a typical post-monthly period would produce.

### The call

**Pin, not accelerate.** Spot (~$63,400) sits mid-cage between the $60,000 put wall and the
$70,000 call wall, with $65,000 the level that has repeatedly rejected moves higher. The call wall
readings are degraded by the same settlement roll-off — CoinDesk's Jul 31 notionals for $70k/$72k
almost certainly overstate the true post-expiry size, since they were measured around the
settlement window and included contracts that have since expired. Treat $70,000 as a resistance
region rather than a hard wall; the error runs one direction (true OI is lower than quoted), not
both.

### Break-check levels

- **Upside trigger: a close above $65,000.** Reclaiming and holding above $65,000 opens the door
  toward $70,000, and because the Aug 28 book is thin ($3.15B vs. $6B+ in Sep/Dec), a break here
  would likely face less dealer resistance than July's setup did — this is not a heavily defended
  ceiling right now.
- **Downside trigger: a close below $60,000.** This is where the single largest position in the
  entire book sits, so expect it defended hard on first touch — and expect a genuine loss of it to
  be disorderly, since that's exactly the level the crowd's own hedges are struck against. Beyond
  it: no OI-implied magnet was sourced, so treat sub-$60k as an air pocket rather than a level.

### Conversion & limits

No proxy conversion is involved — Deribit strikes are native USD/BTC, unlike GLD→gold or
QQQ→NAS100 reads elsewhere on the desk. The uncertainty here is staleness, not proxy math: the
$70,000/$72,000 call-wall notionals are measured mid-settlement and read high, and the $64,000
max-pain is a already-realized historical fact, not a forward target. Practical takeaway: these
levels say which side of the $60k–$65k cage price is on, not where to place a tick-precise stop —
same discipline as every other instrument's Structure Core section.

### What's missing

Forward max-pain for the Aug 7 weekly and Aug 28 monthly expiries could not be sourced — CoinGlass's
max-pain page renders client-side and returned nothing fetchable, and no outlet has published a
post-settlement recompute yet. Net GEX and the zero-gamma flip level are unavailable from any
public, non-paywalled source. Deribit's whole-book put/call OI ratio (as opposed to the 0.28
figure, which describes only the now-expired Jul 31 cohort) could not be sourced either — The
Block's series is chart-rendered with no retrievable value. CME BTC options OI was not retrievable
this pass, though Deribit is roughly 90% of crypto options OI, so this is a minor gap rather than
a materially incomplete read. One unverified flow report placed heavy block-trade activity at the
$76,000 strike on the Aug 28 expiry, but it couldn't be traced to a primary or vendor source, so it
is noted here only and does not appear in the levels table above.

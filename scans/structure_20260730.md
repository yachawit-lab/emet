# Structure Core — 2026-07-30
Seeded at 22:39 BKK by `/scan gold` (first Structure Core entry — playbook §5d). Each section
refreshed independently when stale (different day) or when a level breaks.

## GOLD (XAUUSD via GLD proxy)
  as-of: 22:39 BKK, OI basis: OCC prev-close (2026-07-29)
  gamma: UNKNOWN — no GEX/zero-gamma flip source could be reached (Barchart/OptionCharts
    gated, CME unreachable). Not invented. Directional inference only: Aug-21 book is
    call-heavy (P/C 0.13) which, IF dealers are short those calls, implies short gamma above
    spot — unverified, treat regime as unknown for sizing (§4 table: unknown = 1.0x, no haircut).
  call wall: GLD 380-381 → gold 4,143-4,153 (4,862 + 5,837 contracts, Jul-31 weekly)
  put wall: GLD 360 → gold 3,925 (8,454 puts, Jul-31 weekly)
  max-pain: GLD 370 → gold 4,034 (Jul-31 weekly; computed + corroborated ~371/4,045 elsewhere)
  P/C ratio: 0.48 (Jul-31 weekly, strikes 355-400) · 0.13 (Aug-21 monthly, 340-420 — extreme call skew)
  verdict: PIN (band 4,089-4,111) first, ACCELERATE on a break either side
  pin band: 4,089 (GLD 375, 3,693 calls) to 4,111 (GLD 377, 2,556 calls) — matched today's
    actual retest (4,088-4,089) and breakout (4,100) levels almost exactly
  break-check levels (§5d — either fires a re-run, not just a new day):
    UPSIDE: close through 4,143 (GLD 380) → next magnets 4,198 (385), 4,253 (390), 4,362 (400)
    DOWNSIDE: close through 4,089 (GLD 375) → air pocket, no real support until 3,925 (GLD 360)
  conversion: GLD $375.92 @ 22:39 BKK vs anchor 4,099 → ratio 10.904. Standard ±15 gold pt
    slop (GLD delay, NAV/spot fee bleed, broker basis, $1-strike granularity). Use for which
    side of a level price sits on — never as a tick-precise stop.
  data gaps: no COMEX GC strike-level OI (CME unreachable); miners (GDX) not pulled; two
    further-dated expiries (Aug-07, Aug-14) returned a transcription artifact and were
    discarded entirely rather than partially used.

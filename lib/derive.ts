import { DerivedTrade, EnrichedTrade, Outcome, Trade } from "./types";

const BREAKEVEN_EPSILON = 0.01;

/**
 * Compute every derived metric for a single trade from its stored fields.
 * This is the single source of truth — nothing here is ever persisted.
 */
export function deriveTrade(t: Trade): DerivedTrade {
  const isLong = t.side === "long";

  const grossPnl = isLong
    ? (t.exitPrice - t.entryPrice) * t.qty
    : (t.entryPrice - t.exitPrice) * t.qty;

  const netPnl = grossPnl - t.fees;

  const stopDistance = Math.abs(t.entryPrice - t.stop);
  const initialRisk = stopDistance * t.qty;

  const rMultiple = initialRisk > 0 ? netPnl / initialRisk : 0;

  const entryMs = new Date(t.entryTime).getTime();
  const exitMs = new Date(t.exitTime).getTime();
  const durationMin = Math.max(0, (exitMs - entryMs) / 60000);

  let outcome: Outcome = "breakeven";
  if (netPnl > BREAKEVEN_EPSILON) outcome = "win";
  else if (netPnl < -BREAKEVEN_EPSILON) outcome = "loss";

  const costBasis = t.entryPrice * t.qty;
  const returnPct = costBasis > 0 ? (netPnl / costBasis) * 100 : 0;

  const mfeR = initialRisk > 0 ? (t.mfe * t.qty) / initialRisk : 0;
  const maeR = initialRisk > 0 ? (t.mae * t.qty) / initialRisk : 0;

  const captureRate = mfeR > 0.0001 ? rMultiple / mfeR : null;

  const targetDistance = Math.abs(t.target - t.entryPrice);
  const plannedRR = stopDistance > 0 ? targetDistance / stopDistance : null;

  return {
    grossPnl,
    netPnl,
    initialRisk,
    rMultiple,
    durationMin,
    outcome,
    returnPct,
    mfeR,
    maeR,
    captureRate,
    plannedRR,
  };
}

export function enrich(t: Trade): EnrichedTrade {
  return { ...t, d: deriveTrade(t) };
}

export function enrichAll(trades: Trade[]): EnrichedTrade[] {
  return trades.map(enrich);
}

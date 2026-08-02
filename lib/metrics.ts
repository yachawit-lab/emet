import { EnrichedTrade, Grade, STARTING_CAPITAL } from "./types";

export interface Metrics {
  count: number;
  netPnl: number;
  grossPnl: number;
  winRate: number; // 0..1
  profitFactor: number | null; // null when no losses
  expectancy: number; // mean R multiple
  avgWin: number; // $ avg of winning trades
  avgLoss: number; // $ avg of losing trades (negative)
  payoffRatio: number | null; // avgWin / |avgLoss|
  maxDrawdown: number; // $ (negative or 0)
  maxDrawdownPct: number; // % relative to STARTING_CAPITAL + peak
  recoveryFactor: number | null; // netPnl / |maxDrawdown|, null when no drawdown occurred
  sharpe: number | null; // annualized, based on daily returns
  largestWin: number;
  largestLoss: number;
  longestWinStreak: number;
  longestLossStreak: number;
  avgHoldMin: number;
  bestDay: { date: string; net: number } | null;
  worstDay: { date: string; net: number } | null;
  avgCaptureRate: number | null;
  executionScore: number; // 0..100
  adherenceRate: number; // 0..1
  wins: number;
  losses: number;
  breakevens: number;
  totalFees: number;
}

function dayKey(iso: string): string {
  return iso.slice(0, 10);
}

const GRADE_SCORE: Record<Grade, number> = { "A+": 100, A: 90, B: 72, C: 48 };
const GOOD_EMOTIONS = new Set(["Calm", "Confident", "Neutral"]);

function mean(nums: number[]): number {
  if (nums.length === 0) return 0;
  return nums.reduce((s, n) => s + n, 0) / nums.length;
}

function stdev(nums: number[]): number {
  if (nums.length < 2) return 0;
  const m = mean(nums);
  const variance = mean(nums.map((n) => (n - m) ** 2));
  return Math.sqrt(variance);
}

export function computeMetrics(trades: EnrichedTrade[]): Metrics {
  const count = trades.length;
  if (count === 0) {
    return {
      count: 0,
      netPnl: 0,
      grossPnl: 0,
      winRate: 0,
      profitFactor: null,
      expectancy: 0,
      avgWin: 0,
      avgLoss: 0,
      payoffRatio: null,
      maxDrawdown: 0,
      maxDrawdownPct: 0,
      recoveryFactor: null,
      sharpe: null,
      largestWin: 0,
      largestLoss: 0,
      longestWinStreak: 0,
      longestLossStreak: 0,
      avgHoldMin: 0,
      bestDay: null,
      worstDay: null,
      avgCaptureRate: null,
      executionScore: 0,
      adherenceRate: 0,
      wins: 0,
      losses: 0,
      breakevens: 0,
      totalFees: 0,
    };
  }

  const sorted = [...trades].sort(
    (a, b) => new Date(a.exitTime).getTime() - new Date(b.exitTime).getTime()
  );

  const netPnl = sorted.reduce((s, t) => s + t.d.netPnl, 0);
  const grossPnl = sorted.reduce((s, t) => s + t.d.grossPnl, 0);

  const wins = sorted.filter((t) => t.d.outcome === "win");
  const losses = sorted.filter((t) => t.d.outcome === "loss");
  const breakevens = sorted.filter((t) => t.d.outcome === "breakeven");

  const winRate = wins.length / count;

  const grossProfit = wins.reduce((s, t) => s + t.d.netPnl, 0);
  const grossLoss = Math.abs(losses.reduce((s, t) => s + t.d.netPnl, 0));
  const profitFactor = grossLoss > 0 ? grossProfit / grossLoss : wins.length > 0 ? null : null;

  const expectancy = mean(sorted.map((t) => t.d.rMultiple));

  const avgWin = wins.length > 0 ? mean(wins.map((t) => t.d.netPnl)) : 0;
  const avgLoss = losses.length > 0 ? mean(losses.map((t) => t.d.netPnl)) : 0;
  const payoffRatio = avgLoss !== 0 ? avgWin / Math.abs(avgLoss) : null;

  // Equity curve + drawdown, in exit-time order
  let running = 0;
  let peak = 0;
  let maxDrawdown = 0;
  let maxDrawdownPct = 0;
  for (const t of sorted) {
    running += t.d.netPnl;
    peak = Math.max(peak, running);
    const dd = running - peak;
    if (dd < maxDrawdown) {
      maxDrawdown = dd;
      const base = STARTING_CAPITAL + peak;
      maxDrawdownPct = base > 0 ? (dd / base) * 100 : 0;
    }
  }

  // Daily returns for Sharpe
  const byDay = new Map<string, number>();
  for (const t of sorted) {
    const k = dayKey(t.exitTime);
    byDay.set(k, (byDay.get(k) ?? 0) + t.d.netPnl);
  }
  const dailyReturns = Array.from(byDay.values()).map((v) => v / STARTING_CAPITAL);
  const sharpe =
    dailyReturns.length > 1 && stdev(dailyReturns) > 0
      ? (mean(dailyReturns) / stdev(dailyReturns)) * Math.sqrt(252)
      : null;

  let bestDay: { date: string; net: number } | null = null;
  let worstDay: { date: string; net: number } | null = null;
  for (const [date, net] of byDay.entries()) {
    if (!bestDay || net > bestDay.net) bestDay = { date, net };
    if (!worstDay || net < worstDay.net) worstDay = { date, net };
  }

  const largestWin = wins.length > 0 ? Math.max(...wins.map((t) => t.d.netPnl)) : 0;
  const largestLoss = losses.length > 0 ? Math.min(...losses.map((t) => t.d.netPnl)) : 0;

  let longestWinStreak = 0;
  let longestLossStreak = 0;
  let curWin = 0;
  let curLoss = 0;
  for (const t of sorted) {
    if (t.d.outcome === "win") {
      curWin += 1;
      curLoss = 0;
    } else if (t.d.outcome === "loss") {
      curLoss += 1;
      curWin = 0;
    } else {
      curWin = 0;
      curLoss = 0;
    }
    longestWinStreak = Math.max(longestWinStreak, curWin);
    longestLossStreak = Math.max(longestLossStreak, curLoss);
  }

  const recoveryFactor = maxDrawdown < 0 ? netPnl / Math.abs(maxDrawdown) : null;
  const totalFees = sorted.reduce((s, t) => s + t.fees, 0);

  const avgHoldMin = mean(sorted.map((t) => t.d.durationMin));

  const captures = sorted.map((t) => t.d.captureRate).filter((c): c is number => c !== null);
  const avgCaptureRate = captures.length > 0 ? mean(captures) : null;

  const adherenceRate = sorted.filter((t) => t.followedPlan).length / count;
  const gradeScore = mean(sorted.map((t) => GRADE_SCORE[t.grade]));
  const emotionScore =
    (sorted.filter((t) => GOOD_EMOTIONS.has(t.emotion)).length / count) * 100;
  const riskAmounts = sorted.map((t) => t.d.initialRisk).filter((r) => r > 0);
  const riskCv = riskAmounts.length > 1 ? stdev(riskAmounts) / mean(riskAmounts) : 0;
  const sizingScore = Math.max(0, 100 - riskCv * 100);

  const executionScore = Math.round(
    adherenceRate * 100 * 0.4 + gradeScore * 0.25 + emotionScore * 0.15 + sizingScore * 0.2
  );

  return {
    count,
    netPnl,
    grossPnl,
    winRate,
    profitFactor,
    expectancy,
    avgWin,
    avgLoss,
    payoffRatio,
    maxDrawdown,
    maxDrawdownPct,
    recoveryFactor,
    sharpe,
    largestWin,
    largestLoss,
    longestWinStreak,
    longestLossStreak,
    avgHoldMin,
    bestDay,
    worstDay,
    avgCaptureRate,
    executionScore: Math.max(0, Math.min(100, executionScore)),
    adherenceRate,
    wins: wins.length,
    losses: losses.length,
    breakevens: breakevens.length,
    totalFees,
  };
}

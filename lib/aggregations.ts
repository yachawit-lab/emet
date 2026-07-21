import { computeMetrics } from "./metrics";
import { EnrichedTrade } from "./types";

export const WEEKDAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const WEEKDAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function sortByExit(trades: EnrichedTrade[]): EnrichedTrade[] {
  return [...trades].sort((a, b) => new Date(a.exitTime).getTime() - new Date(b.exitTime).getTime());
}

export interface WeekdayHourCell {
  weekday: number;
  hour: number;
  netPnl: number;
  count: number;
  winRate: number;
}

export function weekdayHourHeatmap(trades: EnrichedTrade[]): WeekdayHourCell[] {
  const buckets = new Map<string, { net: number; count: number; wins: number }>();
  for (const t of trades) {
    const d = new Date(t.entryTime);
    const weekday = d.getUTCDay();
    const hour = d.getUTCHours();
    const key = `${weekday}-${hour}`;
    const cur = buckets.get(key) ?? { net: 0, count: 0, wins: 0 };
    cur.net += t.d.netPnl;
    cur.count += 1;
    if (t.d.outcome === "win") cur.wins += 1;
    buckets.set(key, cur);
  }
  const cells: WeekdayHourCell[] = [];
  for (const [key, v] of buckets.entries()) {
    const [weekday, hour] = key.split("-").map(Number);
    cells.push({
      weekday,
      hour,
      netPnl: v.net,
      count: v.count,
      winRate: v.count > 0 ? v.wins / v.count : 0,
    });
  }
  return cells;
}

export interface DailyPnl {
  net: number;
  trades: number;
}

export function dailyPnl(trades: EnrichedTrade[]): Map<string, DailyPnl> {
  const map = new Map<string, DailyPnl>();
  for (const t of trades) {
    const key = t.exitTime.slice(0, 10);
    const cur = map.get(key) ?? { net: 0, trades: 0 };
    cur.net += t.d.netPnl;
    cur.trades += 1;
    map.set(key, cur);
  }
  return map;
}

export interface EquityPoint {
  date: string;
  equity: number;
  drawdown: number;
}

export function equityCurve(trades: EnrichedTrade[]): EquityPoint[] {
  const sorted = sortByExit(trades);
  let running = 0;
  let peak = 0;
  return sorted.map((t) => {
    running += t.d.netPnl;
    peak = Math.max(peak, running);
    return { date: t.exitTime, equity: running, drawdown: running - peak };
  });
}

export interface ProcessPoint {
  date: string;
  cumEquity: number;
  cumExecutionScore: number;
}

export function processVsProfit(trades: EnrichedTrade[]): ProcessPoint[] {
  const sorted = sortByExit(trades);
  let running = 0;
  let scoreSum = 0;
  return sorted.map((t, i) => {
    running += t.d.netPnl;
    const gradeBonus = t.grade === "A+" ? 30 : t.grade === "A" ? 22 : t.grade === "B" ? 10 : 0;
    const perTradeScore = Math.max(0, Math.min(100, (t.followedPlan ? 65 : 25) + gradeBonus));
    scoreSum += perTradeScore;
    return { date: t.exitTime, cumEquity: running, cumExecutionScore: scoreSum / (i + 1) };
  });
}

export interface RollingPoint {
  date: string;
  winRate: number;
  expectancy: number;
  sharpe: number | null;
}

export function rollingMetrics(trades: EnrichedTrade[], window: number): RollingPoint[] {
  const sorted = sortByExit(trades);
  if (sorted.length < window) return [];
  const points: RollingPoint[] = [];
  for (let i = window - 1; i < sorted.length; i++) {
    const slice = sorted.slice(i - window + 1, i + 1);
    const m = computeMetrics(slice);
    points.push({ date: sorted[i].exitTime, winRate: m.winRate, expectancy: m.expectancy, sharpe: m.sharpe });
  }
  return points;
}

export interface ScatterPoint {
  tradeId: string;
  symbol: string;
  maeR: number;
  rMultiple: number;
}

export function maeScatter(trades: EnrichedTrade[]): ScatterPoint[] {
  return trades.map((t) => ({
    tradeId: t.id,
    symbol: t.symbol,
    maeR: t.d.maeR,
    rMultiple: t.d.rMultiple,
  }));
}

export interface HistogramBin {
  label: string;
  min: number;
  max: number;
  count: number;
  netPnl: number;
}

const HISTOGRAM_EDGES = [-3, -2, -1, 0, 1, 2, 3, 4, 5];

export function rMultipleHistogram(trades: EnrichedTrade[]): HistogramBin[] {
  const bins: HistogramBin[] = HISTOGRAM_EDGES.slice(0, -1).map((min, i) => ({
    label: `${min}R`,
    min,
    max: HISTOGRAM_EDGES[i + 1],
    count: 0,
    netPnl: 0,
  }));
  for (const t of trades) {
    const r = t.d.rMultiple;
    let bin = bins.find((b) => r >= b.min && r < b.max);
    if (!bin) bin = r < bins[0].min ? bins[0] : bins[bins.length - 1];
    bin.count += 1;
    bin.netPnl += t.d.netPnl;
  }
  return bins;
}

export interface BreakdownRow {
  key: string;
  netPnl: number;
  count: number;
  winRate: number;
}

function breakdownBy(trades: EnrichedTrade[], keyFn: (t: EnrichedTrade) => string): BreakdownRow[] {
  const groups = new Map<string, { net: number; count: number; wins: number }>();
  for (const t of trades) {
    const key = keyFn(t);
    const cur = groups.get(key) ?? { net: 0, count: 0, wins: 0 };
    cur.net += t.d.netPnl;
    cur.count += 1;
    if (t.d.outcome === "win") cur.wins += 1;
    groups.set(key, cur);
  }
  return Array.from(groups.entries()).map(([key, v]) => ({
    key,
    netPnl: v.net,
    count: v.count,
    winRate: v.count > 0 ? v.wins / v.count : 0,
  }));
}

export function breakdownBySymbol(trades: EnrichedTrade[]): BreakdownRow[] {
  return breakdownBy(trades, (t) => t.symbol).sort((a, b) => b.netPnl - a.netPnl);
}

export function breakdownBySetup(trades: EnrichedTrade[]): BreakdownRow[] {
  return breakdownBy(trades, (t) => t.setup).sort((a, b) => b.netPnl - a.netPnl);
}

export function breakdownByWeekday(trades: EnrichedTrade[]): BreakdownRow[] {
  const rows = breakdownBy(trades, (t) => WEEKDAY_SHORT[new Date(t.entryTime).getUTCDay()]);
  return rows.sort((a, b) => WEEKDAY_SHORT.indexOf(a.key) - WEEKDAY_SHORT.indexOf(b.key));
}

export interface TagStat {
  tag: string;
  count: number;
  winRate: number;
  avgR: number;
  netPnl: number;
}

export function tagLeaderboard(trades: EnrichedTrade[]): TagStat[] {
  const groups = new Map<string, { net: number; count: number; wins: number; rSum: number }>();
  for (const t of trades) {
    for (const tag of t.tags) {
      const cur = groups.get(tag) ?? { net: 0, count: 0, wins: 0, rSum: 0 };
      cur.net += t.d.netPnl;
      cur.count += 1;
      cur.rSum += t.d.rMultiple;
      if (t.d.outcome === "win") cur.wins += 1;
      groups.set(tag, cur);
    }
  }
  return Array.from(groups.entries())
    .map(([tag, v]) => ({
      tag,
      count: v.count,
      winRate: v.count > 0 ? v.wins / v.count : 0,
      avgR: v.count > 0 ? v.rSum / v.count : 0,
      netPnl: v.net,
    }))
    .sort((a, b) => b.count - a.count);
}

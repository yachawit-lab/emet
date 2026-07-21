import { weekdayHourHeatmap, WEEKDAY_NAMES, tagLeaderboard, breakdownBySetup } from "./aggregations";
import { computeMetrics } from "./metrics";
import { EnrichedTrade } from "./types";
import { formatCurrency, formatPercent } from "./format";

export interface Insight {
  id: string;
  tone: "positive" | "negative" | "neutral";
  text: string;
}

const MIN_SAMPLE = 5;

function hourLabel(h: number): string {
  const period = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}${period}`;
}

export function generateInsights(trades: EnrichedTrade[]): Insight[] {
  const insights: Insight[] = [];
  if (trades.length < MIN_SAMPLE) {
    return [
      {
        id: "not-enough-data",
        tone: "neutral",
        text: "Not enough trades in this selection yet to surface reliable patterns.",
      },
    ];
  }

  // Weakest contiguous hour window
  const cells = weekdayHourHeatmap(trades);
  const byHour = new Map<number, { net: number; count: number }>();
  for (const c of cells) {
    const cur = byHour.get(c.hour) ?? { net: 0, count: 0 };
    cur.net += c.netPnl;
    cur.count += c.count;
    byHour.set(c.hour, cur);
  }
  let worstHour: number | null = null;
  let worstNet = 0;
  for (const [hour, v] of byHour.entries()) {
    if (v.count >= MIN_SAMPLE && v.net < worstNet) {
      worstNet = v.net;
      worstHour = hour;
    }
  }
  if (worstHour !== null) {
    insights.push({
      id: "weak-hour",
      tone: "negative",
      text: `You lose the most trading around ${hourLabel(worstHour)}–${hourLabel(
        worstHour + 1
      )}, down ${formatCurrency(Math.abs(worstNet))} in this window.`,
    });
  }

  // Weekday
  const byWeekday = new Map<number, { net: number; count: number }>();
  for (const c of cells) {
    const cur = byWeekday.get(c.weekday) ?? { net: 0, count: 0 };
    cur.net += c.netPnl;
    cur.count += c.count;
    byWeekday.set(c.weekday, cur);
  }
  let worstDay: number | null = null;
  let worstDayNet = 0;
  let bestDay: number | null = null;
  let bestDayNet = 0;
  for (const [wd, v] of byWeekday.entries()) {
    if (v.count < MIN_SAMPLE) continue;
    if (v.net < worstDayNet) {
      worstDayNet = v.net;
      worstDay = wd;
    }
    if (v.net > bestDayNet) {
      bestDayNet = v.net;
      bestDay = wd;
    }
  }
  if (worstDay !== null) {
    insights.push({
      id: "weak-weekday",
      tone: "negative",
      text: `${WEEKDAY_NAMES[worstDay]}s are your weakest day, net ${formatCurrency(worstDayNet)} overall.`,
    });
  }
  if (bestDay !== null && bestDay !== worstDay) {
    insights.push({
      id: "strong-weekday",
      tone: "positive",
      text: `${WEEKDAY_NAMES[bestDay]}s are your strongest day, net ${formatCurrency(bestDayNet, { sign: true })}.`,
    });
  }

  // Tag leaderboard — costliest and most profitable behaviors
  const tags = tagLeaderboard(trades).filter((t) => t.count >= 3);
  const costliest = [...tags].sort((a, b) => a.netPnl - b.netPnl)[0];
  if (costliest && costliest.netPnl < 0) {
    insights.push({
      id: "costly-tag",
      tone: "negative",
      text: `"${costliest.tag}" trades have cost you ${formatCurrency(Math.abs(costliest.netPnl))} across ${costliest.count} trades.`,
    });
  }
  const mostProfitable = [...tags].sort((a, b) => b.netPnl - a.netPnl)[0];
  if (mostProfitable && mostProfitable.netPnl > 0 && mostProfitable.tag !== costliest?.tag) {
    insights.push({
      id: "profitable-tag",
      tone: "positive",
      text: `"${mostProfitable.tag}" trades are your most profitable behavior, adding ${formatCurrency(mostProfitable.netPnl, { sign: true })}.`,
    });
  }

  // Plan adherence
  const followed = trades.filter((t) => t.followedPlan);
  const notFollowed = trades.filter((t) => !t.followedPlan);
  if (followed.length >= MIN_SAMPLE && notFollowed.length >= MIN_SAMPLE) {
    const mFollowed = computeMetrics(followed);
    const mNot = computeMetrics(notFollowed);
    insights.push({
      id: "adherence",
      tone: "neutral",
      text: `When you follow your plan you win ${formatPercent(mFollowed.winRate * 100, { digits: 0 })} of the time vs ${formatPercent(
        mNot.winRate * 100,
        { digits: 0 }
      )} when you don't.`,
    });
  }

  // Best setup
  const setups = breakdownBySetup(trades).filter((s) => s.count >= MIN_SAMPLE);
  if (setups.length > 0) {
    const best = setups[0];
    if (best.netPnl > 0) {
      insights.push({
        id: "best-setup",
        tone: "positive",
        text: `"${best.key}" is carrying your account, net ${formatCurrency(best.netPnl, { sign: true })} across ${best.count} trades.`,
      });
    }
  }

  return insights.slice(0, 6);
}

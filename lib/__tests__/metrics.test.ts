import { describe, expect, it } from "vitest";
import { computeMetrics } from "../metrics";
import { enrich } from "../derive";
import { Trade } from "../types";

let counter = 0;
function mkTrade(overrides: Partial<Trade> = {}): Trade {
  counter += 1;
  return {
    id: `t${counter}`,
    symbol: "AAPL",
    side: "long",
    qty: 100,
    entryPrice: 100,
    exitPrice: 102,
    entryTime: `2026-01-0${(counter % 9) + 1}T14:30:00.000Z`,
    exitTime: `2026-01-0${(counter % 9) + 1}T15:00:00.000Z`,
    fees: 1,
    stop: 99,
    target: 103,
    mfe: 2,
    mae: 0.2,
    setup: "VWAP Bounce",
    tags: [],
    grade: "A",
    emotion: "Calm",
    confidence: 4,
    followedPlan: true,
    thesis: "",
    review: { right: "", wrong: "", thesisCorrect: true, oneChange: "" },
    account: "Main",
    isSeed: true,
    createdAt: "2026-01-01T14:30:00.000Z",
    updatedAt: "2026-01-01T15:00:00.000Z",
    ...overrides,
  };
}

describe("computeMetrics", () => {
  it("returns zeroed metrics for an empty set", () => {
    const m = computeMetrics([]);
    expect(m.count).toBe(0);
    expect(m.netPnl).toBe(0);
    expect(m.profitFactor).toBeNull();
    expect(m.sharpe).toBeNull();
  });

  it("computes win rate and net P&L across mixed trades", () => {
    const trades = [
      mkTrade({ exitPrice: 102 }), // win: net 199
      mkTrade({ exitPrice: 98 }),  // loss: net -201
      mkTrade({ exitPrice: 105 }), // win: net 499
    ].map(enrich);
    const m = computeMetrics(trades);
    expect(m.count).toBe(3);
    expect(m.wins).toBe(2);
    expect(m.losses).toBe(1);
    expect(m.winRate).toBeCloseTo(2 / 3);
    expect(m.netPnl).toBeCloseTo(199 - 201 + 499);
  });

  it("computes profit factor as gross profit / gross loss", () => {
    const trades = [
      mkTrade({ exitPrice: 102, fees: 0 }), // +200
      mkTrade({ exitPrice: 98, fees: 0 }),  // -200
      mkTrade({ exitPrice: 103, fees: 0 }), // +300
    ].map(enrich);
    const m = computeMetrics(trades);
    // grossProfit = 200+300=500, grossLoss=200 -> PF=2.5
    expect(m.profitFactor).toBeCloseTo(2.5);
  });

  it("computes expectancy as mean R-multiple", () => {
    const trades = [
      mkTrade({ exitPrice: 102, fees: 0 }), // R = (200)/100 = 2
      mkTrade({ exitPrice: 98, fees: 0 }),  // R = -200/100 = -2
    ].map(enrich);
    const m = computeMetrics(trades);
    expect(m.expectancy).toBeCloseTo(0);
  });

  it("tracks max drawdown across a losing streak", () => {
    const trades = [
      mkTrade({ exitPrice: 110, fees: 0, entryTime: "2026-01-01T14:00:00.000Z", exitTime: "2026-01-01T15:00:00.000Z" }), // +1000, peak=1000
      mkTrade({ exitPrice: 95, fees: 0, entryTime: "2026-01-02T14:00:00.000Z", exitTime: "2026-01-02T15:00:00.000Z" }),  // -500 -> equity 500, dd=-500
      mkTrade({ exitPrice: 90, fees: 0, entryTime: "2026-01-03T14:00:00.000Z", exitTime: "2026-01-03T15:00:00.000Z" }),  // -1000 -> equity -500, dd=-1500
    ].map(enrich);
    const m = computeMetrics(trades);
    expect(m.maxDrawdown).toBeCloseTo(-1500);
  });

  it("finds longest win and loss streaks", () => {
    const trades = [
      mkTrade({ exitPrice: 102 }),
      mkTrade({ exitPrice: 103 }),
      mkTrade({ exitPrice: 104 }),
      mkTrade({ exitPrice: 98 }),
      mkTrade({ exitPrice: 97 }),
    ].map(enrich);
    const m = computeMetrics(trades);
    expect(m.longestWinStreak).toBe(3);
    expect(m.longestLossStreak).toBe(2);
  });

  it("computes adherence rate from followedPlan", () => {
    const trades = [
      mkTrade({ followedPlan: true }),
      mkTrade({ followedPlan: true }),
      mkTrade({ followedPlan: false }),
    ].map(enrich);
    const m = computeMetrics(trades);
    expect(m.adherenceRate).toBeCloseTo(2 / 3);
  });

  it("keeps execution score within 0-100", () => {
    const trades = Array.from({ length: 5 }, () =>
      mkTrade({ followedPlan: false, grade: "C", emotion: "Anxious" })
    ).map(enrich);
    const m = computeMetrics(trades);
    expect(m.executionScore).toBeGreaterThanOrEqual(0);
    expect(m.executionScore).toBeLessThanOrEqual(100);
  });
});

import { describe, expect, it } from "vitest";
import { generateSeedTrades, SEED_VALUE, TRADE_COUNT, summarizeForSanity } from "../seed";
import { enrichAll } from "../derive";
import { computeMetrics } from "../metrics";

describe("generateSeedTrades", () => {
  it("is deterministic for a given seed", () => {
    const a = generateSeedTrades(SEED_VALUE, 50);
    const b = generateSeedTrades(SEED_VALUE, 50);
    expect(a).toEqual(b);
  });

  it("produces a different sequence for a different seed", () => {
    const a = generateSeedTrades(1, 50);
    const b = generateSeedTrades(2, 50);
    expect(a).not.toEqual(b);
  });

  it("generates the requested number of trades", () => {
    const trades = generateSeedTrades(SEED_VALUE, TRADE_COUNT);
    expect(trades).toHaveLength(TRADE_COUNT);
  });

  it("produces a net-profitable, believable win rate", () => {
    const trades = generateSeedTrades(SEED_VALUE, TRADE_COUNT);
    const { winRate, net } = summarizeForSanity(trades);
    expect(winRate).toBeGreaterThan(0.4);
    expect(winRate).toBeLessThan(0.65);
    expect(net).toBeGreaterThan(0);
  });

  it("has avg win greater than avg loss magnitude", () => {
    const trades = generateSeedTrades(SEED_VALUE, TRADE_COUNT);
    const m = computeMetrics(enrichAll(trades));
    expect(m.avgWin).toBeGreaterThan(Math.abs(m.avgLoss));
  });

  it("never produces negative quantities or non-positive prices", () => {
    const trades = generateSeedTrades(SEED_VALUE, TRADE_COUNT);
    for (const t of trades) {
      expect(t.qty).toBeGreaterThan(0);
      expect(t.entryPrice).toBeGreaterThan(0);
      expect(t.exitPrice).toBeGreaterThan(0);
      expect(t.mfe).toBeGreaterThanOrEqual(0);
      expect(t.mae).toBeGreaterThanOrEqual(0);
    }
  });

  it("keeps exitTime after entryTime", () => {
    const trades = generateSeedTrades(SEED_VALUE, TRADE_COUNT);
    for (const t of trades) {
      expect(new Date(t.exitTime).getTime()).toBeGreaterThanOrEqual(new Date(t.entryTime).getTime());
    }
  });

  it("bakes in a real weak-hour pattern that is discoverable in the data", () => {
    const trades = enrichAll(generateSeedTrades(SEED_VALUE, TRADE_COUNT));
    const weakHourTrades = trades.filter((t) => [11, 12].includes(new Date(t.entryTime).getUTCHours()));
    const otherTrades = trades.filter((t) => ![11, 12].includes(new Date(t.entryTime).getUTCHours()));
    const weakWinRate = weakHourTrades.filter((t) => t.d.outcome === "win").length / weakHourTrades.length;
    const otherWinRate = otherTrades.filter((t) => t.d.outcome === "win").length / otherTrades.length;
    expect(weakWinRate).toBeLessThan(otherWinRate);
  });

  it("shows worse outcomes when the plan was not followed", () => {
    const trades = enrichAll(generateSeedTrades(SEED_VALUE, TRADE_COUNT));
    const followed = trades.filter((t) => t.followedPlan);
    const notFollowed = trades.filter((t) => !t.followedPlan);
    const mFollowed = computeMetrics(followed);
    const mNot = computeMetrics(notFollowed);
    expect(mNot.expectancy).toBeLessThan(mFollowed.expectancy);
  });

  it("assigns unique ids to every trade", () => {
    const trades = generateSeedTrades(SEED_VALUE, TRADE_COUNT);
    const ids = new Set(trades.map((t) => t.id));
    expect(ids.size).toBe(trades.length);
  });
});

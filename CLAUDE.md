import { describe, expect, it } from "vitest";
import { applyFilters, presetRange, previousPeriodWindow } from "../filters";
import { enrich } from "../derive";
import { DEFAULT_FILTERS, Trade } from "../types";

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
    entryTime: "2026-01-05T14:30:00.000Z",
    exitTime: "2026-01-05T15:00:00.000Z",
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
    createdAt: "2026-01-05T14:30:00.000Z",
    updatedAt: "2026-01-05T15:00:00.000Z",
    ...overrides,
  };
}

describe("applyFilters", () => {
  const now = new Date("2026-01-10T12:00:00.000Z");

  it("filters by symbol", () => {
    const trades = [mkTrade({ symbol: "AAPL" }), mkTrade({ symbol: "NVDA" })].map(enrich);
    const out = applyFilters(trades, { ...DEFAULT_FILTERS, symbols: ["NVDA"] }, now);
    expect(out).toHaveLength(1);
    expect(out[0].symbol).toBe("NVDA");
  });

  it("filters by setup", () => {
    const trades = [
      mkTrade({ setup: "VWAP Bounce" }),
      mkTrade({ setup: "Gap-and-Go" }),
    ].map(enrich);
    const out = applyFilters(trades, { ...DEFAULT_FILTERS, setups: ["Gap-and-Go"] }, now);
    expect(out).toHaveLength(1);
  });

  it("filters by side", () => {
    const trades = [mkTrade({ side: "long" }), mkTrade({ side: "short" })].map(enrich);
    const out = applyFilters(trades, { ...DEFAULT_FILTERS, side: "short" }, now);
    expect(out).toHaveLength(1);
    expect(out[0].side).toBe("short");
  });

  it("filters by tags (any match)", () => {
    const trades = [
      mkTrade({ tags: ["Oversized"] }),
      mkTrade({ tags: ["Clean Setup"] }),
    ].map(enrich);
    const out = applyFilters(trades, { ...DEFAULT_FILTERS, tags: ["Oversized"] }, now);
    expect(out).toHaveLength(1);
  });

  it("applies the 7D preset relative to now", () => {
    const trades = [
      mkTrade({ entryTime: "2026-01-09T14:00:00.000Z" }), // within 7D
      mkTrade({ entryTime: "2025-12-01T14:00:00.000Z" }), // outside 7D
    ].map(enrich);
    const out = applyFilters(trades, { ...DEFAULT_FILTERS, preset: "7D" }, now);
    expect(out).toHaveLength(1);
  });

  it("applies custom date range", () => {
    const trades = [
      mkTrade({ entryTime: "2026-01-05T14:00:00.000Z" }),
      mkTrade({ entryTime: "2026-01-20T14:00:00.000Z" }),
    ].map(enrich);
    const out = applyFilters(
      trades,
      { ...DEFAULT_FILTERS, preset: "Custom", from: "2026-01-01", to: "2026-01-10" },
      now
    );
    expect(out).toHaveLength(1);
  });

  it("combines multiple filters with AND logic", () => {
    const trades = [
      mkTrade({ symbol: "AAPL", side: "long" }),
      mkTrade({ symbol: "AAPL", side: "short" }),
      mkTrade({ symbol: "NVDA", side: "long" }),
    ].map(enrich);
    const out = applyFilters(trades, { ...DEFAULT_FILTERS, symbols: ["AAPL"], side: "long" }, now);
    expect(out).toHaveLength(1);
  });
});

describe("presetRange", () => {
  it("returns null bounds for All", () => {
    const { from, to } = presetRange("All");
    expect(from).toBeNull();
    expect(to).toBeNull();
  });

  it("returns a 7-day window for 7D", () => {
    const now = new Date("2026-01-10T12:00:00.000Z");
    const { from, to } = presetRange("7D", now);
    expect(from).not.toBeNull();
    expect(to).not.toBeNull();
    const days = (to!.getTime() - from!.getTime()) / 86400000;
    expect(days).toBeCloseTo(7, 0);
  });
});

describe("previousPeriodWindow", () => {
  it("returns null for the All preset", () => {
    expect(previousPeriodWindow({ ...DEFAULT_FILTERS, preset: "All" })).toBeNull();
  });

  it("returns an equivalent-length window immediately before the current one", () => {
    const now = new Date("2026-01-10T12:00:00.000Z");
    const w = previousPeriodWindow({ ...DEFAULT_FILTERS, preset: "7D" }, now);
    const cur = presetRange("7D", now);
    expect(w).not.toBeNull();
    const curSpan = cur.to!.getTime() - cur.from!.getTime();
    const prevSpan = w!.to.getTime() - w!.from.getTime();
    expect(prevSpan).toBeCloseTo(curSpan, -2);
    expect(w!.to.getTime()).toBeLessThan(cur.from!.getTime());
  });
});

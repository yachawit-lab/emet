import { describe, expect, it } from "vitest";
import { deriveTrade } from "../derive";
import { Trade } from "../types";

function baseTrade(overrides: Partial<Trade> = {}): Trade {
  return {
    id: "t1",
    symbol: "AAPL",
    side: "long",
    qty: 100,
    entryPrice: 100,
    exitPrice: 102,
    entryTime: "2026-01-05T14:30:00.000Z",
    exitTime: "2026-01-05T15:00:00.000Z",
    fees: 2,
    stop: 99,
    target: 103,
    mfe: 2.5,
    mae: 0.3,
    setup: "VWAP Bounce",
    tags: [],
    grade: "A",
    emotion: "Calm",
    confidence: 4,
    followedPlan: true,
    thesis: "test",
    review: { right: "", wrong: "", thesisCorrect: true, oneChange: "" },
    account: "Main",
    isSeed: true,
    createdAt: "2026-01-05T14:30:00.000Z",
    updatedAt: "2026-01-05T15:00:00.000Z",
    ...overrides,
  };
}

describe("deriveTrade", () => {
  it("computes gross and net P&L for a long winner", () => {
    const t = baseTrade();
    const d = deriveTrade(t);
    expect(d.grossPnl).toBeCloseTo(200); // (102-100)*100
    expect(d.netPnl).toBeCloseTo(198); // minus $2 fees
  });

  it("computes gross and net P&L for a short winner", () => {
    const t = baseTrade({ side: "short", entryPrice: 100, exitPrice: 97, stop: 101 });
    const d = deriveTrade(t);
    expect(d.grossPnl).toBeCloseTo(300); // (100-97)*100
    expect(d.netPnl).toBeCloseTo(298);
  });

  it("computes R-multiple relative to initial risk", () => {
    const t = baseTrade(); // risk = |100-99|*100 = 100, net = 198
    const d = deriveTrade(t);
    expect(d.initialRisk).toBeCloseTo(100);
    expect(d.rMultiple).toBeCloseTo(1.98);
  });

  it("returns 0 R-multiple when stop equals entry (no risk defined)", () => {
    const t = baseTrade({ stop: 100 });
    const d = deriveTrade(t);
    expect(d.initialRisk).toBe(0);
    expect(d.rMultiple).toBe(0);
  });

  it("classifies outcome as win / loss / breakeven", () => {
    expect(deriveTrade(baseTrade({ exitPrice: 102 })).outcome).toBe("win");
    expect(deriveTrade(baseTrade({ exitPrice: 98 })).outcome).toBe("loss");
    // net pnl exactly 0
    expect(
      deriveTrade(baseTrade({ exitPrice: 100, fees: 0 })).outcome
    ).toBe("breakeven");
  });

  it("computes duration in minutes from entry/exit timestamps", () => {
    const d = deriveTrade(baseTrade());
    expect(d.durationMin).toBeCloseTo(30);
  });

  it("computes mfeR and maeR relative to initial risk", () => {
    const d = deriveTrade(baseTrade()); // risk = 100, mfe=2.5/share*100qty=250
    expect(d.mfeR).toBeCloseTo(2.5);
    expect(d.maeR).toBeCloseTo(0.3);
  });

  it("computes captureRate as realized R divided by mfeR", () => {
    const d = deriveTrade(baseTrade());
    expect(d.captureRate).toBeCloseTo(d.rMultiple / d.mfeR);
  });

  it("returns null captureRate when mfeR is ~0", () => {
    const d = deriveTrade(baseTrade({ mfe: 0 }));
    expect(d.captureRate).toBeNull();
  });

  it("computes plannedRR from target/stop distances", () => {
    // entry 100, stop 99 (risk 1), target 103 (reward 3) => plannedRR 3
    const d = deriveTrade(baseTrade());
    expect(d.plannedRR).toBeCloseTo(3);
  });

  it("handles a losing short trade correctly", () => {
    const t = baseTrade({ side: "short", entryPrice: 50, exitPrice: 53, stop: 49, qty: 10, fees: 1 });
    const d = deriveTrade(t);
    expect(d.grossPnl).toBeCloseTo(-30); // (50-53)*10
    expect(d.netPnl).toBeCloseTo(-31);
    expect(d.outcome).toBe("loss");
    expect(d.rMultiple).toBeCloseTo(-31 / 10); // risk = |50-49|*10=10
  });
});

import { describe, expect, it } from "vitest";
import {
  equivalentLot,
  marginRequired,
  notionalValue,
  targetDailySwing,
} from "../position-size";

describe("targetDailySwing", () => {
  it("multiplies lot by contract size, price, and ATR%", () => {
    // 0.05 lot * 100 oz/lot * $4000 * 1.5% = $300
    expect(targetDailySwing(0.05, { unitsPerLot: 100, price: 4000, atrPct: 1.5 })).toBeCloseTo(300);
  });
});

describe("equivalentLot", () => {
  it("solves for the lot that reproduces the target swing on another asset", () => {
    const target = targetDailySwing(0.05, { unitsPerLot: 100, price: 4000, atrPct: 1.5 });
    const lot = equivalentLot(target, { unitsPerLot: 1, price: 20000, atrPct: 1.0 });
    // reapplying the formula with the solved lot should reproduce the same target swing
    expect(targetDailySwing(lot, { unitsPerLot: 1, price: 20000, atrPct: 1.0 })).toBeCloseTo(target);
  });

  it("returns NaN instead of dividing by zero when ATR% is zero", () => {
    expect(equivalentLot(300, { unitsPerLot: 1, price: 100, atrPct: 0 })).toBeNaN();
  });
});

describe("notionalValue / marginRequired", () => {
  it("computes notional and margin from lot and leverage", () => {
    const notional = notionalValue(0.2, { unitsPerLot: 100, price: 4000 });
    expect(notional).toBeCloseTo(80000);
    expect(marginRequired(notional, 100)).toBeCloseTo(800);
  });
});

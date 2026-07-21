import { Trade } from "./types";
import { mulberry32, randRange } from "./prng";

export interface PricePoint {
  t: string;
  price: number;
}

/**
 * Generates a plausible intraday price path between entry and exit that touches
 * roughly the trade's MFE/MAE excursion, purely for chart illustration.
 */
export function syntheticPricePath(trade: Trade, steps = 40): PricePoint[] {
  const rand = mulberry32(
    Array.from(trade.id).reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7)
  );
  const entryMs = new Date(trade.entryTime).getTime();
  const exitMs = new Date(trade.exitTime).getTime();
  const span = Math.max(exitMs - entryMs, 60000);
  const isLong = trade.side === "long";

  const favorable = isLong ? trade.mfe : -trade.mfe;
  const adverse = isLong ? -trade.mae : trade.mae;
  const priceMove = trade.exitPrice - trade.entryPrice;

  const points: PricePoint[] = [];
  for (let i = 0; i <= steps; i++) {
    const frac = i / steps;
    const t = new Date(entryMs + frac * span);
    const trend = trade.entryPrice + priceMove * frac;
    const wobble =
      Math.sin(frac * Math.PI) *
      (frac < 0.5 ? favorable : adverse) *
      0.5 *
      (1 + randRange(rand, -0.2, 0.2));
    const noise = randRange(rand, -1, 1) * Math.abs(priceMove || 1) * 0.03;
    const price = i === 0 ? trade.entryPrice : i === steps ? trade.exitPrice : trend + wobble + noise;
    points.push({ t: t.toISOString(), price: Math.max(0.01, price) });
  }
  return points;
}

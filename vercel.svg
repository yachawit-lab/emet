import { chance, mulberry32, pick, pickN, randInt, randRange, Rand, weightedPick } from "./prng";
import {
  Account,
  Emotion,
  Grade,
  MISTAKE_TAGS,
  QUALITY_TAGS,
  MARKET_TAGS,
  SETUPS,
  Setup,
  Symbol,
  SYMBOLS,
  Trade,
} from "./types";
import { deriveTrade } from "./derive";

export const SEED_VALUE = 88172645;
export const TRADE_COUNT = 300;

/** Weak windows baked into generation so Analytics/Insights have something true to find. */
export const WEAK_HOURS = [11, 12];
export const WEAK_WEEKDAY = 1; // Monday (0 = Sunday)

interface SymbolProfile {
  base: number;
  drift: number; // total drift applied over the trailing 12 months
  vol: number; // day-to-day noise as a fraction of price
}

const SYMBOL_PROFILES: Record<Symbol, SymbolProfile> = {
  AAPL: { base: 178, drift: 0.18, vol: 0.012 },
  NVDA: { base: 480, drift: 0.55, vol: 0.028 },
  MSFT: { base: 360, drift: 0.15, vol: 0.011 },
  TSLA: { base: 215, drift: -0.05, vol: 0.032 },
  SPY: { base: 470, drift: 0.14, vol: 0.007 },
  QQQ: { base: 395, drift: 0.16, vol: 0.009 },
  AMZN: { base: 148, drift: 0.28, vol: 0.017 },
  META: { base: 355, drift: 0.32, vol: 0.02 },
  GOOGL: { base: 138, drift: 0.2, vol: 0.014 },
  AMD: { base: 112, drift: 0.22, vol: 0.026 },
};

const THESIS_TEMPLATES: Record<Setup, string[]> = {
  "VWAP Bounce": [
    "Looking for a reaction off VWAP with rising relative volume to ride the trend leg.",
    "Price pulled back into VWAP on light selling — expecting buyers to defend it.",
    "First test of VWAP after the open, want to see a rejection wick before entry.",
  ],
  "Opening Range Breakout": [
    "Coiling inside the opening range on shrinking volume, expecting a directional break.",
    "Strong pre-market trend, watching for a clean break of the first-15-minute range.",
    "Range is tight relative to ATR — breakout should carry if volume confirms.",
  ],
  "Trend Pullback": [
    "Higher-timeframe trend is clearly up, waiting for a pullback into the rising EMA.",
    "Pulling back to prior breakout level — treating it as continuation, not reversal.",
    "Trend intact on the daily, this dip into support looks like a normal retracement.",
  ],
  "Gap-and-Go": [
    "Gapped up on real news with volume — looking to join the move after first pullback.",
    "Gap holding above pre-market high, expecting momentum traders to keep pushing it.",
    "Clean gap with no overhead supply nearby, first five minutes will tell the story.",
  ],
  "Mean Reversion": [
    "Stretched well beyond the mean on the 5-minute, expecting a snap-back toward VWAP.",
    "Overextended move with RSI deep in exhaustion territory — fading the spike.",
    "Selling climax looks overdone relative to the news — sizing small for a reversion.",
  ],
  "Breakout Retest": [
    "Broke the key level with volume, now waiting patiently for a retest to hold.",
    "Retesting yesterday's breakout level from above — needs to hold as new support.",
    "Level was tested twice already, third test with lower volume looks like absorption.",
  ],
};

const RIGHT_TEMPLATES = [
  "Waited for confirmation instead of anticipating the move.",
  "Sized the position correctly relative to the setup quality.",
  "Cut losses quickly once the level failed.",
  "Let the winner run into the next resistance instead of scalping it.",
  "Stuck to the pre-market plan without second-guessing it.",
];
const WRONG_TEMPLATES = [
  "Entered before the actual trigger printed.",
  "Widened the stop mid-trade instead of accepting the loss.",
  "Sized up out of frustration from the prior trade.",
  "Exited into strength on emotion rather than at the planned target.",
  "Chased the move after missing the first entry.",
];
const ONE_CHANGE_TEMPLATES = [
  "Wait for the 5-minute close before entering.",
  "Pre-set the stop order instead of managing it manually.",
  "Skip the setup entirely when it forms inside the weak midday window.",
  "Cut size in half until adherence improves.",
  "Journal the thesis before entry, not after.",
];

const EMOTIONS_GOOD: Emotion[] = ["Calm", "Confident", "Neutral"];
const EMOTIONS_BAD: Emotion[] = ["Anxious", "Frustrated", "Excited"];

function isTradingDay(d: Date): boolean {
  const day = d.getUTCDay();
  return day !== 0 && day !== 6;
}

/** Pick a pseudo-random trading day in the trailing `days` window, biased toward recency. */
function randomTradingDate(rand: Rand, daysBack: number, now: Date): Date {
  for (let attempt = 0; attempt < 50; attempt++) {
    const offset = Math.floor(randRange(rand, 0, daysBack));
    const d = new Date(now);
    d.setUTCDate(d.getUTCDate() - offset);
    if (isTradingDay(d)) return d;
  }
  return now;
}

function priceForSymbol(rand: Rand, symbol: Symbol, dayFrac: number): number {
  const p = SYMBOL_PROFILES[symbol];
  // dayFrac: 0 = 12 months ago, 1 = today. Drift applied smoothly plus noise.
  const trendPrice = p.base * (1 + p.drift * (1 - dayFrac) * -1 + p.drift * dayFrac);
  const noise = 1 + randRange(rand, -p.vol * 3, p.vol * 3);
  return Math.max(1, trendPrice * noise);
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/** Generates the full deterministic mock trade set. */
export function generateSeedTrades(seed: number = SEED_VALUE, count: number = TRADE_COUNT): Trade[] {
  const rand = mulberry32(seed);
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0);

  const trades: Trade[] = [];

  for (let i = 0; i < count; i++) {
    const date = randomTradingDate(rand, 365, now);
    const dayFrac = 1 - (now.getTime() - date.getTime()) / (365 * 86400000);

    const hour = weightedPick<number>(rand, [
      [9, 3],
      [10, 4],
      [11, 2.5],
      [12, 2],
      [13, 2.5],
      [14, 3],
      [15, 3.5],
    ]);
    const minute = randInt(rand, 0, 59);
    const entryTime = new Date(date);
    entryTime.setUTCHours(hour, minute, 0, 0);

    const weekday = entryTime.getUTCDay();

    const symbol = pick(rand, SYMBOLS);
    const setup = pick(rand, SETUPS);
    const side = chance(rand, 0.62) ? "long" : "short";
    const account: Account = chance(rand, 0.88) ? "Main" : "Swing";

    const entryPrice = round2(priceForSymbol(rand, symbol, Math.max(0, Math.min(1, dayFrac))));

    // --- Plan adherence & the "weak window" pattern -----------------------
    const impulsive = chance(rand, 0.22);
    const followedPlan = !impulsive && chance(rand, 0.86);

    let q = 0.62; // baseline edge
    if (WEAK_HOURS.includes(hour)) q -= 0.15;
    if (weekday === WEAK_WEEKDAY) q -= 0.08;
    if (!followedPlan) q -= 0.22;
    q = Math.max(0.06, Math.min(0.92, q));

    const oversized = chance(rand, 0.14);

    // --- Risk plan ----------------------------------------------------------
    const stopPct = randRange(rand, 0.003, 0.012);
    const stopDistance = round2(entryPrice * stopPct) || 0.05;
    const riskDollars = oversized ? randRange(rand, 220, 420) : randRange(rand, 70, 200);
    const qty = Math.max(1, Math.round(riskDollars / stopDistance));
    const stop = round2(side === "long" ? entryPrice - stopDistance : entryPrice + stopDistance);
    const plannedRR = randRange(rand, 1.2, 3.2);
    const target = round2(
      side === "long"
        ? entryPrice + stopDistance * plannedRR
        : entryPrice - stopDistance * plannedRR
    );

    // --- Outcome --------------------------------------------------------
    const roll = rand();
    let realizedR: number;
    if (roll < 0.02) {
      realizedR = randRange(rand, -0.05, 0.05); // breakeven
    } else if (roll < 0.02 + q) {
      // win — skew toward smaller wins, occasional runner past plan
      const t = Math.pow(rand(), 1.3);
      realizedR = 0.25 + t * (plannedRR * 1.2 - 0.25);
    } else {
      // loss — deeper / more variable when the plan wasn't followed
      const lo = followedPlan ? -1.0 : -1.9;
      realizedR = randRange(rand, lo, -0.15);
    }

    const initialRisk = stopDistance * qty;
    const netPnl = realizedR * initialRisk;
    const fees = round2(Math.max(1, qty * randRange(rand, 0.005, 0.01) * 2));
    const grossPnl = netPnl + fees;
    const priceMove = grossPnl / qty;
    const exitPrice = round2(side === "long" ? entryPrice + priceMove : entryPrice - priceMove);

    const durationMin = Math.round(randRange(rand, 4, 210));
    const exitTime = new Date(entryTime.getTime() + durationMin * 60000);

    // --- Excursions -------------------------------------------------------
    const realizedFavorable = Math.max(0, priceMove);
    const realizedAdverse = Math.max(0, -priceMove);
    const mfe = round2(realizedFavorable + randRange(rand, 0, stopDistance * 0.9));
    const maeBase = followedPlan ? stopDistance * 0.9 : stopDistance * 1.6;
    const mae = round2(Math.max(realizedAdverse, randRange(rand, 0, maeBase)));

    // --- Tags, grade, emotion, reflection ------------------------------
    const tags = new Set<string>();
    if (!followedPlan) {
      pickN(rand, MISTAKE_TAGS, randInt(rand, 1, 2)).forEach((t) => tags.add(t));
    } else if (chance(rand, 0.4)) {
      pickN(rand, QUALITY_TAGS, 1).forEach((t) => tags.add(t));
    }
    if (oversized) tags.add("Oversized");
    if (chance(rand, 0.35)) pickN(rand, MARKET_TAGS, 1).forEach((t) => tags.add(t));

    let grade: Grade;
    if (realizedR > 1.5 && followedPlan) grade = chance(rand, 0.5) ? "A+" : "A";
    else if (realizedR > 0.3) grade = followedPlan ? "A" : "B";
    else if (realizedR > -0.3) grade = "B";
    else grade = followedPlan ? "B" : "C";

    const emotion = followedPlan
      ? pick(rand, EMOTIONS_GOOD)
      : pick(rand, EMOTIONS_BAD);
    const confidence = (Math.max(1, Math.min(5, Math.round(2.5 + realizedR + randRange(rand, -1, 1)))) as 1 | 2 | 3 | 4 | 5);

    const thesis = pick(rand, THESIS_TEMPLATES[setup]);
    const review = {
      right: pick(rand, RIGHT_TEMPLATES),
      wrong: followedPlan ? "" : pick(rand, WRONG_TEMPLATES),
      thesisCorrect: realizedR > 0,
      oneChange: pick(rand, ONE_CHANGE_TEMPLATES),
    };

    const id = `seed-${i.toString().padStart(4, "0")}`;
    trades.push({
      id,
      symbol,
      side,
      qty,
      entryPrice,
      exitPrice,
      entryTime: entryTime.toISOString(),
      exitTime: exitTime.toISOString(),
      fees,
      stop,
      target,
      mfe,
      mae,
      setup,
      tags: Array.from(tags),
      grade,
      emotion,
      confidence,
      followedPlan,
      thesis,
      review,
      account,
      isSeed: true,
      createdAt: entryTime.toISOString(),
      updatedAt: exitTime.toISOString(),
    });
  }

  trades.sort((a, b) => new Date(a.entryTime).getTime() - new Date(b.entryTime).getTime());
  return trades;
}

/** Sanity re-derivation used by the generator's own tests. */
export function summarizeForSanity(trades: Trade[]) {
  const enriched = trades.map((t) => ({ t, d: deriveTrade(t) }));
  const wins = enriched.filter((e) => e.d.outcome === "win").length;
  const net = enriched.reduce((s, e) => s + e.d.netPnl, 0);
  return { winRate: wins / trades.length, net, count: trades.length };
}

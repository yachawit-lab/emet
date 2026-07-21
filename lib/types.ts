export type Side = "long" | "short";
export type Account = "Main" | "Swing";
export type Grade = "A+" | "A" | "B" | "C";
export type Emotion = "Calm" | "Confident" | "Neutral" | "Anxious" | "Frustrated" | "Excited";
export type Outcome = "win" | "loss" | "breakeven";
export type ValueMode = "$" | "R" | "%";
export type DatePreset = "7D" | "30D" | "90D" | "YTD" | "1Y" | "All" | "Custom";

export type Setup =
  | "VWAP Bounce"
  | "Opening Range Breakout"
  | "Trend Pullback"
  | "Gap-and-Go"
  | "Mean Reversion"
  | "Breakout Retest";

export const SETUPS: Setup[] = [
  "VWAP Bounce",
  "Opening Range Breakout",
  "Trend Pullback",
  "Gap-and-Go",
  "Mean Reversion",
  "Breakout Retest",
];

export type Symbol =
  | "AAPL"
  | "NVDA"
  | "MSFT"
  | "TSLA"
  | "SPY"
  | "QQQ"
  | "AMZN"
  | "META"
  | "GOOGL"
  | "AMD";

export const SYMBOLS: Symbol[] = [
  "AAPL",
  "NVDA",
  "MSFT",
  "TSLA",
  "SPY",
  "QQQ",
  "AMZN",
  "META",
  "GOOGL",
  "AMD",
];

export const ACCOUNTS: Account[] = ["Main", "Swing"];

export const MISTAKE_TAGS = [
  "FOMO Entry",
  "Moved Stop",
  "Oversized",
  "Revenge Trade",
  "Chased Entry",
  "No Plan",
] as const;

export const QUALITY_TAGS = [
  "Clean Setup",
  "Patient Entry",
  "Followed Plan",
  "Good R:R",
] as const;

export const MARKET_TAGS = [
  "High Volume",
  "News Catalyst",
  "Choppy Tape",
  "Trend Day",
] as const;

export const ALL_TAGS: string[] = [...MISTAKE_TAGS, ...QUALITY_TAGS, ...MARKET_TAGS];

/** Starting account size used to express drawdown and Sharpe as a percentage of capital. */
export const STARTING_CAPITAL = 25000;

export interface TradeReview {
  right: string;
  wrong: string;
  thesisCorrect: boolean;
  oneChange: string;
}

export interface Trade {
  id: string;
  symbol: string;
  side: Side;
  qty: number;
  entryPrice: number;
  exitPrice: number;
  entryTime: string;
  exitTime: string;
  fees: number;
  stop: number;
  target: number;
  mfe: number;
  mae: number;
  setup: string;
  tags: string[];
  grade: Grade;
  emotion: Emotion;
  confidence: 1 | 2 | 3 | 4 | 5;
  followedPlan: boolean;
  thesis: string;
  review: TradeReview;
  account: string;
  isSeed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DerivedTrade {
  grossPnl: number;
  netPnl: number;
  initialRisk: number;
  rMultiple: number;
  durationMin: number;
  outcome: Outcome;
  returnPct: number;
  mfeR: number;
  maeR: number;
  captureRate: number | null;
  plannedRR: number | null;
}

export interface EnrichedTrade extends Trade {
  d: DerivedTrade;
}

export interface FilterState {
  preset: DatePreset;
  from: string | null;
  to: string | null;
  symbols: string[];
  setups: string[];
  tags: string[];
  side: "all" | Side;
}

export const DEFAULT_FILTERS: FilterState = {
  preset: "All",
  from: null,
  to: null,
  symbols: [],
  setups: [],
  tags: [],
  side: "all",
};

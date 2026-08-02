/**
 * Volatility-equivalent position sizing.
 *
 * Lot size and leverage are contract/margin mechanics, not volatility — a
 * given lot on two different instruments can carry wildly different dollar
 * risk. These helpers size every instrument off one reference asset so each
 * position carries roughly the same typical daily dollar swing:
 *
 *   target swing = lot * unitsPerLot * price * (atrPct / 100)
 */

export interface AssetInputs {
  unitsPerLot: number;
  price: number;
  atrPct: number;
}

export type AssetCategory = "Crypto" | "Stocks" | "Indices" | "FX";

export interface AssetPreset extends AssetInputs {
  id: string;
  ticker: string;
  name: string;
  category: AssetCategory;
}

/** Illustrative example values, not live data — edit to your broker's contract spec and current ATR. */
export const REFERENCE_PRESET: { ticker: string; name: string; lot: number } & AssetInputs = {
  ticker: "XAUUSD",
  name: "Gold Spot",
  lot: 0.05,
  unitsPerLot: 100,
  price: 4044,
  atrPct: 1.4,
};

export const DEFAULT_LEVERAGE = 100;

export const DEFAULT_ASSETS: AssetPreset[] = [
  // Crypto CFDs are typically 1 coin per lot (unlike stocks, the coin price alone already
  // puts a lot's notional in the same ballpark as a forex/gold lot) — verify with your broker.
  { id: "btcusd", ticker: "BTCUSD", name: "Bitcoin", category: "Crypto", unitsPerLot: 1, price: 100000, atrPct: 3.5 },
  { id: "ethusd", ticker: "ETHUSD", name: "Ether", category: "Crypto", unitsPerLot: 1, price: 3500, atrPct: 4.5 },

  // Stock CFDs commonly use a 100-shares-per-lot contract (like FX's 100,000-per-lot
  // convention), not "1 lot = 1 share" — verify against your broker's specification.
  { id: "aapl", ticker: "AAPL", name: "Apple", category: "Stocks", unitsPerLot: 100, price: 230, atrPct: 2.0 },
  { id: "msft", ticker: "MSFT", name: "Microsoft", category: "Stocks", unitsPerLot: 100, price: 420, atrPct: 1.8 },
  { id: "googl", ticker: "GOOGL", name: "Alphabet", category: "Stocks", unitsPerLot: 100, price: 319, atrPct: 2.2 },
  { id: "amzn", ticker: "AMZN", name: "Amazon", category: "Stocks", unitsPerLot: 100, price: 195, atrPct: 2.5 },
  { id: "meta", ticker: "META", name: "Meta Platforms", category: "Stocks", unitsPerLot: 100, price: 550, atrPct: 2.8 },
  { id: "nvda", ticker: "NVDA", name: "Nvidia", category: "Stocks", unitsPerLot: 100, price: 140, atrPct: 4.0 },
  { id: "tsla", ticker: "TSLA", name: "Tesla", category: "Stocks", unitsPerLot: 100, price: 260, atrPct: 4.5 },
  { id: "amd", ticker: "AMD", name: "Advanced Micro Devices", category: "Stocks", unitsPerLot: 100, price: 160, atrPct: 3.8 },
  { id: "nflx", ticker: "NFLX", name: "Netflix", category: "Stocks", unitsPerLot: 100, price: 700, atrPct: 2.6 },
  { id: "avgo", ticker: "AVGO", name: "Broadcom", category: "Stocks", unitsPerLot: 100, price: 180, atrPct: 2.4 },
  { id: "orcl", ticker: "ORCL", name: "Oracle", category: "Stocks", unitsPerLot: 100, price: 160, atrPct: 2.2 },
  { id: "crm", ticker: "CRM", name: "Salesforce", category: "Stocks", unitsPerLot: 100, price: 300, atrPct: 2.3 },
  { id: "adbe", ticker: "ADBE", name: "Adobe", category: "Stocks", unitsPerLot: 100, price: 480, atrPct: 2.1 },
  { id: "intc", ticker: "INTC", name: "Intel", category: "Stocks", unitsPerLot: 100, price: 30, atrPct: 3.2 },
  { id: "qcom", ticker: "QCOM", name: "Qualcomm", category: "Stocks", unitsPerLot: 100, price: 170, atrPct: 2.4 },
  { id: "jpm", ticker: "JPM", name: "JPMorgan Chase", category: "Stocks", unitsPerLot: 100, price: 220, atrPct: 1.6 },
  { id: "bac", ticker: "BAC", name: "Bank of America", category: "Stocks", unitsPerLot: 100, price: 42, atrPct: 1.9 },
  { id: "gs", ticker: "GS", name: "Goldman Sachs", category: "Stocks", unitsPerLot: 100, price: 550, atrPct: 1.8 },
  { id: "v", ticker: "V", name: "Visa", category: "Stocks", unitsPerLot: 100, price: 300, atrPct: 1.4 },
  { id: "ma", ticker: "MA", name: "Mastercard", category: "Stocks", unitsPerLot: 100, price: 500, atrPct: 1.4 },
  { id: "jnj", ticker: "JNJ", name: "Johnson & Johnson", category: "Stocks", unitsPerLot: 100, price: 155, atrPct: 1.1 },
  { id: "pg", ticker: "PG", name: "Procter & Gamble", category: "Stocks", unitsPerLot: 100, price: 170, atrPct: 1.0 },
  { id: "ko", ticker: "KO", name: "Coca-Cola", category: "Stocks", unitsPerLot: 100, price: 65, atrPct: 1.0 },
  { id: "wmt", ticker: "WMT", name: "Walmart", category: "Stocks", unitsPerLot: 100, price: 90, atrPct: 1.3 },
  { id: "xom", ticker: "XOM", name: "Exxon Mobil", category: "Stocks", unitsPerLot: 100, price: 115, atrPct: 1.7 },
  { id: "cvx", ticker: "CVX", name: "Chevron", category: "Stocks", unitsPerLot: 100, price: 160, atrPct: 1.6 },
  { id: "dis", ticker: "DIS", name: "Disney", category: "Stocks", unitsPerLot: 100, price: 110, atrPct: 2.0 },
  { id: "ba", ticker: "BA", name: "Boeing", category: "Stocks", unitsPerLot: 100, price: 180, atrPct: 3.0 },
  { id: "nke", ticker: "NKE", name: "Nike", category: "Stocks", unitsPerLot: 100, price: 80, atrPct: 2.3 },
  { id: "pypl", ticker: "PYPL", name: "PayPal", category: "Stocks", unitsPerLot: 100, price: 75, atrPct: 2.7 },

  // Index CFDs are typically $1 per point per lot, but this is the most broker-variable
  // convention here besides stocks — some brokers use 10x or other multipliers, verify.
  { id: "nas100", ticker: "NAS100", name: "US Tech 100", category: "Indices", unitsPerLot: 1, price: 28260, atrPct: 1.3 },
  { id: "us30", ticker: "US30", name: "Dow Jones", category: "Indices", unitsPerLot: 1, price: 40000, atrPct: 0.9 },
  { id: "spx500", ticker: "SPX500", name: "S&P 500", category: "Indices", unitsPerLot: 1, price: 5600, atrPct: 1.0 },
  { id: "ger40", ticker: "GER40", name: "DAX", category: "Indices", unitsPerLot: 1, price: 18500, atrPct: 1.1 },
  { id: "uk100", ticker: "UK100", name: "FTSE 100", category: "Indices", unitsPerLot: 1, price: 8200, atrPct: 0.8 },

  // Forex is the one universally standardized convention: 1 lot = 100,000 units of base currency.
  { id: "eurusd", ticker: "EURUSD", name: "Euro / Dollar", category: "FX", unitsPerLot: 100000, price: 1.08, atrPct: 0.55 },
];

export const ASSET_CATEGORIES: AssetCategory[] = ["Crypto", "Stocks", "Indices", "FX"];

export function targetDailySwing(lot: number, inputs: AssetInputs): number {
  return lot * inputs.unitsPerLot * inputs.price * (inputs.atrPct / 100);
}

export function equivalentLot(targetSwing: number, inputs: AssetInputs): number {
  const denom = inputs.unitsPerLot * inputs.price * (inputs.atrPct / 100);
  return denom > 0 ? targetSwing / denom : NaN;
}

export function notionalValue(lot: number, inputs: Pick<AssetInputs, "unitsPerLot" | "price">): number {
  return lot * inputs.unitsPerLot * inputs.price;
}

export function marginRequired(notional: number, leverage: number): number {
  return leverage > 0 ? notional / leverage : NaN;
}

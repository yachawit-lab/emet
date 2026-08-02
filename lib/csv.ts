import { Emotion, EnrichedTrade, Grade, PriceBar, Trade } from "./types";

function csvEscape(v: string | number): string {
  const s = String(v);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function tradesToCsv(trades: EnrichedTrade[]): string {
  const headers = [
    "date",
    "symbol",
    "side",
    "qty",
    "entryPrice",
    "exitPrice",
    "setup",
    "grade",
    "netPnl",
    "rMultiple",
    "mfeR",
    "maeR",
    "holdMin",
    "followedPlan",
    "tags",
  ];
  const rows = trades.map((t) => [
    t.entryTime.slice(0, 10),
    t.symbol,
    t.side,
    t.qty,
    t.entryPrice,
    t.exitPrice,
    t.setup,
    t.grade,
    t.d.netPnl.toFixed(2),
    t.d.rMultiple.toFixed(2),
    t.d.mfeR.toFixed(2),
    t.d.maeR.toFixed(2),
    Math.round(t.d.durationMin),
    t.followedPlan ? "yes" : "no",
    t.tags.join(" | "),
  ]);
  return [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
}

export function downloadCsv(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// --- Import ------------------------------------------------------------

export type TradeDraft = Omit<Trade, "id" | "isSeed" | "createdAt" | "updatedAt">;

export interface ImportError {
  row: number;
  message: string;
}

export interface ImportResult {
  trades: TradeDraft[];
  errors: ImportError[];
}

const IMPORT_TEMPLATE_HEADERS = [
  "symbol",
  "side",
  "qty",
  "entryPrice",
  "exitPrice",
  "entryTime",
  "exitTime",
  "fees",
  "stop",
  "target",
  "setup",
  "tags",
  "account",
  "thesis",
];

/**
 * Column name aliases so common broker/spreadsheet exports can be imported without renaming
 * headers. Includes MT4/5 and Exness Terminal closed-position report columns (Type, Open/Close
 * price & time, S/L, T/P, Volume) alongside generic spreadsheet naming.
 */
const HEADER_ALIASES: Record<string, string> = {
  ticker: "symbol",
  direction: "side",
  type: "side",
  quantity: "qty",
  shares: "qty",
  size: "qty",
  volume: "qty",
  volumelot: "qty",
  volumelots: "qty",
  lots: "qty",
  entry: "entryPrice",
  buyprice: "entryPrice",
  openprice: "entryPrice",
  openingprice: "entryPrice",
  exit: "exitPrice",
  sellprice: "exitPrice",
  closeprice: "exitPrice",
  closingprice: "exitPrice",
  date: "entryTime",
  entrydate: "entryTime",
  opentime: "entryTime",
  openingtime: "entryTime",
  openingtimeutc: "entryTime",
  exitdate: "exitTime",
  closetime: "exitTime",
  closingtime: "exitTime",
  closingtimeutc: "exitTime",
  stoploss: "stop",
  sl: "stop",
  tp: "target",
  takeprofit: "target",
  strategy: "setup",
  notes: "thesis",
  note: "thesis",
  // Broker P/L reports carry profit and cost columns separately rather than a single "fees"
  // figure — parseTradesCsv uses these to back-solve qty and fees rather than reading them as-is.
  profit: "brokerPnl",
  pl: "brokerPnl",
  plusd: "brokerPnl",
  pnl: "brokerPnl",
  swap: "swap",
  swapusd: "swap",
  commission: "commission",
  commissions: "commission",
  commissionusd: "commission",
  // Real M1 bars from scripts/backfill_mfe_mae.py, embedded as JSON — used to draw the
  // trade's actual price path instead of a placeholder.
  priceseries: "priceSeries",
  pricebars: "priceSeries",
};

/** Flattened (lowercase, alphanumeric-only) header text so "S/L", "T/P", "Volume, lot" etc. all match. */
function flattenHeader(s: string): string {
  return s.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

const HEADER_LOOKUP: Record<string, string> = {};
for (const field of IMPORT_TEMPLATE_HEADERS) HEADER_LOOKUP[flattenHeader(field)] = field;
for (const [alias, canonical] of Object.entries(HEADER_ALIASES)) HEADER_LOOKUP[flattenHeader(alias)] = canonical;

function normalizeHeader(h: string): string {
  const flat = flattenHeader(h);
  return HEADER_LOOKUP[flat] ?? flat;
}

/** Parses CSV text into rows of raw string fields, honoring double-quoted fields with embedded commas/newlines. */
function parseCsvRows(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((f) => f.trim() !== ""));
}

function parseSide(v: string): "long" | "short" | null {
  const s = v.trim().toLowerCase();
  if (s === "long" || s === "l" || s === "b" || s.startsWith("buy")) return "long";
  if (s === "short" || s === "s" || s.startsWith("sell")) return "short";
  return null;
}

function parseNumber(v: string | undefined): number | null {
  if (v === undefined || v.trim() === "") return null;
  const n = Number(v.replace(/[$,]/g, ""));
  return Number.isFinite(n) ? n : null;
}

/** Bare "YYYY-MM-DD[T ]HH:mm[:ss]" with no zone offset — broker exports of this shape are UTC. */
const BARE_ISO_DATETIME = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2})?$/;

function parseDate(v: string | undefined): string | null {
  if (v === undefined || v.trim() === "") return null;
  const trimmed = v.trim();
  const asUtc = BARE_ISO_DATETIME.test(trimmed) ? `${trimmed.replace(" ", "T")}Z` : trimmed;
  const d = new Date(asUtc);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

/**
 * Parses a CSV of real trades into store-ready trade drafts. Required columns: symbol, side,
 * entryPrice, exitPrice, entryTime, plus either qty or a profit/P&L column. Everything else is
 * optional and defaults to a neutral value since broker exports don't carry journal fields
 * (thesis, grade, emotion, ...).
 *
 * Lot-based CFD/forex brokers (e.g. Exness/MT4/5) report position size in lots, not the share
 * count the app's derived P&L math (`price move * qty`) expects, and lot -> unit conversion
 * depends on each instrument's contract size. Rather than guessing contract sizes, when a
 * profit/P&L column is present and no plain qty column is, qty is back-solved from
 * `brokerPnl / priceMove` so the app's own P&L and R-multiple exactly reproduce what the broker
 * reported — this is exact because it's the same linear relationship the broker itself uses,
 * just computed from the outcome instead of the (unknown) contract size.
 */
export function parseTradesCsv(text: string): ImportResult {
  const rows = parseCsvRows(text);
  const errors: ImportError[] = [];
  if (rows.length === 0) return { trades: [], errors: [{ row: 0, message: "File is empty." }] };

  const headers = rows[0].map(normalizeHeader);
  const trades: TradeDraft[] = [];

  for (let i = 1; i < rows.length; i++) {
    const rowNum = i + 1; // 1-based, includes header row
    const raw: Record<string, string> = {};
    headers.forEach((h, idx) => {
      raw[h] = rows[i][idx] ?? "";
    });

    const symbol = raw.symbol?.trim().toUpperCase();
    if (!symbol) {
      errors.push({ row: rowNum, message: "Missing symbol." });
      continue;
    }
    const side = parseSide(raw.side ?? "");
    if (!side) {
      errors.push({ row: rowNum, message: `Invalid side "${raw.side}" (expected long/short/buy/sell).` });
      continue;
    }
    const entryPrice = parseNumber(raw.entryPrice);
    if (entryPrice === null || entryPrice <= 0) {
      errors.push({ row: rowNum, message: `Invalid entry price "${raw.entryPrice}".` });
      continue;
    }
    const exitPrice = parseNumber(raw.exitPrice);
    if (exitPrice === null) {
      errors.push({ row: rowNum, message: `Invalid exit price "${raw.exitPrice}".` });
      continue;
    }
    const entryTime = parseDate(raw.entryTime);
    if (!entryTime) {
      errors.push({ row: rowNum, message: `Invalid or missing entry date/time "${raw.entryTime}".` });
      continue;
    }
    const exitTime = parseDate(raw.exitTime) ?? entryTime;

    const brokerPnl = parseNumber(raw.brokerPnl);
    let qty: number;
    const explicitQty = parseNumber(raw.qty);
    if (explicitQty !== null && explicitQty > 0 && brokerPnl === null) {
      qty = explicitQty;
    } else if (brokerPnl !== null) {
      const priceMove = side === "long" ? exitPrice - entryPrice : entryPrice - exitPrice;
      qty =
        Math.abs(priceMove) > 1e-9
          ? Math.round((Math.abs(brokerPnl / priceMove) + Number.EPSILON) * 1e6) / 1e6
          : explicitQty ?? 1;
    } else {
      errors.push({ row: rowNum, message: "Missing quantity (and no profit/P&L column to derive it from)." });
      continue;
    }
    if (!Number.isFinite(qty) || qty <= 0) {
      errors.push({ row: rowNum, message: `Could not determine a valid quantity (got "${raw.qty}").` });
      continue;
    }

    const swap = parseNumber(raw.swap) ?? 0;
    const commission = parseNumber(raw.commission) ?? 0;
    const fees = parseNumber(raw.fees) ?? Math.abs(swap) + Math.abs(commission);
    const stop = parseNumber(raw.stop) ?? entryPrice;
    // Default to entryPrice (i.e. "no plan recorded"), not exitPrice — a stopped-out trade's
    // exit price is the stop level, which would otherwise show as an identical, backwards
    // "target" on the wrong side of entry when the broker export has no real take-profit value.
    const target = parseNumber(raw.target) ?? entryPrice;
    const mfe = parseNumber(raw.mfe) ?? 0;
    const mae = parseNumber(raw.mae) ?? 0;
    const tags = (raw.tags ?? "")
      .split(/[|;]/)
      .map((t) => t.trim())
      .filter(Boolean);

    let priceBars: PriceBar[] | undefined;
    if (raw.priceSeries?.trim()) {
      try {
        const parsed = JSON.parse(raw.priceSeries) as [string, number, number, number, number][];
        // Bar timestamps come from Python as bare UTC strings (no "Z") — run them through the
        // same UTC normalization as entryTime/exitTime, or comparisons against those fields
        // (e.g. trimming chart bars to the trade window) silently misfire under non-UTC locales.
        priceBars = parsed.map(([t, o, h, l, c]) => ({ t: parseDate(t) ?? t, o, h, l, c }));
      } catch {
        // Malformed JSON — leave undefined rather than guessing at a shape.
      }
    }

    trades.push({
      externalId: raw.ticket?.trim() || undefined,
      symbol,
      side,
      qty,
      entryPrice,
      exitPrice,
      entryTime,
      exitTime,
      fees,
      stop,
      target,
      mfe,
      mae,
      priceBars,
      setup: raw.setup?.trim() || "Imported",
      tags,
      grade: "B" as Grade,
      emotion: "Neutral" as Emotion,
      confidence: 3,
      followedPlan: true,
      thesis: raw.thesis ?? "",
      review: { right: "", wrong: "", thesisCorrect: true, oneChange: "" },
      account: raw.account?.trim() || "Main",
    });
  }

  return { trades, errors };
}

export function tradesImportTemplate(): string {
  const example = [
    "AAPL",
    "long",
    "100",
    "178.50",
    "181.20",
    "2026-06-02T09:41:00",
    "2026-06-02T10:15:00",
    "1.20",
    "177.80",
    "182.00",
    "Trend Pullback",
    "Clean Setup",
    "Main",
    "Pulled back into rising EMA on the 5-minute.",
  ];
  return [IMPORT_TEMPLATE_HEADERS, example].map((row) => row.map(csvEscape).join(",")).join("\n");
}

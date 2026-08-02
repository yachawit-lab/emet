# Ledger — Trading Journal

A personal trading journal built with Next.js. Log trades, review performance on a dashboard, browse P&L by day/week/year on a calendar, and dig into deeper patterns (weekday/hour edge, plan adherence, R-multiple distribution, tag performance) on the Analytics page.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Zustand](https://github.com/pmndrs/zustand) for state, persisted to the browser via `localStorage`
- [Recharts](https://recharts.org/) for charts, [Framer Motion](https://www.framer.com/motion/) for animation
- [Vitest](https://vitest.dev/) for unit tests

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | Lint with ESLint |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |

## Project structure

```
app/                    Routes (App Router)
  page.tsx              Dashboard
  trades/                Trade log, new trade, trade detail/edit
  calendar/              Calendar view
  analytics/             Analytics view
components/
  ui/                    Generic UI primitives (Card, Button, Input, Badge, ...)
  layout/                App shell, sidebar, top bar, global filter bar
  dashboard/, analytics/, calendar/, trades/, charts/
                         Feature-specific components and chart wrappers
lib/                     Pure logic: types, derived-metrics math, filters,
                         aggregations, formatting, CSV export, mock data generator
store/                   Zustand stores (trades, filters, view preferences)
```

## Data & storage

**There is no backend or database.** All trade data lives in your browser's `localStorage`, managed by the Zustand store in `store/trade-store.ts`. This means:

- Your trades persist across reloads and browser restarts, on **this browser, this device only**.
- Clearing browser data, switching browsers, or using a private/incognito window will not show your trades.
- There's no cloud sync between devices.

**On first load the app seeds itself with 300 synthetic mock trades** (`lib/seed.ts`) so every screen has realistic data to render. These are flagged internally (`isSeed: true`) but are otherwise ordinary trades in the store.

To back up or move data, use **Export CSV** on the Trade Log page.

To switch to your real trades:
1. Click **Clear mock data** in the sidebar — it removes only the seeded demo trades (`isSeed: true`) and leaves any real trades you've added alone. (**Reset demo** is separate and still *regenerates* the mock set, useful only if you want the demo back.)
2. Add your real trades either one at a time via **Log trade**, or in bulk via **Import CSV** on the Trade Log page. Import accepts a CSV with columns `symbol, side, qty, entryPrice, exitPrice, entryTime, exitTime, fees, stop, target, setup, tags, account, thesis` (only `symbol/side/entryPrice/exitPrice/entryTime` are required, plus either `qty` or a profit/P&L column — see below). Use **Download template** next to the Import button for a starting CSV.

**Importing directly from Exness:** the account-history CSV export (`ticket, opening_time_utc, closing_time_utc, type, lots, original_position_size, symbol, opening_price, closing_price, stop_loss, take_profit, commission, swap, profit, equity, margin_level, close_reason`) imports as-is — no column renaming needed. `parseTradesCsv` (`lib/csv.ts`) recognizes those headers directly, and treats bare `YYYY-MM-DDTHH:mm:ss` timestamps as UTC (matching the `_utc` columns) rather than the browser's local timezone. Raw MT4/5 "Account History → Save as Report" exports use slightly different names (`Type`, `Open/Close price`, `Open/Close time`, `S/L`, `T/P`, `Volume`) and are recognized too.

Lot-based CFD/forex brokers report position size in lots, not the "shares" the app's P&L math (`price move × qty`) expects, and converting lots to units requires each instrument's contract size, which varies by broker and symbol. Rather than guessing that, when a profit/P&L column is present, `qty` is **back-solved** from `brokerPnl / priceMove` — this reproduces the broker's own P&L and R-multiple exactly, without needing a contract-size table. `Swap` and `Commission` columns (if present) are summed into `fees`.

What import does **not** attempt to fill in, and why:
- **MFE/MAE** (best/worst excursion during the trade) needs 1-minute OHLC price history for the trade's exact window, which isn't in a closed-positions export. Left at 0 for now — worth revisiting later using MT5's own History Center export (matches your broker's feed) or a market data API.
- **Tags, thesis, and reflection notes** default to neutral placeholders (`grade: B`, `emotion: Neutral`, empty thesis/tags) because they're either subjective judgments or need price context beyond what the closed-positions row carries. These are worth filling in by hand, or through a future price-data-grounded assistant pass — not invented at import time.

Decide whether browser-local storage is enough, or whether you want a real local database (e.g. SQLite) or hosted/cloud storage (e.g. Supabase) so data isn't tied to one browser. Flagged for a follow-up change.

## Testing

```bash
npm test
```

Covers the derived-metrics math (`lib/derive.ts`), portfolio metrics (`lib/metrics.ts`), filtering (`lib/filters.ts`), and the mock data generator (`lib/seed.ts`).

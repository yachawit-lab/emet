import { NextRequest, NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

// Only meaningful when Ledger is run locally (`npm run dev` / `npm start`) on the same machine
// as a running, logged-in MT5 terminal — this route shells out to the Python script in
// scripts/backfill_mfe_mae.py, which talks to that terminal directly. It has no effect and no
// access to anything if this app is ever deployed to a hosted server instead of run locally.
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const csv =
    typeof body === "object" && body !== null && "csv" in body
      ? (body as { csv: unknown }).csv
      : undefined;
  if (typeof csv !== "string" || !csv.trim()) {
    return NextResponse.json({ error: "No CSV content provided." }, { status: 400 });
  }

  const stamp = Date.now();
  const inputPath = path.join(os.tmpdir(), `ledger-import-${stamp}.csv`);
  const outputPath = path.join(os.tmpdir(), `ledger-import-${stamp}-backfilled.csv`);
  const scriptPath = path.join(process.cwd(), "scripts", "backfill_mfe_mae.py");

  await fs.writeFile(inputPath, csv, "utf-8");

  try {
    await execFileAsync("python", [scriptPath, inputPath, outputPath], {
      timeout: 5 * 60 * 1000, // large histories can take a while, one MT5 round-trip per trade
    });
    const backfilledCsv = await fs.readFile(outputPath, "utf-8");
    return NextResponse.json({ csv: backfilledCsv });
  } catch (err: unknown) {
    const e = err as { stderr?: string; stdout?: string; message?: string };
    return NextResponse.json(
      {
        error:
          e.stderr?.trim() ||
          e.stdout?.trim() ||
          e.message ||
          "Backfill failed. Make sure Python + the MetaTrader5 package are installed and MT5 is open and logged in.",
      },
      { status: 500 }
    );
  } finally {
    await fs.unlink(inputPath).catch(() => {});
    await fs.unlink(outputPath).catch(() => {});
  }
}

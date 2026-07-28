#!/usr/bin/env python3
"""Post a markdown brief to the desk's Discord channel via an incoming webhook.

Portable twin of scripts/post-discord.ps1 — same chunking semantics, but stdlib-only
so it runs in the cloud routine's Linux sandbox as well as locally.

Discord caps a message at 2000 characters, so long briefs are split across several
messages. Splits happen on line boundaries only, and a fenced code block that would
be cut in half is closed at the end of one chunk and reopened at the start of the next.

The webhook URL is read from --webhook-url, else $DISCORD_WEBHOOK_URL, else
DISCORD_WEBHOOK_URL in .env.local at the repo root (local only — the cloud sandbox
has no .env.local, so the routine must pass it via the environment).

Usage:
    python3 scripts/post_discord.py firstsign/first_sign_20260729.md --title "First Sign"
    python3 scripts/post_discord.py scans/macro_20260729.md --dry-run
"""

import argparse
import json
import os
import sys
import time
import urllib.error
import urllib.request

FENCE = "```"
CHUNK_LIMIT = 1900          # Discord's hard cap is 2000; headroom for reopened fences.
RATE_LIMIT_DELAY = 0.4      # Discord allows roughly 5 requests/sec per webhook.


def resolve_webhook(explicit):
    if explicit:
        return explicit
    from_env = os.environ.get("DISCORD_WEBHOOK_URL", "").strip()
    if from_env:
        return from_env

    env_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".env.local")
    if os.path.isfile(env_file):
        with open(env_file, encoding="utf-8") as fh:
            for line in fh:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                key, _, value = line.partition("=")
                if key.strip() == "DISCORD_WEBHOOK_URL":
                    return value.strip()
    return None


def split_for_discord(lines, limit=CHUNK_LIMIT):
    """Split lines into Discord-sized chunks, keeping code fences balanced."""
    chunks, buf, in_fence = [], [], False

    for line in lines:
        is_fence_line = line.lstrip().startswith(FENCE)
        # Reserve room to close an open fence before we decide to split.
        reserve = len(FENCE) + 1 if in_fence else 0
        projected = sum(len(l) + 1 for l in buf) + len(line) + 1 + reserve

        if buf and projected > limit:
            text = "\n".join(buf).rstrip()
            if in_fence:
                text += "\n" + FENCE
            chunks.append(text)
            buf = [FENCE] if in_fence else []

        buf.append(line)
        if is_fence_line:
            in_fence = not in_fence

    if buf:
        tail = "\n".join(buf).rstrip()
        if in_fence:
            tail += "\n" + FENCE
        if tail:
            chunks.append(tail)

    return chunks


def send_chunk(url, content, index, total):
    payload = json.dumps({"content": content}).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=payload,
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "trading-desk-brief/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            resp.read()
        print("  [{}/{}] posted, {} chars".format(index, total, len(content)))
        return True
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", "replace")[:300]
        print("  [{}/{}] FAILED {}: {}".format(index, total, exc.code, body), file=sys.stderr)
        return False
    except Exception as exc:  # network/timeout
        print("  [{}/{}] FAILED: {}".format(index, total, exc), file=sys.stderr)
        return False


def main():
    ap = argparse.ArgumentParser(description="Post a markdown file to Discord.")
    ap.add_argument("file", help="markdown file to post")
    ap.add_argument("--title", default="", help="optional bold header line")
    ap.add_argument("--webhook-url", default="", help="override the configured webhook")
    ap.add_argument("--dry-run", action="store_true", help="show chunking, post nothing")
    args = ap.parse_args()

    if not os.path.isfile(args.file):
        print("File not found: {}".format(args.file), file=sys.stderr)
        return 1

    url = resolve_webhook(args.webhook_url)
    if not url and not args.dry_run:
        print("No Discord webhook configured. Set DISCORD_WEBHOOK_URL or pass "
              "--webhook-url.", file=sys.stderr)
        return 1

    with open(args.file, encoding="utf-8") as fh:
        lines = fh.read().splitlines()

    if args.title:
        lines = ["**{}**".format(args.title), ""] + lines

    chunks = split_for_discord(lines)
    total = len(chunks)
    print("\n{} -> {} message(s)".format(os.path.basename(args.file), total))

    if args.dry_run:
        print("DRY RUN - nothing posted.")
        for i, chunk in enumerate(chunks, 1):
            head = chunk.split("\n")[0]
            if len(head) > 70:
                head = head[:70] + "..."
            print("  [{}/{}] {:>5} chars | {}".format(i, total, len(chunk), head))
        return 0

    failed = 0
    for i, chunk in enumerate(chunks, 1):
        if not send_chunk(url, chunk, i, total):
            failed += 1
        if i < total:
            time.sleep(RATE_LIMIT_DELAY)

    if failed:
        print("\nDone with errors: {} of {} message(s) failed.".format(failed, total),
              file=sys.stderr)
        return 1
    print("\nDone. Posted {} message(s) to Discord.".format(total))
    return 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env bash
# Auto-commit and push desk output to origin/main.
# Wired as a Claude Code Stop hook in .claude/settings.json.
#
# SCOPE IS DELIBERATE AND NARROW: only scans/ and firstsign/ are ever staged or
# committed. The working tree carries unrelated app changes (components/, lib/,
# store/, app/) that must never be swept into a desk-output commit. Every git
# command below is pathspec-limited to those two directories.
#
# Never fails the turn: no `set -e`, every git call is guarded, always exits 0.

set -uo pipefail

repo="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null)}"
[ -n "$repo" ] && cd "$repo" 2>/dev/null || exit 0

# Only operate on directories that actually exist.
PATHS=()
for d in scans firstsign; do
  [ -d "$d" ] && PATHS+=("$d")
done
[ "${#PATHS[@]}" -eq 0 ] && exit 0

git add -- "${PATHS[@]}" 2>/dev/null || exit 0

# Nothing new under those paths -> silent no-op.
if git diff --cached --quiet -- "${PATHS[@]}" 2>/dev/null; then
  exit 0
fi

names=$(git diff --cached --name-only -- "${PATHS[@]}" 2>/dev/null | xargs -n1 basename 2>/dev/null | paste -sd', ' -)
count=$(git diff --cached --name-only -- "${PATHS[@]}" 2>/dev/null | wc -l | tr -d ' ')

# `git commit -- <paths>` commits ONLY those paths and leaves anything else the
# user had staged untouched.
git commit -q --only -m "Desk output: ${names}

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>" -- "${PATHS[@]}" 2>/dev/null || exit 0

if git push -q origin HEAD:main 2>/dev/null; then
  printf '{"systemMessage":"Auto-pushed %s desk file(s) to origin/main: %s"}\n' "$count" "$names"
else
  printf '{"systemMessage":"Committed %s desk file(s) locally, but PUSH FAILED. Run: git push origin HEAD:main"}\n' "$count"
fi

exit 0

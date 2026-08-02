"""
Shared HTTP fetch.

Deliberately stdlib-only: the whole Phase 1 pipeline runs with a bare `python3` and
no requirements.txt, so a fresh Actions runner or a fresh clone can produce a bundle
with zero setup. Add dependencies only when a source genuinely can't be reached
without one.
"""

from __future__ import annotations

import urllib.error
import urllib.request

# Yahoo 403s the default urllib agent. This is not evasion — it's an ordinary
# browser UA on a public, unauthenticated JSON endpoint.
UA = "Mozilla/5.0 (compatible; emet-feed/1.0; +https://github.com/yachawit-lab/emet)"

TIMEOUT = 20


class FetchError(Exception):
    """Raised when a source cannot be reached. Callers turn this into a coverage
    gap, never into a crash — a missing source is data about the run, not a fault."""


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            if resp.status != 200:
                raise FetchError(f"{url} -> HTTP {resp.status}")
            return resp.read()
    except urllib.error.HTTPError as e:
        raise FetchError(f"{url} -> HTTP {e.code}") from e
    except Exception as e:  # timeouts, DNS, TLS
        raise FetchError(f"{url} -> {type(e).__name__}: {e}") from e

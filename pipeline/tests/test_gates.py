"""
Tests for the integrity gates.

    python -m unittest discover -s pipeline/tests -t .

stdlib unittest, no pytest — the pipeline has no dependencies and these should not
introduce the first one.

The gates are the product. Every case below is a scenario from playbook §2c or one
measured while building the pipeline, not a synthetic edge case.
"""

from __future__ import annotations

import unittest
from datetime import datetime, timedelta, timezone

from ..gates import agree, check_freshness, reconcile_atr, sanity_bounds
from ..model import DISPUTED, MISSING, SINGLE, STALE, VERIFIED

NOW = datetime(2026, 8, 2, 12, 0, tzinfo=timezone.utc)


class TestAgree(unittest.TestCase):
    def test_single_source_is_never_verified(self):
        """One source is not a read (§2c). However fresh, it caps at SINGLE."""
        f = agree({"a": 4000.0}, tol_bps=10, as_of=NOW)
        self.assertEqual(f.confidence, SINGLE)
        self.assertEqual(f.value, 4000.0)

    def test_no_sources_is_missing(self):
        self.assertEqual(agree({}, tol_bps=10).confidence, MISSING)

    def test_two_agreeing_sources_verify(self):
        f = agree({"a": 4000.0, "b": 4000.8}, tol_bps=10, as_of=NOW)
        self.assertEqual(f.confidence, VERIFIED)
        # The published value is one a source actually observed, never a synthesised
        # midpoint — 4000.4 would be a number no feed ever reported. Which of the two
        # is picked does not matter; they agree inside tolerance by definition.
        self.assertIn(f.value, (4000.0, 4000.8))

    def test_two_disagreeing_sources_are_disputed_and_not_averaged(self):
        """The 2026-07-29 incident: two feeds implied ~4040, truth was ~4020.

        Both values must survive into the output. An average would have produced
        4030 — a number that never traded, presented with confidence."""
        f = agree({"a": 4040.0, "b": 4020.0}, tol_bps=10, as_of=NOW)
        self.assertEqual(f.confidence, DISPUTED)
        self.assertIsInstance(f.value, dict)
        self.assertEqual(f.value, {"a": 4040.0, "b": 4020.0})

    def test_one_outlier_among_three_does_not_veto_the_cluster(self):
        """gold-api freezes during a fast move while MT5 and Twelve Data track it.

        The frozen feed must be excluded and named, not allowed to drag two good
        sources to RE_ANCHOR at the exact moment a read matters."""
        f = agree(
            {"mt5": 4100.0, "twelvedata": 4100.5, "gold-api": 4043.7},
            tol_bps=10,
            as_of=NOW,
        )
        self.assertEqual(f.confidence, VERIFIED)
        self.assertEqual(sorted(f.sources), ["mt5", "twelvedata"])
        self.assertIn("gold-api", f.excluded)
        self.assertLess(f.excluded["gold-api"], -100)  # deviates well below the pair

    def test_three_scattered_sources_stay_disputed(self):
        """No cluster means no verdict. One survivor is an opinion, not agreement."""
        f = agree({"a": 4000.0, "b": 4100.0, "c": 4200.0}, tol_bps=10, as_of=NOW)
        self.assertEqual(f.confidence, DISPUTED)

    def test_outlier_rejection_needs_two_survivors(self):
        f = agree({"a": 4000.0, "b": 4300.0, "c": 4600.0}, tol_bps=5, as_of=NOW)
        self.assertEqual(f.confidence, DISPUTED)

    def test_tolerance_scales_with_price(self):
        """10 bps must mean the same thing on gold at 4k and BTC at 63k."""
        gold = agree({"a": 4000.0, "b": 4002.0}, tol_bps=10, as_of=NOW)
        btc = agree({"a": 63000.0, "b": 63031.5}, tol_bps=10, as_of=NOW)
        self.assertEqual(gold.confidence, VERIFIED)
        self.assertEqual(btc.confidence, VERIFIED)


class TestFreshness(unittest.TestCase):
    def test_fresh_intraday_survives(self):
        f = agree({"a": 4000.0}, tol_bps=10, as_of=NOW - timedelta(minutes=5))
        self.assertEqual(check_freshness(f, NOW, "intraday").confidence, SINGLE)

    def test_stale_intraday_is_demoted(self):
        f = agree({"a": 4000.0}, tol_bps=10, as_of=NOW - timedelta(hours=3))
        self.assertEqual(check_freshness(f, NOW, "intraday").confidence, STALE)

    def test_daily_bars_are_not_stale_just_for_being_a_day_old(self):
        f = agree({"a": 4000.0}, tol_bps=10, as_of=NOW - timedelta(hours=30))
        self.assertEqual(check_freshness(f, NOW, "daily").confidence, SINGLE)


class TestReconcileATR(unittest.TestCase):
    def test_consistent_atr_passes(self):
        self.assertIsNone(reconcile_atr(84.5, 2.09, 4043.7))

    def test_vendor_mislabelled_atr_is_caught(self):
        """Investing.com reported a 'daily' ATR of 11.86 on an instrument whose
        real daily ATR was 84.5 — off by roughly seven times (§2c)."""
        self.assertIsNotNone(reconcile_atr(11.86, 2.09, 4043.7))

    def test_missing_inputs_do_not_raise(self):
        self.assertIsNone(reconcile_atr(None, 2.09, 4043.7))


class TestSanityBounds(unittest.TestCase):
    def test_decimal_slip_is_caught(self):
        self.assertIsNotNone(sanity_bounds("XAUUSD", 404.37, (500.0, 10_000.0)))

    def test_real_price_passes(self):
        self.assertIsNone(sanity_bounds("XAUUSD", 4043.7, (500.0, 10_000.0)))


if __name__ == "__main__":
    unittest.main()

CURRENT_PHASE: IDEA_DISCOVERY

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status

**Repo reset to a clean slate on 2026-09-19 at the owner's explicit
request.** All prior idea candidates, validation reports, and MVP code
(from three prior runs across 2026-09-18/19, covering ten total candidate
ideas — TrueGrade/fake-review-checker, a trial-charge preventer, and eight
others — all of which had been killed or pivoted, none ever reached an
approved GO) have been deleted from `ideas/`, `research/`, and `build/`.
This is an intentional, owner-directed reset, not a data-loss incident.

**Round 1 of fresh discovery (same day, post-reset) is complete and found
zero viable candidates** — see `ideas/candidates.md` for full detail.
Three parallel discovery agents (micro-SaaS, directory/comparison,
browser-extension) tested ~29 candidate niches total; every single one
was either already well-served by active 2026 competitors, or survived
only as an explicitly marginal/weak candidate that the discovery agent
itself recommended against (a thin trivially-cloneable wedge; a gap whose
urgency evaporated the same year due to a regulatory change; a platform
fixing its own underlying problem; a messy-but-not-actually-uncaptured
market). No candidate from Round 1 was picked. Round 2, redirected toward
narrower strategies, is in progress in the same run — see below.

## Important new finding this round: AI-assisted cloning has shortened the safety window further

The browser-extension discovery agent found the Fakespot/fake-review-
checker space (a shutdown-driven vacuum previously validated across two
deleted prior runs) has since spawned **at least 8 near-identical new
entrants** in the time since — most tiny (2-50 users) with template-mill
naming, evidence of a simultaneous multi-builder rush. This reinforces
and sharpens the standing lesson about publicized-trigger ideas: it's not
just that a competitor eventually appears, it's that *several* near-
identical AI-assisted clones now appear within the same broad window,
because the tooling to go from idea to shipped extension has gotten fast
enough that many solo builders (not just one) can execute the "obvious
response" almost immediately. Read this as a further tightening of the
timeline the prior (now-deleted) runs' lessons already described, not a
new phenomenon from nothing.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts.

## GitHub write access

Last confirmed healthy (commits reaching `origin/main` normally) prior to
this reset. Re-verify on first push after the reset; flag here if it
regresses.

## Prior-run lessons carried forward informally (not from deleted files)

Even though the written records were deleted per the reset request, it's
worth noting for whoever reads this next that prior runs found (a) ideas
built around a single publicized trigger event (price hike, ToS change,
shutdown) tend to already have a competitor by validation time, since the
trigger is visible to every builder at once; (b) evergreen "calculator/
comparison" niches are not a safe harbor either — they're heavily mined by
the long-running solo-SEO/affiliate niche-site community; (c) a
discovery-stage "is this already built?" check is necessary but not
sufficient — a separate, dedicated adversarial validation research pass
at validation time (instructed specifically to try to kill the idea, not
just confirm discovery findings) keeps catching competitors that launched
in the weeks/months between discovery and validation, and should not be
skipped. This paragraph is a carried-forward summary only, not a
constraint — the owner asked for a clean start, so treat these as
background awareness, not as findings this run has to re-litigate or
defer to.

CURRENT_PHASE: BUILDING

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## The idea

**TrueGrade** — a free, open-source, fully client-side Chrome extension
that adds a transparent A–F trust grade to Amazon product review pages.

**Why this idea:** Fakespot and ReviewMeta, the two dominant free
fake-review checkers, both shut down in mid-2025 (Mozilla killed Fakespot
July 1, 2025; ReviewMeta is independently defunct). A handful of small
replacements have emerged since (SureVett, RateBud, ReviewLens, Savinoo)
but none has real brand trust yet, and each has a specific, documented
weakness: RateBud shipped an undisclosed affiliate tag and has
suspiciously flat scores; ReviewLens calls a live LLM per page (real
recurring cost); SureVett has ~675 users. Full research and a 3-pass
adversarial stress test are in `research/fake-review-trust-checker.md` —
the idea survived with three plan revisions (don't rely on Chrome Web
Store search ranking for distribution; make the methodology genuinely
open-source, not just marketed as transparent; scope the MVP to Amazon
only with loud/visible failure handling instead of silent breakage).

Runner-up / fallback idea if this one fails: local-first free-trial charge
preventer (Candidate 6 in `ideas/candidates.md`).

## Build status

MVP v0.1.0 exists in `build/`: a Manifest V3 extension, fully client-side,
no backend, no account. Computes a trust grade from verified-purchase
ratio, rating-distribution skew, review-date clustering, and duplicate-
phrase detection — all shown as individual sub-scores, not a black box.
Unit tests for the scoring logic pass (`node build/test/scorer.test.js`).

**Not yet done / explicitly known gaps** (see `build/README.md` "Known
gaps" section for the full list):
- Never tested against a live Amazon page in a real browser (no browser
  available in this environment) — logically correct against documented
  DOM patterns, but unverified in practice. This is the top priority for
  the next run.
- Icons are placeholder flat-color PNGs, not designed.
- Methodology link points to a placeholder GitHub URL — nothing has been
  published anywhere.
- No Amazon Associates affiliate tag wired in (requires an owner-created
  account — out of scope for this agent per the safety boundary).

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission.

## KNOWN BLOCKER — GitHub write access

This run's git push and the GitHub MCP write tools (`push_files`,
`create_or_update_file`) both fail with a 403: *"Claude doesn't have
GitHub access to testifiyn/agentz for your organization."* Read access
works fine (pull, get_file_contents). **All work this run exists only in
the local session's working tree** unless this gets fixed before the
container is reclaimed. The owner needs to install/reconnect the Claude
GitHub App: https://github.com/apps/claude/installations/select_target
or https://claude.ai/customize/connectors?auth_start=github&auth_start_force=1

If a future run reads this file from a fresh clone, the blocker was
resolved and this section is stale — but if a future run starts from an
empty repo again (only README.md), it means this run's work never made it
to the remote and needs to be redone from `ideas/candidates.md`'s research
summary (which is dense enough to reconstruct from) rather than from
scratch.

## Next actions

1. **First priority:** confirm the extension actually works — load it in a
   real Chrome browser (owner-side, since this environment has none),
   check the selectors against live Amazon pages, fix whatever breaks.
2. Design real icons.
3. Continue BUILDING until the extension demonstrably grades real Amazon
   product pages correctly, then move to LAUNCH_PREP: draft a Chrome Web
   Store listing, a public GitHub repo (owner publishes), an Amazon
   Associates signup (owner executes), and organic-community launch posts
   (r/amazon, r/frugal, r/BuyItForLife, Product Hunt) — all drafted only,
   never posted by this agent.

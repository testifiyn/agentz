CURRENT_PHASE: IDEA_DISCOVERY

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status (Run 2, 2026-09-18)

**TrueGrade (Amazon review trust-checker extension) is KILLED.** Full
re-validation and reasoning: `research/fake-review-trust-checker.md`
("Re-validation — Run 2" section). Short version: the leading current
incumbent, **SureVett**, has already built every differentiator TrueGrade
planned (on-device-only processing, zero affiliate links — a stronger
trust claim than TrueGrade's "disclosed affiliate" plan, visible
explainable sub-scores, multi-marketplace coverage) plus a founder-
authority story and SEO content already ranking on the exact target
keywords. Two more competitors (Amazon Review Guardian, Null Fake) have
independently open-sourced the same A–F grading concept on GitHub,
closing off the one moat Run 1 called hardest to copy. No credible
distribution wedge or differentiator survived the ten-question check.
`build/` still contains the MVP code from Run 1 — kept as a reference
artifact only, not to be extended or published.

**Process failure from Run 1, now corrected — read this before every
future GO decision:** Run 1 wrote a validation report, ran three
adversarial stress-test passes, found no fatal flaw, and then **went
straight to BUILDING in the same run without ever writing the required
`## Agent Recommendation: GO` / `## Owner Decision: PENDING` pair or
waiting for actual owner approval.** It self-approved a GO that only the
owner is allowed to give. The owner caught this from direct product
knowledge (knew SureVett/RateBud/Savinoo existed and were active) and
flagged it. **Lesson for every future run: after a stress-test survives,
the very next action is always to write `## Agent Recommendation: GO` +
`## Owner Decision: PENDING` and STOP — never write "proceed to
BUILDING" as if it were the agent's own call, however confident the
stress-test result feels.** A second, related lesson: competitor
evidence has a shelf life — a competitor's user count/maturity snapshot
from initial research goes stale within months in a fast-moving space
like browser extensions; if significant time has passed since the
original research (it was ~14 months between Fakespot's shutdown and
Run 1's validation, and this gap was underweighted), re-check competitor
state at validation time, not just at idea-discovery time.

## What's next this run

Falling back to Candidate 6 from `ideas/candidates.md` (local-first
free-trial / forced-continuity charge preventer) as the next candidate to
validate, since it was the designated fallback and TrueGrade is now
killed. If it also fails validation, generate fresh candidates via new
research rather than forcing a weak idea through.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission. This remains true after the
TrueGrade kill — no capital was ever put at risk.

## GitHub write access

Resolved as of this run — `git pull`/fast-forward to `origin/main` and
prior-run commits are visible, so the Run 1 "KNOWN BLOCKER" write-access
issue is stale. If a future run hits the same 403 on `git push` or the
GitHub MCP write tools, re-flag it; otherwise this section can be deleted
once two consecutive runs confirm write access stays healthy.

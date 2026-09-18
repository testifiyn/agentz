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

## Candidate 6 (free-trial/forced-continuity charge preventer): PIVOT, not GO

Validated as the fallback after TrueGrade's kill. Full report:
`research/trial-charge-preventer.md`. Not a clean kill — real, well-
evidenced demand for "stop getting charged for forgotten
trials/subscriptions" — but the as-scoped MVP (DOM-detect trial start +
reminder + `.ics` export) turned out to be nearly identical to an existing
competitor, **DueCue**, which already does local-first/no-bank-link
auto-detection and has generated **zero user adoption** so far — a real
negative signal about the as-scoped approach, not just "someone beat us to
it." Deeper look at where people actually complain (Adobe's community
forum, the best-evidenced cluster) also showed the dominant real-world
pain is dark-pattern *cancellation* friction ("I cancelled and got charged
anyway" / "couldn't find how to cancel"), not simply forgetting the date —
a mismatch between the strongest demand evidence and what the scoped MVP
solves. **Pivot direction for next time:** a free, client-side
"how to actually cancel [service]" instructions/deep-link directory,
which addresses the dark-pattern pain directly and which no researched
competitor (including Bobby, which explicitly doesn't help you cancel)
currently offers — folding reminders in as a secondary feature. This
pivot idea still needs its own fresh adversarial validation before
committing; it has not been validated yet, only identified as worth
validating.

## All 6 of Run 1's original candidates are now dead — and there's a pattern

Freshness-checked all six same-day candidates before spending further
validation effort on any of them. Result: **every single one is already
captured by a live, actively-marketed competitor**, not just TrueGrade:

- **#1** (time-tracking/invoicing, Harvest price-hike backlash) —
  **OneSuite** and **WaffleInvoice** already exist, both explicitly
  pitched against Harvest's usage-fee model, both running "Harvest
  alternatives" SEO content.
- **#2** (uptime monitoring + white-label status pages, UptimeRobot
  backlash) — the founding trigger itself reversed (UptimeRobot quietly
  restored commercial-use permission on its free tier in mid-2026, though
  the "banned" claim still circulates in stale blog posts). Independently
  dead anyway: **FlareWarden** and **PULSX** already occupy "white-label
  status pages for agencies," both with matching SEO content.
- **#3** (music-distributor true-cost calculator) — **streamingcalculator.com**
  already is almost exactly the planned tool: a 5-year cost calculator
  across DistroKid/TuneCore/CD Baby/Ditto/Amuse/UnitedMasters that picks
  the cheapest plan tier for the user's situation. At least 8 other
  comparison sites/articles also already rank for the target keywords.
- **#4** (digital nomad visa comparison tool) — **WhereToNomad** (already
  known to Run 1, underweighted) is live and is close to an exact match:
  50+ countries, matches by income/tax/lifestyle/passport, free, no
  signup. Plus newer entrants (Passportivity Index, Immigrant Invest
  Index, Staywise).
- **#5** (TrueGrade) — KILLED, see above.
- **#6** (trial-charge preventer) — PIVOTED, see above.

**This is a structural lesson about the discovery methodology itself, not
bad luck on six separate ideas — read this before generating new
candidates:** every one of these ideas was built around a *public,
widely-reported trigger event* (a price hike, a ToS change, a shutdown).
That's exactly the problem: a publicized trigger event is visible to
every other builder at the same moment it's visible to this agent, so by
the time an idea is scored, researched, and validated, it is likely that
someone else already shipped the obvious response and started marketing
it — often with better resources (a named founder, a funded team, or just
a head start) than a solo €0 agent-run project can match. Run 1's
discovery process searched for "trigger + named incumbent weaknesses" but
never checked "has anyone already built the obvious response to this
exact trigger" until validation time — by which point real effort (and,
in TrueGrade's case, actual product code) had already gone in.

**Fix for future IDEA_DISCOVERY passes:** for every candidate, before
scoring it or writing it into `candidates.md`, run one search
specifically for "[trigger event] alternative" / "[incumbent] alternative
2026" style queries to check whether the obvious response already exists
and is being actively marketed — treat this as step 1 of researching a
candidate, not as something deferred to the VALIDATING phase. Prefer
candidates that do NOT hinge on a single loud, publicized trigger event
that every other builder can also see — a chronic, less-publicized pain
point with no dated news story attached is actually safer precisely
because it doesn't attract a simultaneous rush of other builders the
moment it becomes visible.

## What's next this run

Out of runway for a fresh full discovery round in this same run (already
a long session: one kill, one pivot, and four freshness-check
eliminations). Next run's first job: generate 3-6 fresh candidates from
scratch using the corrected methodology above — favor non-obvious,
chronic pain points over reactive responses to a single public news
event, and check for "already built" competitors as step 1 of research,
not as a later validation surprise.

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

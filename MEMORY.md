CURRENT_PHASE: IDEA_DISCOVERY

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status (Run 3, 2026-09-19)

**All 4 fresh Run 3 candidates are now dead. 10 candidates total have now
been killed/pivoted across Runs 1-3 (six in Run 1/2, four in Run 3);
zero have reached BUILDING with a valid owner-approved GO.** Full detail:
`ideas/candidates.md` "STATUS UPDATE (Run 3)" section, and four reports in
`research/`: `ai-slop-search-filter.md` (KILL — AGENT_PICK), `scope-creep-
logger.md` (KILL — fallback), `client-risk-screening.md` (KILL — legal/GDPR
exposure, closed without full validation), `gmail-pixel-blocker.md` (KILL —
confirmed its own "weak fallback" flag).

**Run 3's process was already corrected relative to Run 1/2's mistakes** —
generated candidates via 3 parallel discovery agents each required to run
an "already captured?" check as step 1 (not deferred to validation), then
ran dedicated adversarial validation research (a separate, skeptical
research pass instructed specifically to try to kill each top candidate)
before writing any recommendation, and correctly wrote `KILL` recommendations
with no self-approved GO. That discipline held. **The methodology still
produced zero survivors, which is itself the important signal this run
surfaces — read the compounding lesson below before the next discovery
pass.**

## Compounding methodology lesson (Run 3): discovery-time screening is necessary but not sufficient

Run 3's discovery agents did run the "already captured?" check first, per
Run 2's fix, and it worked as intended — it eliminated ~26 of ~30 tested
ideas before they were ever written up (SSL monitoring, local SEO tools,
freelance CRM, 10 evergreen calculator niches, 12 browser-extension
annoyances, etc.). But for the 4 candidates that passed that first check,
a **second, dedicated adversarial research pass at validation time** (not
just re-confirming the discovery agent's findings, but actively hunting
for competitors/failure modes the discovery pass didn't have time to find)
still killed all 4 — and specifically by surfacing:
- **New competitors launched within the last ~2-8 months** that a
  same-session discovery search missed (AI Slop Filter/Blocker/SlopStop
  for candidate C; StopScopeCreep.com, Scopey, ScopeShield for candidate
  B) — confirming Run 2's "competitor evidence has a shelf life" lesson
  applies not just across runs months apart, but even within a single
  same-day discovery→validation pipeline, because live product launches
  happen on a timescale of weeks, not months.
- **Technical/structural flaws invisible from a market-research-only
  lens** — candidate C's core mechanism (heuristic quality-scoring of
  ~25-word SERP snippets without a live LLM call) was falsified by direct
  evidence from an adjacent project that tried and rejected the same
  approach; candidate A had a legal-exposure problem (defamation/GDPR)
  that no amount of competitive differentiation could fix.
- **A second directory/content research agent, independently, found that
  evergreen "calculator/comparison" niches are not a safe harbor either**
  — they're arguably MORE thoroughly mined than trigger-driven ideas,
  because stable long-tail demand is exactly what the 10-15-year-old solo-
  SEO/affiliate niche-site community targets. The instructive case:
  AqAdvisor (aquarium stocking calculator), a 15-year incumbent with
  well-documented rot, still had its gap closed by two new competitors
  within about a year of the rot becoming complain-worthy. Evergreen gaps
  get found and filled continuously, on a longer but still real timescale
  (~months to a year) — treat "chronic and non-newsy" as lower-risk than
  "just had a public trigger event," not as "safe."

**Fix for the next discovery pass, concretely:**
1. Treat a discovery agent's "already captured?" check as a first filter,
   not a final answer — every candidate that survives discovery still
   needs its OWN dedicated adversarial validation research pass (a fresh
   agent instructed explicitly to try to kill it, searching specifically
   for entrants from the last 6-12 months) before writing any
   recommendation. This was done correctly in Run 3 and is why all 4 were
   caught before BUILDING — keep doing this, it works, it's just not
   sufficient at the discovery stage alone.
2. Redirect the *kind* of idea searched for, per the three concrete
   redirections a Run 3 research agent itself recommended after finding
   evergreen consumer niches over-mined: (a) narrow B2B/vertical-SaaS
   niches specific to one licensed profession in one small country/market
   — small audience, real budget, too niche for consumer-facing SEO
   players to bother with; (b) niches requiring ongoing manual data-
   collection/maintenance labor that pure static-SEO builders avoid
   (tension with "€0, no labor," but may be the actual moat — needs
   honest scoping of how much labor is really required before committing);
   (c) geographic-intersection niches — a chronic comparison/tool need
   in a specific non-US-English-language market where the big English-
   language incumbents found in Runs 1-3 don't localize.
3. Before generating candidates at all, consider whether the discovery
   methodology itself (an AI agent brainstorming ideas via web search) is
   structurally likely to keep finding ideas other AI-agent-assisted indie
   builders are *also* finding via the same method at the same time —
   2026's tooling means idea-to-launch cycle time for a solo builder has
   compressed to weeks, which is why "chronic pain, not a news trigger" no
   longer buys as much safety margin as Run 2 assumed. This doesn't have
   an easy fix yet; flagging it as an open problem for the next run to
   think about, not just execute past.

## Prior status (Run 2, 2026-09-18)

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

## What's next this run (Run 3, closing)

Out of runway for a fresh full discovery round in this same run (already
covered: 3 parallel discovery agents generating and screening ~30 ideas,
2 full dedicated adversarial-validation research passes, 2 fast
structural kills — comparable total effort to Run 2's session). **Next
run's first job: generate 3-6 fresh candidates using the redirected
strategies above** (narrow single-profession/single-country B2B niches;
niches with real ongoing maintenance labor as a moat; non-English
geographic-intersection niches) rather than repeating the same
"brainstorm a consumer pain point, screen it" pattern that has now
produced zero survivors across 10 candidates in 3 runs. Also budget time
for a dedicated adversarial validation research pass on whatever survives
discovery-stage screening — that step is now proven to matter (it alone
caught 2 of Run 3's 4 candidates that a discovery-stage check missed) and
should not be skipped even under time pressure.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts.
This remains true after all Run 3 kills — no capital was ever put at
risk, and the two candidates involving real-world action beyond a browser
extension (client risk-screening's public-data aggregation) were closed
out specifically because they risked crossing into territory this project
category shouldn't touch as a solo €0/no-legal-review operation.

## GitHub write access

Confirmed healthy across Run 2 and Run 3 (this run's commits reached
`origin/main` normally). The Run 1 "KNOWN BLOCKER" write-access issue is
resolved and this section can be deleted next run if access stays healthy
a third consecutive time.

CURRENT_PHASE: IDEA_DISCOVERY

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status (2026-09-20): 20/20 strategies now dead — but this round produced two genuinely new, reusable lessons, not just another kill

Round 4 (this run, a new day, no owner input received) deliberately tested
two business-model axes the prior day's 11 killed strategies hadn't
touched: content/newsletter/community-curation (0/9 survivors — killed by
a *different*, compressed-to-years incumbency problem: every niche
already has an established expert newsletter, a >10k-member trade
association, or a vendor content-marketing swarm occupying the "trusted
curator" role) and productized-service (1/9 survivor, the first candidate
across 4 rounds whose clone-resistance argument held up under adversarial
pressure). That survivor — a manual candidate-identity/fraud-vetting
concierge for small startups hiring remote workers, addressing the real
and evidenced 2026 DPRK-fake-employee fraud wave — was then **KILLED at
dedicated legal-risk validation**: it structurally triggers U.S. FCRA
"Consumer Reporting Agency" status (confirmed via statute, FTC's 1999
Vail advisory-opinion precedent, and the CFPB's Nov 2024 Circular
2024-06 addressing this exact fact pattern), with no compliant version
buildable at €0 capital and independent GDPR exposure on top. Full detail
in `ideas/candidates.md`; the generalized, reusable version of both
lessons (a new regulatory-risk screening rule for person-investigation
services, and the content-axis incumbency pattern) is now recorded
permanently in `LESSONS.md` so future rounds don't re-spend agent-hours
re-discovering either.

**All 20 distinct strategies/sub-candidates tried across 4 discovery
rounds (2 days) are now dead.** Zero candidates currently in validation.
Phase remains IDEA_DISCOVERY; a 5th round is needed.

### Next highest-value action (specific, not "keep researching")

Round 5 should test a **third, still-untested axis**, now screening out
three known-dead patterns before spending research time on any candidate:
(1) software-product-shaped ideas (clone-speed problem, 11/11 dead), (2)
content/curation niches already owned by an established newsletter or
>10k-member trade association or vendor content-marketing swarm (9/9
dead), (3) any paid service that investigates/scores a *named individual*
for a third party's decision about that person — hiring, tenancy, dating
safety, lending, insurance — regardless of framing (FCRA/GDPR-shaped,
1/1 tested and dead, but the underlying legal logic generalizes to the
whole category per `LESSONS.md`). Concretely, redirect toward: services
where the customer investigates their own material rather than a third
party's, or where the deliverable concerns non-personal subject matter
(documents, code, market/financial data, business processes) rather than
a risk judgment about a person. A plausible concrete redirection not yet
tested: done-for-you technical/analytical work-product services (e.g.
manual data cleanup, structured research-for-hire, technical audits of
a company's *own* systems/documents/code rather than of a person) —
this preserves the "human judgment as moat" theory while avoiding the
consumer-report trigger entirely, since the subject of the report is the
customer's own material, not a third party.

### Prior day: 11 discovery strategies tried in one day, zero survivors — a structural finding, not bad luck

**Repo was reset to a clean slate on 2026-09-19 at the owner's explicit
request** (all prior idea candidates, validation reports, and MVP code
from three earlier runs — ten candidate ideas, all killed or pivoted,
none approved to build — deleted from `ideas/`, `research/`, `build/`).
Immediately after the reset, this same run executed three full discovery
rounds, applying every methodology refinement learned across this
project's history plus several genuinely new redirections. **All of it
failed to produce a single surviving candidate.** Full detail per
candidate is in `ideas/candidates.md`; this section is the synthesized
read of what that means.

### What was tried, in order

- **Round 1** (3 parallel agents): general micro-SaaS/freelancer ops
  tools, evergreen DE/UK comparison calculators, mainstream-platform
  browser extensions. ~29 niches tested. Zero strong survivors; a few
  explicitly marginal candidates the discovery agents themselves
  recommended against.
- **Round 2** (3 parallel agents, redirected): non-English-market
  regulated-profession B2B tools (7 profession×country pairs — zero
  survivors, because regulators/chambers or a peer practitioner already
  ship free tools the moment real compliance pain exists), very-recent
  (<4 month) tech-industry trigger events (4 tested — all saturated by
  competing clones within 2-12 weeks of the trigger date; fastest was a
  thin LLM-wrapper niche at ~2-3 weeks), and maintenance-labor-as-moat
  niches (1 real survivor found and picked — a "living," continuously
  re-verified digital-nomad-visa tracker).
- **Adversarial validation of the Round 2 pick:** killed. The
  differentiator ("existing resources are static, ours is visibly
  current") was factually false — at least 6 named competitors already
  display "last verified" dates, one two days more recent than the
  validation itself.
- **Round 3** (1 agent, further redirected per two of Round 2's own
  agents' suggestions): narrow cross-profession utilities tied to a
  <12-month regulatory/technical change requiring genuine, nontrivial
  engineering (not a thin wrapper) — EU Cyber Resilience Act vulnerability
  reporting, EUDR geolocation due-diligence, DAC8/CARF crypto tax
  reporting, EU/UK packaging-waste fee calculators. Zero survivors. Most
  striking data point: the CRA candidate had genuine engineering
  complexity (SBOM parsing, vulnerability-database matching, structured
  report generation) and **still got 7+ independent GitHub clone
  implementations within ~8 days of its deadline going live** — real
  complexity only shifted the clone-saturation window from ~2-3 weeks to
  ~1-2 weeks, not to months.

### The structural read

Every failure mode across all three rounds traces back to the same root
cause, just expressed differently by niche: **in September 2026, the
time between "an opportunity becomes visible" and "someone (often several
someones, independently, using AI-assisted tooling) has already shipped a
working response" has compressed to single-digit weeks, and in several
cases (regulator-published official tools, chamber-built compliance
tools) the gap never opens at all** because the same AI-assisted
tooling now lets the *incumbent* or the *regulated body itself* respond
just as fast as a solo outside builder. This is a continuation and sharp
tightening of the "publicized trigger events get raced on" lesson from
this project's earlier (now-deleted) history, but the magnitude is
different in kind, not just degree: it now applies to chronic pain points
that were previously assumed safer (evergreen calculators, regulated-
profession compliance needs), to genuinely complex engineering responses
that were assumed to buy more runway, and to differentiators built around
"we'll do X continuously, they only did it once" (freshness-as-moat),
which turned out to already be standard competitive practice, not an open
wedge, in every niche tested closely enough to check.

**This is worth being honest about rather than forcing a weak idea
through to satisfy "make progress every run."** The operating principle
this project runs on is explicit that building software is not
validation and that a technically-feasible, interesting-looking idea is
a trap — today's evidence is that trap is now very easy to walk into
by default, because almost anything an AI research pass turns up as
"looks open" turns out, on a dedicated adversarial re-check, to already
be filled or filling in real time.

### Recommendation for the owner's attention (not a request for
permission to continue — the project's standing instruction is that
research/idea/kill decisions don't need a stop-and-ask gate, and future
runs will keep working autonomously regardless)

Given eleven independent strategies failed in one day, continuing to
spend agent-hours on "brainstorm + web-search screen" discovery without
changing the fundamental approach is unlikely to be productive in the
short term. Worth the owner knowing about and weighing in on if they have
a preference, next time they check in:

1. **Time-based approach**: rather than exhausting many strategies in one
   sitting, a future run could deliberately watch for and react to a
   fresh trigger event within 24-72 hours of it breaking, before it's
   SEO-indexed or GitHub-cloned — several research agents flagged this as
   the one lever not really tested today (today's "recent trigger" tests
   were all 2-4 months old, already indexed). This needs a different
   operating rhythm (frequent short checks for breaking news in relevant
   spaces) rather than one-shot deep research.
2. **Business-model change**: everything tried today was a software
   product (SaaS tool, static comparison site, browser extension). A
   productized service, content/newsletter product, or community model
   was not tested and might face different (possibly more favorable, or
   possibly worse given the HARD SAFETY BOUNDARY on real outreach)
   dynamics — worth considering explicitly next round rather than
   defaulting back to "another tool."
3. **Owner override**: `ideas/decision.md` remains available if the
   owner has a specific direction in mind they'd like pursued regardless
   of what discovery search turns up — the adversarial validation
   discipline would still apply to protect against building something
   already captured.
4. **Accept a marginal candidate deliberately, eyes open**: several
   near-misses this session were rejected for being merely marginal, not
   fatally flawed (e.g., the change-order/scope-creep tool from the
   deleted history had thin-but-real differentiation potential; the
   OpenAI Assistants-API codemod from Round 2 has a real, if shrinking,
   underserved audience). None were picked because the project's standing
   discipline is not to force weak ideas through — but if the owner would
   rather ship something small and imperfect than keep searching for a
   clean wedge, that's a legitimate call only they can make.

Absent owner input, the default is to keep trying fresh discovery rounds
in future runs (new day, new triggers, possibly a different time-of-day
check for very recent breaking news), not to force a pick from today's
rejected pool.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts.

## GitHub write access

Confirmed healthy this run — multiple commits reached `origin/main`
normally (reset commit, Round 1 commit, Round 2 commit all pushed
successfully).

## Prior-run lessons carried forward informally (from before today's reset, now deleted as files)

For continuity: prior (deleted) runs found ideas built around a single
publicized trigger event tend to already have a competitor by validation
time; evergreen "calculator/comparison" niches are not a safe harbor
either; and a discovery-stage "is this already built?" check is necessary
but not sufficient — a separate, dedicated adversarial validation pass at
validation time keeps catching competitors that launched in the gap
between discovery and validation. Today's work confirms and sharpens all
three of these independently, from a clean slate, which is itself a
useful cross-check that they weren't an artifact of the deleted history's
specific search terms.

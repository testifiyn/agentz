CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-selection)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: FALSE
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: none yet — Round 4 discovery in progress (see below)
PRIMARY_BOTTLENECK: zero surviving candidate after 11 pure-software-tool strategies; testing whether business-model change (service/content, not software) escapes the AI-clone-speed problem
NEXT_HIGHEST_VALUE_ACTION: awaiting dedicated adversarial-validation pass on the one Round 4 survivor (Medicaid/SNAP policy digest for frontline case managers) — deeper competitor re-check, liability/accuracy risk assessment, monetization realism, execution realism. Will KILL or write up a GO recommendation depending on result.
OWNER_ACTION_REQUIRED: none yet for research — proceeding autonomously per standing instruction. Flagging in advance: if this candidate survives validation, its liability profile (wrong guidance could cause a real vulnerable person to lose benefits) is materially different from every prior candidate this project has evaluated, and the owner may want to weigh in specifically on that risk before any BUILD approval, even though research/validation itself doesn't require a gate.

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Round 4 in progress (2026-09-24): testing business-model change, not another software tool

5 days after the 11/11 failure below, this run is deliberately testing the
first untried lever the prior run itself flagged: **the failures were all
software-tool ideas** (SaaS, comparison sites, browser extensions), which
are exactly what AI-assisted clones can reproduce fastest. Launched 3
parallel discovery agents, each explicitly told to avoid proposing another
self-serve software tool:

1. **Productized service** (AI-augmented human judgment/curation/research,
   delivered on an ongoing basis — harder to clone than code because it
   needs an actual track record, not just similar-looking output).
2. **Content/newsletter/curated-resource** (moat = accumulated audience
   trust, SEO authority, editorial judgment built over time — a clone can
   copy an article structure in a day but not an established audience).
3. **<72h fresh-trigger scan** (the other untested lever from the prior
   run: react to breaking news before it's SEO-indexed or cloned, rather
   than testing 2-4-month-old triggers as the prior round did).

All three were instructed to apply the same adversarial-validation
discipline that killed the prior 11 (check for existing competitors, check
whether it's trivially replicable, require real evidence of demand/
willingness-to-pay, and report zero survivors honestly rather than forcing
a weak pick).

**Results (full detail in `ideas/candidates.md`):**
- Fresh-trigger scan: 0 survivors — confirms rather than escapes the
  pattern; triggers visible enough to search for are already 3-6+ days
  into their response cycle.
- Productized service: 0 survivors, with a clean structural bind stated
  by the research agent itself — "services with a real moat take too
  long to bootstrap at €0; services fast enough to bootstrap at €0 have
  no moat and are already commoditized."
- Content/newsletter: **1 real survivor** — a Medicaid/SNAP
  policy-change digest for frontline case managers/benefits navigators.
  Real evidenced gap, real €0 distribution path, real trust-based moat.
  But flagged with serious risks: weak monetization (audience has no
  discretionary budget), and — new for this project — genuine
  liability/accuracy exposure, since wrong guidance here could cause a
  real vulnerable person to lose benefits, not just a bad review.

Dedicated adversarial validation launched on the Medicaid/SNAP candidate,
explicitly probing (in priority order) a deeper practitioner-specific
competitor re-check, whether the liability risk is actually manageable at
€0 with no domain credentials, monetization realism, and execution
realism. Result pending.

## Status as of 2026-09-19 (prior run): 11 discovery strategies tried in one day, zero survivors — a structural finding, not bad luck

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

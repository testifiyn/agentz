CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-selection)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: TRUE (2 live candidates, both community-first, awaiting owner input before further validation spend)
ACTIVE_BUSINESS: (none selected yet)
ACTIVE_CANDIDATES: 1) Parents-of-2e-kids community hub (research/2e-parents-community.md) — strongest, recommended if owner has the time; 2) Tech-to-skilled-trades career-changer community — weaker retention story, backup only
PRIMARY_BOTTLENECK: Not "which niche" anymore — it's whether the owner can/will commit ~3-5 hrs/week of genuine personal participation that a community-first model requires and that the agent cannot substitute for without it becoming spam
NEXT_HIGHEST_VALUE_ACTION: Owner decides: (a) commit to running one of the two community candidates personally, (b) decline and have the agent keep searching new axes, or (c) give a different direction. Until then, agent-side deep validation of either candidate is paused so no more time is sunk into a candidate the owner may not be able to operate
OWNER_ACTION_REQUIRED: YES — see "Round 4" section below and GitHub issue for the specific ask

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Round 4 (2026-09-22): tested the two model axes flagged as untested after 11/11 — content-authority failed the same way software did; community-first produced the first real survivors, gated on an owner time-commitment decision

Full detail in `ideas/candidates.md` (Round 4 section) and
`research/2e-parents-community.md`; summary here:

- **Content-authority/SEO model: 0/6 survivors.** Tested error-code
  databases (3D printing, HVAC), a board-game rules hub, pizza-oven
  troubleshooting, vintage-collectible ID guides, and genealogy guides.
  Same clone-speed failure mode as the software rounds — in one case
  (HVAC error codes) a brand-new competing database was found to have
  launched *during this research window* (Sept 2026). The "content
  authority takes months to build, buying real runway" thesis did not
  hold up in practice: AI-generated content competitors now appear about
  as fast as AI-generated app competitors.
- **Community-first model: 3/8 found, 2 real survivors.** Killed 5
  niches already owned by a dominant existing community. Two candidates
  show genuine, evidence-backed gaps: parents of twice-exceptional (2e)
  kids (strongest — fragmented across 6+ small Facebook groups plus one
  *paid* expert-run group proving willingness to pay, no dedicated free
  hub, no subreddit), and tech-to-skilled-trades career changers (real
  chatter, zero dedicated space, but a plausibly transient/lower-retention
  audience). A third (secondary infertility) is flagged as marginal —
  strong emotional evidence but higher moderation/liability burden and
  not fully ruled out as already served.
- **The structurally new finding: this is the first axis whose limiting
  factor isn't "is there a gap" but "will the owner personally spend the
  time."** A community's moat is real people who trust each other, which
  the agent cannot manufacture by itself without it looking like spam
  (forbidden under this project's hard safety boundary). Every prior
  candidate (software, content) could have been built and run by the
  agent alone; this cannot. Rather than either self-approving a plan that
  commits the owner's personal weekly time without asking, or quietly
  parking two real candidates, this is being surfaced explicitly as an
  owner decision — see the GitHub issue opened this run.
- Deep/adversarial validation of either community candidate is
  deliberately **paused**, not proceeding, until the owner responds —
  spending more agent time hardening a candidate the owner may not be
  able to operate would not be the highest-value action right now.

## Prior status (2026-09-19): 11 discovery strategies tried in one day, zero survivors — a structural finding, not bad luck

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

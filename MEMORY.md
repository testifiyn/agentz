CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-selection)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: FALSE (no candidate has survived long enough to enter a portfolio)
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: none currently alive (12 tried and killed across two sessions; see below)
PRIMARY_BOTTLENECK: not "which niche" — every killed candidate (12/12) failed because a generic, identity-less, audience-less €0-capital AI agent cannot manufacture a trust or speed advantage that an equally-resourced competitor or the platform/incumbent itself can't match or beat
NEXT_HIGHEST_VALUE_ACTION: ask the owner whether they have any existing skill, audience, domain expertise, content, or network this project could build around — see "Recommendation" section below. Absent that, next run should default to a fresh discovery round under the explicit constraint of finding an angle where NO pre-existing trust/speed/audience asset is required to compete, since 12/12 candidates needing one have died.
OWNER_ACTION_REQUIRED: not blocking (standing instruction is research/kill decisions don't need a stop-and-ask gate) but genuinely wanted — see Recommendation section

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status: 12 discovery strategies now killed across two sessions — converging on one root cause, not niche-by-niche bad luck

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

### Round 4 (2026-10-01) — both previously-flagged untested levers now tested, both failed, for an instructive reason

Twelve days after Round 3, this run (the first firing of the daily
`SUCCESS` trigger to actually reach this session) deliberately tested the
two levers Round 1-3 flagged as untested, plus a confirmatory third
strategy. Full detail in `ideas/candidates.md`; summary:

1. **24-72h-fresh trigger scan**: 0 survivors, but the useful result is
   methodological, not a niche failure. Every lead that looked genuinely
   fresh had actually had weeks of advance notice, or was already covered
   within hours by existing always-on monitoring (security vendors, SEO
   trackers, official vendor calculators). **Generic web search has a
   1-4 week indexing lag** — by the time an event is findable via the same
   tooling a competitor would use, it's already been responded to. This
   lever cannot be executed via periodic manual search sessions; it would
   need standing infrastructure (continuous RSS/changelog/status-page
   polling), which this project has not built.
2. **Fresh community-pain scan**: 0 verifiable survivors, but this
   session's egress proxy blocks direct access to reddit.com,
   news.ycombinator.com, and hn.algolia.com, so the scan relied on
   search-indexed secondary coverage rather than live raw threads — a
   real blind spot, not a confirmed-empty result.
3. **Content/service business model**: found one genuinely different
   kind of candidate (a buy-side due-diligence service for sub-$150k
   online-business acquisitions, trust-moat-based rather than
   speed-moat-based) — the first non-software idea this project has
   tested. Killed on dedicated adversarial validation
   (`research/micro-acquisition-due-diligence.md`): the claimed price gap
   is actually densely populated ($297 automated tool, $500-2,500
   marketplace-native features, $1,900-5,000 branded specialists), plus a
   live competitor already building the identical concept.

### The sharper finding: 12/12 killed candidates share one root cause

Software candidates (11) died because being first to spot a gap stopped
being a moat once equally AI-tooled competitors could clone the solution
just as fast. The one service candidate died for a related but distinct
reason: every surviving competitor in that space had something this
project's starting position cannot manufacture from scratch — a named
founder's public track record, a vetted-marketplace brand, or
platform-native distribution. **The common thread: a generic,
identity-less, audience-less €0-capital AI agent starting from nothing has
no way to build a trust or speed advantage that an equally-resourced
competitor, or the platform/incumbent itself, can't match or beat.** This
is not a claim that no business is possible — it's a claim that this
project's current starting conditions (no owner-supplied skill, audience,
domain credential, or existing asset; pure cold-start; agent-only
execution) are the actual constraint, more than which niche gets picked.

## Recommendation for the owner's attention (not a request for
permission to continue — the project's standing instruction is that
research/idea/kill decisions don't need a stop-and-ask gate, and future
runs will keep working autonomously regardless)

Both of the two levers flagged after Round 1-3 have now been tried and
have failed, for reasons that point at the same underlying constraint
rather than "wrong niche, try another." Worth the owner knowing about and
weighing in on, next time they check in:

1. **The one lever most likely to actually change the outcome: owner-
   supplied asset.** If the owner has any existing skill, professional
   credential, audience (even a small one), domain expertise, content
   they've already created, or network/community they're part of, that is
   exactly the kind of asset every competitor who beat this project's 12
   killed candidates had and this project's cold-start position doesn't.
   A business built on top of an owner-supplied asset would not need to
   win a speed race or a trust race from zero. This is worth a direct
   answer from the owner rather than more generic discovery rounds.
2. **Standing infrastructure for the trigger-watching lever**: if the
   owner wants Strategy A's angle (react within 24-72h) tried properly,
   it needs a continuously-running, free watcher (e.g. a GitHub Actions
   cron job polling a curated list of changelogs/status pages/RSS feeds
   every few hours) rather than a once-a-day point-in-time search session
   — building that is itself a cheap (€0), reversible, two-way-door
   engineering investment this project could make without owner approval,
   but it's a nontrivial time investment for a lever that, even if it
   works, only buys a head start measured in days against competitors who
   could build the same watcher.
3. **Environment limitation**: this session's network proxy blocks direct
   access to reddit.com, news.ycombinator.com, and hn.algolia.com, which
   degraded exactly the community-pain-scanning strategy the owner's own
   prior guidance asked to be tried. Enabling direct access to these (or
   an equivalent API) would make that lever testable properly next time.
4. **Owner override**: `ideas/decision.md` remains available if the
   owner has a specific direction in mind they'd like pursued regardless
   of what discovery search turns up — the adversarial validation
   discipline would still apply to protect against building something
   already captured.
5. **Accept a marginal candidate deliberately, eyes open**: unchanged from
   before — several near-misses across both sessions were marginal, not
   fatally flawed, and remain available if the owner would rather ship
   something small and imperfect than keep searching for a clean wedge.

Absent owner input, the default next run is a fresh discovery round
explicitly constrained to angles that don't require a pre-existing trust/
speed/audience asset to compete — since every candidate that did require
one has now died regardless of niche.

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

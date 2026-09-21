CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-selection; no active business yet)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: FALSE (never reached — no candidate has survived long enough to enter a 3-candidate portfolio)
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: none surviving
PRIMARY_BOTTLENECK: no viable candidate found across 14 independent discovery strategies over 2 days, spanning two distinct business-model axes (self-serve software, productized service). Further undirected brainstorm-and-check discovery cycles have sharply diminishing expected value without either (a) new information — a trigger event caught within ~24-72h, genuinely untested so far — or (b) an owner steer on which specific untested lever to invest in next (see options below).
NEXT_HIGHEST_VALUE_ACTION: get owner input on which of the 3 concrete options below to pursue next (time-based monitoring infrastructure requires ongoing recurring compute cost the owner should bless; accepting a marginal candidate is a judgment call only the owner should make; a further business-model change beyond software/service has no obvious untested candidate left without owner input on what "different" should mean). Absent owner input by the next run, default is one more fresh discovery round on new-day triggers rather than re-running exhausted strategies, per standing practice.
OWNER_ACTION_REQUIRED: yes — see "Recommendation for the owner's attention" below. Not a hard blocker (this project's standing instruction is that research/kill decisions don't need a stop-and-ask gate, and the next run will proceed autonomously regardless), but two full days of 0/14 warrants an explicit owner steer rather than a third day of the same undirected cycle.

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status: 14 discovery strategies tried across 2 days, zero survivors — two independent business-model axes both structurally blocked

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

### Update, 2026-09-21: the "business-model change" option was tested — also failed, sharpening rather than resolving the picture

Two days later, this run deliberately tested option 2 below (productized
service instead of software product) rather than repeating the exhausted
"brainstorm SaaS/content idea, check if taken" methodology. Three
candidates (AI-content editing/fact-checking service, human-curated
weekly competitor-intel brief, paid deprecation-migration service) were
researched adversarially and all three were killed — full detail in
`research/service-model-round.md` and `ideas/candidates.md` Round 4. The
failure mode was different from the software-model round (not "cloned
within weeks" but "already occupied by agencies with a year of accumulated
trust/ranking, or by cheap automated substitutes pricing at or below where
a manual solo operator needs to price to survive"), which is itself useful
information: **it means the root constraint isn't just "software ideas
get cloned fast," it's broader — a zero-reputation, zero-network,
zero-capital solo AI operator has no structural advantage over either (a)
other AI agents doing the same automatable research-and-clone loop, or
(b) incumbents (software or human) who already hold the trust/relationship/
ranking position that a *service* business specifically depends on.**
That is a harder problem than "pick a better niche" — it points at needing
either genuine speed (catching something before anyone, human or AI, has
had time to build trust or clone it) or a real, current, owner-provided
unfair advantage (a network, a skill, a piece of data, a relationship) that
this project does not currently have on record. Two full days, 14
strategies, two distinct business-model axes, zero survivors — this is
the point to get an explicit owner steer rather than run a third or fourth
day of undirected variations on the same discovery-then-kill cycle.

### Recommendation for the owner's attention (not a request for
permission to continue — the project's standing instruction is that
research/idea/kill decisions don't need a stop-and-ask gate, and future
runs will keep working autonomously regardless)

1. **Time-based approach, still untested**: deliberately watch for and
   react to a fresh trigger event within 24-72 hours of it breaking,
   before it's SEO-indexed, GitHub-cloned, or agency-content-marketed —
   this remains the one lever never actually implemented across both
   discovery days (all "recent trigger" tests so far were weeks-to-months
   old, already indexed/swarmed). This needs a different operating
   rhythm — a recurring scan (e.g. a scheduled Routine firing a few times
   a day) rather than one-shot deep research — which means committing to
   an ongoing recurring compute/token cost. Not set up yet in this run
   specifically so the owner can weigh in on the cadence/cost tradeoff
   first, rather than committing to open-ended recurring resource use
   unilaterally.
2. **Business-model change**: TESTED 2026-09-21, KILLED (see above). Content/
   newsletter/community models specifically (as opposed to productized
   service, which is what got tested) remain untested if the owner wants
   that explored next, though the same "no existing audience/trust" root
   constraint likely applies there too.
3. **Owner override or unfair-advantage input**: `ideas/decision.md`
   remains available if the owner has a specific direction, or — more
   valuably given the pattern above — any real asset this project doesn't
   currently know about (an existing audience, a specific skill or
   credential, industry relationships, access to a dataset, a community
   the owner is already part of) that could function as the "unfair
   advantage" every killed candidate so far has lacked. The adversarial
   validation discipline would still apply to protect against building
   something already captured.
4. **Accept a marginal candidate deliberately, eyes open**: unchanged
   from 2026-09-19 — several near-misses (change-order/scope-creep tool,
   OpenAI Assistants-API codemod) were marginal, not fatally flawed. Still
   not picked because the project's standing discipline is not to force
   weak ideas through, but remains a legitimate owner call.

Absent owner input, the default is to keep trying fresh discovery rounds
in future runs, but the marginal value of another undirected round is now
low given two full 0-for-14 days — the next run should treat getting an
owner steer as at least as high-value as running a fifteenth strategy
cold.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts.

## GitHub write access

Confirmed healthy as of 2026-09-19 (reset commit, Round 1, Round 2, Round
3 commits all pushed successfully). This run (2026-09-21) will confirm
again with the Round 4 push.

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

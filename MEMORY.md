CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-selection — no business chosen yet)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: FALSE
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: none (0 of 18 tested strategies survived adversarial validation)
PRIMARY_BOTTLENECK: no discovery strategy across 3 business-model shapes (software tool, productized service, content/community) has produced a candidate that survives adversarial validation at €0 capital with no existing audience/accounts/track record
NEXT_HIGHEST_VALUE_ACTION: owner decision needed on how to proceed (see "Decision for the owner" below) before spending more agent-hours on undirected discovery rounds 5+; if no owner input arrives, the one unvalidated lead (open-source bounty/maintenance work, see Round 4) is the next thing to test, since it's the only framing found that doesn't route through either the clone-speed trap or the trust-deficit trap
OWNER_ACTION_REQUIRED: yes — see "Decision for the owner" below

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history. See `LESSONS.md` for the reusable, non-overwritten lessons behind this summary.

## Current status: 18 discovery strategies tried across 2 sessions (16 days apart), zero survivors — a structural finding, not bad luck

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

### Decision for the owner's attention

Round 4 (2026-10-05, this run) deliberately tested the two axes Round 3
flagged as untested — productized micro-service, content/community — to
check whether the Round 1-3 clone-speed finding was specific to software
tools. **It wasn't.** Services die to a trust/credibility deficit on the
same 1-3 week timescale (see `LESSONS.md`); content dies to organic
search being both already-ranked by incumbents and actively shrinking
(AI Overviews cutting informational CTR 58-61%). Full detail:
`research/round4-service-content.md`.

**18 distinct strategies across 3 business-model shapes, zero survivors,
is no longer "keep trying new ideas" territory.** The project's own
anti-busywork rule (never do more brainstorm-and-screen discovery than
needed to make a real decision) now points toward surfacing a decision
rather than running a Round 5 identical in shape to Rounds 1-4. Four
concrete paths, so the owner can pick rather than just "weigh in":

1. **Let the one unvalidated lead be tested next**: paid
   maintenance/bounty work on open-source projects (via Algora, Opire) —
   the only framing found where proof-of-work is public via GitHub commit
   history rather than gated behind a reviews system, which may sidestep
   the trust-deficit problem. Unknown: whether an unestablished
   contributor can actually win funded bounties against established
   maintainers. This is the default if the owner gives no other
   direction, since it's the one lead not yet disproven and costs €0 to
   investigate further.
2. **Owner-fronted trust**: pick a service candidate (e.g., CRA/EAA
   compliance drafting) where the *owner's own real identity and track
   record* stands behind the work, with the AI doing research/drafting
   behind the scenes. This directly removes the trust-deficit blocker
   found in Round 4, but requires the owner's active, ongoing
   participation (identity, time, accepting liability for compliance
   advice) — a materially bigger ask than pure autonomous operation, and
   a decision only the owner can make.
3. **Owner override**: `ideas/decision.md` remains available for a
   specific direction regardless of what discovery turns up — adversarial
   validation would still apply.
4. **Accept a marginal candidate deliberately, eyes open**: as in the
   Round 3 writeup — several near-misses across all 4 rounds were
   rejected for being marginal, not fatally flawed. If the owner would
   rather ship something small and imperfect than keep searching for a
   clean €0/no-track-record wedge, that's a legitimate call only they can
   make.

Absent owner input, the next run defaults to option 1 (testing the
bounty-work lead) rather than another from-scratch brainstorm round,
since repeating Rounds 1-4's shape without a new lever has a well-evidenced
expected result by now.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts.

## GitHub write access

Confirmed healthy. This run also confirmed, via `ListConnectors`, that
this session has **zero MCP connectors available** — no email, no social,
no payment, no ad-account access. GitHub (push + Pages hosting) is the
only account-backed capability this agent has natively; every other
distribution/monetization channel in any surviving future candidate will
need the owner to create and hold the account. This isn't a new blocker —
`AWAITING_BUILD_APPROVAL`/launch-prep already assumed owner involvement at
that stage — but it's now a confirmed fact, not an assumption, and it's
part of why the trust-deficit finding in Round 4 binds as hard as it does
(an anonymous AI-run seller account has no path to the reviews/identity
compliance buyers require, and the owner would need to front that
themselves per option 2 above).

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

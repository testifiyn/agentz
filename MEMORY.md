CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-selection — no business chosen yet)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: FALSE (no 3-candidate portfolio has ever survived screening long enough to enter formal portfolio testing)
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: 1 parked — indie/natural-perfumer IFRA/EU compliance newsletter (`research/perfumer-compliance-newsletter.md`) — not approved, not killed, blocked on owner input (see OWNER_ACTION_REQUIRED)
PRIMARY_BOTTLENECK: idea discovery keeps finding either (a) niches already occupied by a real competitor within weeks of visibility, or (b) niches with no direct competitor but unconfirmed market size/willingness-to-pay — and even the one candidate that cleared screening cannot proceed to real-world testing without an owner-provided public identity/brand/payment setup that has never been established
NEXT_HIGHEST_VALUE_ACTION: owner decides whether to (1) provide a brand/author name + email + approval to create free accounts (Substack/Reddit/etc.) so the perfumer-newsletter candidate's cheap validation test can actually run, (2) direct a fresh discovery angle, or (3) explicitly accept that absent input the project will keep running fresh discovery rounds rather than testing the parked candidate
OWNER_ACTION_REQUIRED: YES — see "New structural finding: no real-world identity/account setup exists" below. This is a prerequisite for ANY candidate to reach LAUNCH_PREP, not just the current one.

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status: 31 discovery strategies across two sessions (11 software + 8 service + 12 content/community), zero approved — one candidate parked for the first time instead of killed

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

### 2026-09-29 follow-up: the business-model pivot was tested, and also failed to produce an approvable candidate — but surfaced a deeper structural gap

Ten days later, per option 2 above (business-model change), this project
ran two parallel discovery rounds explicitly outside the software-tool
category: **Round 4** (productized services, 8 candidates, full detail
in `ideas/candidates.md` and `research/ada-remediation-service.md`) and
**Round 5** (content/curation/community, 12 candidates, full detail in
`ideas/candidates.md` and `research/perfumer-compliance-newsletter.md`).

**Result: still zero approved candidates, but a meaningfully different
result from the 11-strategy day.** Two things changed:

1. **A new rejection reason appeared for the first time**: Round 4's top
   pick (ADA/WCAG accessibility remediation sprint) had real, strong,
   forced-spend demand evidence and a genuine, defensible differentiation
   angle (FTC action against "overlay" fake-fix competitors) — the
   strongest demand case this project has found. It was killed anyway,
   not for being already captured, but because **the delivery model
   itself is a bad fit for this project's operating constraints**:
   bespoke code changes to a live, litigated small business's production
   site, requiring trust this project cannot honestly earn with zero
   credentials/insurance/track record, with real financial/legal harm on
   the table if done wrong. Worth carrying forward as a standing check
   alongside "is this already captured?": **"can this be delivered
   without misrepresenting our experience or exposing a real third party
   to real harm?"**
2. **The first candidate to survive discovery-stage screening without an
   existing direct competitor occupying its exact wedge**: Round 5's
   perfumer-compliance-newsletter. This does not mean it's a good
   business (market size and willingness-to-pay are unconfirmed, and its
   core moat claim — curation beats an AI clone — is exactly the
   untested thesis this whole pivot exists to check) — it's PARKED, not
   approved, in `research/perfumer-compliance-newsletter.md`.

**New structural finding: no real-world identity/account setup exists,
and this blocks every candidate, not just this one.** Getting the
perfumer-newsletter candidate close enough to a real test exposed
something none of the previous 30 killed candidates ever reached: this
project has never established a business name/brand, a dedicated email,
or any payment/publishing account (Substack, Stripe, Reddit, etc.) to
actually operate under in public. Every candidate so far died in
discovery or validation, before `LAUNCH_PREP` would have made this gap
concrete. It will block whichever candidate eventually wins, exactly the
same way, unless resolved before then. This is now flagged as
`OWNER_ACTION_REQUIRED` at the top of this file.

### Recommendation for the owner's attention (not a request for
permission to continue — the project's standing instruction is that
research/idea/kill decisions don't need a stop-and-ask gate, and future
runs will keep working autonomously regardless)

1. **Identity/account setup (new, and the most concrete ask)**: to let
   the parked perfumer-newsletter candidate's next cheap experiment
   (posting genuinely useful free help into existing forum threads under
   a real identity, to test real engagement before ever asking for
   money) actually run, the owner needs to either (a) provide a business/
   author name and an email to operate under, and confirm the agent may
   create the necessary free accounts (Substack, Reddit, etc.) on the
   owner's behalf, or (b) explicitly say this should wait. Absent a
   response, this candidate stays parked rather than the agent
   inventing an identity/brand unilaterally.
2. **Owner override**: `ideas/decision.md` remains available if the
   owner has a specific direction in mind they'd like pursued regardless
   of what discovery search turns up.
3. **Time-based approach** (carried forward, still untested): reacting to
   a fresh trigger event within 24-72 hours of it breaking, before it's
   SEO-indexed or GitHub-cloned, needs a different operating rhythm
   (frequent short checks) than the one-shot deep-research rounds run so
   far.
4. **Accept a marginal/parked candidate deliberately, eyes open**: if the
   owner would rather greenlight the perfumer-newsletter candidate's
   validation test despite its unconfirmed market size, or accept some
   other previously-parked-as-marginal idea, that's a legitimate call
   only they can make — the project's standing discipline is not to force
   it through unilaterally.

Absent owner input, the default is to keep the perfumer-newsletter
candidate parked (not killed — its open questions are genuinely
testable, unlike everything else screened) and try a further fresh
discovery round in the next run rather than re-running today's exhausted
strategies.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts,
no business identity/brand/email established.

## GitHub write access

Confirmed healthy this run (2026-09-29) — the designated branch
(`claude/cool-bell-v767rb`) had been merged and deleted upstream since
the last run, restarted cleanly from `origin/main` per this project's
branch-recovery convention, and this run's commits pushed successfully.

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

CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-selection)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: FALSE
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: none — 13/13 discovery angles killed across two runs
PRIMARY_BOTTLENECK: discovery has exhausted both the business-model axis (software vs. service/content/community) and the timing axis (evergreen vs. <72h-fresh) without a survivor; the untested lever is TAM size (deliberately sub-VC-scale, hyper-local/niche-small)
NEXT_HIGHEST_VALUE_ACTION: run a discovery round deliberately scoped to small, hyper-local, or otherwise sub-googleable/sub-VC-attractive niches (see "Recommendation" below) — do not repeat the national-scale evergreen or software-vs-service axes already exhausted
OWNER_ACTION_REQUIRED: none blocking — informational update below; owner may weigh in on `ideas/decision.md` or accept a marginal candidate, but the project continues autonomously either way

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status (updated 2026-09-23): 13 discovery strategies across two business-model classes, zero survivors — the pattern generalizes past software

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

### Round 4 (2026-09-23): tested the two levers this session's own
recommendation flagged — result: pattern generalizes, doesn't dissolve

Four days later, ran two parallel research agents specifically targeting
the two untested levers from the 2026-09-19 recommendation below:
(a) business-model change — productized services, content/newsletter,
community, instead of software; (b) time-based reaction — a genuine
trigger event from the last ~72 hours, paired with a service-shaped
(not software-shaped) response. Full detail in `ideas/candidates.md`
Round 4. **Both came back with zero survivors, out of 9 service/content/
community candidates and ~15 scanned recent trigger events.**

The important result is *why*, not just the zero count. The
service/content/community agent's candidates were killed not by
code-clones but by **capital** — venture-funded or government/nonprofit
incumbents (Ownwell's $50M Series raise Feb 2026 doing exactly the
property-tax-appeal idea on contingency; Undivided's $5M-funded paid
"Navigators" for IEP advocacy; state-funded CCR&R agencies for childcare
licensing help) had already occupied every niche specific and
well-evidenced enough to validate via search. The trigger-scan agent
found the same thing from the other direction: the one genuinely fresh
(<24h) high-severity event found (an F5 BIG-IP RCE CVE) already had a
vendor advisory, hotfix, and 7+ independent security-outlet writeups
within hours — the response ecosystem for anything consequential enough
to matter now reacts faster than a solo €0 operator can move, whether
the response is code or prose.

**Revised structural read: the root cause is not "software gets cloned
fast." It is "any opportunity that is well-evidenced enough for this
project's own validation process to confirm it (real search hits,
quantifiable pain, an identifiable buyer) is, by that same token,
visible enough for someone with more resources — code-clone, capital, or
an existing institution — to already be moving on it, usually before we
even find it."** Business model (software vs. service vs. content) does
not change this; it only changes *who* the faster mover is (a GitHub
forker vs. a funded startup vs. a government agency). Reaction speed
does not change this either, beyond the first few hours for the most
acute triggers. The dimension not yet tested is **market size/
visibility**: opportunities deliberately too small, too local, or too
fragmented to be nationally googleable or attractive to VC/institutional
capital were flagged by both agents as the one remaining plausible gap,
but neither agent verified a specific real instance — this is a
hypothesis for the next round to test, not a candidate.

### Recommendation for the owner's attention (not a request for
permission to continue — the project's standing instruction is that
research/idea/kill decisions don't need a stop-and-ask gate, and future
runs will keep working autonomously regardless)

Thirteen independent strategies across two business-model classes and
two time horizons have now failed. Continuing to vary business-model or
timing without also varying scale is unlikely to be productive. Worth
the owner knowing about and weighing in on if they have a preference,
next time they check in:

1. **Scale-down approach (the one remaining untested lever)**: deliberately
   target hyper-local (single city/region), small-TAM, or otherwise
   sub-googleable niches — small enough that no VC or national nonprofit
   has bothered, and specific enough that it wouldn't show up in a
   national web search the way every candidate tested so far did. This
   likely requires sourcing problems from a specific local community
   (a forum, a specific municipality's public records, a specific
   in-person network) rather than broad web search, which is a
   meaningfully different research method than anything tried in 13
   attempts so far.
2. **Owner override**: `ideas/decision.md` remains available if the
   owner has a specific direction in mind they'd like pursued regardless
   of what discovery search turns up — the adversarial validation
   discipline would still apply to protect against building something
   already captured.
3. **Accept a marginal candidate deliberately, eyes open**: several
   near-misses across both sessions were rejected for being merely
   marginal, not fatally flawed (e.g., the change-order/scope-creep tool;
   the OpenAI Assistants-API codemod; the remote-worker-isolation
   community, killed on weak monetization evidence rather than
   competition). None were picked because the project's standing
   discipline is not to force weak ideas through — but if the owner would
   rather ship something small and imperfect than keep searching for a
   clean wedge, that's a legitimate call only they can make.

Absent owner input, the default is to run the scale-down discovery
approach next (option 1) rather than re-running the national-scale
business-model or timing variations already exhausted twice.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts.

## GitHub write access

Confirmed healthy as of 2026-09-19 — multiple commits reached
`origin/main` normally (reset commit, Round 1 commit, Round 2 commit all
pushed successfully). This run (2026-09-23) develops on branch
`claude/cool-bell-swg3nx` per the session's branch instructions.

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

CURRENT_PHASE: IDEA_DISCOVERY

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Current status: 20 discovery strategies tried across two sessions, zero survivors — the structural finding now extends to service/content models too

**Repo was reset to a clean slate on 2026-09-19 at the owner's explicit
request** (all prior idea candidates, validation reports, and MVP code
from three earlier runs — ten candidate ideas, all killed or pivoted,
none approved to build — deleted from `ideas/`, `research/`, `build/`).
Immediately after the reset, that session executed three full discovery
rounds (11 distinct strategies), applying every methodology refinement
learned across this project's history. All of it failed to produce a
single surviving candidate. **A follow-up session (2026-09-26) tested
the one redirection that first session explicitly flagged as untried —
productized-service and content/community business models instead of
pure software — across 9 more candidates. That also failed, zero
survivors, but for reasons that extend rather than escape the original
diagnosis (see below).** Full detail per candidate is in
`ideas/candidates.md`; this section is the synthesized read of what it
all means.

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
- **Round 4** (2026-09-26, 1 agent, deliberately redirected away from
  software entirely): tested 9 candidates split across productized
  "concierge" services (genealogy research, buy-side due diligence for
  online-business acquisitions, search-fund deal-sourcing, medical-bill/
  insurance-denial appeal advocacy, grant-writing, vertical expert
  networks, heir-hunting, unclaimed-property recovery) and paid content/
  community models (collector/reseller deal-alert curation). Zero
  survivors, via two distinct capture mechanisms:
  1. **Old-money moat** — several of these "human judgment" niches
     (genealogy, heir-hunting/probate research, expert networks) are
     30-90-year-old professions with entrenched trust/credential moats a
     new solo operator cannot out-compete on reputation alone, AI-assist
     or not.
  2. **The service itself gets AI-cloned just as fast as software would**
     — the sharpest data point: medical-bill appeal-writing is a real,
     growing pain point, but a wave of AI-native competitors (Claimable
     at $39.95/appeal, EZAppeal at $3/appeal, free nonprofit tools) has
     already commoditized it faster and cheaper than a human-only
     concierge could ever price. Moving from "software artifact" to
     "service" does not escape the compression problem when the
     deliverable is itself a templatable document (an appeal letter, a
     grant proposal, a report) — AI tooling clones that just as readily.
  The deal-alert-curation candidate also confirmed a third pattern:
  proven willingness to pay ($6-75/mo paid Discords, 12k-17.7k members)
  doesn't help when incumbents already have years of head start *and* a
  network effect (more members → more deal reports → more value), which
  is a moat type this project hadn't encountered yet in the pure-software
  rounds.

### The structural read

Every failure mode across all four rounds traces back to the same root
cause, just expressed differently by niche: **in September 2026, the
time between "an opportunity becomes visible" and "someone (often several
someones, independently, using AI-assisted tooling) has already shipped a
working response" has compressed to single-digit weeks, and in several
cases (regulator-published official tools, chamber-built compliance
tools, AI-native service competitors) the gap never opens at all**
because the same AI-assisted tooling now lets the *incumbent*, the
*regulated body itself*, or an *AI-native service provider* respond just
as fast as a solo outside builder. This is a continuation and sharp
tightening of the "publicized trigger events get raced on" lesson from
this project's earlier (now-deleted) history, but the magnitude is
different in kind, not just degree: it now applies to chronic pain points
that were previously assumed safer (evergreen calculators, regulated-
profession compliance needs), to genuinely complex engineering responses
that were assumed to buy more runway, to differentiators built around
"we'll do X continuously, they only did it once" (freshness-as-moat),
which turned out to already be standard competitive practice, and — as
of Round 4 — **to the business-model change itself.** Switching from
software to a productized service does not route around the compression
problem whenever the service's deliverable is a templatable document or
process (an appeal, a proposal, a report): that gets AI-cloned by
competitors at commodity prices just as fast as a SaaS tool would be.
The two capture mechanisms that *did* hold up in Round 4 — decades-old
professional trust moats, and network-effect communities with years of
head start — are not things a new €0 solo operator can manufacture
quickly either; they're just a different flavor of "already closed,"
not a route in.

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

Twenty independent strategies across two dimensions (software product,
and now productized service/content) have failed. Continuing to run
another headline-niche "brainstorm + screen" round on either dimension is
very unlikely to be productive — that specific approach has now been
tested to the point of clear diminishing returns. Two of the four options
raised after Round 3 have effectively been used up (business-model
change: tried, failed; more discovery rounds on the same pattern: tried
repeatedly, failed). What's left, worth the owner's input if they have a
preference next time they check in:

1. **Relax the remote-only/laptop-testable constraint.** Round 4's own
   research flagged this directly: categories requiring physical
   presence, on-site inspection, or trust built over months (not
   discoverable/copyable via a web search in a day) were not deep-dived
   because they fail the "testable from a laptop at €0" framing this
   project has used by default — not because they're already captured.
   This is a scope decision, not a research one: it trades faster €0
   testing for a plausible way to actually get outside the
   AI-clone-in-days dynamic. Worth explicit owner sign-off since it's a
   bigger operating-model shift than picking a different niche.
2. **Go narrower than headline niches.** Round 4's agent's own
   suggestion: dig into a specific under-covered sub-segment within an
   already-mapped category (e.g. a specific diaspora/ethnic-community
   genealogy specialty, a specific underserved regional search-fund
   vertical) rather than re-testing category headlines, since headline
   niches are evidently searched and filled by AI-assisted competitors
   just as fast in services as in software.
3. **Time-based/breaking-trigger approach** (carried forward from Round
   3, still untested): react to a fresh trigger within 24-72 hours of it
   breaking, before it's indexed — needs a different operating rhythm
   (frequent short checks) than the one-shot deep-research rounds run so
   far.
4. **Owner override**: `ideas/decision.md` remains available if the
   owner has a specific direction in mind — the adversarial validation
   discipline still applies to protect against building something
   already captured.
5. **Accept a marginal candidate deliberately, eyes open**: no candidate
   across either round was rejected as merely marginal rather than
   clearly captured, so this option is weaker now than after Round 3 —
   there isn't an obvious near-miss sitting in the rejected pool to pick
   up.

Absent owner input, the default for the next run is option 2 (narrower
sub-niches within already-mapped categories) combined with option 3
(watching for a genuinely fresh trigger rather than a 2-4-month-old one),
since those are the two paths not yet tried in any form. Repeating
another headline-level "new industry, new day" scan on either dimension
without one of these changes is not a good use of the next run.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts.

## GitHub write access

Confirmed healthy as of the 2026-09-26 run — commits continue to reach
the remote normally.

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

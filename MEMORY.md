CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-selection, skeptical)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: FALSE
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: 1 marginal — GBP suspension/reinstatement appeal-writing service (see below)
PRIMARY_BOTTLENECK: no evidence-backed candidate has cleared adversarial validation cleanly; the one marginal survivor's next de-risking step (a pilot with real distressed business owners) carries a third-party harm risk that needs owner judgment, not just business judgment
NEXT_HIGHEST_VALUE_ACTION: owner decision on whether/how to proceed with a cautious, harm-aware pilot of the GBP-reinstatement candidate (see "Owner decision needed" below) — or, if declined/no response, run a fresh discovery round on a different axis rather than force this one
OWNER_ACTION_REQUIRED: YES — see "Owner decision needed" section below

# Memory

This file is the current-truth summary of the autonomous business-building
project running in this repo. It is rewritten each run to reflect current
state; see `LOG.md` for the append-only history.

## Current status (2026-10-06): 26 niches screened total, one marginal survivor, owner input needed before the next step

Starting point this run: a prior run (2026-09-19, same day as a clean-slate
reset) tried 11 software-product discovery strategies and found zero
survivors — the consistent failure mode was that AI-assisted competitors
clone any software mechanism within 1-3 weeks of an opportunity becoming
visible, regardless of engineering complexity. That run's memo flagged two
untested options: react to literally-breaking trigger events, or pivot the
business model away from pure software to one where the moat is a human
relationship, curation judgment, or network trust instead of clonable code.

This run tested the business-model-pivot option. Three parallel research
tracks screened 15 specific niches for productized services, paid niche
newsletters, and community/marketplace matching — full detail in
`research/round4-service-content-community.md` and the Round 4 section of
`ideas/candidates.md`.

**Result: 0 survivors in paid-newsletter and marketplace tracks; 1 marginal
survivor in productized services** — writing suspension/reinstatement
appeals for small businesses whose Google Business Profile got caught in an
ongoing (since ~27 Apr 2026, still active, now in a second wave as of May
2026) algorithmic mass-suspension sweep. Real evidence of existing paid
demand: boutique operators charge $250-800/case, several pay-on-success.
Genuine judgment requirement: Google's appeal review is manual, non-API,
and resistant to full automation — a materially different shape than the
11 killed software candidates.

**Dedicated adversarial re-validation (same run) did not kill it, but
surfaced real problems:**

1. Google has not fixed the underlying pain and the wave is structurally
   ongoing (favorable) — but Google also rolled out a **"one and done"**
   appeal policy in 2026 (first in Europe, intended to go global): a
   business gets exactly one appeal through Google support; if rejected,
   the only recourse is paid third-party mediation (~40% of a ≥€250 fee).
   This raises the stakes of professional help being *good*, but also
   raises the cost of professional help being *bad*.
2. The competitive field is more saturated/professionalized than first
   scored: a scaled newer entrant (Reinstate Labs) running syndicated PR
   through the same newswire network as an existing incumbent in the same
   window, a glut of templated AI-generated content already covering this
   keyword space, and Fiverr/Upwork sellers with real multi-year review
   histories at commodity prices. This is the same multi-player-flooding
   pattern that killed earlier candidates in this project's history, just
   not caught on the first screening pass.
3. All vendor "success rate" claims (85-98%) are unverifiable
   self-reported marketing numbers that don't reconcile with independent
   figures. **No evidence anywhere of a solo, zero-track-record newcomer
   successfully winning client trust or even getting outreach replies in
   this space** — the proposed acquisition channel (cold outreach to
   businesses with vanished Maps listings) is completely unvalidated, not
   just under-discussed.
4. No ToS/account-level risk was found for an agent filing appeals on
   clients' behalf (appeals are filed from the business's own dashboard).

The validating agent's own recommendation: don't try cold client
acquisition yet; instead run a free/heavily-discounted pilot on 2-3 real
cases sourced from a community (r/SEO, localsearchforum) to generate
verifiable case studies, treating the trust/credibility gap — not
Google's tooling or ToS — as the binding constraint to de-risk first.

## Owner decision needed

I'm not proceeding to that pilot autonomously, and want to flag why rather
than just doing it or just dropping the candidate.

This project's standing instructions treat research, idea generation, and
kill decisions as not needing a stop-and-ask gate. But the recommended next
step here is different in kind from research: it means reaching out to
real small business owners who are already in a stressful, consequential
situation (their Google listing — often their primary customer channel —
suspended), offering to help with their appeal while we have **no proven
track record and an explicitly unvalidated outreach channel**, under a
2026 policy regime where a bad appeal may burn their *only* shot before
they're pushed into a paid mediation process. That is a real harm-to-a-
third-party risk, not just a business-viability risk, and it is also an
action that is externally visible and hard to reverse once someone has
acted on our advice. That combination is exactly the kind of thing this
project's own operating guidance says to surface rather than act on
unilaterally.

Options for the owner to weigh in on, next time they check in:

1. **Approve a narrow, harm-minimized pilot**: e.g. only offering a free
   *review of an appeal draft before the business submits it themselves*
   (never submitting on their behalf, never being the one to spend their
   one shot), sourced from people already posting in r/SEO/localsearchforum
   asking for help — i.e., helping people who are already going to submit
   an appeal anyway, with a second opinion, not soliciting people who
   haven't decided yet.
2. **Decline this candidate** given the stakes the "one and done" policy
   introduces for an unproven operator, and treat it as killed on
   harm/liability grounds even though it technically survived the business
   adversarial validation.
3. **Approve full pilot as the validating agent proposed** (offering to
   file pilot appeals directly, not just review drafts) if the owner judges
   the risk acceptable, ideally with an explicit disclaimer to pilot
   clients about lack of track record.
4. **No response** — default behavior will be to treat this candidate as
   parked (not killed, not advanced) and open a fresh discovery round on a
   different axis next run, consistent with the discovery-reopening rule
   (this is effectively "too few credible candidates remain" once the one
   candidate we have is paused pending owner input).

Absent owner input, next run should default to option 4.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no outreach sent, no pilot started.

## GitHub write access

Confirmed healthy this run.

## Prior history (summarized; full detail in `ideas/candidates.md`)

11 software-product discovery strategies (micro-SaaS, browser extensions,
comparison calculators, non-English regulated-profession tools, very-recent
trigger events, regulatory-engineering-moat niches) were tried across Run
1-3 (pre-reset) and the 2026-09-19 post-reset session. All 11 failed
adversarial validation or discovery-stage screening, with a consistent
structural cause: AI-assisted clone response time to a visible opportunity
has compressed to single-digit weeks, regardless of engineering complexity,
and this applies even to opportunities previously assumed safer (evergreen
calculators, regulated-profession compliance, genuinely complex engineering
responses, "we update continuously" freshness-as-moat claims). See
`MEMORY.md` git history and `ideas/candidates.md` for full per-candidate
detail.

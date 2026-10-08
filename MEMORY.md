CURRENT_PHASE: IDEA_DISCOVERY
MODE: INVESTOR (pre-business-selection)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: TRUE
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: none (0 of a target 3 — see status below)
PRIMARY_BOTTLENECK: zero surviving candidates after ~15 distinct discovery strategies across two sessions; the "brainstorm + web-search screen" discovery method itself is the bottleneck, not any one idea
NEXT_HIGHEST_VALUE_ACTION: owner decision needed on discovery strategy (see "Decision point" below) before spending further agent-hours on more of the same method; absent owner input, try the untested time-based (<72h fresh-trigger) axis next, with multilingual search built into the discovery pass from the start
OWNER_ACTION_REQUIRED: soft — a preference on the 4 options below would help, but is not a blocking gate; this project's standing instruction is that research/idea/kill decisions don't need a stop-and-ask gate

# Memory

This file is the current-truth summary of the autonomous business-building
project running in this repo. It is rewritten each run to reflect the
current state, not just appended to — see `LOG.md` for the append-only
history and `ideas/candidates.md` for full candidate-level detail.

## Current status: ~15 discovery strategies across two sessions, zero surviving candidates, plus a sharpened methodology lesson

**Session 1 (2026-09-19, post-reset):** 11 distinct strategies across 3
rounds — general micro-SaaS/freelancer tools, DE/UK evergreen
comparisons, mainstream browser extensions, non-English regulated-
profession B2B, very-recent (<4mo) trigger events, maintenance-labor-moat
niches, and engineering-effort-moat regulatory niches. One pick (a
"living" digital-nomad-visa tracker) reached adversarial validation and
was killed there — the "incumbents are static, we're dynamic"
differentiator was factually false. Full detail in `ideas/candidates.md`.

**Session 2 (2026-10-08, this run):** tested the two axes the end of
session 1 flagged as untested:
- **Service/content/community business models** (8 candidates: tariff
  newsletter, DTC price-monitoring service, nonprofit grant-alerts,
  AI-cheapened translation service, EU AI Act compliance-doc service,
  paid niche community, pay-per-question research service, elder-care
  concierge). **All died** — same pattern as software ideas: incumbents
  already running the identical playbook (some since 2008), or
  trigger-driven niches getting cloned regardless of whether the wrapper
  is a tool, a newsletter, or a generator.
- **Obscure/low-visibility regulatory niches** (5 candidates: UK Pensions
  Dashboards small-scheme readiness, Italy RUNTS/RASD sports-club
  obligations, US lay-guardian court accounting, UK standardised
  service-charge accounts, EU Machinery Regulation SME compliance). Four
  died at discovery (wrong timing, incumbent with institutional
  distribution, or a first-mover already targeting the exact persona).
  **One provisional survivor** (EU Machinery Regulation 2023/1230
  compliance tooling) went to dedicated adversarial validation —
  **and was killed there too**: a multilingual search (German/Italian)
  found a live, AI-built, actively-marketed direct competitor
  (CE-Copilot) plus three decades-old incumbents (Safexpert, Docufy,
  CEM4) that an English-only discovery search had completely missed.
  Full report: `research/eu-machinery-regulation-compliance-tool.md`.

**New methodology lesson extracted to `LESSONS.md`:** discovery-stage
"is this already built?" searches must be multilingual from the first
pass for any EU-wide or country-concentrated niche — not deferred to a
validation step that might not think to check. This run only caught the
false premise because the validation agent was explicitly instructed to
re-check in German/Italian; a future run without that explicit
instruction could recommend a build on the same false premise. This
compounds the project's standing clone-compression finding: the same
"opportunity visible → cloned within single-digit weeks" pattern likely
has an invisible-to-English-search mirror in non-English markets, making
the true safe window probably narrower than it looks, not wider.

### The structural read, updated

Across both sessions, every surviving-looking candidate has died one of
three ways: (1) an incumbent — sometimes a sleepy, non-SEO-visible,
decades-old one — already occupies the niche and an English-only search
missed it; (2) the niche is tied to a publicized trigger and gets cloned
within single-digit weeks regardless of software/service/content
wrapper; (3) the buyer population is real but reachable only through a
gated, slow, relationship-based channel (trade association, court
referral, consultancy network) that doesn't work at €0 and solo. No
axis tried so far — generic software, non-English B2B, recent triggers,
engineering-complexity moats, service/content/community models, or
obscure-niche regulation — has produced a candidate that survives
dedicated adversarial validation.

## Decision point for the owner's attention (not a blocking gate)

Given ~15 independent strategies have now failed across two full
sessions, continuing to run more of the same "brainstorm + web-search
screen, now with multilingual checks" discovery without a different
lever is lower-expected-value than before. Options, in the order this
project's own prior recommendations ranked them:

1. **Time-based approach (still untested)**: react to a fresh trigger
   within 24-72 hours of it breaking, before it's SEO-indexed or cloned.
   This needs a different operating rhythm (frequent short checks) rather
   than one-shot deep research — a good candidate for a scheduled
   higher-frequency check-in if the owner wants to fund that rhythm.
2. **Owner override**: `ideas/decision.md` remains available for a
   specific direction the owner wants pursued regardless of what
   discovery turns up — adversarial validation (now explicitly
   multilingual) would still apply before any build commitment.
3. **Accept a marginal candidate deliberately, eyes open**: near-misses
   exist across both sessions (change-order/scope-creep tool; OpenAI
   Assistants-API codemod; UK standardised service-charge accounts for
   self-managed RMCs, once the final format publishes) — none picked
   because the project's standing discipline is not to force weak ideas
   through, but a deliberate "ship something small and imperfect" call
   is the owner's to make, not this agent's to default into.
4. **Business-model change**: now tested (service/content/community, all
   died) — no longer an open option distinct from software.

Absent owner input, the default for the next run is to try the
time-based axis (option 1), since it's the one lever not yet tested
across either session, while building multilingual competitor search
into the discovery pass itself from the start rather than only at
validation.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no external service accounts.

## GitHub write access

Confirmed healthy across both sessions — all commits reached
`origin/main` (session 1) and `origin/claude/cool-bell-oeozj5` (session 2)
normally.

# Candidate ideas

## Round 1 (2026-09-19, post-reset)

Three parallel discovery agents researched micro-SaaS ops tools,
directory/comparison sites, and browser extensions, each required to
check "is this already captured?" before writing anything up. **Result:
zero strong survivors across all three niches.** This is itself the
important finding of this round — recorded in full below and in
`MEMORY.md`, not discarded.

### Micro-SaaS agent: 0 strong / 1 weak survivor, 8 discarded

Discarded as already well-served: invoice/payment chasing (crowded with
Gumroad micro-tools + AND.CO/Fiverr Workspace), client feedback/proofing
(10+ active competitors with free tiers), proposal software (crowded
under PandaDoc/Proposify), Google review reply management (weak demand —
the bottleneck is asking for reviews, not replying), WordPress
maintenance reports (MainWP free/self-hosted + WP Client Reports free
plugin already do this), appointment no-show SMS/WhatsApp reminders (real
gap in Calendly's free tier, but already filled by Remindlo/GReminders/
WhatSawa, and WhatsApp's Cloud API now bills business-initiated reminder
messages — not €0-buildable at scale anyway), Upwork/Fiverr client scam
vetting (GetMany already does this), EU freelancer VAT/reverse-charge
invoicing (Xolo/Quaderno+Wise already serve it), client intake forms
(Tally already offers a genuinely free unlimited tier, closing the
Typeform-price complaint).

**Weak survivor — change-order/scope-creep formalization tool.** Real
pain (Ignition's research: >$76k/year in unrecovered out-of-scope work
for accounting firms; 43% of accounting pros just absorb it) and real
willingness-to-pay signals (several Gumroad "scope creep kit" products
exist). But existing competitors bundle this into $17-52/mo full CRMs
(Bonsai/HoneyBook/Dubsado) or price it at accounting firms specifically
(Ignition), and the agent's own honest assessment: "it's a thin wedge —
the actual product (a form + PDF + e-sign) is trivial to replicate... I'd
rate this candidate marginal, not a clear win."

### Directory/comparison agent: 0 strong / 1 marginal survivor, 8 discarded

Discarded as already saturated (all with active, 2026-dated competitors):
appliance error-code lookup (8+ sites), foreign degree recognition in
Germany (official free anabin/ZAB database), Bavarian-formula GPA→German
grade converter (6+ free calculators), German driving-license conversion
(ADAC + others maintain live 2026-updated lists), UK/Ireland product
recall checker (official gov.uk + CCPC.ie tools plus recallscope.com),
German health-insurance osteopathy reimbursement comparison (8+ dedicated
sites — "exactly the kind of niche the SEO/affiliate industry has mined
hardest"), German municipal business-tax rate (Gewerbesteuer/
Grundsteuer-Hebesatz) lookup (full-coverage tools + an official
government map already exist), UK campervan-conversion insurance
comparison (Quotezone + specialist insurers already active).

**Marginal survivor — UK "XL Bully"/banned-breed dog insurance &
compliance tracker.** Real, well-evidenced acute gap: Dogs Trust (the
only affordable insurer at £25/yr) is stopping this cover from 1 July
2026, leaving owners quoted premiums "potentially exceeding £900/year"
(multiple 2026 trade-press sources), and no neutral comparison site was
found. **But the discovery agent itself flagged a fatal timing problem:**
the UK government removed the mandatory insurance *requirement* for
exempted dogs on 1 July 2026 — the same date Dogs Trust stopped
coverage — so by today (19 Sept 2026) the acute forced-purchase urgency
has already passed, shrinking this from "urgent mandatory purchase" to
"softer voluntary/health-insurance shopping problem." A first-mover
competitor (napo.pet) already has an SEO-capture landing page. Small
finite population (~50k exemption certificates) regardless.

### Browser-extension agent: 0 clean survivors, 2 marginal near-misses, 12 discarded

Discarded as saturated with active, well-rated 2026 competitors: Gmail
bulk unsubscribe, hide YouTube Shorts, ChatGPT→Markdown export, YouTube
transcript copy, Amazon sponsored-listing blocker, recipe "jump to
recipe" filter, hide Google AI Overviews, cookie-consent auto-reject
(Consent-O-Matic), ghost-job/expired-listing detector (also needs a
crowdsourced backend, violating the €0/client-only constraint),
Facebook Marketplace scam detector (7+ competitors).

**Important new structural finding — the fake-review-checker space
(Fakespot's July 2025 shutdown) has now spawned at least 8 near-identical
new entrants** (ReviewShield, Null Fake, LocalVerdict, ReviewLens,
RatingVerifier, Amazon Fake Review Analyzer, Overprice, RealReviews.io),
most with tiny user counts (2-50) and template-mill naming — direct,
current confirmation of the "single dated event visible to every builder
at once" trap.

**Marginal near-miss 1 — Airbnb "true total price" corrector.** Real
documented bug reports on the one existing competitor (NaN prices,
inconsistent coverage), but Airbnb itself rolled out default total-price
display in 2025 to comply with the FTC's junk-fee rule — the platform is
solving its own underlying problem, shrinking the addressable pain
forward, plus inherently small single-site TAM.

**Marginal near-miss 2 — LinkedIn feed/promoted-post decluttering.**
Genuinely fragmented quality at the bottom of the market (several 2-3★
options with DOM-selector-churn complaints), but at least one competitor
("LinkedIn Content Hider") is already reported at 4.8-5.0★ and
privacy-clean — not actually uncaptured, just messy.

**Methodology note:** this agent's Chrome Web Store access was blocked by
an egress proxy restriction, so store ratings/counts came from
search-snippet summaries rather than direct page reads and gave
inconsistent numbers in two cases — treat exact figures as directional.
A real validation pass on anything from this agent should re-verify via
a different access route before relying on precise numbers.

All three agents converged independently on the same conclusion: the
"brainstorm an obvious consumer/freelancer pain point, then check if it's
taken" methodology is now producing systematically weak results, even
across genuinely different niches (general freelancer ops, DE/UK
consumer directories, mainstream-platform browser utilities).

## Round 2 (same day) — three redirected strategies

### Non-English vertical B2B (regulated professions): 0 survivors

Tested 7 profession×country pairs (Polish sworn translators, Czech court
interpreters, Czech court experts, Spanish property managers, Polish
driving instructors, Portuguese solicitadores, Dutch bailiffs) with
in-language searches. **Every one already has either an official
free tool from the profession's own regulator/chamber, a free grassroots
tool built by a peer practitioner, or a mature commercial vertical SaaS
serving it at low per-seat pricing.** Meta-finding: regulated professions
with real compliance pain are exactly the populations motivated enough to
already have built or bought a fix — regulation itself creates the
incentive for someone (often the regulator) to close the gap fast.

### Very recent (<4mo) trigger events: 0 strong survivors, 1 marginal

Tested 4 genuinely recent 2026 triggers (GitHub Copilot metered billing,
June 2026; Notion Mail shutdown, announced June 2026, dead Sept 22 2026;
PromptPerfect shutdown, Sept 2026; OpenAI Assistants API deprecation,
Aug 26 2026). **All saturated within 2-12 weeks of the trigger date** —
PromptPerfect fastest at ~2-3 weeks (9 near-identical "alternative"
wrapper sites already live), Copilot billing at ~10 weeks (7+ trackers
plus GitHub's own native dashboard), Notion Mail at ~12 weeks (7+
listicles plus a repositioned incumbent). **Key finding: recency no
longer buys head start once a trigger is newsworthy/SEO-indexed — any
"X is shutting down 2026" query already returns a content farm within
weeks.** Marginal survivor: a free offline codemod CLI for OpenAI
Assistants-API migration (no official migration tool exists, and the
shim/proxy angle is taken but a pure static-analysis codemod isn't) — but
the best-fit audience already hit the wall ~3 weeks before this research,
leaving only a shrinking laggard pool, and monetization is thin (GitHub
Sponsors / lead-gen at best). Not picked.

### Maintenance-labor-moat niches: 1 real survivor, 1 conditional, 2 rejected

Rejected: "best VPN for China" live-status tracker (real staleness
problem, but already dominated by well-funded affiliate publishers —
Gizmodo, TechRadar, CyberInsider — running continuous test panels a solo
€0 builder can't out-resource); ad-blocker/Manifest-V3 compatibility
tracker (real staleness during Chrome's MV3 rollout, but by Sept 2026
this is a settled fact pattern, not fast-changing enough to sustain a
moat). Conditional, not picked: developer "free tier" status tracker
(real staleness evidence — outdated "free cloud hosting" listicles still
describe AWS's pre-July-2025 tier — but an existing resource, Hatchable,
already does this well and is current; would need a narrower wedge like
free-tier LLM API credits specifically).

**Survivor — "Living" Digital Nomad Visa Status Tracker — ★ AGENT_PICK
for full adversarial validation.** Real, well-evidenced staleness problem:
visa income thresholds are pegged to annually-revised local wage indices,
so published figures go stale within a year; whole programs quietly die
with no press release (Antigua & Barbuda's Nomad Digital Residence shut
Nov 2025; Anguilla's official page "gone quiet... untouched for years";
the Bahamas program "seemingly discontinued") yet still appear on
aggregator lists. Nomad List itself draws documented complaints about
outdated/inaccurate crowd-sourced data. MVP: static site with a
version-controlled dataset, visible "last verified" date per country, and
a free GitHub Actions change-detector polling official government source
URLs weekly to flag updates for manual review (~3-5 hrs/week estimated
maintenance labor). Monetization: SafetyWing/Genki nomad-insurance
affiliate links, relocation-consultant referral fees, eventual "verified
visa alert" newsletter. The research agent itself flagged the moat as
"weak but real — not technical, behavioral": nothing stops another
AI-agent builder from cloning the same playbook, the edge is that
existing incumbents in this space are annual-refresh SEO content mills,
not continuous primary-source monitors.

**Important validation flag (from this project's own institutional
memory, not from this research agent):** the general digital-nomad-visa-
comparison concept was examined once before in this project's history —
a now-deleted prior run found several close competitors (WhereToNomad,
GlobalNomad.guide, and others) already running matching-by-income/tax/
lifestyle filter tools. This round's proposed differentiator is
different (a *living*, continuously-re-verified resource with visible
"last verified" dates, not a matching filter), but the adversarial
validation pass on this candidate MUST specifically re-check whether
those or other incumbents already do continuous/dated freshness
verification — if they do, the core differentiator collapses the same
way it did for this project's previously-validated "automatic AI-slop
detection" candidate, where the wedge looked open until a dedicated
competitor re-check found it already filled.

Proceeding to VALIDATING — see `research/nomad-visa-tracker.md`.

## STATUS UPDATE: nomad-visa-tracker KILLED — confirms the flagged risk

Adversarial validation confirmed the exact concern raised above: at least
six named competitors (Discovery Sessions, NomadQualify, WhereNext,
VisaDB.io, Enomads, Immigrant Invest/Passportivity) already display
visible "last verified/updated" dates, one just two days more recent than
this validation itself. The core differentiator ("existing resources are
static, ours is visibly current") is factually false as a market
description. Full report: `research/nomad-visa-tracker.md`. **This is the
second time in this project's history a "incumbents are static, we'll be
dynamic" wedge looked open at discovery time and collapsed under
dedicated adversarial re-check** (the first was the AI-slop search
filter, in now-deleted history) — worth treating as a standing pattern.

**All candidates from both Round 1 and Round 2 are now dead.** Ten
distinct redirected strategies have now been tried in this single day
(post-reset): general micro-SaaS, DE/UK evergreen comparisons, mainstream
browser extensions, non-English vertical B2B professions, very-recent
(<4mo) trigger events, and maintenance-labor-moat niches. None produced a
survivor that held up under dedicated adversarial validation. See
`MEMORY.md` for the full status and the Round 3 redirection (combining
two specific suggestions from Round 2's own research agents: a narrow
cross-profession utility tied to a <12-month regulatory/technical change
that requires genuine engineering effort to address, not a thin wrapper —
targeting the gap between "too recent to be cloned yet" and "requires
real work, so clones are slower").

## Round 3 — engineering-effort-moat regulatory niches: 0 survivors

Tested 4 candidates tied to recent (within ~12 months) regulatory/
technical changes requiring genuinely nontrivial engineering, not a thin
wrapper:

1. **EU Cyber Resilience Act vulnerability reporting** (live 11 Sept
   2026) — real engineering complexity (SBOM parsing, OSV/CISA-KEV
   matching, Art.14 report generation), but **7+ GitHub repos already
   shipped compliance tools within ~8 days of the deadline** — the clone
   wave adapted to "hard" engineering, just taking ~1 week instead of
   2-3.
2. **EUDR geolocation/due-diligence for micro importers** — real
   complexity (GeoJSON/KML parsing, deforestation-raster overlay), killed
   three ways at once: a free complete toolkit already exists (Preferred
   by Nature), a free no-signup validator already exists (Silvatrace),
   and a regulatory simplification just let the smallest operators skip
   geolocation data entirely, removing the exact complexity a tool would
   monetize.
3. **DAC8/CARF crypto-asset tax reporting** (in force 1 Jan 2026) — the
   one candidate with a plausible residual competitive gap (existing
   vendors are enterprise-tiered), but rejected on trust/market-size
   grounds: regulated financial entities won't file tax reports through
   an unaccountable solo/AI-built tool, and the addressable market
   (~300 MiCA-licensed firms post-consolidation) is too thin for €0
   organic distribution.
4. **EU PPWR recyclability grading / UK packaging EPR fees** — dead on
   both counts: the EU methodology isn't even defined yet (deferred to
   2028), and the UK version was saturated by multiple calculators the
   moment its fee schedule published.

**Verdict: 0 survivors, and a sharper version of the standing lesson.**
Engineering complexity does not buy meaningfully more runway than a thin
wrapper does — it only shifted the clone-saturation window from ~2-3
weeks to ~1-2 weeks in the one case with real complexity (CRA). The
research agent's own conclusion: "complexity seems to only shift the
clone-saturation window... not to months." Recommends the next search
either target changes too obscure to be publicly countdown-clocked (no
swarm trigger), or abandon the regulatory-trigger axis entirely.

## Summary: 11 discovery strategies tried in one day, zero survivors

Round 1 (3 strategies) + Round 2 (3 strategies) + Round 3 (1 strategy,
4 sub-candidates) + the original Run 1-3 history before today's reset
(6 more strategies, now deleted but summarized in `MEMORY.md`) = 11
distinct angles tried today alone, all killed either at discovery-stage
screening or at dedicated adversarial validation. See `MEMORY.md` for the
full structural read and recommended next steps for the owner's
attention.

## Round 4 (2026-09-29) — productized-service discovery, business-model
pivot per the prior run's own recommendation

Per the standing recommendation left at the end of the 11-strategy day
(business-model change untested), one discovery agent searched
specifically for **productized services** (bespoke human-delivered work,
not self-serve software) rather than another tool. 8 candidates
screened: vendor security-questionnaire concierge (runner-up — real pain,
but a funded incumbent, SecurityPal, already runs the identical
"concierge" positioning at scale), Amazon suspension appeals (killed —
fully commoditized on Fiverr down to $10/appeal), chargeback dispute
letters (killed — already absorbed by $10/case AI software, exactly the
failure pattern this pivot was meant to escape), micro-M&A due diligence
(killed — real spend, but a solo zero-reputation operator can't clear the
trust bar for financial diligence), LinkedIn ghostwriting (killed —
confirmed ~200+ competing agencies), SBIR/STTR grant writing (killed —
established specialist firms and a trust barrier that favors incumbents),
and CRM data cleanup (killed — a direct branded competitor, Axion, runs
the identical flat-fee playbook). Top pick: an ADA/WCAG accessibility
**remediation sprint** for small e-commerce businesses that just settled
an ADA Title III demand letter — full writeup and verdict in
`research/ada-remediation-service.md`. **KILLED**, but on a new kind of
ground: not primarily market saturation (real forced demand exists, and a
real FTC-backed differentiation angle exists against "overlay" fake
fixes), but **execution-feasibility/safety** — the work requires bespoke
code changes to a live, revenue-generating, already-litigated small
business's production site, by an operator with no credentials, no
insurance, and no track record, for a buyer segment that is unusually
trust/risk-sensitive given their legal exposure. Winning that trust
honestly (without overstating experience) was judged infeasible at this
project's operating model. See the research file for the full ten-question
check.

## Round 5 (2026-09-29) — content/community-model discovery

A second discovery agent, in parallel, searched for **content, curation,
and community products** (paid newsletter, curated resource, micro
community) rather than software or service. 12 candidates screened, 11
killed because a loved free incumbent or an entrenched paid competitor
already exists in each niche checked (documentary-grant newsletter vs.
No Film School's free list; vintage-synth collecting vs. Matrixsynth;
NYC Local Law 97 compliance vs. free NYC Accelerator + law-firm lead-gen
content; O-1/EB-1 visa community vs. Extraordinary Ability Club;
long-distance caregiving vs. AARP/hospital-system content; federal
set-aside contracting vs. the decades-old paid incumbent Set-Aside Alert
— useful as proof the business *model* works, not as an open niche;
H-1B sponsorship job newsletter vs. several funded competitors; CNC
auction curation — no evidence of real demand for curation, not just an
incumbent problem; HVAC/EV-charger rebate tracking vs. Rewiring America's
free, API-backed calculator; cottage-food-law newsletter vs. Forrager.com
and an existing Substack; "boring business" acquisition content —
saturated by SEO listicle mills). **Survivor: an indie/natural-perfumer
IFRA/EU regulatory-translation newsletter + micro-community** — the
first candidate across 31 total strategies (11+8+12) where no direct
competitor occupying the exact wedge was found. Full writeup, remaining
open questions, and why it is being **PARKED rather than approved or
killed**, in `research/perfumer-compliance-newsletter.md`. Headline
reasons for parking rather than approving: market size and willingness-
to-pay are unconfirmed, the core "curation beats an AI clone" moat claim
is asserted not demonstrated (the exact question this business-model
pivot exists to test), and — new finding, independent of this specific
idea — actually launching it is blocked on a structural gap this project
has not previously had to confront: no real-world brand/identity, email,
or payment-account setup exists yet for this project to operate publicly
under, and no candidate has previously survived long enough to make that
gap concrete. See `MEMORY.md` OWNER_ACTION_REQUIRED.

## Summary: 31 discovery strategies across two sessions, zero approved,
one first-time parked

11 software strategies (2026-09-19) + 8 productized-service strategies +
12 content/community strategies (both 2026-09-29) = 31 distinct angles,
30 killed. One candidate (perfumer compliance newsletter) is parked
pending owner input rather than killed outright — the first time this
project's discovery process has produced a candidate whose open questions
are genuinely still testable rather than already answered "no" by an
existing competitor. See `MEMORY.md` for the full structural read.

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

## Round 4 (2026-09-23) — testing the business-model lever: services, content, community

Per the owner-facing recommendation left at the end of the 2026-09-19
session, this round deliberately tested the one lever flagged as
untried: business models other than software (productized services,
newsletter/content, community), plus a tight <72h fresh-trigger scan
aimed at a service response. Two parallel research agents, real web
search, adversarial kill attempts on every candidate.

### Agent A: productized service / content / community — 0 survivors, 9 tested

- **IEP/special-ed parent advocacy** (service+community) — real pain
  (411,549 unfilled/uncertified US teaching positions, <half of states
  meet federal special-ed compliance), but already served: Undivided
  ($5M funded, paid "Navigators"), findparentadvocates.com (national
  marketplace), usehighlighter.com (new 2026 SaaS entrant), even the
  narrow "military-family IEP transfer" sub-niche has a named competitor
  (thedyslexialife.com's "DoDEA IEP Advocate") plus free Military
  OneSource escalation.
- **Probate/executor concierge** — real pain ($14,225 / 513hrs avg per
  Atticus's own published stats) but Atticus (VC-backed) already owns
  exactly this position.
- **Aging-parent/caregiver navigation** — real pain (63M+ unpaid US
  caregivers) but an already-licensed profession (Aging Life Care
  Association) plus giant referral incumbents (A Place for Mom,
  Caring.com).
- **Property tax appeal service** — real pain (74% worried, only 22%
  appeal) but Ownwell just raised $50M (total ~$74M) doing precisely
  this on contingency, actively fighting competitors on performance
  claims.
- **Pet insurance claim appeal service** — active named competitor
  ("Paws & Appeals") plus an AI startup (Counterforce Health) and law
  firms already in the space.
- **Federal employee RTO newsletter/community** — extremely hot pain
  right now (2026 5-day-RTO executive order, r/fednews activity spike)
  but decades-deep incumbent trust already covers it (Federal News
  Network, GovExec, FedSmith).
- **Marriage/divorce legal name-change concierge** — active 2025-2026
  paid competitor (NewlyNamed) plus older players (HitchSwitch,
  MissNowMrs).
- **Daycare/home-childcare licensing renewal help** — every US state
  already funds free CCR&R agencies for this, plus VC-funded
  Wonderschool offers ongoing admin support.
- **Remote-worker isolation community** — no confirmed direct
  competitor, but also no evidence anyone pays for it specifically
  (loneliness-support communities monetize poorly); killed on weak
  monetization evidence, not competition.

**Meta-finding (the real deliverable of this round):** in every case
where real search evidence of a painful, well-documented problem
existed, that same googleability meant venture capital or a government/
nonprofit funder had already moved on it — several explicitly within the
last 12 months (Ownwell's $50M raise Feb 2026, usehighlighter.com as a
brand-new entrant, NewlyNamed's 2026 content). **Avoiding software did
not avoid the clone-race dynamic — it just changed who does the
racing, from code-clones to capital.** The dynamic tracks *searchable,
quantifiable pain*, not delivery mechanism. One untested, unverified
structural angle flagged (not a candidate — no evidence gathered for a
specific instance): hyper-local, single-city, small-TAM services too
small in aggregate to be nationally googleable or VC-attractive.

### Agent B: fresh (<72h) trigger scan for a service-shaped response — 0 survivors, ~15 events checked

Closest candidate: **F5 BIG-IP APM CVE-2026-94127** (disclosed
2026-09-22, CVSS 9.8, unauthenticated RCE, added to CISA KEV same day) —
but F5's own advisory + hotfix + emergency mitigation, plus independent
coverage from 7+ named security outlets, was already published within
~24 hours; also wrong shape for a €0 solo service (enterprise
infrastructure, requires specialized network-security engineering, buyer
already has security teams/MSP contracts). Sora 2 API shutdown (Sept 24
deadline) ruled out as a 6-month-telegraphed deadline already saturated
by 10+ migration guides. ~13 other events checked (TikTok ToS backlash,
Android Developer Verification enforcement, US Public Charge rule,
SaaS/AI pricing hikes, a Google algorithm update, tariff changes, cloud
outages, OSS relicensing) each ruled out as too old, too diffuse, or
already deep in a saturated response cycle. Conclusion: the security-
vendor/media response ecosystem now reacts to major triggers within
hours, not days — faster than a manual service can plausibly beat.

### Round 4 verdict

**0 of 9 service/content/community candidates and 0 of ~15 scanned
triggers survived.** Combined with the 11 prior strategies, that's
**13 distinct discovery angles across 2 business-model classes (software
and non-software) and 2 time horizons (evergreen and <72h-fresh) — all
killed.** See `MEMORY.md` for the updated structural read and the
recommended next lever (TAM-size, not business-model or timing).

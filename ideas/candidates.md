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

## Round 4 (2026-10-03) — three new axes + one deep validation, 0 survivors

Scheduled autonomous run, two weeks after the Round 1-3 work above. Per
the prior recommendation's own menu of untested levers, this run tested
the two specific ones flagged as untested ("react to a trigger within
24-72h" and "a different business model"), deep-validated the single
strongest previously-flagged marginal candidate (the owner-discretion
option), and — once all three of those also failed — tried one genuinely
new axis (non-English general-consumer niches) rather than repeating any
exhausted strategy. All four returned zero survivors.

### 4a. Productized-service / content-newsletter / community models: 0/24 survivors

Tested the theory that a different *business model* (not another software
tool) might face different clone-speed dynamics, since the prior 11
strategies' failure mode was specifically "AI-assisted builders clone
software fast." Screened 24 niches:

**Productized services (14, all saturated):** cold-email deliverability
audits (Folderly, Inboxable et al.), ASO audits (dozens of freelancers +
AI tools), G2/Capterra review-generation (G2 sells this itself), Google
Business Profile optimization (saturated agency staple), GDPR
cookie-consent "done for you" (CookieYes/Osano/Usercentrics + full-service
options), LinkedIn ghostwriting for B2B founders (7+ named agencies,
$4,999-8,500/mo, transparent pricing), technical-docs audits (Fiverr
freelancers + a YC-backed AI-native agency), podcast repurposing
(Podcast Motor, Recast Studio, Audiolabs), resume/LinkedIn optimization
for the 2026 tech-layoff wave (real pain, but market already flooded —
tens of thousands rewrote in the same week), Shopify speed/CRO audits
(The4 and others, 7yrs active), Amazon suspension-reinstatement services
(AMZ Sellers Attorney et al., standardized $1,500-2,300 flat fee), digital
executor / post-death account cleanup (old 2011-era tools are dead, but
re-filled by an insurer-backed startup, Empathy, serving "tens of
millions of policyholders" — a second-generation incumbent, not an open
gap), Airbnb licensing paperwork help (Airbnb's own official partner,
Rocket Lawyer, already covers it), medical-bill negotiation (Dispute,
Goodbill, Resolve, Dollar For et al., standardized 18-25%-of-savings fee
model), small-HOA admin outsourcing (mature regional-management-company
industry already covers ~90%), UK cladding/Building Safety Act
remediation help (mooted by the law itself, which now caps/excludes
leaseholder costs), small-business "debanking" help (resolved by an
April-2026 UK 90-day-notice rule + a free nonprofit advice line that
helped 35,900 businesses in 2025), UK lost-pension tracing (free official
government service + free/low-cost private competitors), UK public-sector
tender/bid-writing (20-year incumbent with 93%-win-rate claims + abundant
Fiverr freelancers).

**Content/newsletter (3, all saturated):** EU AI Act compliance digest
(multiple live, current trackers already exist — firstaimovers.com,
trooper.ai, sota.io), micro-SaaS acquisition deal-flow newsletter ("Acquire
& Operate," skalingventures Substack, microns.io, Acquire.com's own
alerting), non-dilutive grant-funding newsletter for climate/deep-tech
(CTVC, Down to Zero, OpenGrants, plus a funded AI-powered platform).

**Community/marketplace (2, all saturated):** fractional-CFO/exec curated
job board (Fractional Jobs, Fractionus, Go Fractional with 7,000+ profiles
and $10M+ facilitated, GrowTal), paid mastermind/accountability community
for bootstrapped founders (MicroConf pods, Indie Hackers, WIP, Founders
Network, GrowthMentor spanning free to $25k-100k/yr).

**New structural finding:** the clone-speed compression isn't specific to
AI code generation — it recurs for services and content via a different
mechanism (liquid gig-labor marketplaces — Fiverr/Upwork/Contra — and a
saturated newsletter/creator economy). Every one of the 14 service
candidates had a live, current Fiverr/Upwork gig listing found during the
check. Two sharper sub-patterns: (a) "an old tool in this space died" is
not evidence of an open niche — in the one case tested (digital estate
planning), the market had simply moved to a better-funded second-generation
incumbent; (b) several candidates were being resolved by the regulator
itself in the same timeframe (UK cladding costs, UK debanking notice
period) — the same "regulator closes its own gap" pattern as Round 1's
XL Bully and Round 3's EUDR findings, now confirmed a third and fourth
time.

### 4b. Very-fresh trigger events (last 7-14 days, 2026-09-20 to 2026-10-03): 0 survivors

Tested the one lever flagged as never actually tried: reacting within
24-72h of a trigger breaking, before SEO-indexing/cloning catches up.
Found 11 real triggers in-window (OpenAI GPT-4-era model retirement
effective Oct 23; AWS Proton retirement Oct 7; Google Cloud Translation
Hub shutdown Sept 20; Structurizr Cloud EOL Sept 30; NJ ABC-test
independent-contractor rule effective Oct 1; CT employee-monitoring
notice law effective Oct 1; several narrower dev-infra/API deprecations;
a handful of consumer-app shutdowns and pricing-backlash events). **Every
one was already filled**, most within days of being *announced* rather
than days of taking *effect*.

**Critical finding, sharper than the axis this was meant to test:**
standing, continuously-operating tracker infrastructure
(agentdeals.dev's shutdown/free-tier trackers, costbench.com's
day-dated pricing-change changelog, codex.danielvaughan.com's recurring
per-model-sunset migration-checklist posts, beancount.io's
multi-language auto-translated compliance-blog mill) now covers this
entire axis *continuously*, pre-empting discovery itself, not just
pre-empting the build. The CT law was covered within 2 weeks of
*adoption* — 4.5 months before its effective date. There is no 24-72h
window left to exploit for anything visible enough to be found by a
research pass; the content-farm/tracker layer now runs at
announcement-speed, not effective-date-speed. This explicitly falsifies
the "react fast" lever that the prior recommendation had flagged as
untested.

### 4c. Deep validation of the strongest marginal candidate (change-order/scope-creep tool): KILL

The prior recommendation named "accept a marginal candidate deliberately"
as a legitimate owner-discretion option and pointed at this project's own
best unvalidated near-miss (Round 1: real $76k/yr quantified pain per
Ignition's research, real Gumroad-kit willingness-to-pay signal, but only
available bundled into $17-52/mo CRMs). Rather than leave it as an
untested "maybe," it was adversarially deep-validated on the theory that
a cheap, standalone, no-CRM-migration wedge might survive even though the
bundled version doesn't.

**Killed outright at the first check.** At least six live,
launched-in-2026 standalone micro-SaaS tools already occupy exactly this
wedge: Addenly/ScopeDash (forward a client email, get a drafted change
order), StayInScope, Uncreep ($29 lifetime deal), ScopeGuard
Pro/2/3 ($9 early-access), Boundly (built by a solo Nairobi founder after
personally losing $15K to unbilled scope creep — free/$19/$49 tiers),
ScopeSlip. Several use language almost identical to this candidate's
brief, confirming other solo/AI-assisted builders ran the same
opportunity-scan and already shipped, months ago. The Gumroad "kits" that
signaled willingness-to-pay were confirmed to be static template
downloads, not live tools — that specific gap (template exists, no
interactive tool) is exactly what these six have since filled. None show
strong traction (2026-vintage, pre-revenue-ish, $9-29 pricing,
single-to-double-digit Product Hunt upvotes) — a crowded, no-clear-winner
field, not a dominant incumbent — but per the project's own standing
discipline, weak incumbents is not the same as an open wedge, and this
was not rounded up to a CONDITIONAL. **This was the single most
promising pre-existing candidate in the project's entire history, and it
does not survive 2026-dated adversarial re-validation.**

### 4d. Non-English general-consumer/small-business niches: 0/10 survivors, axis likely structurally closed

One genuinely new axis (not a repeat of Round 2's non-English
*regulated-profession* B2B tools): everyday consumer and small-business
pain points in German, French, Italian, Polish, Dutch, and Spanish
markets, searched in-language. Screened 10 niches: German dynamic
electricity tariffs (dominated by 15+ year incumbent comparison portals
Verivox/Check24/test.de), free XRechnung/ZUGFeRD e-invoicing for tiny
businesses (a free no-signup tool, kostenlose-erechnung.de, already does
it), German Nebenkostenabrechnung (utility-statement) error-checking
(saturated: Nebenkostenpro, Mineko, Yourxpert, plus free Verbraucherzentrale
guides), German Pflegegrad application help (free government-mandated
Pflegeberatung counseling pre-empts it by law), German Kleinanzeigen
scam/fair-price detection (covered by bank/consumer-body guides; also a
hard trust sell), French subscription-cancellation help (the 2023
"résiliation en trois clics" law makes companies solve this themselves),
Italian elderly energy-telemarketing-scam protection (a June 2026 law
bans the underlying practice; also a fatal trust paradox — a foreign
anonymous tool "protecting" elderly people from unfamiliar callers looks
exactly like the scam), Polish "sankcja kredytu darmowego" consumer-credit
claims (a mature cottage industry of law firms/claims platforms), Dutch
elderly-focused energy-switching help (dominated by entrenched portals;
the real gap-filler is family members, not a tool), Spanish bank-account
switching (an EU directive already makes the receiving bank legally
responsible for the whole switch, free, within ~12-13 days).

**Assessment: this axis looks structurally closed, not just unlucky.**
The scarcity theory ("fewer AI-agent builders scan non-English markets")
doesn't hold for consumer finance/utilities/bureaucracy, because the
relevant competition there isn't other solo AI builders — it's
15-25-year-old, heavily capitalized national comparison portals and
government/quasi-government consumer bodies that predate the AI-agent
era entirely. Worse, EU-wide consumer-protection directives (payment-
account portability, easy cancellation, telemarketing consent) recurred
across three different countries in this single round, meaning
"country-specific" consumer pain in the EU is disproportionately likely
to already have an EU-wide regulatory fix baked in. And in the pain
points with the clearest evidenced severity (elderly scam targeting,
healthcare bureaucracy, credit disputes), trust is the explicit
bottleneck — the one thing a €0, non-local, non-native-speaking AI-only
builder structurally cannot manufacture quickly.

## Running total: 15 independent discovery strategies, zero survivors

11 (pre-2026-10-03, see above) + 4 today (service/content/community,
fast-trigger-reaction, non-English general-consumer, plus the one deep
validation of the best pre-existing marginal candidate) = 15. Both
untested levers named in the prior recommendation (fast-reaction,
different business model) are now tested and falsified; the single best
marginal candidate from the project's history is now tested and killed;
and the newest axis tried (non-English consumer markets) looks
structurally closed for reasons specific to that axis (incumbent national
portals + regulatory pre-emption + trust barriers), not just one more
unlucky roll. See `MEMORY.md` for the full updated recommendation to the
owner.

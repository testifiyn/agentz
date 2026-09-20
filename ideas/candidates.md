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

## Round 4 (2026-09-20, new day) — two untested business-model axes

Per the prior day's own recommendation, this round deliberately avoided
every previously-tried angle (all software-product-shaped: SaaS, browser
extensions, directories, regulatory tools) and tested two structurally
different business models, each required to explicitly reason about why
it would resist the "AI-assisted clone ships within days-to-weeks"
pattern that killed all 11 prior strategies. Two parallel agents, one per
axis.

### Content / newsletter / community-curation axis: 9 niches tested, 0 survivors

Tested: independent pharmacy owners (PBM/drug-shortage economics), HOA
board members, self-storage operators, small residential landlords
(state rent-control tracking), volunteer fire/EMS departments (grant
funding), small importers (2026 tariff/refund chaos), small nonprofit
EDs (federal funding cuts), short-term-rental hosts (city regulation
tracking), craft brewery/distillery owners (TTB/excise tax).

**New structural finding, distinct from the clone-speed problem:** every
niche was already occupied by one of three incumbent types, each a
*harder*, not easier, moat than a clonable SaaS artifact: (1) an
established subject-matter-expert newsletter with a large loyal base
built over 10-15+ years (e.g. pharmacy/PBM economics is owned by "Drug
Channels," 100,000+ subscribers since the 2000s); (2) a dominant trade
association delivering the same curation as a membership benefit (HOA →
Community Associations Institute, 51,000 members; craft brewers →
Brewers Association); (3) a swarm of vendor content-marketing operations
that produce the same curation for free as a customer-acquisition funnel
for their own software, and therefore face zero pressure to monetize the
content itself and will always outspend/out-frequency an independent
paid newsletter. Two near-misses (small-importer tariff-refund
newsletter; volunteer-fire-EMS grant digest) were explicitly rejected,
not marginally accepted — the first is already a saturated recent-trigger
niche (two live competing Substacks found) with no identifiable
first-100-readers seed community, the second has a real content gap but
target readers (unpaid volunteer fire chiefs, <$50k department budgets)
have no ability to pay and the plausible sponsor pool already reaches
them directly via trade-show channels.

**Lesson carried forward:** this is a compressed-to-*years* incumbency
problem, not the compressed-to-*weeks* clone problem — screen future
content-axis candidates by ruling out any niche that already has (a) a
commercial software vendor selling into it, or (b) a national/professional
trade association with >10k members; both were found without exception
across all 9 tests.

### Productized-service axis: 9 candidates tested, 1 survivor with a serious unresolved legal-risk flag

Killed at discovery stage (saturated, or a structural monetization/
regulatory blocker): grant writing for nonprofits (saturated by agencies
+ AI tools; contingency fees explicitly barred by Grant Professional
Association ethics rules); unclaimed-property/heir-finder service
(mature crowded niche; many states require PI licensing to solicit
heirs); rental-scam verification for international students (already
served by named competitors Secureprop.com and StudentsLanding); vetted-
offshore-VA background checks (already the core marketed feature of
every VA staffing agency, e.g. Virtual Coworker's "FBI-grade background
checks"); China sourcing-agent/factory verification (fully mature market,
"thousands" of existing agents per the research agent's own search);
AI-fact-checking-as-a-service (already served by both software —
Originality.ai, Winston AI — and existing Fiverr gigs); deepfake/AI-
candidate-detection as a standalone product (already a venture-funded
software race — GetReal Security, Tofu, Socure, Endorsed — moving in
months not weeks, the same clone-speed trap wearing a fraud-detection
costume; also human manual detection is documented as *worse* than
tooling here, 55.54% accuracy in one meta-analysis, undercutting the
core "human judgment beats software" thesis for this specific angle).

**Survivor — manual candidate-identity/fraud-vetting concierge for small
startups hiring remote workers.** Real, well-evidenced, currently-
accelerating problem: DOJ has indicted 14 DPRK nationals over $88M
funneled through fake U.S. tech jobs across 300+ companies; a founder
told Fortune ~95% of resumes he receives are from North Korean engineers
posing as Americans; Gartner projects 1-in-4 job applicants will be fake
by 2028. No affordable per-candidate manual vetting product was found
serving the small-startup segment specifically (enterprise identity-
verification SaaS and full-service staffing agencies are both wrong-
sized for a solo founder's one-off hire) — though the agent flags this
absence-of-competitor finding as genuinely unverified (Fiverr/Upwork gig
listings could not be directly browsed). Service design: OSINT cross-
referencing + a live adaptive video interview + reference calls +
24-48h red/yellow/green risk memo, flat fee ($99-249 range plausible),
€0-feasible to start. Distribution: r/startups, r/EntrepreneurRideAlong,
Indie Hackers, YC Startup School, Wellfound community — contributing real
value to threads already discussing fake-candidate fraud before pitching.
**Clone-resistance reasoning (the first candidate across all 4 rounds
whose argument didn't immediately collapse under adversarial pressure):**
this doesn't compete on detection technology (no ML edge over funded
competitors) but on being a cheap, no-integration, trust-based human
gut-check for a buyer segment too small for both enterprise SaaS and
staffing-agency sales motions — a clone of this is another person
building their own reputation and case history from zero, a fundamentally
slower race than forking a repo. The agent is explicit that the
process/checklist itself is trivially copyable; the moat is reputation
built through delivered cases, which doesn't exist at launch.

**Serious unresolved risk, potentially fatal:** this service likely
qualifies as a "Consumer Reporting Agency" function under the U.S. FCRA
(which defines a CRA by function — "assembles or evaluates information
on individuals... for employment decisions" — regardless of how the
provider labels itself), triggering statutory damages up to $1,000/
violation plus class-action exposure, mandatory consumer disclosures,
dispute rights, and adverse-action procedures a solo €0 operator has no
budget to implement correctly. The research agent could not rule this
out and flagged it as the single question to resolve before anything
else — including whether reframing as non-employment "business-partner/
vendor trust verification" avoids FCRA's employment-purpose trigger
without destroying the evidenced demand (which is specifically about
employment fraud).

**Status: KILLED on legal-risk grounds.** Dedicated validation confirmed
the risk was real and unmitigable at €0: 15 U.S.C. §1681a's functional
(not label-based) definition of a "consumer reporting agency," the FTC's
1999 Vail advisory opinion (an outside law firm doing a misconduct
*investigation* was still ruled a CRA — Congress had to carve out a
narrow statutory exception, §1681a(y), for misconduct investigations
specifically, which doesn't cover general hiring vetting), and the
CFPB's Nov 2024 Circular 2024-06 (addressing this exact fact pattern:
third-party background dossiers/risk scores sold for hiring decisions)
all converge on the same conclusion. There is no clean "pure
verification, not evaluation" escape hatch — fact-verification-only is
itself the classic CRA product line — and the "advisory to the founder,
not a report on the candidate" reframe is exactly the kind of
substance-over-form distinction FTC/courts have already rejected in
analogous cases. A genuinely compliant version is theoretically
buildable but requires legal counsel, ongoing dispute/accuracy
infrastructure, and insurance this €0 project doesn't have; a genuinely
non-CRA version (abstract interview coaching with no candidate-specific
findings conveyed) guts the evidenced demand. GDPR adds independent,
non-overlapping exposure for any EU/UK-based candidate — near-certain in
a global remote-hiring pool — so restricting to non-US customers isn't a
workaround either. **All candidates across all 4 discovery rounds (20
distinct strategies/sub-candidates) are now dead.** See `MEMORY.md` for
the generalized lesson this produces for future discovery.

## Round 5 (2026-09-20, same day) — services on the customer's own material

Redirected per Round 4's specific recommendation: test services where the
customer investigates/analyzes their *own* material (systems, code, data,
business situation) rather than a third party, structurally avoiding the
FCRA/GDPR trap. Two parallel agents.

### Technical-audit-service axis: 9 candidates tested, 0 survivors

Tested WCAG accessibility, technical SEO, GDPR/cookie compliance, website
security, Shopify/WooCommerce CRO, data-quality/CRM-hygiene, open-source
license/dependency-compliance, and SPF/DKIM/DMARC email-deliverability
audits, plus GA4 tracking-health audits. **New, third kill mechanism
found, distinct from clone-speed and content-incumbency:** every single
one is already an active, multi-seller commodity gig category on Fiverr/
Upwork/Freelancer.com at $5-$100 (9+ named WCAG sellers, dozens of SEO-
audit gigs, 6+ GDPR-audit gigs, etc.), years before this project existed.
The one candidate with genuine technical merit — **WCAG/accessibility
audits** (manual testing genuinely catches 60-70% of issues automated
scanners miss; real willingness-to-pay confirmed at $2k-$50k boutique/
enterprise tiers) — still failed on two independent grounds: a trust-
less, credential-less solo entrant can't out-compete 9+ existing sub-$50
sellers on a purchase decision that's entirely about trust, and
accessibility-audit liability is a documented standard E&O-insurance
exclusion — an uninsured solo operator has direct, uncapped exposure if a
client is sued after acting on a paid audit. New standing lesson
recorded in `LESSONS.md`: screen every service candidate against Fiverr/
Upwork/Freelancer.com saturation at discovery stage, same as a GitHub-
clone check for software ideas, and separately check for a niche-specific
professional-liability/insurance angle.

### Research-for-hire / analytical work-product axis: 8 candidates tested, 1 survivor

Killed at discovery stage: competitor-landscape research reports
(Fiverr-saturated + a chatbot already does this adequately); contract
plain-language red-flag review (flat-fee attorney services already exist
at $240-575, plus an active AI-contract-review product race — Genie AI,
Spellbook, Ironclad, Lexion — reintroducing clone-speed risk); messy-
spreadsheet cleanup (heavily Fiverr/Upwork-commoditized, overlaps mature
bookkeeping-cleanup market); SaaS-spend audits (automated by free/cheap
bank-linked tools — Rocket Money, Subtrakr — doing 80%+ of this already);
franchise purchase due diligence (served by an established provider
ecosystem — Centurica, CapForge from $995, DueDilio); site-selection/
feasibility studies (an established $3k+ consultant niche, and lenders
require a credentialed "standard of care" study); competitor mystery-
shopping (a mature named industry — CustomerWise, Reality Based Group,
secretview.io — already serves it).

**Survivor — "boots-on-the-ground reality-check" fieldwork report for
sub-$500k small-business acquisition buyers.** First-time buyers of small
local businesses ($50k-500k — laundromats, salons, auto shops,
restaurants) have no affordable way to verify a seller's *non-financial*
claims (real foot traffic, genuine reputation trend, true competitive
standing) before committing; standard buyer checklists repeatedly instruct
buyers to do this fieldwork themselves because no affordable service does
it for them, and full financial DD on deals this size ($20k-50k list
price, or $995 at the cheapest dedicated small-deal provider, CapForge)
covers financial/legal review only, never physical fieldwork. Service:
flat fee ($197-497), 2-3 mystery-shop visits to the target at different
times, mystery-shop of 2-3 named competitors, full (not averaged) review-
history authenticity read, informal conversations with neighboring
businesses, and a public-record check (registration, UCC liens, civil-
court index, license status), synthesized into a "what matches the
seller's story, what doesn't" report. **This is the first candidate
across 5 rounds to cleanly pass the "does this genuinely beat asking a
chatbot" test through a non-informational mechanism** — every input is a
physical or telephonic act (visiting a location, calling a competitor
posing as a customer, chatting with the neighboring dry-cleaner) a
chatbot cannot perform, and the synthesis step is believability judgment,
not a lookup. It also cleanly avoids the FCRA/GDPR trap from Round 4
because the report's subject is a business asset's claims and public
record, not a named individual's character or eligibility — confirmed by
the research agent as a discipline to maintain (never drift into judging
the seller as a person). Distribution: r/smallbusiness and r/Entrepreneur
(recurring "how do I verify this seller's numbers" threads — answer with
free value first), BizBuySell's community forum, Acquisitions Anonymous
podcast community / Acquisition Lab, local SCORE mentor chapters as a
warm-referral source.

**Unresolved risks flagged for dedicated adversarial validation (not yet
GO):** (1) purely one-shot customers with no repeat-trust flywheel, so
CAC against a $200-500 ticket is a real concern; (2) **geographically
bound** — a solo operator can only physically visit businesses within
driving range, which may badly cap addressable volume — flagged by the
research agent as the single most likely fatal flaw; (3) unverified
whether existing DD firms (Centurica, CapForge) already quietly offer
this fieldwork as an add-on when asked, which would undercut the "no one
does this" claim; (4) needs a state-by-state check on whether the
neighbor-interview and public-record-search components trip private-
investigator licensing requirements (mystery-shopping itself is already
established as legal/unlicensed).

**Status: promoted to dedicated adversarial validation**, focused first
on the geographic-density/customer-volume assumption and the incumbent-
add-on question, per the research agent's own recommendation.

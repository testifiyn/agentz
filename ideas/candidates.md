# Candidate ideas (Run 1, 2026-09-18)

Six candidates researched via parallel web-research agents across three spaces:
micro-SaaS ops tools, curated directory/comparison sites, and narrow
AI-powered browser utilities. Full agent transcripts are not preserved
verbatim here; this file distills the evidence and scoring that drove the
pick. All URLs below were surfaced by live web search during this run.

---

## 1. Lean time-tracking + invoicing for solo freelancers/agencies

**Trigger:** Harvest (acquired by Bending Spoons mid-2025) hit customers with
600–1,500% price increases on renewal (BBC-reported Salentis case: ~$130/mo →
~$2,110/mo; a 20-seat shop's bill rose 600% to $20k/yr). Source: BBC via
Subscription Insider, Productive.io, vlastERP.

**Incumbent weaknesses (specific):** Toggl gates billable rates behind paid
tier; Clockify's invoicing is clunky and multi-currency is undisclosed-gated;
FreshBooks charges per-user + bank-transfer fees, dated UI; Wave has no
automated payment reminders on free tier; Bonsai's Basic tier excludes
invoicing, holds funds 7–10 days, slow support.

**Buildability:** Needs Supabase backend, auth, PDF generation, email
sending, Stripe — the heaviest build of all six candidates.

**Monetization:** Freemium, ~$7–9/mo paid tier.

**Verdict:** Strong demand evidence, but mature/crowded category with high
customer switching costs (migrating billing history) and the heaviest MVP
of any candidate.

---

## 2. Uptime monitoring + branded status pages for agencies

**Trigger:** UptimeRobot's July 2025 change restricted its free tier to
non-commercial use only and raised legacy-plan prices ~425%. Source: GoPinger,
Hyperping.

**Incumbent weaknesses:** UptimeRobot free tier now bans client/commercial
monitoring, false-positive storms; Better Stack pricing climbs with log
volume; Pingdom price nearly triples past 10 monitors; StatusCake single-
region checks cause false positives; Statuspage.io has no built-in
monitoring and a $360/yr floor for a usable status page.

**Buildability:** Cloudflare Workers + Cron Triggers, Supabase — moderate,
fully free-tier.

**Monetization:** Freemium, ~$7–12/mo flat.

**Verdict:** Good trigger event, but already crowded with small indie
competitors (Uptime Kuma, Chirp, AtomPing, Hyperping, UptimePal) targeting
the exact same segment.

---

## 3. Music distributor "true cost" comparison + calculator

**Trigger:** None dated — chronic confusion. TuneCore's 2022 pricing-model
change and Sept 2024 price increase are still misreported in most existing
comparison articles.

**Incumbent weaknesses:** 6–8 near-duplicate "DistroKid vs TuneCore vs CD
Baby" SEO articles, several vendor-authored (UnitedMasters comparing itself
favorably), none show a "last verified" date, none model true compounding
costs (DistroKid add-on fees stack per release indefinitely).

**Buildability:** Fully static site + JS calculator — cheap to build.

**Monetization:** DistroKid affiliate (25% or $10/referral), TuneCore
affiliate (7%, 45-day cookie). CD Baby/UnitedMasters: no verified program.

**Verdict:** Real but narrow audience (indie musicians choosing a
distributor once a year); SEO space already crowded with near-duplicate
content; weakest total addressable market of the six.

---

## 4. Digital nomad visa + relocation comparison tool

**Trigger:** None dated — chronic staleness. Competing trackers list dead
visa programs (one tracker had to remove 16 non-functional listings others
still carry); Citizen Remote's own disclaimer admits information may be
outdated.

**Incumbent weaknesses:** Nomad List has confusing pricing and Trustpilot
complaints about non-functional features/no support; VisaGuide.World and
Citizen Remote both carry third-party low-trust-score flags.

**Buildability:** Static site + filter tool — cheap.

**Monetization:** SafetyWing Nomad Insurance affiliate — 10% recurring
commission, 364-day cookie (strong, durable).

**Verdict:** Decent, but two competitors (WhereToNomad, GlobalNomad.guide)
already run near-identical filter tools — more crowded at the product-concept
level than Candidate 3.

---

## 5. Fake-review / trust-score checker for Amazon (browser extension) — ★ AGENT_PICK

**Trigger (dated, rare, specific):** The two dominant free incumbents both
died within weeks of each other in mid-2025: Mozilla shut down **Fakespot**
entirely on July 1, 2025 (PCWorld, Thurrott), and **ReviewMeta** is
independently defunct as of 2025 (TraceFuse, SureVett). An aggregator
explicitly states: *"The few extensions that remain are small, independent
projects, and the Chrome Web Store currently has a gap for this type of
tool."* This is a live, unclaimed market vacuum, not a hypothetical gap.

**Demand evidence:** U.S. PIRG estimates 30–40% of online reviews are not
genuine; Amazon blocked 275M suspected fake reviews in 2024; the FTC's
fake-review ban took effect Oct 21, 2024 (fines up to $51,744/violation).
Fakespot had millions of users at its peak — a large orphaned user base is
actively searching for a replacement right now.

**Incumbent weaknesses (the survivors that replaced Fakespot), each specific
and falsifiable:**
- **RateBud** — shipped an *undisclosed* Amazon affiliate tag on its "Buy"
  button (had to publicly patch after complaints); trust scores cluster
  suspiciously flat (80–84%) regardless of product, undermining the entire
  value prop; documented astroturfed Reddit promotion.
- **ReviewLens** — architecture calls a live LLM per product page, meaning
  the operator eats a recurring per-user API cost (exactly the ongoing-cost
  trap this project should avoid).
- **SureVett** — thin trust base (~675 users, 6 ratings) — not yet an
  established brand.
- **Legacy Fakespot/ReviewMeta** — black-box single-letter grade with no
  visible reasoning; Fakespot faced a 2021 Amazon lawsuit alleging it misled
  consumers.

**Concrete angle per weakness:**
- Disclose any affiliate link plainly in the UI from day one (vs. RateBud's
  retrofit-after-complaint problem).
- Show the actual sub-scores behind the grade (verified-purchase %,
  rating-distribution skew, review-date-burst detection, duplicate-phrase
  rate) instead of an opaque single grade — falsifiably harder to fake than
  RateBud's flat scores.
- Compute everything with local heuristics in the content script — zero
  backend, zero per-user API cost — unlike ReviewLens. An optional "explain
  in plain English" button can use Chrome's on-device Gemini Nano Prompt API
  (runs locally, no API bill) as a nice-to-have, not a dependency.
- Publish the detection methodology in-product to build the trust an
  unknown new brand needs (vs. SureVett's opacity).

**MVP scope at €0:** Manifest V3 Chrome extension, content-script only, no
backend, no signup. Reads the Amazon review DOM already rendered in the
user's browser (same legal posture Fakespot used for years). Local
heuristic scorer → A–F badge injected on the page. `chrome.storage.local`
for per-ASIN caching.

**Monetization:** Amazon Associates affiliate links on "Buy" actions —
zero cost to implement, disclosed transparently; this is literally how
ReviewMeta funded itself for years. Optional one-time "Pro" unlock via
Stripe/ExtensionPay license keys later (no CWS payment dependency).

**Verdict:** Strongest candidate — most buildable (fully client-side, no
infra cost at any scale), most specific and falsifiable incumbent-weakness
angle, largest and most time-sensitive orphaned demand (Fakespot's former
users), proven zero-cost monetization precedent.

---

## 6. Local-first free-trial / forced-continuity charge preventer

**Trigger:** Large, well-quantified chronic pain, not a dated event: 86% of
consumers report being charged after forgetting to cancel a trial (C+R
Research); $15.5B/yr wasted on forgotten subscriptions in the US.

**Incumbent weaknesses:** Rocket Money requires bank-account linking and
faces an EPIC/CFPB complaint over data-sharing practices; Bobby is
manual-entry only (defeats the point) with reported notification/sync
failures and a data-loss report; DueCue requires an account and has zero
CWS ratings.

**Buildability:** Manifest V3 extension, regex/DOM detection on checkout
pages, `.ics` calendar export — fully client-side, cheap.

**Monetization:** One-time "Pro" unlock only (no affiliate — would conflict
with the "we don't want your money" trust angle).

**Verdict:** Solid backup. Weaker than #5 because the niche already has a
decent free option (Bobby, 4.7★/~8k reviews) and no dated catalyst event —
the pain is chronic but not currently *acute* the way the Fakespot/ReviewMeta
vacuum is.

---

## Scoring summary

| # | Idea | Demand evidence | Weakness→advantage specificity | Buildability at €0 | Overall |
|---|------|------------------|----------------------------------|----------------------|---------|
| 1 | Freelance time-tracking/invoicing | Strong (dated) | Strong (5 distinct wedges) | Weak (heaviest build) | Good, not best |
| 2 | Uptime monitoring | Strong (dated) | Moderate | Good | Good, crowded |
| 3 | Music distributor calculator | Weak (chronic) | Moderate | Good | Weakest TAM |
| 4 | Digital nomad visa tool | Weak (chronic) | Moderate | Good | Crowded concept |
| **5** | **Fake-review trust checker** | **Strongest (dated, large, orphaned)** | **Strongest (4 falsifiable wedges)** | **Strongest (zero infra)** | **★ PICK** |
| 6 | Free-trial charge preventer | Strong (chronic) | Moderate | Good | Solid backup |

## STATUS UPDATE (Run 2, 2026-09-18)

- **#5 (fake-review trust checker / TrueGrade): KILLED.** Re-validation
  found the leading incumbent (SureVett) already ships every planned
  differentiator plus more. See `research/fake-review-trust-checker.md`.
- **#6 (trial-charge preventer, the designated fallback): PIVOT, not
  built as scoped.** The as-scoped MVP nearly duplicates an existing,
  zero-traction competitor (DueCue); the best-evidenced real pain
  (dark-pattern cancellation friction) isn't what the scoped MVP solves.
  Pivot direction (cancellation-assistance tool) noted for future
  validation. See `research/trial-charge-preventer.md`.
- **Candidates #1-#4 are ALL also already captured** by live,
  actively-marketed competitors: #1 by OneSuite/WaffleInvoice, #2 by
  FlareWarden/PULSX (and its founding trigger reversed), #3 by
  streamingcalculator.com (a near-exact clone), #4 by WhereToNomad (a
  near-exact match). **All six of this file's original candidates are
  now dead, pivoted, or captured — none are being built.** See the
  "structural lesson" section in `MEMORY.md` for why this happened
  across all six at once (they were all built around publicized trigger
  events, which are visible to every other builder at the same moment)
  and the methodology fix for the next discovery pass.

## AGENT_PICK: #5 — Fake-review / trust-score checker for Amazon

Picked over Candidate 1 (time-tracking/invoicing) and Candidate 2 (uptime
monitoring), both of which also had strong dated trigger events, because #5
wins clearly on the other two axes: it's buildable with **zero backend at
any scale** (a real, durable €0-forever property, not just a cheap MVP), and
its incumbent weaknesses are more specific and falsifiable (an undisclosed
affiliate tag, suspiciously flat scores, astroturfing, per-request LLM
cost) than generic SaaS pricing/UX complaints. The Fakespot/ReviewMeta
shutdown is also the most time-sensitive opportunity of the six — a large,
recently orphaned user base searching for a replacement right now, not a
chronic slow-burn pain.

Candidate 6 (trial-charge preventer) is the designated fallback if #5 fails
validation.

Proceeding to VALIDATING — see `research/fake-review-trust-checker.md`.

---

# Run 3 candidates (2026-09-19)

Generated per the corrected methodology from Run 2's `MEMORY.md` lesson:
three parallel research agents, each required to run the "has this already
been built and is it actively marketed" check as the FIRST research step
per idea, not deferred to validation, and each instructed to favor chronic
non-newsy pain points over publicized trigger events. Agents tested ~30+
candidate ideas total across micro-SaaS, directory/comparison sites, and
browser extensions; the large majority were discarded pre-writeup because
they're already captured — only the survivors are detailed below.

## Micro-SaaS agent: 2 survivors (8 discarded pre-writeup)

Discarded already-captured ideas (evidence found first, not written up):
SSL/domain expiry monitoring (Monytra, TrackSSL, Expiron, Uptime Kuma),
local SEO/citation management (Local Panda, VeloRank, Localo), freelance
CRM/invoicing (Dubsado, Whelm, Moxie, Yess.io), agency uptime monitoring,
dead-link checkers, photographer client galleries (Pixieset), solo-operator
appointment reminders (Square Appointments free tier), EU VAT/OSS tracking
(Quaderno, Moss, Xolo, Holded).

### A. Pre-engagement client risk-screening for off-platform freelancers

**Pain (chronic, evidenced):** Freelancers Union: 71% of freelancers have
struggled to collect payment at least once; ~1-in-2 in any given year.
Upwork/Fiverr explicitly disclaim protection once a client relationship
moves off-platform, yet most experienced freelancers eventually work
off-platform to avoid fees — at which point they have zero vetting tool.
r/freelance/r/Upwork show chronic 30-90+ day unpaid-invoice threads.

**Competitors:** Enterprise credit bureaus (Creditsafe, Nav, Experian)
target B2B credit-line decisions for established companies, not a quick
solo pre-gig check. Only a $5 Gumroad PDF checklist found, not a real tool.

**MVP:** paste company/domain → aggregate free public signals (Companies
House filings/insolvency, CCJ register links, WHOIS/domain age, review
sentiment) into a risk snapshot.

**Flagged risk (agent's own finding plus my read):** this is the one
candidate of the four with a real legal-exposure problem for a €0
solo/no-legal-review project — publishing risk scores about identifiable
companies/individuals carries defamation exposure, and aggregating
personal data about individuals raises GDPR concerns. The agent itself
noted this is likely *why* it's whitespace (bureaus avoid the accusatory
version; solo builders are deterred by the same liability). That's a
reason to be cautious adopting it, not just a coincidental gap. Kept as a
candidate but deprioritized below for this reason.

### B. Lightweight scope-creep / change-order logger

**Pain (chronic, evidenced):** r/freelance/r/Upwork recurring "one more
revision" scope-creep horror stories; the failure mode is freelancers
don't formally re-bill until the gap is already large.

**Competitors:** change-order features exist only bundled inside full
proposal-to-invoice suites (Bonsai, PandaDoc, HoneyBook) — complaint
pattern is these are overkill/priced for full CRM replacement. No
standalone micro-tool found that just logs "extra ask → price →
client one-click approve → timestamp."

**MVP:** shareable link/form, no login, timestamped approval record
emailed to both sides. Static frontend + free-tier serverless function +
free email API tier.

**Why not already built (agent's read):** too narrow/single-purpose for
VC-backed suites to unbundle — plausible, but also plausibly a sign of a
genuinely small TAM (small enough that even the niche-tool community
hasn't bothered).

## Directory/content agent: 0 survivors — important meta-finding

Tested 10 evergreen "confusion/comparison" niches (generator sizing,
skincare ingredient interactions, power-tool battery compatibility, air
fryer conversion, cake pan conversion, cross-brand paint matching, HVAC
filter size cross-reference, car-seat/stroller compatibility, aquarium
stocking calculator, chicken coop/cage sizing). **All 10 already have
actively-maintained, 2026-dated competitors**, several with multiple
players. The instructive case: AqAdvisor (aquarium stocking), a ~15-year
incumbent with real documented rot (malware ads, broken mobile input,
outdated bioload model), still got its gap closed by two new competitors
(Aquapacity.com, AquariumStocking.com) within the last ~12 months.

**Conclusion carried into `MEMORY.md`:** evergreen calculator/comparison
niches are not a safe harbor from the "already captured" problem — if
anything they're *more* thoroughly mined than trigger-driven ones, because
stable long-tail demand is exactly what the solo-SEO/affiliate niche-site
community has targeted for 10-15+ years. Gaps in this space get found and
filled continuously, just on a longer, less synchronized timescale than
news-trigger gaps (~months to ~1 year, not days to weeks) — not a zero
timescale, but not safe either. No candidate written up from this agent.

## Browser-extension agent: 2 candidates (1 strong, 1 marginal fallback), 12 discarded

Discarded already-captured ideas: "Jump to Recipe" removal, ghost-job
detection (5+ competing extensions), hide-applied-jobs, dark-pattern/fake-
urgency detectors, Craigslist/FB Marketplace scam checkers, cookie-consent
auto-reject, hide-Google-AI-Overview (7+ extensions), hidden hotel fees,
Canvas/Blackboard LMS enhancement (BetterCampus, 2M users), YouTube
distraction-free (Unhook, 1M users, actively maintained), LinkedIn
anonymous viewing (non-extension workarounds already serve this).

### C. Automatic AI-slop/SEO-spam filter for search results — candidate front-runner

**Pain (chronic since ~2022-2024, recent press spike, not a single dated
trigger):** The Register (Jan 2024), Fortune, and a year-long German
academic study document measurable Google search-quality decline
(~10% accuracy drop), driven by "SEO parasite" content leasing space on
trusted domains. Chronic Reddit/Blind griping ("google has been becoming
unusable") predates any single news event.

**Competitors, each with a documented specific gap:**
- **uBlacklist** — dominant incumbent (~200k users, 4.36★/950 ratings) but
  purely manual: requires the user to already know which domains to
  block. Current reviews report real bugs (block button hidden/moved,
  extension intermittently stops working, inconsistent on image
  search/new "quick matches" UI).
- **AI Slop Meter** — claims on-device scoring but has **zero reviews**
  (unproven, brand-new) and its own marketing targets social feeds
  (X/LinkedIn/Reddit/Facebook), not search results.
- **Slop Evader** (press-covered Dec 2025 by Tom's Guide/The Register/AOL)
  — a blunt pre-ChatGPT-era date filter, not a quality heuristic; discards
  legitimately new good content, a crude substitute for real detection.
- Paid AI-detectors (Copyleaks, Sapling) require a live per-query backend
  API call — breaks the €0/no-per-user-cost model this project needs.

**MVP (fully client-side, €0 forever):** content script on Google/Bing/DDG
results pages; local heuristics (boilerplate-phrase lists, listicle-
structure detection, affiliate-link density, a bundled spam-domain list
updated via periodic extension releases, not a live API) gray out or badge
low-quality results.

**Monetization:** one-time "Pro" unlock (custom rules, more search
engines, exportable blocklist) — no subscription backend needed.

**Real risk flagged by the research agent:** press attention on this exact
space spiked 3x in Dec 2025 alone — the window may close within months,
and Google's SERP DOM changes are more volatile than Amazon's (a fragility
concern that also killed real trust in the TrueGrade postmortem).

### D. Gmail tracking-pixel blocker — marginal fallback, not primary

Real pain (privacy/creepiness) but both incumbents (PixelBlock, Ugly
Email) are mediocre-but-not-abandoned, not clearly beatable; audience is
narrower and willingness-to-pay unproven (neither incumbent shows Pro-tier
demand); Gmail's DOM changes frequently, an ongoing maintenance burden.
Agent's own verdict: flag as weak, include only as fallback.

## AGENT_PICK (Run 3): C — Automatic AI-slop/SEO-spam search filter

Picked over B (scope-creep logger, lower legal risk and low build cost but
small evidenced TAM and no clear distribution channel — how would
freelancers discover a single-purpose scope-creep link tool?) and over A
(client risk-screening, real demand but real defamation/GDPR exposure for
a solo €0 project with no legal review — deprioritized for that reason,
not for weak demand). D was already flagged as a weak fallback by its own
research agent.

C has the strongest combination: most current, press-documented evidence
of both the pain and the specific gap (automatic vs. manual detection);
largest addressable audience (anyone who searches); zero infra cost at any
scale; and a differentiator (automatic client-side heuristic scoring) that
the two newest entrants (AI Slop Meter, Slop Evader) have NOT executed
well (unproven/zero-review, or mistargeted, or gimmicky respectively) —
unlike the TrueGrade postmortem, where the leading incumbent had already
built every planned differentiator. Main named risk to stress-test in
VALIDATING: whether the "window is closing" given Dec 2025 press attention
means a well-resourced competitor lands an automatic-detection product
before this project could ship one, and whether client-side heuristic
quality-scoring can actually be accurate enough to be trustworthy (a false
positive that hides a legitimately good result is worse than doing
nothing).

B (scope-creep logger) is the designated fallback if C fails validation.

Proceeding to VALIDATING — see `research/ai-slop-search-filter.md`.

## STATUS UPDATE (Run 3, 2026-09-19) — all 4 Run 3 candidates KILLED

- **C (AI-slop/SEO-spam automatic search filter), the AGENT_PICK: KILLED.**
  Adversarial re-check found the "automatic detection" wedge filled in
  with several mediocre 2026 competitors during the gap between discovery
  and validation, and — more fundamentally — the core technical premise
  (reliable heuristic quality-scoring of ~25-word SERP snippets, without a
  live LLM call) is directly contradicted by an adjacent project that
  tried and explicitly rejected the same class of approach. See
  `research/ai-slop-search-filter.md`.
- **B (scope-creep logger), the designated fallback: KILLED.** Adversarial
  research found a near-identical live standalone competitor
  (StopScopeCreep.com, same freemium model) plus two more 2026 entrants
  converging on the same pain (Scopey, ScopeShield) — the "no standalone
  tool exists" premise from discovery was wrong, just not yet surfaced.
  Also found a real friction critique (going to a separate tool adds a
  step vs. just messaging the client directly) and a "proof of approval
  ≠ getting paid" gap. See `research/scope-creep-logger.md`.
- **A (client risk-screening): KILLED without a full validation pass** —
  closed out early on a structural defamation/GDPR liability problem
  inherent to publishing risk scores about real people/companies from a
  €0, no-legal-review solo project; not a competitive-landscape issue.
  See `research/client-risk-screening.md`.
- **D (Gmail tracking-pixel blocker): KILLED**, confirming its own
  discovery agent's "weak fallback" flag — two live-but-mediocre
  incumbents, narrow audience, no paid-tier precedent, high solo-
  maintenance burden. See `research/gmail-pixel-blocker.md`.

**All four Run 3 candidates are dead.** See `MEMORY.md` for the
compounding methodology lesson this produces (a second, independent
confirmation that "passed initial discovery-agent screening" is not
sufficient — a dedicated adversarial competitor re-search at validation
time keeps surfacing entrants from the last ~6-12 months that the
discovery pass missed) and the concrete redirection for the next
discovery round.

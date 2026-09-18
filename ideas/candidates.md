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

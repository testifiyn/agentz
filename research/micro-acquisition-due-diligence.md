# Adversarial validation: Buy-side due-diligence service for micro-acquisitions

Round 4 (2026-10-01) survivor from the "content/service model" discovery
strategy — the first candidate in this project's history that wasn't a
software product racing to be first-to-market, but a human-delivered
service whose claimed moat was reputation/trust rather than code. Proposed
offer: a solo operator (AI-assisted, human-verified) sells a flat-fee
($300-900), 48-72hr report verifying a specific Flippa/Acquire.com-style
listing's claims (Stripe/bank/analytics cross-checks) for buyers of
sub-$150k online businesses — positioned below enterprise due-diligence
firms (Centurica et al., $1M-$50M focus) and above generic unvetted Fiverr
gigs.

## Why this got a dedicated adversarial pass

Discovery-stage research found real evidence the underlying problem is
genuine (fraud/inflated metrics are endemic in micro-acquisition listings;
0% of 615 analyzed SaaS listings published churn data) and real evidence
of adjacent willingness to pay (Centurica, Fiverr/Upwork gigs). But the
whole point of testing a service model was to see whether it could escape
this project's recurring failure mode (anything visible gets cloned
within single-digit weeks) via a trust-based moat instead of a
first-mover one — so the validation pass was instructed to specifically
hunt for competitors occupying the claimed gap, not just confirm the
pain is real.

## Adversarial research pass (2026-10-01)

1. **Marketplace-native vetting — the most damaging finding.** Flippa has
   a formal partnership with WebAcquisition integrating third-party
   due-diligence directly into its Deal Room, plus its own in-house
   report tiers (roughly $500-2,500 depending on source). Acquire.com
   structurally requires most listings to connect live Stripe/Shopify/
   analytics data and generates AI-driven buyer/seller due-diligence
   checklists as a core, partly-free part of the platform flow. The two
   dominant marketplaces for this exact deal size already have
   distribution-advantaged, partially-free verification baked into the
   transaction itself.
2. **A live, identical competitor already exists.** An Indie Hackers post
   ("building a due diligence service for first-time SaaS buyers," user
   "Raj") offers the same deliverable — 30-minute Stripe-export, customer-
   concentration, and traffic-sustainability reviews — to the same
   persona. At time of writing he was giving away 5 free audits to learn
   what buyers value, so he's early-stage, but the concept is not
   undiscovered.
3. **The claimed price gap doesn't exist — it's densely populated.**
   ProofCap sells automated, Stripe-connected revenue verification at a
   flat $297 (undercutting the candidate's floor with a scalable,
   zero-marginal-cost product). WebAcquisition sells "Micro SaaS Business
   Due Diligence" by name at $1,900-2,900+, led by a founder with a public
   track record (200+ businesses sold, 1,000+ diligence reviews).
   DueDilio's sweet spot is $1M-25M but reaches down toward $500k at
   $3k-5k. VerifyMRR offers a seller-side Stripe verification/Trust Score
   badge aimed at the same trust problem. The candidate's $300-900 band is
   sandwiched between a cheaper automated tool and branded human
   specialists with public track records — a squeeze, not a gap.
4. **Willingness-to-pay evidence clusters above the candidate's price,
   not at it.** Confirmed payment exists at $500-5,000+ (marketplace
   tiers, WebAcquisition, DueDilio) and at $297 (automated). No evidence
   was found of a buyer paying an independent solo human specifically
   $300-900 for this — the nearest data point is the still-unproven,
   still-giving-away-free-audits Indie Hackers builder. Per this
   project's evidence hierarchy, that's weak: comparable services getting
   paid at nearby prices is not the same as people paying this offer at
   this price.
5. **Credibility/liability gap is real and unaddressed.** Every named
   competitor leads with a credential a brand-new solo operator lacks: a
   publicly documented track record (WebAcquisition's founder), a vetted-
   provider marketplace brand (DueDilio), or platform-native trust
   (Flippa/Acquire.com themselves). A one-time, bet-the-wire-transfer
   decision is exactly the situation where buyers are least likely to
   choose the cheapest, least-credentialed option, and a €0-capital
   operator has no insurance, brand, or track record to offer instead.
6. **Deal flow is not the problem.** Flippa alone reports 12,000+ closed
   deals/year, a large share presumably sub-$150k — raw volume is
   adequate. The problem is that this volume is already being actively
   competed for by five-plus named, operating competitors plus two
   marketplaces with structural, partly-free solutions.

## Verdict: KILLED

The discovery-stage framing ("nothing exists between a $199 generic check
and $1M+ enterprise firms") was factually wrong. The space is populated at
$297 (automated), $500-2,500 (marketplace-native), $1,900-2,900 (branded
micro-SaaS specialist), and $3k-5k (vetted marketplace), plus a live
competitor building the identical concept from the identical angle. A
€0-capital solo operator with no brand, no insurance, no credentials, and
no marketplace distribution, entering a price band already contested by
better-credentialed and/or cheaper-and-automated players, in a market
where trust is the primary purchase driver for a one-time high-stakes
transaction, is not a defensible position.

## Why this result matters beyond this one candidate

This is the first test of whether a *service* (not software) could escape
this project's "cloned within weeks" problem via a reputation/trust moat
instead of a speed moat. It still failed — but not for the same reason
the 11 software candidates failed. Those died because being first to spot
a gap stopped being a moat once competitors could clone the software just
as fast. This one died because **every surviving competitor already had
something this project's starting position cannot manufacture from
scratch: a named founder's public track record, a vetted-marketplace
brand, or platform-native distribution.** The constant across all 12
killed candidates (11 software + this 1 service) is the same underlying
gap: a generic, identity-less, audience-less €0-capital AI agent has no
way to establish trust or speed advantage that an equally-resourced
competitor (or the platform itself) can't match or beat. See `MEMORY.md`
for the resulting recommendation to the owner.

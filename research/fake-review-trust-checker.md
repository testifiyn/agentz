# Validation: Fake-review / trust-score checker for Amazon

Idea slug: `fake-review-trust-checker`. Working name: **TrueGrade**.

## Summary of the plan

A Manifest V3 Chrome extension, fully client-side, that reads the Amazon
product-review DOM already rendered in the user's browser and computes a
local, transparent A–F trust grade from: verified-purchase ratio,
rating-distribution skew/bimodality, review-date-burst clustering, and
duplicate-phrase (near-identical review) detection. No backend, no account,
no per-user API cost. Monetized via disclosed Amazon Associates affiliate
links, exactly as ReviewMeta did for years. Differentiated from the current
post-Fakespot field (SureVett, RateBud, ReviewLens, Savinoo) by: (1)
disclosed affiliate links from day one, (2) visible sub-scores instead of a
black-box grade, (3) zero per-request LLM cost, (4) open-source, auditable
methodology.

## Stress-test pass 1 — "Is the demand window already closing?"

**Objection:** Fakespot and ReviewMeta died in mid-2025. It is now
September 2026 — over a year later. In that time at least four replacement
extensions already launched (SureVett, RateBud, ReviewLens, Savinoo). The
"vacuum" this idea is banking on is not empty — it has already been
discovered and partially filled by other builders. By the time TrueGrade
ships, it competes against products with a year's head start on Chrome Web
Store installs, ratings, and search ranking. CWS search is install/rating-
weighted, so a brand-new listing starts invisible under four incumbents,
however good.

**Verdict:** Real risk, not fatal. None of the four replacements has
achieved Fakespot-level brand recognition — the strongest one found
(SureVett) has ~675 users and 6 ratings. This is a fragmented, still-early
field, not a settled market with an entrenched leader. The opportunity has
shifted from "be first" to "be the trustworthy one" — which is still
winnable, but only if distribution doesn't rely on CWS search alone.

**Plan revision:** Do not depend on Chrome Web Store organic search ranking
for initial traction. Plan distribution (drafted only, per the safety
boundary) around: (a) an explicit "open-source Fakespot alternative"
positioning that targets the still-active "Fakespot alternative" search
demand the research found incumbents capturing with blog spam rather than a
real product; (b) organic community posts in r/amazon, r/frugal,
r/BuyItForLife as a genuinely useful tool, not a pitch; (c) a public GitHub
repo with the scoring methodology, which doubles as both a distribution
surface (HN/Show-and-tell friendly) and the transparency differentiator
itself.

## Stress-test pass 2 — "Can an incumbent trivially copy the differentiator?"

**Objection:** The core differentiators identified (disclosed affiliate
links, visible sub-scores, no LLM cost) are mostly UX/trust positioning, not
deep technology. RateBud could patch in a disclosure banner and start
showing sub-scores in a single release. There is no real moat — this is a
commodity heuristic (verified-purchase ratio, date clustering, duplicate
phrases are all publicly known techniques from Fakespot's own history).
Nothing stops a better-funded or faster-moving competitor from copying the
positioning within a week of noticing it.

**Verdict:** True, and this is the most serious objection of the three.
Positioning-only differentiation is not durable. The plan needs an asset
that survives copying.

**Plan revision:** Make the methodology genuinely open-source (public repo,
MIT license, commits visible) rather than just marketed as "transparent."
A closed-source competitor copying the *messaging* of transparency without
being *actually* auditable is a strictly weaker claim, and calling that gap
out explicitly ("ours is the only one you can actually read the code of")
is a differentiator that specifically cannot be copied by a closed-source
competitor without them open-sourcing their own product. Secondary,
slower-to-copy moat: build multi-marketplace support (Walmart, eBay, Etsy)
as a v2 milestone — the research found existing replacements are
Amazon-only, so covering more surface area is a real (if not defensible
forever) lead. Accept that this space has a low technical moat generally
and that ongoing execution (being the actively-maintained, responsive one
when Amazon's DOM changes — see pass 3) is the real long-run differentiator,
not a one-time feature.

## Stress-test pass 3 — "Is this too fragile/hard to sustain solo at €0?"

**Objection:** The extension works by reading Amazon's rendered DOM.
Amazon changes its page markup periodically (it's not a stable API), which
will silently break the scoring logic. A solo operator with no monitoring
infrastructure may not notice for days or weeks, during which the extension
either shows wrong grades or fails silently — directly damaging the trust
the whole product is built on. There's also a residual legal-posture
question: Amazon has previously taken adversarial action against
Fakespot (a 2021 lawsuit, and Apple removing it from the App Store under
Amazon pressure at one point per the research), so this is not a
zero-friction incumbent relationship even though the technical approach
(reading already-rendered DOM in the user's own browser) is defensible and
is exactly what Fakespot did for years without being sued over the scraping
itself.

**Verdict:** Real operational risk, not fatal. The legal posture is
acceptable (same as Fakespot's, which ran for ~7 years). The DOM-fragility
risk is the one that actually threatens the "trust" brand promise and needs
concrete mitigation, not just acknowledgment.

**Plan revision:** (1) Scope the MVP to Amazon only — do not add
Walmart/eBay/Etsy until the Amazon selectors and failure handling are
solid; multi-marketplace is a v2 differentiator, not a v1 requirement. (2)
Fail loudly and visibly to the *user*, never silently: if expected DOM
elements aren't found, show "Can't analyze this page yet" rather than a
wrong or stale grade — protects trust even when the scraper breaks. (3)
Centralize all DOM selectors in one config module so a breakage fix is a
small, fast, single-file patch rather than a hunt through the codebase —
this is a build-time decision, not a deferred one, since it directly
determines how fast a solo maintainer can respond to an Amazon layout
change.

## Outcome

No fatal, unaddressable flaw found across three adversarial passes. The
idea survives with three concrete revisions folded into the build/launch
plan: (1) distribution must not depend on CWS search ranking alone — lean
on the open-source-repo + community-post channel; (2) the methodology must
be genuinely open-source, not just marketed as transparent, since
positioning alone is trivially copyable; (3) MVP scope is Amazon-only with
loud, visible failure handling and centralized selectors, to keep a
solo €0 operator able to react fast when Amazon's markup changes.

**Decision: proceed to BUILDING.**

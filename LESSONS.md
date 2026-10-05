# LESSONS

Reusable knowledge from killed candidates and failed discovery rounds.
Append new lessons; don't rewrite old ones (contrast with `MEMORY.md`,
which is the rewritten current-state summary). Each entry should still be
useful even after the specific candidate it came from is forgotten.

---

## 2026-09-19 — "incumbent is static, we'll be dynamic" is not a wedge

**Hypothesis that failed:** a "living," continuously re-verified resource
(digital-nomad-visa tracker) would beat static competitor content because
we'd keep it visibly current and they wouldn't.

**What happened:** adversarial validation found 6 named competitors
already display "last verified" dates, one two days more recent than the
validation itself.

**Why the assumption was wrong:** "we'll maintain this better than they
do" is a labor claim, not a product claim, and it's nearly always already
standard practice among competitors serious enough to rank, not an open
gap — this was also seen once before in now-deleted project history (the
AI-slop search filter).

**Implication for future candidates:** never accept "ours will be fresher
/ more current / better maintained" as a differentiator without checking
whether every visible competitor already claims and demonstrates the same
thing. Check it before picking the candidate, not after.

## 2026-09-19 — AI-assisted clone velocity has compressed to single-digit weeks, including for genuinely hard engineering

**Hypothesis that failed:** a software tool requiring real engineering
complexity (not a thin wrapper) buys meaningfully more runway before
competitors appear, because fewer builders can replicate it quickly.

**What happened:** the EU Cyber Resilience Act vulnerability-reporting
tool (SBOM parsing, OSV/CISA-KEV matching, Art.14 report generation) still
got 7+ independent GitHub clone implementations within ~8 days of the
deadline going live.

**Why the assumption was wrong:** AI-assisted tooling now lets competing
builders (and, separately, incumbents/regulators themselves) replicate
nontrivial engineering almost as fast as a thin wrapper. Complexity shifts
the clone-saturation window from ~2-3 weeks to ~1-2 weeks — it does not
buy months.

**Implication for future candidates:** do not treat "this requires real
engineering, so we have a moat" as sufficient. The moat has to come from
something clones can't replicate even with equal engineering speed:
owned distribution, an existing audience, proprietary data, or delivery
that depends on doing real recurring work (not shipping code once).

## 2026-10-05 — for services, the capture window is filled by people and institutions, not code, on the same 1-3 week timescale

**Hypothesis that failed:** a productized micro-service tied to a fresh
regulatory trigger (EAA, CRA) would have more runway than a software tool
because delivery depends on doing real work, which can't be "cloned"
instantly the way code can.

**What happened:** by the time each trigger was publicly known, the
reachable segment was already served by (i) Fiverr/Upwork gigs from
established sellers, (ii) a free resource built by an incumbent or
foundation (Patchstack's EU-built mVDP, OpenSSF's CVD templates), and
(iii) agencies/consultancies already selling the exact service.

**Why the assumption was wrong:** the clone-speed dynamic isn't specific
to code — it's specific to *visible, publicized triggers*. Any trigger
that's easy enough to notice is easy enough for many other people
(including institutions with a standing incentive, like a foundation or a
platform) to respond to in the same short window, regardless of whether
the response is code or a service listing.

**Implication for future candidates:** a trigger-driven idea is exposed
to the same capture window whether it's shipped as software or as a
service. The lever that actually buys runway is *obscurity of the
trigger* or *an existing audience/distribution channel that doesn't
depend on the trigger being newly visible*, not the delivery format.

## 2026-10-05 — for compliance-adjacent services, trust/credibility is the binding constraint, not delivery capability

**Hypothesis that failed:** an AI-assisted solo operator could compete on
compliance-adjacent services (accessibility audits, CRA readiness docs)
by producing comparable work at lower cost.

**What happened:** every compliance-adjacent niche tested is a buyer
market where the deciding factor is a credible, accountable counterparty
(reviews, track record, ability to share liability), not raw work
quality. A new seller account with zero reviews competes on price against
established sellers, and compliance buyers specifically are the least
willing to accept that trade.

**Implication for future candidates:** screen compliance-adjacent and
other trust-sensitive service niches (legal, financial, medical-adjacent,
anything with liability exposure) out early, or plan explicitly for how
credibility gets built before monetizing (e.g., the human owner's own
identity and track record standing behind the work, not an anonymous AI
operator). Don't treat "we can do the work" as sufficient evidence the
service is sellable.

## 2026-10-05 — organic search, the only €0/no-account distribution channel tested so far, is actively shrinking for informational content

**Hypothesis that failed:** a content/tracker site could acquire an
audience via organic search at €0 capital with no social/email/ad
accounts.

**What happened:** Ahrefs (Feb 2026, 300k keywords) measured top-result
CTR 58% lower when an AI Overview is shown (up from 34.5% in 2025); Seer
Interactive measured informational-query organic CTR falling from 1.76%
to 0.61% (-61%); a 2026 randomized study measured -39.8% outbound clicks.
Separately, every specific tracker niche tested was already covered by an
existing (often free, incentive-backed) competitor holding the rankings.

**Implication for future candidates:** a pure-information content play
has two compounding problems, not one — AI Overviews are answering the
query before a click happens, and incumbents already rank. A content idea
needs a reason a human must click through (live/transactional data,
community, something an AI Overview can't substitute) *and* a real
distribution plan beyond "rank on Google," before it's worth building.

## 2026-10-05 — running total across this project's history

18 distinct discovery strategies, spanning 3 different business-model
shapes (software tool, productized service, content/community), zero
survivors past adversarial validation. This is strong enough, consistent
enough evidence to treat "build something and hope distribution + no
track record is enough" as a disproven approach at €0 capital with no
existing audience/accounts, not as a run of bad luck. See `MEMORY.md` for
what this implies for the next action.

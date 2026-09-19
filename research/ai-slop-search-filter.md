# Adversarial validation: Automatic AI-slop/SEO-spam search-result filter

Candidate C from `ideas/candidates.md` (Run 3). A browser extension that
automatically grays out/badges low-quality "AI slop"/SEO-spam results on
Google/Bing/DuckDuckGo using local client-side heuristics only (no
backend, no per-query API calls, no account).

## Adversarial research pass (2026-09-19)

A dedicated adversarial research pass was run specifically to try to kill
this idea, instructed not to re-confirm the Run-3-discovery-agent's
findings but to hunt for reasons it fails. Findings:

1. **The field has filled in fast since discovery, and badly.** Several
   more "automatic" (not manual-blocklist) AI-slop detectors have already
   launched on the Chrome Web Store in 2026: "AI Slop Filter," "AI Slop
   Blocker" (Google Search/Images/YouTube/Bing/DDG/Reddit), "Google Search
   AI Detection" (3.0★), "Slop Blocker," "SlopStop," plus the
   previously-found "AI Slop Meter" (now updated Feb 2026). Ratings
   cluster 0–3.9★ — this isn't an empty field, it's a crowded field of
   mediocre attempts at exactly this idea. uBlacklist itself has NOT added
   automatic detection (that specific gap is still real), but the
   "automatic" wedge around it is now contested territory, not open
   ground.
2. **A builder in the closest adjacent niche already tried and rejected
   this exact technical approach.** `github.com/alice04121982/Ai-slop-blocker-`
   (image AI-detection) explicitly states heuristic/ML AI-detection
   doesn't work reliably enough to ship, and pivots to hard metadata
   (C2PA/IPTC/SynthID) instead of guessing "AI-ness."
3. **Technical kill-shot: SERP snippets are too short for reliable text
   heuristics.** Multiple 2026 sources on AI-text detectors (GPTZero,
   Copyleaks, Turnitin-class tools) report real-world accuracy well under
   claimed rates, and specifically that texts under ~150–300 words produce
   unreliable scores. A Google/Bing snippet is ~20–35 words — even
   well-resourced ML detectors with full-page access need far more text
   than a SERP gives. A client-side heuristic (necessarily weaker than
   those models, by the €0/no-backend design constraint) analyzing even
   less text will almost certainly have a worse false-positive rate. This
   directly threatens the one requirement that matters most: being
   trustworthy enough that users keep it enabled instead of uninstalling
   after it hides a legitimately good result.
4. **Distribution is real but the copy-moat is close to zero.** Real
   organic pull exists (press coverage of "Slop Evader" across 6+ outlets;
   an organic social request: "Yesss. I really wish someone would create a
   browser extension for this!"). But a random builder used a no-code tool
   to ship a working clone of that exact request "in 2 minutes." Whatever
   traction is gained is trivially cloneable — the moat is distribution
   speed/brand only, not the code or the detection method.
5. **Monetization precedent is weak-to-negative for this specific
   category.** uBlacklist (200k+ users) and Unhook (1M+ users) remain
   free/donation-only after years at real scale — no evidence either ever
   shipped or needed a paid tier. Genuine one-time-purchase extension
   success exists elsewhere (CSS Scan, $69 one-time, $100k+ revenue) but
   that's a high-value professional dev tool, not a cosmetic SERP filter;
   ExtensionPay's own 2026 commentary notes one-time-sale extensions are
   "slowing down due to market saturation." No real revenue example found
   for a paid search/clutter-blocker Pro tier.
6. **Google itself is actively attacking the same pain point** (ongoing
   2026 "spam update" cadence explicitly targeting scaled AI spam,
   helpful-content signals folded into core ranking) — this validates the
   problem's realness but also threatens to shrink it over the product's
   lifetime, the opposite of a chronic-and-growing pain.
7. **Legal/ToS risk is low** — no takedowns found for passive DOM
   downweighting/graying (uBlacklist-style); found takedowns were for the
   more aggressive category of query-hijacking/ad-injection.

## Ten-question check

1. **Why hasn't this been captured already?** It's being captured right
   now, in real time, by multiple 2026 entrants (AI Slop Filter, AI Slop
   Blocker, Slop Blocker, SlopStop, Google Search AI Detection) — just
   badly (0–3.9★). This isn't unclaimed ground; it's actively being raced
   on and the racers are losing on quality/trust, which is a different and
   worse situation than an empty field.
2. **What prevents a competitor from copying us?** Nothing identified. A
   no-code clone of the closest viral request was built in 2 minutes by an
   unrelated builder. Near-zero technical moat.
3. **Why would someone switch from what they use now?** Only by being
   measurably more accurate/trustworthy than uBlacklist (manual but
   reliable because it's user-curated) and the new automatic entrants —
   but the technical evidence says a client-side heuristic on ~25-word
   snippets is likely to have a materially worse false-positive rate than
   even paid, full-text ML detectors that already score under 80%
   accuracy. No credible switching reason survives this.
4. **Where do the first 100 users come from?** Plausible — real organic
   demand exists (press coverage, social requests), Reddit/HN/Product Hunt
   are realistic channels given the proven pull.
5. **Where do the first 1,000 come from?** Uncertain — would require
   actually out-performing several already-launched, currently mediocre
   competitors on the one axis (accuracy/trust) that the technical
   research says is hardest to deliver at €0.
6. **Who pays?** Unclear. No identified segment with demonstrated
   willingness to pay for this category specifically.
7. **Why would they pay vs. free alternatives?** No compelling answer —
   several free (if mediocre) alternatives already exist, and the two
   highest-scale incumbents in the adjacent category (uBlacklist, Unhook)
   have stayed free/donation-funded for years at real scale, suggesting
   the category itself doesn't convert to paid.
8. **What can we offer that competitors cannot easily reproduce?** Nothing
   identified. See point 4 above (2-minute no-code clone).
9. **Can we realistically acquire customers at €0?** Distribution: yes,
   plausible. Monetization at €0 marginal cost: no clear path found.
10. **Is there real demand evidence?** Yes, genuinely strong (press,
    organic social requests) — but that demand is already being served,
    poorly, by several 2026 entrants, and the core technical promise
    (reliable automatic quality scoring from SERP-length text) looks
    likely false at the fidelity a €0 client-side build can achieve. Real
    demand for a wedge that's technically very hard to deliver credibly is
    not the same as a validated opportunity.

## Agent Recommendation: KILL

The chronic pain and organic demand here are real and well-evidenced —
this is not a case of "no demand." But three independent problems compound
into a kill, not a stretch: (1) the "automatic detection" wedge that made
this candidate attractive is no longer open ground — it filled in with
several mediocre competitors during 2026, meaning the market has already
tested this exact approach and the results are lukewarm ratings, not
runaway success; (2) the core technical claim — that a lightweight,
backend-free heuristic can reliably score ~25-word search snippets for
quality/AI-ness — is contradicted by direct evidence from a closely
adjacent project that tried and explicitly rejected the same class of
approach, plus broader evidence that even resourced, full-text ML
detectors are unreliable, meaning the most likely real-world outcome is a
false-positive rate that erodes user trust and drives uninstalls rather
than the "more accurate than uBlacklist" differentiation the pick assumed;
and (3) monetization has no positive precedent in this specific category
at any incumbent scale. A narrower pivot — filtering on verifiable
structural/metadata spam signals (affiliate-link density, known spam
domains, listicle-structure patterns) rather than claiming to detect
"AI-ness" — mirrors what the closest adjacent project already pivoted to,
and could be worth a fresh, separate validation pass in the future, but
that is a different, unvalidated idea, not a basis for proceeding with
this one as scoped.

## Owner Decision: N/A (KILL, not GO — no owner approval gate required)

# LESSONS

Append-only record of reusable knowledge extracted from killed candidates
and failed experiments. See `PRINCIPLES.md` (if present) for standing
rules this file's entries have been promoted into; this file is the raw
log of what reality taught, in the order it was learned.

---

## 2026-10-08 — Discovery-stage competitor searches must be multilingual from the first pass, not deferred to validation

**Hypothesis:** The EU Machinery Regulation (2023/1230) SME compliance-
documentation niche had no real software competitor, based on an
English-language discovery search that found only consultancy pages and
static templates.

**What happened:** Dedicated adversarial validation, searching in German
and Italian as well as English, found a live, actively-marketed, AI-built
direct competitor (CE-Copilot) with full English-language reach, plus
three decades-old established incumbents (Safexpert, Docufy, CEM4)
already serving this exact niche. The "no competitor" premise was wrong
from the start — not because competitors emerged in the gap between
discovery and validation (the usual failure mode this project has
tracked before), but because the discovery search itself never looked in
the language where the competitors actually market.

**Why the assumption was wrong:** Manufacturing and compliance-tooling
markets concentrate heavily in specific non-English-majority countries
(here, Germany and Italy for machinery manufacturing). A niche can look
completely unclaimed to an English-only search and be thoroughly served
in the market's actual working language. This project had already learned
a related lesson the other direction — the regulated-profession B2B round
correctly searched in-language and correctly found competitors — but had
not yet generalized that "search in-language" needs to be a first-pass
discovery habit, not something only applied when the niche is explicitly
non-English-market-labeled going in. A niche badged as "EU regulation" in
English framing can still have an entirely non-English competitive
landscape.

**Lesson:** Before writing up ANY candidate as having "no competitor
found," run the competitor search in the dominant working language(s) of
the country/industry where the buyer actually operates — not just in
whatever language the regulation or trigger was first read about in. For
EU-wide manufacturing/compliance niches, this means German, and often
Italian or French, as a standing default, not a conditional step.
Treat an English-only "no competitor" finding as provisional, never as
grounds to recommend a candidate for build.

**Implication for future discovery runs:** Build the multilingual
competitor check into the discovery agent's own prompt (first pass), not
only into the separate adversarial-validation agent's prompt (second
pass) — this run caught it only because validation happened to be
instructed to re-check in other languages specifically. A future run
without that explicit validation instruction could have missed it and
recommended a build on a false premise.

**Implication for future businesses generally:** This project's
standing clone-compression finding (an opportunity visible in public
English-language search gets independently built within single-digit
weeks) likely has a mirror version for non-English markets: the same
compression may be happening there too, just invisible to an English-
only search — meaning the true "safe" window for any EU/global-market
candidate is probably narrower than an English-only discovery pass would
suggest, not wider.

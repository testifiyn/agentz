# EU Machinery Regulation (2023/1230) SME compliance documentation tool

**Status: KILLED at adversarial validation (2026-10-08)**

## Candidate as discovered

A documentation/compliance tool helping SME machinery manufacturers and
machine integrators in the EU comply with Machinery Regulation (EU)
2023/1230, which replaces the old Machinery Directive with a hard cutover
on 20 January 2027 (no transition period). The regulation newly requires
documentation covering embedded software, AI functions, and cybersecurity
of safety-related control systems, and for the first time explicitly
permits fully digital technical files.

The discovery agent searched (English-language terms) and found only
consultancy pages (SGS, TÜV, Conformance) and static €75 document
templates (Euronorm), plus one near-dead experimental tool (an Apify
"gap checker" actor, 0.0 rating, 1 monthly user) — concluding there was
no real software competitor, which was unusual enough for a regulatory-
deadline niche this far into the project's observed clone-compression
pattern to be worth dedicated adversarial validation before any build
commitment.

## Why it was sent to validation instead of being accepted

Two load-bearing claims needed independent re-checking:
1. "No competitor exists" — surprising given 11+ prior candidates in this
   project were killed by competitors appearing within weeks of a much
   less durable trigger than a 2027 regulatory deadline.
2. Distribution and trust were flagged as open risks, not confirmed paths.

## Validation findings — the competitor claim was false

A multilingual sweep (the discovery agent had searched English-only; this
niche's manufacturing base concentrates in Germany and Italy) found:

- **CE-Copilot (ce-copilot.de)** — a live, commercial, AI-built (stated to
  run on Claude) web app covering the full workflow: directive/standards
  check, AI-assisted risk assessment (EN ISO 12100), functional safety
  (EN ISO 13849-1), AI-drafted operating-instruction chapters, EU DoC
  generation, and post-market standards monitoring — explicitly for both
  the old Machinery Directive and the new 2023/1230 Regulation. Has an
  English site, SME-targeted content marketing, priced from €119/month,
  listed with a 4/5 rating in a German AI-tool directory (ki-syndikat.de,
  June 2026).
- **Safexpert (IBF Solutions)** — a 30-year-old established CE-marking/
  risk-assessment software with named enterprise and SME customers
  (HOMAG, MULTIVAC, Nordson, Siemens Safety Consulting) who switched from
  Word/Excel to it.
- **Docufy** ("Machine Safety" + "Cosima Go") — long-standing German
  risk-assessment/documentation suite integrated with operating-
  instruction authoring.
- **CEM4 (Certifico, Italy)** — explicitly updated for Regulation
  2023/1230 as of July 2025, including a changelog entry for the new
  technical-file cover sheet.
- **Paligo** — cloud documentation platform with AI modules positioned
  for growing machinery manufacturers.

CE-Copilot in particular already covers the exact delta (AI/software/
cybersecurity documentation) that was the candidate's intended
differentiator. This is the same clone-compression pattern that killed
11+ other candidates in this project — it simply happened in German-
language SaaS space that an English-only search missed, compounded by
decades-old incumbents that pre-date the new regulation entirely.

## Trust/liability probe

Self-serve software for CE-marking/technical-file work is already
normalized: Safexpert's own case studies show large and mid-size
manufacturers fully adopting dedicated software over Word/Excel, and
vendor guides frame the real buyer choice as "software (self-manage) vs.
consultant (€1,500-15,000+)," with many SMEs using a hybrid model. So
liability fear does not structurally block software adoption — but that
means the trust gap is already closed by incumbents, leaving no special
wedge for an unknown solo brand. Buyers willing to trust software already
have Safexpert or CE-Copilot as the default answer.

## Market size / distribution

Secondary evidence (an SME/CE-marking study, a UK consultant's claim that
"only 1-2 of every 10 manufacturers I speak to are fully familiar with CE
marking") suggests a real underserved population of confused SMEs
plausibly exists — that part of the original thesis holds up in
isolation. VDMA has not yet published 2023/1230-specific practitioner
guidance (the official EU Commission guide itself isn't expected before
late 2026); its visible content is member-only events, confirming the
discovery agent's view that this channel is semi-closed to an outside
solo builder. Moot given the competition finding, but relevant to any
future candidate in an adjacent, still-genuinely-unserved slice of this
market.

## Verdict: KILLED, not conditional

The central discovery claim was factually wrong once non-English markets
were searched. A funded, AI-built, actively-marketed direct competitor
(CE-Copilot) already exists with full-workflow coverage and English-
language reach, backed by decades-old incumbents (Safexpert, Docufy,
CEM4) with established trust and customer bases, reached via a
distribution channel (VDMA/trade associations) that is itself gated and
slow-moving. No credible narrow wedge remains — CE-Copilot already covers
the regulation's AI/cybersecurity/software delta that was the floated
differentiator.

## Lesson extracted (see `LESSONS.md`)

Discovery-stage "is this already built?" screening that searches only in
English is not sufficient for any EU-wide or country-specific niche,
particularly ones concentrated in non-English-majority manufacturing/
professional bases (Germany, Italy, France, etc.). This is the second
time in this project's history (the first being the regulated-profession
B2B round, which did search in-language and correctly killed those
candidates for that reason) that language scope determined the outcome —
this time the gap was in the *initial* discovery search, not caught until
a dedicated validation pass searched multilingually. Future discovery
agents must search in the dominant local language(s) of the target
market from the first pass, not defer it to validation.

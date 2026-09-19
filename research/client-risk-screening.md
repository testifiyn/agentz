# Validation note: Pre-engagement client risk-screening for off-platform freelancers

Candidate A from `ideas/candidates.md` (Run 3). Deprioritized during
discovery for a structural reason; this note formally closes it out rather
than leaving it silently unvalidated.

## Why this doesn't proceed to full validation

This candidate has a disqualifying problem that no amount of competitive
differentiation fixes: **the product itself is generating and publishing
risk assessments about identifiable real companies and individuals**, from
scraped/aggregated public and semi-public data (WHOIS, review sentiment,
insolvency filings). For a solo, €0, no-legal-review autonomous project,
that carries:

- **Defamation exposure** — a wrong or unfair "risk score" attached to a
  real business or person is exactly the fact pattern that generates
  legal complaints, and the research agent's own finding was that this
  liability is the likely reason enterprise credit bureaus stay in the
  B2B-credit-line lane and no solo builder has shipped the accusatory
  consumer version.
- **GDPR/data-protection exposure** — aggregating and republishing
  personal data about individual freelance clients (who, per the pain
  point itself, are very often individuals or tiny unregistered
  operations, not filed companies) goes beyond simply linking to public
  registries.
- **Weak technical fit for the actual pain besides the legal issue** — the
  proposed free signals (Companies House filings, CCJ register links,
  WHOIS/domain age, review sentiment) are built for assessing registered
  companies. Much of the actual described pain (a solo client who
  disappears after work is delivered) involves individuals or informal
  operations with no meaningful public-record footprint at all, so the
  MVP would often return "no data" for exactly the highest-risk clients.

## Ten-question check: not performed in full

Given the disqualifying legal/safety issue above, a full ten-question
adversarial pass was not run — it would not change the outcome. This
mirrors how the HARD SAFETY BOUNDARY section of this project's operating
rules treats anything adjacent to publishing claims about real people/
entities: better to close it out early than sink further research budget
into a candidate this project category shouldn't build regardless of
market size.

## Agent Recommendation: KILL

Real, well-evidenced demand (71% of freelancers report payment struggles)
does not outweigh a structural legal-exposure problem for a project with
no legal review and a hard rule against risky real-world actions. Not
pursued.

## Owner Decision: N/A (KILL, not GO — no owner approval gate required)

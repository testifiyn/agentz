# Lessons

Append-only. Each entry records a disproven hypothesis and the generalizable
implication, so future discovery rounds don't re-spend agent-hours
re-testing something already settled by evidence. See `MEMORY.md` for
current state and `LOG.md` for the full run history.

**Provenance note (2026-09-27):** this file did not exist on `main` or on
this branch until now. The entries below were consolidated from six other
`claude/cool-bell-*` branches that forked from the same commit
(`d2459cc`, this project's last shared state) and ran independent
discovery rounds in parallel, without visibility into each other, over
2026-09-20 through 2026-09-26. Each branch independently rediscovered
pieces of the same picture; this file merges their findings into one
record so a future run doesn't have to re-derive them. See the
"Operational issue" section of `MEMORY.md` for why this fragmentation
happened and what it cost.

---

## 2026-09-20 — MASTER PATTERN: any service where party A pays to have party B investigated/evaluated, to help A decide something about B, is structurally blocked at €0 in major markets — regardless of whether B is a person or a business

(Found on branch `claude/cool-bell-c46o51`.)

**Context:** two separate candidates independently converged on the same
underlying legal shape and were both killed by it, via two *different*
statutes:
1. A candidate-fraud-vetting concierge (party A = a startup, party B = a
   job candidate) — killed by FCRA (federal, person-specific): 15 U.S.C.
   §1681a defines a "Consumer Reporting Agency" functionally, not by
   label — assembling/evaluating information on an individual, used for
   an employment-type decision, by a third party for a fee. The FTC's
   1999 Vail advisory opinion establishes that even fact-finding (not
   just scored reports) counts. GDPR adds independent exposure for any
   EU/UK-based subject.
2. A "reality-check" fieldwork report for small-business buyers (party A
   = the buyer, party B = the target business) — killed by state
   private-investigator licensing law (CA/TX/FL/NY all define regulated
   investigative activity to include a "business," "reputation," or
   "conduct" of a "person," and every one of those states' statutory
   definition of "person" explicitly includes corporations/LLCs).
   Licensing requires years of documented experience, exams, and bonding
   — not obtainable at €0, and operating unlicensed carries real
   misdemeanor/fine exposure.

**The generalized rule:** it does not matter whether the investigation
subject is a named individual (FCRA/GDPR territory) or a named business
entity (PI-licensing territory) — the trigger is the *shape*: a paying
customer (A) commissions a third party to investigate, evaluate, or
verify claims about a *different, named* party (B), to help A decide
something about B. Neither regime cares how the service is labeled
(report, memo, advisory, consulting, fieldwork) — both use functional,
substance-over-form definitions that swallow reframing.

**Implication — screen out at discovery stage, do not wait for
validation:** any future candidate of the shape "customer A pays us to
check up on / verify / investigate / vet / audit someone or something A
doesn't own or control, so A can decide whether to hire/buy/rent/date/
lend-to/partner-with/invest-in it" is presumptively dead on regulatory
grounds before spending research time on demand or competition. The one
shape that reliably avoids it: a service performed ON THE CUSTOMER'S OWN
material/property, at the customer's own request, for the customer's own
use (see next entry for that shape's own, different failure mode).

---

## 2026-09-20 — Generic "manual audit of a customer's own material" services are already commoditized on Fiverr/Upwork, or carry an uninsurable liability gap

(Found on branch `claude/cool-bell-c46o51`.)

All 9 self-material audit candidates tested (accessibility, SEO,
GDPR/cookie compliance, security, CRO, data-quality, license-compliance,
email-deliverability) were already active, named, multi-seller commodity
gig categories on Fiverr/Upwork/Freelancer.com at $5-$100, years before
this project existed. The one candidate with genuine technical merit
(WCAG/accessibility audits) still failed on two independent grounds: (1)
a trust-less, credential-less solo entrant cannot out-compete 9+ existing
sub-$50 sellers on a purchase decision that is entirely about trust, and
(2) accessibility-audit liability is a documented standard E&O-insurance
exclusion — an uninsured solo operator has direct, uncapped exposure if a
client acts on a paid audit and gets sued.

**Implication:** before writing up any productized-service candidate,
search Fiverr/Upwork/Freelancer.com for the exact service description — a
mature multi-seller gig category there is disqualifying at the same stage
an existing GitHub clone would be for a software idea. Separately, always
check whether the specific claim being sold ("audit," "compliance check,"
"certification") carries a professional-liability/insurance angle — this
is a distinct check from the FCRA/GDPR one above.

---

## 2026-09-21/24 — Service-model moat is bimodal: a real trust moat takes too long to bootstrap at €0; anything fast enough to bootstrap at €0 has no moat and is already commoditized

(Converged independently on branches `claude/cool-bell-dqby62` and
`claude/cool-bell-9105ky`.)

Tested across 6 further service candidates (AI-content editing/fact-
checking, competitor-intel briefs, deprecation-migration services, plus
9105ky's own productized-service round): the failure mode was not
"cloned within weeks" (the software-model failure) but "already occupied
by agencies/incumbents with a year+ of accumulated trust, relationships,
or search ranking, or by cheap automated substitutes pricing at or below
where a solo manual operator needs to price to survive."

**The generalized rule, stated independently in near-identical words by
both branches:** a zero-reputation, zero-network, zero-capital solo AI
operator has no structural advantage over either (a) other AI agents
doing the same automatable research-and-clone loop, or (b) incumbents
(software or human) who already hold the trust/relationship/ranking
position a service business specifically depends on. Services with a
real moat (track record, credentials, relationships) take too long to
build at €0; services fast enough to start at €0 have no moat and get
commoditized (per the Fiverr entry above) or undercut by automation.

**Implication:** this points at needing either genuine speed (catching
something before anyone — human or AI — has had time to build trust or
clone it, per the fresh-trigger entry below) or a real, current,
owner-provided unfair advantage (an existing network, a credential, a
skill, a relationship, access to a dataset) that this project does not
currently have on record. This is the strongest reason so far to ask the
owner directly whether such an asset exists, rather than running another
generic-operator discovery round.

---

## 2026-09-25 — Fresh (<72h) triggers do not open a solo-builder window either, because the people most exposed to a trigger are also the fastest to respond to it

(Found on branch `claude/cool-bell-elqup8`.)

Tested against real triggers ~72h old (two major model launches). Found
8+ independent GitHub migration PRs and third-party explainers already
live within hours to ~24h — faster saturation than any older case tested
(including an EU regulatory deadline that took 7+ clones in 8 days).
Reason: for developer-facing triggers, the population most likely to
react fast (developers) is the same population most exposed to the
trigger, so there is no structural lag between "trigger breaks" and "an
AI-assisted response ships."

**Implication:** "watch for triggers within 24-72h" (a live standing
recommendation in this project's history) is not a safe-harbor timing
lever for developer/tech-adjacent triggers specifically — it may still
apply to slower-moving, less technically-fluent audiences, but that is
now an assumption to test, not a given.

---

## 2026-09-25 — The "underserved small customer, AI-assisted human does it cheaper" service pitch is now itself a crowded, well-capitalized VC category

(Found on branch `claude/cool-bell-elqup8`.)

3 of 4 service candidates tested (e-commerce support-inbox overflow,
nonprofit grant-writing, competitive-intelligence digest) died not to a
same-size solo racer but to well-funded, VC-backed vertical-AI products
already built and marketed **by name** at the exact underserved-small-
customer segment a solo operator would target (a major e-commerce
platform's built-in AI support agent already resolving 60-80% of the
relevant ticket types; a nonprofit-grant-writing SaaS marketed explicitly
at sub-$500K-budget nonprofits; a competitive-intelligence tool marketed
explicitly at the B2B teams too small for the category's enterprise
incumbents). These products predate this research — they were not races
lost, they were already there.

**Implication:** before assuming a small/underserved customer segment is
a safe niche for a solo service, check whether a VC-backed vertical-AI
product has already claimed that exact segment by name in its own
marketing — this is now as necessary a check as a GitHub-clone search or
a Fiverr-gig search. The corollary raised independently on branch
`claude/cool-bell-swg3nx` (13/13 strategies killed) is the one
un-exhausted lever this suggests: niches deliberately too small,
hyper-local, or physical-presence-dependent to be VC-attractive **and**
too idiosyncratic to be a generic Fiverr gig — untested as of this
writing.

---

## 2026-09-22 — Community-first is the one business-model axis whose failure mode is different: it is not clone-speed, commoditization, or regulatory risk, but whether the human owner will personally spend real time

(Found on branch `claude/cool-bell-rqjf12`.)

Of 8 community-niche candidates tested, 2 showed genuine, evidence-backed
gaps (see `research/2e-parents-community.md`, brought into this branch
2026-09-27). Unlike every prior candidate (software, content, service —
all killed by a mechanism the agent could in principle have out-executed
or out-priced given enough runway), a community's moat is real people who
trust each other, which the agent cannot manufacture by itself without it
becoming spam (forbidden under the HARD SAFETY BOUNDARY). This is the
first axis blocked purely on a resource the agent structurally does not
have — the owner's own weekly time — rather than on competitive or legal
risk.

**Implication:** community-model candidates should be evaluated on
evidence exactly like any other candidate, but the GO/NO-GO decision
itself cannot be made by the agent alone once a candidate clears
adversarial validation — it requires an explicit owner commitment of
personal time, surfaced as its own named decision (see `MEMORY.md`
"Operational issue" and the open owner-facing ask in GitHub issue #4).

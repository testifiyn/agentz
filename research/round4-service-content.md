# Round 4 — productized-service and content/community axes (2026-10-05)

Context: Rounds 1-3 (2026-09-19, see `MEMORY.md` and `ideas/candidates.md`)
tested 11 "build a software tool" strategies across general micro-SaaS,
regulated-profession B2B, recent trigger events, and engineering-effort-moat
niches. All 11 died, mostly to AI-assisted clones shipping within 1-3 weeks
of any publicized trigger. Two axes were explicitly flagged as untested:
(a) a productized micro-service, (b) a content/community model. This round
tests both, via one research pass (full search log at the end).

## Headwind check done before screening content ideas

Confirmed and sharper than assumed going in: Ahrefs (Feb 2026, 300k
keywords) found top-result CTR is 58% lower when an AI Overview shows, up
from 34.5% in 2025. Seer Interactive measured informational organic CTR
falling from 1.76% to 0.61% (-61%). A 2026 randomized study measured -39.8%
outbound clicks. Any content idea needs a reason for a human to click
through that an AI Overview can't substitute — otherwise it has no traffic
to build on regardless of ranking.

## (a) Productized service candidates — all KILL

1. **EAA accessibility audits for small EU e-commerce sites.** Real,
   enforced pain (Germany: ~50-100 fines in Q1 2026, mostly €5k-25k) but
   already a commodity: Fiverr already has multiple WCAG/EAA/ADA audit
   gigs from $499, plus overlay vendors (AudioEye, accessiBe) and agencies
   (216digital, thefrontkit). Micro-enterprises are legally exempt for
   services anyway — exactly the segment an unlicensed solo operator could
   otherwise reach. **KILL — commodity, no credibility edge.**
2. **CRA readiness docs (VDP/SECURITY.md/SBOM-in-CI/ENISA reporting
   runbook) for small software vendors.** Real fresh trigger (CRA
   reporting duties live 11 Sep 2026, fines up to €15M/2.5% turnover). But
   the most reachable segment (WordPress plugin vendors) is already served
   *for free*: Patchstack's mVDP was built with the EU for CRA and is
   already used by Elementor, WP Rocket, YITH, RankMath, ACF. OpenSSF
   publishes free CVD/SECURITY.md templates. Outside WP, TÜV Nord, Ebner
   Stolz, Heuking already sell this, and generic Fiverr GRC writers can
   pivot to CRA in a day. **KILL — buyers need a credible, accountable
   counterparty for compliance work, which an anonymous AI operator can't
   offer, and the easy segment is already free.**
3. **Done-for-you EU-marketplace listing localization.** Already a
   built-in feature of seller tooling sellers already use: easySales AI
   Translations, TranslateAI, Seller Labs, Sello, Mujo AI. **KILL — same
   AI-automation trap as the software-tool rounds: the service is already
   a feature, not a gap.**
4. **GitHub Actions CI-cost audit service.** The trigger mostly evaporated:
   GitHub cut hosted-runner prices up to 39% on 1 Jan 2026 and postponed
   the controversial self-hosted-runner fee on 15 Dec 2025. Specialists
   (WarpBuild, Blacksmith, Depot, RunsOn) already sell cheaper runners
   directly and publish their own migration content. **KILL — shrinking
   pain, already captured by specialists.**

## (b) Content/community candidates — all KILL

1. **AI model deprecation/retirement calendar** (live-changing data = best
   "reason to visit" pattern tested). Already 4+ trackers exist: The Model
   Graveyard, Vorp Labs' retirement calendar + monthly reports, the
   hidekazu-konishi.com lifecycle calendar, guptadeepak.com. **KILL — same
   clone pattern as Rounds 1-3, just in content form.**
2. **EAA enforcement tracker (fines by country).** Already covered by
   AVIXA's enforcement map widget, clym.io's fines-by-country page,
   testparty.ai's DE/FR case log, allaccessible.org, disabilityworld.org's
   first-year report — all free lead-gen for vendors who have an incentive
   to keep it current forever. **KILL.**
3. **Open-source funding/grant deadline tracker.** Already covered by
   NLnet's own funding-sources page, github.com/ralphtheninja/open-funding,
   fundsforngos.org. Audience (OSS maintainers) also has little ability to
   pay. **KILL.**

**Structural note for axis (b):** with no social, newsletter, or ad account
yet in existence, the only available distribution channel is organic
search — precisely the channel AI Overviews are cutting, and incumbents
already hold the rankings for every term tested. A tracker nobody arrives
at has nothing to compound.

## Cross-cutting findings (new structural knowledge, not just a repeat of the clone-speed finding)

1. **The capture window exists for services too — it's just filled by
   people and institutions instead of code.** For every trigger checked
   (EAA, CRA, GitHub pricing), by the time it's public there are already
   (i) Fiverr/Upwork gigs, (ii) a free resource from an incumbent or
   foundation (Patchstack, OpenSSF), and (iii) vendor content doubling as
   lead-gen. Same 1-3 week capture window as Rounds 1-3, different medium.
2. **For services specifically, the blocker is trust, not delivery
   capability.** The AI can produce the work. What buyers in
   compliance-adjacent niches pay for is a credible, accountable
   counterparty — reviews, a track record, someone to share liability. An
   anonymous new Fiverr/Upwork seller starts at zero reviews against
   established competitors on price, and compliance buyers specifically
   will not accept that trade-off.
3. **Payment rails still require the owner regardless of model.** Even
   €0-upfront platforms (Fiverr, Upwork) require the human owner to create
   the account and pass identity verification. This was already an
   expected gate at the AWAITING_BUILD_APPROVAL stage (see `MEMORY.md`
   §launch), not a new blocker, but it's now confirmed to bind even for
   the smallest service engagement, not just at monetization.

## One unvalidated lead surfaced, not yet tested

Paid maintenance/fix work on specific open-source projects with funded
issue bounties (e.g. via Algora, Opire). This is the one framing found
where the buyer is reachable on a platform where proof of work is public
(commit history on GitHub itself) rather than gated behind a reviews
system — potentially sidestepping the trust-deficit problem identified
above. **Not validated** — Algora and Opire already exist as the
aggregators, so the open question is whether an unestablished contributor
can realistically win funded bounties against established maintainers, not
whether the channel exists. Treat as a lead for a future round, not a
survivor.

## Searches run

EAA audit pricing/gigs on Fiverr/Upwork; EAA enforcement trackers/fines by
country; AI Overview CTR studies 2026 (Ahrefs, Seer Interactive, 2026 RCT);
GPSR/Etsy compliance services (also killed — responsible person must be an
EU legal entity); CRA Sept 2026 obligations and scope; CRA freelance gigs on
Fiverr; WordPress-plugin CRA scope; Patchstack mVDP; OpenSSF CVD templates;
AI-assisted marketplace-listing translation tools; GitHub Actions 2026
pricing changes; LLM/model deprecation trackers; OSS funding/grant
trackers.

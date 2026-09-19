# Adversarial validation: Lightweight scope-creep / change-order logger

Candidate B from `ideas/candidates.md` (Run 3) — designated fallback after
Candidate C (AI-slop search filter) was killed. A shareable link/form
where a freelancer logs an extra client request plus a proposed price, the
client clicks Approve/Decline with no login, and a timestamped record is
emailed to both sides. Static frontend + free-tier serverless function +
free-tier email API. Monetization: small fee per active project beyond a
free quota, or a one-time "Pro" unlock.

## Adversarial research pass (2026-09-19)

A dedicated adversarial research pass was run specifically to try to kill
this idea. Findings:

1. **Direct, near-identical competitor already live — kills the "no
   standalone tool exists" premise from discovery.** **StopScopeCreep.com**
   already does exactly this: "send change requests and get one-click
   approvals in 60 seconds," "tracks revision counts... creates a paper
   trail for every decision," explicitly "built for freelancers," free
   tier (1 project) + paid tier for unlimited projects/change requests/
   payment reminders. This is not bundled in a CRM — it's a standalone
   micro-tool with the same freemium structure this candidate proposed.
   The discovery pass's "no standalone tool found" finding was simply
   stale/incomplete, most likely because this is a 2026 launch that a
   same-session search missed.
2. **Two more 2026 entrants converged on the same pain independently.**
   **Scopey** (~$19/mo, AI quoting/scope platform integrating with
   Xero/ClickUp/Asana/Jira) and **ScopeShield** (AI Gmail add-on detecting
   scope creep in emails and drafting change-order replies, $20/mo, MVP
   launched Feb 2026) are more complex/higher-priced than the candidate's
   scope, but show 2-3 teams independently building in this exact niche
   within the same few months — a forming, not empty, space.
3. **An Indie Hackers validation post in the same niche found the unmet
   need is different from what's proposed.** The poster's own finding was
   that freelancers want ready-to-send change-order *wording/scripts*,
   not a new detection/approval interface — suggesting the real gap is
   confidence/language, not tooling.
4. **Distribution signal is weak/unproven.** No organic "is there a tool
   for this" threads with answers pointing to a specific product were
   found in r/freelance-style communities — unlike Candidate C, which had
   clear organic pull evidence (press coverage, social requests), this
   space shows generic scope-creep advice content but not active
   tool-seeking behavior.
5. **Friction stress-test: the tool likely adds friction rather than
   removing it.** Best-practice sources (Fiverr Workspace, freelancer
   guides) consistently frame handling scope creep as "send a quick
   custom offer / change-order message" inside the existing thread, not
   "generate a link via a separate tool." Context-switching to a new
   surface mid-conversation, at exactly the moment a freelancer wants to
   preserve rapport, cuts against adoption. This reinforces point 3 — the
   Indie Hackers validator's finding (people want scripts, not new
   surfaces) independently supports the same conclusion.
6. **Monetization has no confirmed traction evidence.** StopScopeCreep's
   free/paid split is the closest real-world test of willingness-to-pay,
   but no public MRR, reviews, or user-count data were found to confirm
   anyone is actually converting. Absence of evidence isn't proof of
   failure, but it's not proof of a viable paid tier either.
7. **Legal weight check: the tool documents disputes, it doesn't collect
   money.** A click-approval via email/web form does carry real legal
   weight under UETA/E-SIGN (clear offer, acceptance, price), so the
   "paper trail" isn't theater — but it doesn't solve the underlying pain
   (unbilled work). Freelancers already document informally via email and
   often still don't get paid; the missing piece is invoicing/collection
   enforcement, not proof of consent. The tool would address a symptom
   adjacent to the actual pain, not the pain itself.

## Ten-question check

1. **Why hasn't this been captured already?** It has — StopScopeCreep.com
   is a live, functionally near-identical standalone product, and two more
   teams (Scopey, ScopeShield) converged on adjacent versions of the same
   pain in the same few months of 2026.
2. **What prevents a competitor from copying us?** Nothing — the concept
   is simple enough that it's already been built at least three times
   independently in 2026.
3. **Why would someone switch from what they use now (informal email/
   Slack messages, or StopScopeCreep)?** No compelling answer found — if
   anything, the friction stress-test suggests people prefer staying in
   their existing thread, which favors doing nothing over adopting either
   this candidate or its closest competitor.
4. **Where do the first 100 users come from?** Unclear — no organic
   tool-seeking discussion found in the communities where this pain is
   discussed, unlike Candidate C's clearer distribution signal.
5. **Where do the first 1,000 come from?** No basis found.
6. **Who pays?** Unconfirmed — StopScopeCreep's existence is the only
   market test, and its actual conversion is unverified.
7. **Why would they pay vs. free alternatives (informal email, or
   StopScopeCreep's own free tier)?** No compelling differentiation
   identified.
8. **What can we offer that competitors cannot easily reproduce?**
   Nothing identified — this is now a three-way-converged niche with a
   working direct clone already live.
9. **Can we realistically acquire customers at €0?** No clear channel
   found.
10. **Is there real demand evidence?** The underlying pain (scope creep,
    unbilled work) is real and well-evidenced, but the evidence points to
    freelancers wanting better wording/confidence and invoicing
    enforcement, not a new approval-link surface — a mismatch between the
    demand evidence and what this candidate, as scoped, delivers.

## Agent Recommendation: KILL

The discovery-stage "no standalone tool exists" finding was wrong — a
near-identical, live, freemium competitor already exists, and two more
teams have converged on adjacent solutions to the same pain within the
last few months. Beyond the competitive problem, independent evidence
(an Indie Hackers validator's own finding, plus freelancer best-practice
guidance) suggests the proposed interaction model — a separate link/tool
instead of staying in the existing conversation thread — adds friction
rather than removing it, and that the tool would document disputes
without solving the actual underlying problem (getting paid). Not pursued.

## Owner Decision: N/A (KILL, not GO — no owner approval gate required)

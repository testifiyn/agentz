# LOG

Append-only. Newest entries at the bottom. Never edit or delete past entries.

---

## 2026-09-19T14:41:00Z (2026-09-19 17:41 Europe/Sofia) — Reset

**Phase at start:** IDEA_DISCOVERY (Run 3 had just closed out with 4 killed candidates)
**Phase at end:** IDEA_DISCOVERY (clean slate)

**What I did:**
- Owner explicitly requested (live chat instruction, not a scheduled-task firing): "start everything from the beginning ... delete them and start clean." Confirmed a clean git working tree before making any destructive change.
- Deleted all prior idea/research history: `research/*.md` (6 files: fake-review-trust-checker, trial-charge-preventer, ai-slop-search-filter, client-risk-screening, gmail-pixel-blocker, scope-creep-logger), all of `build/` (the dead TrueGrade MVP code from Run 1), and reset `ideas/candidates.md` and `ideas/decision.md` to empty/default templates.
- Rewrote `MEMORY.md` to a clean-slate state, noting the reset was intentional and owner-directed, and carrying forward (informally, not as a binding record) three high-level lessons from the deleted history for background awareness only.
- Reset this file (`LOG.md`) itself, per the same instruction — this entry is the first of the new history. (Prior GitHub issues #1 and #2, documenting the deleted runs' kill verdicts, were left untouched since the owner's instruction was about repo/idea state, not GitHub history — flagged to the owner separately in case they also want those closed.)

**What's next:**
- Proceed immediately to a fresh IDEA_DISCOVERY pass in the same session: generate new candidates from scratch, run adversarial validation, and continue the normal DISCOVER → RESEARCH → ADVERSARIAL VALIDATION → (owner approval gate) → BUILD pipeline.
- Commit and push this reset, then continue with fresh discovery work in the same run.

---

## 2026-09-19T14:59:17Z (2026-09-19 17:59 Europe/Sofia) — Post-reset discovery (same session as the reset)

**Phase at start:** IDEA_DISCOVERY (clean slate)
**Phase at end:** IDEA_DISCOVERY (11 strategies tried, all killed — recommendation written for owner's attention)

**What I did:**
- Owner sent a follow-up live message ("now success start again doing you job") confirming the reset and asking the pipeline to actually run, not just reset files. Proceeded with fresh discovery.
- **Round 1**: 3 parallel discovery agents (micro-SaaS, directory/comparison, browser-extension), ~29 niches tested. Zero strong survivors — every idea already captured by active 2026 competitors, or only a marginal candidate the discovery agent itself recommended against. Notable new finding: the Fakespot/fake-review-checker vacuum has now spawned 8+ near-identical AI-assisted clones. Committed and pushed.
- **Round 2**, redirected per the agents' own suggestions: (a) non-English-market regulated-profession B2B tools — 7 profession×country pairs, 0 survivors, because regulators/chambers or a peer practitioner already ship free tools whenever real compliance pain exists; (b) very-recent (<4mo) tech-industry trigger events — 4 tested, all saturated by clones within 2-12 weeks of the trigger date; (c) maintenance-labor-as-moat niches — found 1 real survivor, a "living" continuously-re-verified digital-nomad-visa tracker, picked as AGENT_PICK.
- Ran dedicated adversarial validation on the nomad-visa-tracker pick, specifically instructed to check a concern raised from this project's own institutional memory (a prior, now-deleted run had examined a similar concept and found close competitors). **Confirmed the concern**: at least 6 named competitors already display "last verified" dates, one two days more recent than the validation itself — the core differentiator was factually false as a market description. KILLED. Wrote `research/nomad-visa-tracker.md`. Committed and pushed.
- **Round 3**, redirected again per two of Round 2's agents' explicit suggestions: narrow cross-profession utilities tied to a <12-month regulatory/technical change requiring genuine engineering effort (not a thin wrapper) — tested EU Cyber Resilience Act vulnerability reporting, EUDR geolocation due-diligence, DAC8/CARF crypto tax reporting, EU/UK packaging-waste fees. Zero survivors — most notably, the CRA candidate had genuine engineering complexity and still got 7+ independent GitHub clones within ~8 days of its deadline going live, showing complexity only compresses the clone-saturation window (to ~1-2 weeks), not months.
- **Synthesized the full-day result**: 11 distinct discovery strategies tried across 3 rounds in one day, zero surviving candidates. Wrote a comprehensive structural-finding section into `MEMORY.md` rather than forcing a weak idea through to make token progress — the pattern (opportunity visibility → AI-assisted clone response) has compressed to single-digit weeks across every niche tested closely enough to check, including ones previously assumed safer (evergreen calculators, regulated-profession compliance, genuinely complex engineering responses). Wrote four concrete options for the owner's attention (time-based reaction to breaking triggers within 24-72h; a different business model — service/content/community, not another tool; an owner override via `ideas/decision.md`; deliberately accepting a marginal candidate) — framed as information for the owner's discretion, not a request for permission to continue, since the project's standing instruction is that research/idea/kill decisions don't need a stop-and-ask gate.
- Updated `ideas/candidates.md` with the full Round 3 detail and day summary.

**What's next:**
- Absent owner input, next run tries a fresh discovery round with new-day triggers rather than re-running today's already-exhausted strategies.
- Commit, push, and notify the owner — this is a significant structural finding (11/11 failed) worth surfacing, not just another kill verdict.

---

## 2026-09-20T06:10:00Z (scheduled run, no live owner input received) — Round 4: first survivor, blocked on legal risk

**Phase at start:** IDEA_DISCOVERY (prior day: 11/11 strategies killed)
**Phase at end:** IDEA_DISCOVERY (1 candidate promoted to adversarial validation, legal-risk question first — not GO, not KILL)

**What I did:**
- Loaded state per protocol (git pull/fetch, read MEMORY.md, LOG.md, ideas/candidates.md, ideas/decision.md — no owner override present). New day, no live user input since the last scheduled firing, so proceeded autonomously per the project's standing instruction that discovery/research/kill decisions don't need a stop-and-ask gate.
- Deliberately targeted the two untested business-model axes the prior day's own recommendation had flagged (content/community model; productized-service model), specifically because both structurally avoid the "clonable software artifact" shape that killed all 11 prior strategies. Ran two parallel research agents, each required to explicitly reason about clone-resistance and to report zero survivors honestly if that's what the evidence showed.
- Also fixed a minor repo-hygiene issue: added `.gitignore` for `.claude/worktrees/`, local git-worktree infrastructure the Agent tool creates for background agents, which a stop-hook flagged as untracked (not project content, correctly excluded rather than committed).
- **Content/community agent**: 9 professional/hobbyist niches tested, 0 survivors. New structural finding distinct from the clone-speed problem: every niche already has a long-established expert newsletter, a large trade association delivering the same curation as a membership benefit, or a vendor content-marketing swarm with no pressure to monetize — a compressed-to-*years* incumbency problem, not compressed-to-weeks.
- **Productized-service agent**: 9 candidates tested, 8 killed at discovery stage (saturated markets, or structural blockers like PI-licensing requirements or ethics-rule bans on contingency fees). 1 survivor: a manual candidate-identity/fraud-vetting concierge for small startups hiring remote workers, addressing the evidenced 2026 DPRK-fake-employee fraud wave (DOJ indictments, Fortune reporting, Gartner projections). First candidate across 4 rounds whose clone-resistance argument survived adversarial pressure — but the agent itself flagged a serious, unresolved U.S. FCRA consumer-reporting-agency liability risk that could be fatal, and recommended resolving that before any other validation work.
- Wrote up both axes' full findings in `ideas/candidates.md` and rewrote `MEMORY.md`'s status section to reflect the survivor and its blocking risk, per the HARD SAFETY BOUNDARY against creating uncontrolled legal/financial liability for the owner.

**What's next:**
- Dedicated legal-risk research pass on the surviving candidate: does this service design actually trigger FCRA "consumer reporting agency" status; is there a redesign (e.g., non-employment business-partner/vendor trust verification, or a scope limited to identity/consistency facts rather than a hire/no-hire risk judgment) that avoids CRA status without destroying the evidenced demand; are there equivalent EU/UK data-protection blockers for non-US customers. This determines GO/KILL — not distribution or demand, which look comparatively solid per the research agent.
- Commit, push. No owner notification yet — will notify once the legal-risk question resolves to either a validated GO candidate or a kill, since a mid-validation status update isn't yet a decision worth interrupting the owner for.

---

## 2026-09-20T06:30:00Z (same scheduled run, continued) — Legal-risk validation kills the survivor; lessons recorded; Round 5 direction set

**Phase at start:** IDEA_DISCOVERY (1 candidate in dedicated legal-risk validation)
**Phase at end:** IDEA_DISCOVERY (0 candidates surviving; 20/20 strategies across 4 rounds now dead; specific Round 5 direction recorded)

**What I did:**
- Ran a dedicated adversarial legal-risk research agent against the sole surviving candidate (candidate-fraud-vetting concierge for startups), instructed specifically to resolve — with real research, not priors — whether the service triggers U.S. FCRA "Consumer Reporting Agency" status, whether any redesign avoids it without gutting the evidenced demand, and whether GDPR creates independent exposure.
- **Result: KILL, confirmed rigorously.** 15 U.S.C. §1681a's functional (not label-based) CRA definition, the FTC's 1999 Vail advisory opinion (an outside investigator was ruled a CRA even for fact-finding; Congress had to carve out a narrow exception at §1681a(y) for misconduct investigations specifically, not general hiring vetting), and the CFPB's Nov 2024 Circular 2024-06 (addressing this exact fact pattern) all converged on the same answer. No "verification not evaluation" or "advisory to founder not report on candidate" reframe survives this precedent. A compliant version needs legal counsel/insurance/dispute infrastructure this €0 project doesn't have; a non-CRA version guts the demand. GDPR adds independent exposure for any EU/UK candidate in a global remote-hiring pool.
- Updated `ideas/candidates.md` with the full kill rationale, closing out Round 4.
- Created `LESSONS.md` (new file, per the project's standing instruction to persist reusable knowledge from every meaningful failure) recording two generalized, reusable findings from this round: (1) any paid third-party investigation/evaluation of a *named individual* sold to someone else for a decision about that person is presumptively FCRA/GDPR-blocked regardless of framing — this rules out, by the same logic without re-testing, tenant screening, contractor vetting, dating-safety checks, and similar person-investigation-for-hire ideas; (2) content/curation niches are overwhelmingly pre-owned by an established expert newsletter, a large trade association, or a vendor content-marketing swarm — a compressed-to-years incumbency problem distinct from the compressed-to-weeks clone problem.
- Rewrote `MEMORY.md`'s status section: 20/20 strategies across 4 rounds now dead, phase remains IDEA_DISCOVERY, and wrote a specific (not vague) Round 5 direction: test done-for-you technical/analytical work-product services where the customer investigates their *own* material (documents, code, business data/processes) rather than a third party's, preserving the human-judgment-as-moat theory while structurally avoiding the consumer-report trigger since the report's subject is the customer's own material, not a person.
- Notified the owner via push notification given this round produced two new reusable lessons and the first-ever near-miss candidate, not just another routine kill.

**What's next:**
- Round 5: test the specific redirected axis above (self-investigation / own-material technical-service candidates), continuing to screen out all three now-dead patterns (software-clone-speed, content-incumbency, person-investigation/FCRA) before spending research time on any candidate.
- Commit, push.
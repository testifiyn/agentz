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

## 2026-09-27T~06:20Z — Scheduled run: found and fixed a 7-way branch-fragmentation problem instead of adding an 8th duplicate discovery round

**Phase at start:** IDEA_DISCOVERY (this branch's own local view: 11/11 dead, per the entry above)
**Phase at end:** IDEA_DISCOVERY (unchanged phase, but state now reflects the true combined project history, not just this branch's slice of it)

**What I did:**
- Per the standing repo-memory protocol (`git pull`, read `MEMORY.md`,
  `LOG.md`, etc.), fetched all remote branches before starting work and
  found 7 `claude/cool-bell-*` branches (including this one) all forked
  from the same commit (`d2459cc`), with `origin/main` also stuck at that
  same commit. The other 6 branches had each independently run 1-3 more
  discovery rounds since 2026-09-20, entirely unaware of each other,
  none merged back. This meant continuing this run's own thread (a 12th,
  13th, ... discovery round) would have been duplicated effort layered on
  top of duplicated effort already found in 6 other places.
- Read each of the other 6 branches' `MEMORY.md` (and, for the two most
  substantive, their full research/lessons output) to extract every
  distinct finding: `c46o51` (37/37 dead, a named master legal-risk
  pattern for "investigate B for A" services, a Fiverr-commoditization
  pattern), `dqby62` (14/14 dead, "service moat is bimodal" finding),
  `elqup8` (14/14 dead, fresh-trigger clone-speed sharpened to hours,
  VC-backed vertical-AI already occupying the "cheap AI service for
  underserved small customer" niche), `9105ky` (12/12 dead, same
  bimodal-moat finding independently, plus the first "does the owner have
  an unfair advantage" suggestion), `rqjf12` (the one branch with a real
  survivor — a 2e-parents-community hub — paused on an explicit,
  still-unanswered owner ask filed as GitHub issue #4 on 2026-09-22), and
  `swg3nx` (13/13 dead, independently proposing the same
  "deliberately-too-small-for-VC" untested lever `elqup8` also flagged).
- Consolidated all of this into this branch: created `LESSONS.md` (did
  not exist here before) with 6 dated master-pattern entries covering
  every distinct kill mechanism found across all branches; rewrote
  `MEMORY.md` to the formal state-header format with an explicit
  "Operational issue" section documenting the branch fragmentation itself
  as a finding in its own right; added a consolidated-update section to
  `ideas/candidates.md`; copied `research/2e-parents-community.md` (the
  one live, un-duplicated candidate) into this branch so it isn't
  stranded on a branch that may never get read again.
- Did **not** launch a new discovery round this run. With ~45+
  independently-run strategies across 4 business-model axes already
  converging on well-evidenced structural conclusions (see `LESSONS.md`),
  and one real survivor already sitting on a 5-day-unanswered owner
  question, spending this run's budget on a redundant Nth round would
  have been exactly the "activity instead of progress" failure mode this
  project's own operating principles warn against.
- Posted a consolidated update to GitHub issue #4 (still open, exactly on
  point): the combined evidence, a restatement of the original
  time-commitment ask (now 5 days unanswered), the new
  unfair-advantage question, and a plain description of the branch-
  fragmentation problem so the owner (or whoever manages this project's
  scheduling) can decide whether to merge branches / change how scheduled
  runs are seeded. Did not open a new issue or comment elsewhere, to
  avoid notification noise on top of an already-relevant open thread.
- Could not merge the other 6 branches into `main` or into this branch
  via git, and did not open a pull request: this run's remit is limited
  to developing on and pushing to `claude/cool-bell-aq8r7q` only, and
  standing instruction is not to open a PR unless asked. This is
  explicitly flagged as owner-actionable in `MEMORY.md` and the issue
  update, not silently worked around.

**Evidence discovered:** none new (no fresh research this run) — this run's
contribution was consolidating already-real evidence that was scattered
and at risk of being lost or redundantly re-derived.

**Decision:** do not kill or promote the 2e-parents-community candidate;
leave it exactly where the branch that found it left it (AWAITING OWNER
INPUT), now with the additional context that it is the single survivor
out of everything tried since the reset.

**Files changed:** `LESSONS.md` (new), `MEMORY.md`, `ideas/candidates.md`,
`research/2e-parents-community.md` (new, copied), `LOG.md` (this entry).

**Primary bottleneck:** an owner decision (time commitment on issue #4),
not idea discovery.

**Next highest-value action:** get the owner's answer on issue #4 (and
ideally the unfair-advantage question in the same reply). If no response
by the next run, test the one genuinely untested lever (deliberately
small/hyper-local/physical-presence niches, per `ideas/candidates.md`)
rather than repeating any of the 4 now-exhausted axes.

**Owner action required:** yes — see issue #4 update and `MEMORY.md`.

**Notification status:** posted a GitHub issue comment (#4); sent a push
notification given this is a 5-day-old pending decision plus a
newly-found operational problem affecting how the whole project runs.

---

## 2026-09-28 (scheduled run, branch `claude/cool-bell-pzbxpp`)

**Phase at start:** IDEA_DISCOVERY, PORTFOLIO_MODE (1 live candidate,
awaiting owner decision — unchanged coming in)
**Phase at end:** same — no candidate promoted, killed, or newly
discovered this run; owner decision still pending

**What I did:**
- Loaded state per protocol: found this run's assigned branch
  (`claude/cool-bell-pzbxpp`) was itself one of the 7 stale/diverged
  branches flagged in the 2026-09-27 entry above — its tip was still at
  the pre-fragmentation commit. Confirmed via `git merge-base
  --is-ancestor` that `claude/cool-bell-aq8r7q`'s consolidated commit is
  a direct descendant, and fast-forward-merged onto it (lossless, no
  rewrite) rather than re-running discovery from stale state or forking
  yet another disconnected line of work.
- Checked GitHub issues #1-#4 for any owner reply since the 2026-09-27
  update: none. Issue #4's time-commitment question remains unanswered
  6 days on. Given it had already been asked twice (issue body +
  2026-09-27 comment) with zero new information, judged that a third
  identical re-ask today would be flooding, not progress — so did not
  just repeat it.
- Instead, spent this run's effort making the actual ask cheaper to
  answer and re-verifying two of the candidate's three flagged "fatal
  assumptions" (`research/2e-parents-community.md` fatal-assumptions
  list):
  - Re-confirmed (fresh search) no dedicated 2e-specific subreddit or
    larger consolidated free hub exists beyond what was already known —
    assumption #2 holds.
  - Re-checked assumption #3 (Haystack pricing/size, cited as
    willingness-to-pay evidence) and found it was **misattributed**:
    Haystack ($47/mo) is a community for 2e *adults*, not parents of 2e
    kids. Corrected this in the research file per the project's Truth
    Hierarchy discipline rather than letting a wrong data point stand —
    this is a real weakening of the monetization evidence, not a
    cosmetic fix. The underlying fragmentation/demand evidence (6+
    Facebook groups, no consolidated hub) is unaffected.
  - Designed a bounded, four-week, ~1.5-hrs/week "Listening Sprint"
    pilot with explicit numeric go/no-go criteria, as a lower-commitment
    alternative to the original open-ended "~3-5 hrs/week indefinitely"
    ask — same underlying question (will the owner spend personal time
    on this) but a much smaller, time-boxed, easier decision to make one
    way or the other.
- Did NOT launch a new discovery round on the exhausted software/
  content/generic-service/investigate-B-for-A axes: per the Discovery
  Reopening Rule, one live, non-killed candidate already exists, so
  reopening discovery now would be exactly the "novelty over focus"
  anti-pattern the project is built to avoid, not genuine progress.
- Posted one updated GitHub comment on issue #4 with the evidence
  correction and the pilot proposal (not a repeat of the same
  open-ended question — genuinely new, actionable content).

**Evidence discovered:** the Haystack willingness-to-pay data point does
not apply to this candidate's actual customer segment (parents, not 2e
adults) — a real correction, recorded in the research file rather than
silently dropped.

**Decision:** candidate status unchanged (AWAITING OWNER INPUT, not
killed, not promoted) — but the form of the ask changed from an
open-ended commitment to a bounded, measurable pilot, to make a genuine
owner answer more likely.

**Files changed:** `research/2e-parents-community.md`, `MEMORY.md`,
`LOG.md` (this entry). Branch `claude/cool-bell-pzbxpp` fast-forwarded to
include `LESSONS.md` and `ideas/candidates.md` from the 2026-09-27
consolidation.

**Primary bottleneck:** unchanged — an owner decision, not idea
discovery. Also: the wider branch-fragmentation problem (`main` and the
other branches besides `aq8r7q`/`pzbxpp` are still stale) is only
partially fixed and needs the owner's attention to fix at the scheduling
level.

**Next highest-value action:** get the owner's answer on the now-cheaper
pilot ask. If still no response after a further reasonable interval, the
next-best independent action (not requiring owner time) is testing the
one genuinely untested discovery lever — deliberately hyper-local/
physical-presence niches too small for VC-backed vertical AI and too
idiosyncratic for Fiverr (see `ideas/candidates.md`) — rather than
re-testing any of the four already-exhausted axes.

**Owner action required:** yes — same underlying question as before
(issue #4), now in cheaper/bounded form; plus the unfair-advantage
question; plus whether to address branch fragmentation at the scheduling
level.

**Notification status:** posted one GitHub issue comment (#4, substantive
new content: evidence correction + pilot proposal, not a repeat). Did not
send a separate push notification — no milestone crossed (candidate
neither killed nor promoted, no payment/customer event), and the owner
already has an unanswered open question; a notification without new
decision-relevant information would be noise.

---

## 2026-09-30T06:20:00Z — Scheduled run: second consolidation pass, one more missed branch found

**Phase at start:** IDEA_DISCOVERY, this session's assigned branch
(`claude/cool-bell-1k9wht`) still stale at the pre-fragmentation commit
(`d2459cc`) — one of the two branches (main being the other) that had
*not* yet received the 2026-09-27/28 consolidation.
**Phase at end:** IDEA_DISCOVERY, blocked on owner decisions (unchanged
phase, more complete record).

**What I did:**
- Loaded state per standing procedure: checked GitHub issue #4 (the
  standing owner-facing ask) first, found it still open/unanswered, and
  found it references files (`LESSONS.md`, `research/2e-parents-
  community.md`) that did not exist on this branch — this branch was
  stale relative to the project's actual state.
- Found 9 `claude/cool-bell-*` sibling branches (not 7, as the last
  consolidation recorded) plus `main`, all still forked from the same
  `d2459cc` commit except two (`pzbxpp`, `aq8r7q`) that had already
  self-consolidated the other six. Fast-forward-merged `pzbxpp`
  (`9f98c44`) onto this branch — a clean, lossless fast-forward, not a
  rewrite, since this branch had no unique commits of its own.
- Checked the remaining 8 sibling branches individually against the
  now-current state for anything not already folded in. 7 were fully
  covered (their unique commits already generalized into `LESSONS.md`,
  or reached "0 survivors" via already-recorded mechanisms). One,
  `claude/cool-bell-v767rb`, was missed by the prior consolidation
  (which said "six other branches," and v767rb was a seventh/eighth not
  included) and contained two things recorded nowhere else in this repo:
  a second parked candidate (indie-perfumer IFRA/EU compliance
  newsletter, `research/perfumer-compliance-newsletter.md`) and a
  genuinely new, universal structural finding — this project has never
  established a business name/brand, operating email, or payment/
  publishing account, which will block *any* candidate at `LAUNCH_PREP`,
  not just this one.
- Folded both into `MEMORY.md`, `LESSONS.md`, and `ideas/candidates.md`,
  and copied the research file over. Did not re-litigate or re-run any
  of the 50+ already-exhausted discovery strategies — per the Discovery
  Reopening Rule, two live (non-killed) candidates already exist, which
  is a reason to get owner answers, not to search for a third.
- Posted one consolidated comment to GitHub issue #4: did not repeat the
  two already-open questions verbatim, but named all three currently
  open owner decisions together (2e-parents pilot, unfair-advantage,
  and the new identity/account-setup question) now that they can be
  answered as one batch, and noted the branch-count correction (9, not
  7) for the still-unresolved scheduling/fragmentation issue.

**Evidence discovered:** no new market/competitor evidence this run —
the substantive addition is operational (a missed branch, now folded in)
and one genuinely new structural finding (the identity/account-setup
gap) carried over from that branch's own research, not newly generated.

**Decision:** continue holding at IDEA_DISCOVERY / PORTFOLIO_MODE,
awaiting owner input. Did not launch new discovery — nothing in this
run's findings changes the standing conclusion that further generic
discovery is unlikely to be productive, and two strong, non-killed
candidates already exist and don't need a third to justify focus.

**Files changed:** `MEMORY.md`, `LESSONS.md`, `ideas/candidates.md`,
new `research/perfumer-compliance-newsletter.md`, this file.

**Primary bottleneck:** unchanged — owner decision, not research.

**Next highest-value action:** get the owner's answer on any of the
three open questions on issue #4. If a further reasonable interval
passes with no response, the next-best independent action (not
requiring owner time) is testing the one genuinely untested discovery
lever — hyper-local/physical-presence niches too small for VC-backed
vertical AI and too idiosyncratic for Fiverr — rather than re-testing
any of the four already-exhausted axes, or re-pinging a fourth time on
the same unanswered questions.

**Owner action required:** yes — three questions, all on issue #4: (1)
the bounded 2e-parents pilot, (2) the unfair-advantage question, (3) NEW:
business identity/account-setup approval. Also still open: the
branch-fragmentation scheduling fix, or approval for a PR merging this
consolidated branch to `main`.

**Notification status:** posted one GitHub issue comment (#4) — genuinely
new content (a previously-unreported branch and finding), not a repeat of
an unanswered question. Did not send a separate push notification: no
milestone crossed, and the owner already has open, unanswered questions
on record — a notification would add noise without new urgency.
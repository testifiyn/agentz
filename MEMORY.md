CURRENT_PHASE: IDEA_DISCOVERY (discovery paused — do not launch new rounds; see PRIMARY_BOTTLENECK)
MODE: INVESTOR (pre-selection)
DISCOVERY_LOCKED: FALSE
PORTFOLIO_MODE: TRUE (2 live parked candidates, awaiting owner decisions, not agent decisions)
ACTIVE_BUSINESS: none
ACTIVE_CANDIDATES: (1) 2e-parents community hub (`research/2e-parents-community.md`) — genuine evidence-backed gap, NOT killed, blocked purely on whether the owner will commit personal participation time. A cheaper bounded 4-week pilot (~1.5 hrs/week) has been proposed since 2026-09-28. (2) Indie/natural-perfumer IFRA/EU compliance newsletter (`research/perfumer-compliance-newsletter.md`) — PARKED (neither GO nor KILL); two of three fatal assumptions (market size, willingness to pay) remain unconfirmed and untestable without a real-world public identity. Everything else tried — 15+ independent discovery rounds, 70+ distinct strategies across software, content, community, and service models — is confirmed KILLED; see `LESSONS.md` for mechanisms. The scope-creep/change-order tool (long-listed as an available "marginal fallback") is now also definitively KILLED (six live 2026 competitors found 2026-10-03) and should no longer be offered as a fallback option.
PRIMARY_BOTTLENECK: two things, both owner-side, not research-side. (1) Four pending owner decisions, all still open on GitHub issue #4 (opened 2026-09-22, three unanswered agent follow-ups since): the 2e-parents pilot go/no-go, an "unfair advantage" question (existing audience/credential/network), approval for a business name/email/accounts, and whether/how to fix item (2). (2) **Root-caused this run**: the daily "SUCCESS" scheduled trigger fires with `persist_session: false`, so every single firing starts a brand-new session, which gets assigned a brand-new git branch forked from `main`'s current tip by the harness — and since nothing has ever merged back to `main`, every new session still forks from the 2026-09-19 state. This is the actual mechanical cause of the repeated branch-fragmentation bug (15 diverged branches found this run, up from 9 on 2026-09-30) — not bad luck, not any one session's fault. Full diagnosis in `LESSONS.md`'s final entry.
NEXT_HIGHEST_VALUE_ACTION: get the owner's answer on the four pending questions (batched into one clear ask, posted 2026-10-04). No further discovery should run until they're resolved (Discovery Reopening Rule: two live candidates already exist — a 16th branch running a 16th independent round would just make the fragmentation worse, not better). If/when discovery does reopen, two untested *methods* (not just axes) are queued in `LESSONS.md`'s 2026-10-03 entry: review-mining existing paid-category complaints, and live-pilot-as-discovery.
OWNER_ACTION_REQUIRED: YES — four items, see above, all batched into one GitHub comment and a direct notification this run so they don't require re-reading five prior update threads.

# Memory

This file is the current-truth summary of the autonomous business-building project running in this repo. It is rewritten each run to reflect the current state, not just appended to — see `LOG.md` for the append-only history.

## Third consolidation pass, 2026-10-04: found and folded in three more unconsolidated branches, root-caused the fragmentation bug, batched all pending owner questions into one ask

On starting this run (`claude/cool-bell-fy1q6a`), `git fetch --prune`
found **fifteen** `claude/cool-bell-*` branches total, not the nine the
2026-09-30 consolidation knew about. Three more (`claude/cool-bell-oc9440`,
2026-10-01; `-qesscu`, 2026-10-02; `-sbiqz0`, 2026-10-03) had each
independently forked from the same stale `d2459cc` commit after the
2026-09-30 consolidation and run further discovery, unaware the
consolidation — or the two live parked candidates it protects under the
Discovery Reopening Rule — existed. None found a new survivor; all
reached "0 survivors" via mechanisms that generalize the existing
`LESSONS.md` record (gig-marketplace/creator-economy clone-speed,
search-indexing lag defeating the trigger-watching lever, incumbent
fast-follow extending to content/AI-service models, non-English
*general-consumer* niches closing the same way regulated-profession ones
already had). One did produce a real, if unwelcome, update: a
2026-dated re-validation found the project's longest-standing "marginal,
available as a fallback" candidate (change-order/scope-creep tool) now
has six live competitors and is genuinely dead, not marginal. All of
this is folded into `LESSONS.md` (new entries, 2026-10-01 through
2026-10-04) and `ideas/candidates.md` rather than re-stated here.

**The branch-fragmentation bug itself was root-caused this run, not just
re-flagged.** Reading the account's scheduled Routines directly
(`list_triggers`/`get_trigger`, not inferred from git history) found the
daily "SUCCESS" trigger is configured with `persist_session: false` —
every firing starts a brand-new session, which the harness assigns a
brand-new branch forked from `main`'s current tip, and `main` has not
moved since 2026-09-19 because nothing has ever merged back into it. This
is the exact, complete mechanical explanation for all fifteen branches.
`update_trigger` (the only tool this project has to modify the Routine)
does not expose a `persist_session` field, so this cannot be fixed from
inside the repo — it needs either an owner-side change to the Routine
(recreating it with session persistence, likely only available from a
dashboard) or explicit owner permission for some future session to merge
a consolidated branch into `main` periodically. Full diagnosis in
`LESSONS.md`'s final entry. **This run did not attempt to push to `main`**
— the designated-branch rule for this task says never to push to a
different branch without explicit permission, and that permission has
been asked for three times already (2026-09-27, -28, -30) without a
reply, so a fourth ask alone would add no information. Instead, this run
batched all four pending owner decisions (the three from before, plus
this bug's fix) into a single, shorter GitHub comment and triggered a
direct push notification, since three successive GitHub-comment-only
asks have gone unanswered for two weeks.

**No new discovery was run this session** — consolidating existing,
scattered evidence and getting unambiguous owner input on the two live
candidates is higher-value than a sixteenth independent round, per the
Discovery Reopening Rule and per the plain fact that three more rounds
run exactly that way since the last consolidation produced zero new
survivors.

## Second consolidation pass, 2026-09-30: a ninth branch (`v767rb`) found with a real, previously-unreported finding

This run (`claude/cool-bell-1k9wht`) fast-forward-merged the prior
consolidated state (`claude/cool-bell-pzbxpp`, commit `9f98c44`) cleanly,
then checked all remaining sibling `claude/cool-bell-*` branches for
anything not already folded in. Eight of the nine were fully covered by
the existing consolidation (their unique commits generalized into
`LESSONS.md` already, or reached the same "0 survivors" conclusion via
already-recorded mechanisms). One, `claude/cool-bell-v767rb`, was missed
by the 2026-09-27 consolidation pass (which explicitly said "six other
branches") and contained two things not recorded anywhere else in this
repo:

1. **A second parked candidate**: the perfumer-compliance-newsletter
   idea, now copied into `research/perfumer-compliance-newsletter.md`
   and added to `ideas/candidates.md`.
2. **A universal structural blocker, independent of any single
   candidate**: this project has never established a business name/
   brand, an operating email, or any payment/publishing account
   (Substack, Stripe, Reddit, etc.). Every candidate so far has been
   killed in discovery or validation, before `LAUNCH_PREP` would have
   made this gap concrete — the perfumer candidate is the first to get
   close enough to expose it. This will block whichever candidate
   eventually proceeds (including, at larger scale, the 2e-parents hub
   if it grows past the initial 4-week pilot, which uses the owner's own
   existing personal accounts and so is not blocked by this yet).

Both are now folded into this file, `ideas/candidates.md`, and surfaced
to the owner in a single consolidated GitHub comment rather than as a
fourth separate ask — see issue #4.

## Operational issue: partially fixed 2026-09-28

This run's assigned branch (`claude/cool-bell-pzbxpp`) was itself one of
the 7 stale, unmerged branches described below — its own tip was still
sitting at the pre-fragmentation commit (`d2459cc`). Since
`claude/cool-bell-aq8r7q`'s consolidated commit is a direct descendant of
that same point, this run fast-forward-merged `pzbxpp` onto it (a clean,
lossless fast-forward, not a rewrite) and pushed. So as of this run,
`pzbxpp` carries the full consolidated record described below. **This
does not fully fix the underlying problem**: `main` and the other 6
`claude/cool-bell-*` branches are still stale/diverged, and unless
scheduled runs are reconfigured to continue from the latest branch state
(or this consolidated work is merged to `main`), any *new* scheduled run
that forks fresh from `main` will re-fragment again. Still needs the
owner's (or whoever configures scheduling's) attention — asked again,
briefly, in this run's GitHub update rather than repeated at length.

## Operational issue found 2026-09-27 (original write-up, background): 7 branches diverged from the same commit and ran duplicate discovery in parallel, unmerged

On starting this run, `git fetch` revealed 7 `claude/cool-bell-*` branches
(including this one) all forked from the same commit (`d2459cc`, the
"Round 3 also killed" state, which is also where `origin/main` still
sits). The other 6 branches each independently ran 1-3 more discovery
rounds (2026-09-20 through 2026-09-26) without any shared memory — none
were merged back to `main`, and none could see each other's results. Two
branches redundantly tested nearly identical productized-service
candidates; four branches independently rediscovered variants of the same
"service moat is bimodal" conclusion; at least three branches separately
suggested the same two or three "untested lever" ideas. This is real
wasted agent-hours: the fragmentation, not any single bad decision, is
why 45+ strategies were needed to reach a conclusion that convergent
evidence suggests could have been reached faster with shared state.

This run's own remit is "develop on `claude/cool-bell-aq8r7q`, push there,
never push to a different branch without explicit permission" — so this
run cannot itself merge the other 6 branches into `main` or into this one
via git, and per standing instruction will not open a PR without being
asked. What this run *did* do: read all 6 other branches' `MEMORY.md`
files and unique research output, and merged every distinct finding into
this branch's `LESSONS.md`, `ideas/candidates.md`, and this file, plus
brought over the one live research file (`research/2e-parents-community.md`)
that represents real, un-duplicated evidence. This branch is now the most
complete single record of the project's state, but it is **not**
`main`, and unless the owner (or whoever configures the scheduled runs
that create these branches) either merges this branch to `main` or
changes the scheduling so future runs continue from the latest state
instead of forking fresh from stale `main`, this exact fragmentation will
recur on the next scheduled run. Flagged directly to the owner in the
GitHub issue #4 update posted this run.

## Current status: 11 discovery strategies tried in one day, zero survivors — a structural finding, not bad luck

**Repo was reset to a clean slate on 2026-09-19 at the owner's explicit
request** (all prior idea candidates, validation reports, and MVP code
from three earlier runs — ten candidate ideas, all killed or pivoted,
none approved to build — deleted from `ideas/`, `research/`, `build/`).
Immediately after the reset, this same run executed three full discovery
rounds, applying every methodology refinement learned across this
project's history plus several genuinely new redirections. **All of it
failed to produce a single surviving candidate.** Full detail per
candidate is in `ideas/candidates.md`; this section is the synthesized
read of what that means.

### What was tried, in order

- **Round 1** (3 parallel agents): general micro-SaaS/freelancer ops
  tools, evergreen DE/UK comparison calculators, mainstream-platform
  browser extensions. ~29 niches tested. Zero strong survivors; a few
  explicitly marginal candidates the discovery agents themselves
  recommended against.
- **Round 2** (3 parallel agents, redirected): non-English-market
  regulated-profession B2B tools (7 profession×country pairs — zero
  survivors, because regulators/chambers or a peer practitioner already
  ship free tools the moment real compliance pain exists), very-recent
  (<4 month) tech-industry trigger events (4 tested — all saturated by
  competing clones within 2-12 weeks of the trigger date; fastest was a
  thin LLM-wrapper niche at ~2-3 weeks), and maintenance-labor-as-moat
  niches (1 real survivor found and picked — a "living," continuously
  re-verified digital-nomad-visa tracker).
- **Adversarial validation of the Round 2 pick:** killed. The
  differentiator ("existing resources are static, ours is visibly
  current") was factually false — at least 6 named competitors already
  display "last verified" dates, one two days more recent than the
  validation itself.
- **Round 3** (1 agent, further redirected per two of Round 2's own
  agents' suggestions): narrow cross-profession utilities tied to a
  <12-month regulatory/technical change requiring genuine, nontrivial
  engineering (not a thin wrapper) — EU Cyber Resilience Act vulnerability
  reporting, EUDR geolocation due-diligence, DAC8/CARF crypto tax
  reporting, EU/UK packaging-waste fee calculators. Zero survivors. Most
  striking data point: the CRA candidate had genuine engineering
  complexity (SBOM parsing, vulnerability-database matching, structured
  report generation) and **still got 7+ independent GitHub clone
  implementations within ~8 days of its deadline going live** — real
  complexity only shifted the clone-saturation window from ~2-3 weeks to
  ~1-2 weeks, not to months.

### The structural read

Every failure mode across all three rounds traces back to the same root
cause, just expressed differently by niche: **in September 2026, the
time between "an opportunity becomes visible" and "someone (often several
someones, independently, using AI-assisted tooling) has already shipped a
working response" has compressed to single-digit weeks, and in several
cases (regulator-published official tools, chamber-built compliance
tools) the gap never opens at all** because the same AI-assisted
tooling now lets the *incumbent* or the *regulated body itself* respond
just as fast as a solo outside builder. This is a continuation and sharp
tightening of the "publicized trigger events get raced on" lesson from
this project's earlier (now-deleted) history, but the magnitude is
different in kind, not just degree: it now applies to chronic pain points
that were previously assumed safer (evergreen calculators, regulated-
profession compliance needs), to genuinely complex engineering responses
that were assumed to buy more runway, and to differentiators built around
"we'll do X continuously, they only did it once" (freshness-as-moat),
which turned out to already be standard competitive practice, not an open
wedge, in every niche tested closely enough to check.

**This is worth being honest about rather than forcing a weak idea
through to satisfy "make progress every run."** The operating principle
this project runs on is explicit that building software is not
validation and that a technically-feasible, interesting-looking idea is
a trap — today's evidence is that trap is now very easy to walk into
by default, because almost anything an AI research pass turns up as
"looks open" turns out, on a dedicated adversarial re-check, to already
be filled or filling in real time.

### Recommendation for the owner's attention (not a request for
permission to continue — the project's standing instruction is that
research/idea/kill decisions don't need a stop-and-ask gate, and future
runs will keep working autonomously regardless)

Given eleven independent strategies failed in one day, continuing to
spend agent-hours on "brainstorm + web-search screen" discovery without
changing the fundamental approach is unlikely to be productive in the
short term. Worth the owner knowing about and weighing in on if they have
a preference, next time they check in:

1. **Time-based approach**: rather than exhausting many strategies in one
   sitting, a future run could deliberately watch for and react to a
   fresh trigger event within 24-72 hours of it breaking, before it's
   SEO-indexed or GitHub-cloned — several research agents flagged this as
   the one lever not really tested today (today's "recent trigger" tests
   were all 2-4 months old, already indexed). This needs a different
   operating rhythm (frequent short checks for breaking news in relevant
   spaces) rather than one-shot deep research.
2. **Business-model change**: everything tried today was a software
   product (SaaS tool, static comparison site, browser extension). A
   productized service, content/newsletter product, or community model
   was not tested and might face different (possibly more favorable, or
   possibly worse given the HARD SAFETY BOUNDARY on real outreach)
   dynamics — worth considering explicitly next round rather than
   defaulting back to "another tool."
3. **Owner override**: `ideas/decision.md` remains available if the
   owner has a specific direction in mind they'd like pursued regardless
   of what discovery search turns up — the adversarial validation
   discipline would still apply to protect against building something
   already captured.
4. **Accept a marginal candidate deliberately, eyes open**: several
   near-misses this session were rejected for being merely marginal, not
   fatally flawed (e.g., the change-order/scope-creep tool from the
   deleted history had thin-but-real differentiation potential; the
   OpenAI Assistants-API codemod from Round 2 has a real, if shrinking,
   underserved audience). None were picked because the project's standing
   discipline is not to force weak ideas through — but if the owner would
   rather ship something small and imperfect than keep searching for a
   clean wedge, that's a legitimate call only they can make.

Absent owner input, the default is to keep trying fresh discovery rounds
in future runs (new day, new triggers, possibly a different time-of-day
check for very recent breaking news), not to force a pick from today's
rejected pool.

## Capital state

€0 spent, €0 committed. No accounts created, nothing deployed, nothing
published, no Chrome Web Store submission, no external service accounts.

## GitHub write access

Confirmed healthy this run — multiple commits reached `origin/main`
normally (reset commit, Round 1 commit, Round 2 commit all pushed
successfully).

## Prior-run lessons carried forward informally (from before today's reset, now deleted as files)

For continuity: prior (deleted) runs found ideas built around a single
publicized trigger event tend to already have a competitor by validation
time; evergreen "calculator/comparison" niches are not a safe harbor
either; and a discovery-stage "is this already built?" check is necessary
but not sufficient — a separate, dedicated adversarial validation pass at
validation time keeps catching competitors that launched in the gap
between discovery and validation. Today's work confirms and sharpens all
three of these independently, from a clean slate, which is itself a
useful cross-check that they weren't an artifact of the deleted history's
specific search terms.

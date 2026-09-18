# Validation: Local-first free-trial / forced-continuity charge preventer

Idea slug: `trial-charge-preventer`. This is Candidate 6 from
`ideas/candidates.md`, picked up as the designated fallback after
TrueGrade (Candidate 5) was killed on re-validation the same run — see
`research/fake-review-trust-checker.md`.

## Summary of the plan (as originally scoped in candidates.md)

A Manifest V3 Chrome extension, fully client-side: detects free-trial
sign-ups and forced-continuity subscriptions via regex/DOM detection on
checkout pages, reminds the user before the charge date, and offers `.ics`
calendar export. No account, no bank linking (unlike Rocket Money). One-time
"Pro" unlock only — no affiliate monetization, to avoid conflicting with a
"we don't want your money, we just don't want you charged" trust angle.

## Fresh competitor research (2026-09-18) — same rigor applied as TrueGrade

Having just been burned once this run by relying on a stale (~14-month-old)
competitor snapshot for TrueGrade, this validation deliberately re-checked
every named incumbent's *current* state rather than trusting
`candidates.md`'s original (same-day, so less stale, but still worth
re-verifying) research.

| Product | Current state | Relevant to the planned wedge |
|---|---|---|
| **Bobby** | Named **CNBC Select's "Best free service"** among subscription trackers in 2026 — this is new, stronger mainstream validation than the original research captured. Still confirmed manual-entry only, no cancel-assist, no trend/analysis, some support complaints. | The category's clear quality leader and now has a real press/SEO backlink advantage for "best subscription tracker" searches — the exact organic-discovery terms a new entrant would target. |
| **Rocket Money** | Still requires Plaid bank-linking; still carries the 2022 EPIC/CFPB complaint over manipulative-design/deceptive-practice allegations; 2026 reviews show the biggest complaint cluster is the bank-linking flow itself (repeated "succeeded but asks again" loop) plus difficulty cancelling *Rocket Money's own* paid tier. | Confirms the "no bank linking" differentiation still holds against this specific incumbent. |
| **DueCue** | **This already is the planned wedge.** Auto-detects subscriptions/trials directly from payment-confirmation pages (not bank-linking), stores nothing until the user confirms, explicitly does not collect browsing history/card fields/passwords. **0 reviews, apparently no real user base yet.** | A close-to-identical local-first, auto-detect, no-bank-link concept already exists and is live — but has generated zero adoption signal so far. Ambiguous: could mean "undiscovered opportunity" or could mean "this specific approach doesn't drive organic adoption even when built well." |
| **Substash** | 139 Chrome users, 5.0★ (5 ratings, no written reviews), separate Firefox listing at 1 user/0 reviews. Manual dashboard, not auto-detect. | Thin, low-signal competitor — not a real threat, but also not evidence of a gap since it hasn't been meaningfully tested by a market either. |
| **SubTracker**, **Trial Reminder**, **GitHub Reminders**, **mr1301/subscription-reminder** (GitHub), **Ovy95/Trial_Reminder** (GitHub) | Multiple additional small trackers/reminders found, including **at least two more open-source clones of the exact "remind me before a free trial ends" concept** already on GitHub. | The "we'll open-source it" moat — the same one that turned out to already be taken twice over in the TrueGrade case — is **also already taken** in this space. Open-source is not a differentiator here either. |

## Re-examining the demand evidence directly, not just citing the headline stat

The original candidates.md cited "86% of consumers charged after forgetting
to cancel a trial" and "$15.5B/yr wasted on forgotten subscriptions" — both
real, well-sourced numbers, not disputed here. But a direct search for
where people actually complain about this in public (Adobe's community
forum, the largest visible cluster found) shows something the original
research didn't surface: **the dominant complaint pattern is not "I forgot
the date," it's "I cancelled and got charged anyway" or "I couldn't find
how to cancel before the deadline."** These are *dark-pattern cancellation
flow* complaints, not *forgetting* complaints. A pure reminder tool (the
scoped MVP: detect trial start, remind before charge date, `.ics` export)
does not address either of those — it only helps the subset of users whose
actual failure mode is forgetting the date, which the evidence suggests may
be a smaller slice of the documented pain than the headline stat implies.

## Answering the 10 required questions

1. **Why hasn't this opportunity already been captured?** Partially, it
   has — DueCue already implements the specific local-first/no-bank-link/
   auto-detect approach this plan wanted to build. It just hasn't caught
   on (0 reviews). Bobby has captured the "trustworthy, well-designed,
   manual" segment and now has mainstream press validation.
2. **What prevents an existing competitor from copying us?** Nothing
   structural. DueCue could add cancel-assistance or better detection in a
   release; Bobby could add auto-detect. Same low-moat pattern as
   TrueGrade — this whole idea space (browser-extension utility for a
   commodity personal-finance pain point) doesn't have deep technical
   moats generally.
3. **Why would someone switch from what they use now?** For Bobby users:
   weak reason (Bobby is well-reviewed and now press-endorsed). For nobody
   (the more common case — most people use *nothing*): a real reason only
   if the new tool solves the dark-pattern-cancellation pain the evidence
   shows is the actual dominant complaint, which the originally-scoped MVP
   does not address.
4. **Where will the first 100 users come from, specifically?** No channel
   identified that isn't also available to, and already partly used by,
   Bobby (CNBC-syndicated "best of" lists) or the open-source GitHub
   clones (HN/Show-and-tell — already attempted by at least two other
   small projects with no evident traction).
5. **Where will the first 1,000 users come from, specifically?** Not
   answered credibly. SEO for "trial reminder"/"subscription tracker"
   terms already favors Bobby's press coverage.
6. **Who pays?** Nobody in the free tier; a "Pro" one-time unlock was
   proposed, but with no email list, no server, and no proven user base,
   there's no evidence anyone would pay before there's meaningful organic
   adoption — untested, not disproven, but unevidenced.
7. **Why would they pay vs. free alternatives?** No differentiated paid
   feature was identified that Bobby (free) or DueCue (free) don't already
   offer for free.
8. **What can we offer that competitors cannot easily reproduce?** Nothing
   found. The one genuinely unaddressed pain point in the evidence —
   dark-pattern cancellation flows, i.e., actually helping people cancel,
   not just remembering to — is not covered by any current incumbent
   *or* by this idea's own originally-scoped MVP. It is a real, specific,
   currently-open wedge, but it is a different, larger build (a
   maintained per-service "how to actually cancel X" database/deep-link
   directory) than what was scoped, and needs its own validation before
   committing to it.
9. **Can we realistically acquire customers at €0?** Unproven and,
   per DueCue's zero-traction result building nearly the same thing,
   there's a live negative data point suggesting the as-scoped concept
   doesn't self-generate adoption even when free and well-built.
10. **Is there evidence of demand, or only theoretical demand?** Demand
    for *not getting charged for forgotten trials* is real and
    well-evidenced in aggregate. But the specific, most visible, most
    emotionally charged complaint pattern found is about being unable to
    cancel (dark patterns), not about forgetting — a mismatch between the
    evidenced pain and the as-scoped MVP's solution.

## Agent Recommendation: PIVOT

Not a clean KILL — the underlying pain (people getting charged
unexpectedly for subscriptions/trials) is large, real, and well-evidenced,
and there is no single incumbent occupying it the way SureVett occupies
Amazon review-trust (Bobby is well-liked but explicitly limited; DueCue
occupies the technical approach but has zero adoption; nobody occupies
cancellation-assistance). But the MVP as originally scoped in
`ideas/candidates.md` — a pure trial-start detector + reminder + `.ics`
export — is (a) technically near-identical to DueCue, which already
exists and has generated no adoption signal, a real negative data point,
not just "someone else got there first," and (b) aimed at a narrower
slice of the documented pain (forgetting) than the most visible,
best-evidenced complaint pattern (dark-pattern cancellation flows, which
a reminder alone does not fix).

**Specific pivot direction for next time:** re-scope around
cancellation-assistance, not just reminders — a free, client-side
directory/deep-link-and-instructions tool for "how to actually cancel
[service]," addressing the dark-pattern complaint pattern the evidence
actually shows, which Bobby explicitly does not do ("doesn't help you
cancel subscriptions when you decide to cancel something" per its own
documented gap) and which no researched competitor currently offers. This
would need its own fresh round of competitor research (a maintained
cancel-instructions database is a different, larger, more content-
maintenance-heavy build than a DOM-detection reminder, and "how to cancel
X" content sites already exist in some form — e.g. Adobe's own community
forum functions as an ad hoc one — so this needs the same adversarial
scrutiny before committing, not an assumption that it's automatically
better). Reminders/`.ics` export can be folded in as a secondary feature
of that larger tool rather than being the whole product.

## Owner Decision: PIVOT NOTED (agent decision, recorded for visibility)

Per protocol this does not block — recorded for the owner's visibility.
The pivot direction above feeds into the next `IDEA_DISCOVERY` pass. If the
owner wants to force this pivot immediately rather than let the agent
re-run discovery, they can write it into `ideas/decision.md` as an
`OVERRIDE:`.

# TrueGrade — Amazon Review Trust Checker (MVP, v0.1.0)

Status: **local development build, not published anywhere.** This is the
MVP for the idea validated in `research/fake-review-trust-checker.md`.

## What it does

A Manifest V3 Chrome extension that reads the Amazon product-review DOM
already rendered in the user's own browser and computes a local trust grade
(A–F) from four signals, all shown individually rather than hidden behind a
single opaque score:

1. **Verified-purchase ratio** — what fraction of visible reviews are
   verified purchases.
2. **Rating-distribution skew** — flags a polarized histogram (lots of 5★
   and 1★, little in between), a known review-manipulation pattern.
3. **Review-date clustering** — flags visible reviews bunched into a short
   window, a known fake-review-campaign signature.
4. **Duplicate-phrase rate** — flags near-identical wording across reviews
   using 3-word shingle Jaccard similarity.

No backend, no account, no network requests, no per-user cost at any scale.
Everything runs in the content script. This is deliberate — see
`research/fake-review-trust-checker.md` pass 2/3: the differentiation here
is trust and transparency, not proprietary tech, so the implementation
itself needs to actually be inspectable, and needs to stay cheap to run
forever regardless of how many people install it.

## Why this exists

Fakespot and ReviewMeta — the two dominant free tools for this — both shut
down in mid-2025. See `research/fake-review-trust-checker.md` for the full
evidence trail and competitive analysis of the extensions that partially
filled the gap since (SureVett, RateBud, ReviewLens, Savinoo) and their
specific, documented weaknesses this product is built to avoid:
undisclosed affiliate links, opaque/suspiciously flat scores, and
per-request LLM costs.

## Directory layout

```
build/
  manifest.json          Manifest V3 config
  src/
    selectors.js          All Amazon DOM selectors, centralized (see comment
                           in the file — this is the fastest-to-patch spot
                           when Amazon changes its markup)
    scorer.js              Pure scoring functions, no DOM access, unit tested
    ui.js                   Badge/panel rendering, including the loud
                            "can't analyze this page" fallback
    content.js              Wires extraction + scoring + rendering together
  styles/badge.css         Injected panel styling
  popup/                   Toolbar popup (static info + methodology link)
  icons/                   Placeholder icons (flat color, need real design —
                            see "Known gaps" below)
  test/scorer.test.js       `node test/scorer.test.js` — no dependencies
  LICENSE                  MIT — the open-source methodology is itself part
                           of the product's differentiation, not incidental
```

## How to try it locally (developer mode — NOT a public install)

This has **not** been submitted to the Chrome Web Store and no account has
been created anywhere, per this project's standing safety boundary. To load
it locally for testing only:

1. Open `chrome://extensions` in Chrome.
2. Enable "Developer mode" (top right).
3. Click "Load unpacked" and select this `build/` directory.
4. Visit any Amazon product page with customer reviews (e.g. search a
   product on amazon.com and open its listing).
5. The TrueGrade panel should appear above the reviews section.

## Known gaps / next steps (tracked here, not yet done)

- **Icons are flat-color placeholders**, generated programmatically, not
  designed. Needs real icon design before any store submission.
- **`TRUEGRADE_METHODOLOGY_URL` in `src/ui.js` and `popup/popup.js` points
  to a placeholder GitHub URL** (`github.com/PLACEHOLDER/truegrade`) — this
  needs to point to a real, published methodology page once (and only once)
  the owner decides to actually open-source and publish the repo. Until
  then this is a dead link by design — nothing is published per the safety
  boundary.
- **Selectors are based on well-documented, commonly-referenced Amazon
  review page `data-hook` attributes** but have not been tested against a
  live Amazon page in this environment (no browser available here). This
  needs a real-browser smoke test before it's considered working, not just
  logically correct.
- Only Amazon is supported (deliberate MVP scope — see validation doc pass
  3). Multi-marketplace (Walmart, eBay, Etsy) is a considered v2
  differentiator, not part of this MVP.
- No monetization wiring yet (Amazon Associates affiliate tag is not
  present anywhere in this code — that requires an Associates account,
  which is an owner-executed step per the safety boundary, not something to
  fabricate here).

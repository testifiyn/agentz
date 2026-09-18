// Centralized DOM selectors for Amazon's review page.
//
// Amazon's markup changes periodically and this file WILL need updating when
// that happens. Keeping every selector here (rather than scattered through
// content.js) is deliberate: see research/fake-review-trust-checker.md,
// stress-test pass 3 — a solo maintainer needs a breakage fix to be a
// single-file, five-minute patch, not a codebase-wide hunt.
//
// Each entry is an array of candidate selectors tried in order, since Amazon
// runs template A/B tests and some pages use slightly different markup.
const TRUEGRADE_SELECTORS = {
  reviewContainer: ['div[data-hook="review"]'],
  verifiedBadge: ['span[data-hook="avp-badge"]'],
  starRating: [
    'i[data-hook="review-star-rating"] span.a-icon-alt',
    'i[data-hook="cmps-review-star-rating"] span.a-icon-alt',
  ],
  reviewDate: ['span[data-hook="review-date"]'],
  reviewBody: ['span[data-hook="review-body"]'],
  reviewTitle: ['a[data-hook="review-title"] span', 'span[data-hook="review-title"]'],
  histogramRow: ['#histogramTable tr.a-histogram-row', 'li.a-histogram-row'],
  histogramStarLabel: ['.a-text-left a', 'a.a-link-normal'],
  histogramPercent: ['.a-text-right a', '.a-text-right span'],
  // Anchor point used to decide where to inject the TrueGrade badge.
  reviewsAnchor: ['#reviewsMedley', '#cm-cr-dp-review-list', '#reviews-medley-footer'],
};

// Exposed on window so other content-script files (loaded as separate
// <script> tags per manifest.json, no bundler) can read it.
if (typeof window !== 'undefined') {
  window.TRUEGRADE_SELECTORS = TRUEGRADE_SELECTORS;
}
if (typeof module !== 'undefined') {
  module.exports = TRUEGRADE_SELECTORS;
}

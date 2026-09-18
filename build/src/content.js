// Content script entry point. Reads the Amazon review DOM already rendered
// in the user's own browser (no network requests, no scraping of pages the
// user hasn't loaded — same posture Fakespot used for years, see
// research/fake-review-trust-checker.md).

(function trueGradeMain() {
  const SEL = window.TRUEGRADE_SELECTORS;
  const Scorer = window.TrueGradeScorer;
  const UI = window.TrueGradeUI;

  function queryFirst(selectors, root = document) {
    for (const sel of selectors) {
      const el = root.querySelector(sel);
      if (el) return el;
    }
    return null;
  }

  function queryAllFirst(selectors, root = document) {
    for (const sel of selectors) {
      const els = root.querySelectorAll(sel);
      if (els.length > 0) return Array.from(els);
    }
    return [];
  }

  function parseStarRatingText(altText) {
    // e.g. "4.0 out of 5 stars"
    if (!altText) return null;
    const match = altText.match(/([\d.]+)\s*out of/);
    return match ? parseFloat(match[1]) : null;
  }

  function parseReviewDate(dateText) {
    // Amazon format e.g. "Reviewed in the United States on March 4, 2026"
    if (!dateText) return null;
    const match = dateText.match(/on\s+(.+)$/);
    const raw = match ? match[1] : dateText;
    const parsed = new Date(raw);
    return isNaN(parsed.getTime()) ? null : parsed;
  }

  function extractReviews() {
    const containers = queryAllFirst(SEL.reviewContainer);
    return containers.map((container) => {
      const verifiedEl = queryFirst(SEL.verifiedBadge, container);
      const starEl = queryFirst(SEL.starRating, container);
      const dateEl = queryFirst(SEL.reviewDate, container);
      const bodyEl = queryFirst(SEL.reviewBody, container);
      return {
        verified: !!verifiedEl,
        rating: parseStarRatingText(starEl ? starEl.textContent : null),
        date: parseReviewDate(dateEl ? dateEl.textContent : null),
        text: bodyEl ? bodyEl.textContent.trim() : '',
      };
    });
  }

  function extractHistogram() {
    const rows = queryAllFirst(SEL.histogramRow);
    if (rows.length === 0) return null;
    const histogram = {};
    rows.forEach((row) => {
      const starLabel = queryFirst(SEL.histogramStarLabel, row);
      const percentLabel = queryFirst(SEL.histogramPercent, row);
      if (!starLabel || !percentLabel) return;
      const starMatch = starLabel.textContent.match(/(\d)\s*star/i);
      const percentMatch = percentLabel.textContent.match(/(\d+)%/);
      if (starMatch && percentMatch) {
        histogram[parseInt(starMatch[1], 10)] = parseInt(percentMatch[1], 10);
      }
    });
    return Object.keys(histogram).length > 0 ? histogram : null;
  }

  function findAnchor() {
    return queryFirst(SEL.reviewsAnchor);
  }

  function isProductReviewPage() {
    // Only run on pages that actually have review containers; avoids
    // injecting a confusing panel on search results, cart, etc.
    return queryAllFirst(SEL.reviewContainer).length > 0 || !!findAnchor();
  }

  function run() {
    if (!isProductReviewPage()) return;

    const anchor = findAnchor();
    if (!anchor || anchor.dataset.truegradeMounted) return;
    anchor.dataset.truegradeMounted = 'true';

    const panel = UI.createPanel();
    anchor.parentNode.insertBefore(panel, anchor);

    const reviews = extractReviews();
    if (reviews.length < Scorer.MIN_REVIEWS_FOR_ANALYSIS) {
      UI.renderFallback(panel, 'not enough visible reviews on this page');
      return;
    }

    const histogram = extractHistogram();
    const result = Scorer.analyze(reviews, histogram);
    if (result.insufficientData) {
      UI.renderFallback(panel, 'insufficient data extracted from this page');
      return;
    }

    UI.renderResult(panel, result);
  }

  // Amazon product pages load reviews asynchronously in some layouts, so
  // retry briefly after initial load in addition to the document_idle run.
  run();
  let attempts = 0;
  const retry = setInterval(() => {
    attempts++;
    const anchor = findAnchor();
    if ((anchor && !anchor.dataset.truegradeMounted) || attempts > 5) {
      run();
    }
    if (attempts > 5) clearInterval(retry);
  }, 1000);
})();

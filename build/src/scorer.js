// Pure scoring functions — no DOM access here on purpose, so these can be
// unit-tested with plain `node test/scorer.test.js` and reused unchanged if
// a future marketplace (Walmart, eBay, Etsy) is added, per
// research/fake-review-trust-checker.md pass 2 (multi-marketplace is the
// slower-to-copy differentiator).
//
// Input shape for a single review:
//   { verified: boolean, rating: number|null, date: Date|null, text: string }

const MIN_REVIEWS_FOR_ANALYSIS = 3;

function verifiedPurchaseRatio(reviews) {
  const withData = reviews.filter((r) => typeof r.verified === 'boolean');
  if (withData.length === 0) return null;
  const verifiedCount = withData.filter((r) => r.verified).length;
  return verifiedCount / withData.length;
}

// Bimodality: a healthy, organic rating distribution is usually skewed
// toward high ratings with a smooth taper. A distribution where 5-star AND
// 1-star dominate (little in between) is a known pattern in review-
// manipulation research (either a polarizing product, or a mix of paid
// 5-star reviews on top of organic complaints). We flag it as a signal,
// not a verdict.
function ratingHistogramSkew(histogramPercents) {
  // histogramPercents: { 5: pct, 4: pct, 3: pct, 2: pct, 1: pct } (0-100)
  const h = histogramPercents;
  if (!h || h[5] == null || h[1] == null) return null;
  const extremes = (h[5] || 0) + (h[1] || 0);
  const middle = (h[4] || 0) + (h[3] || 0) + (h[2] || 0);
  // Score 0 (healthy taper) to 1 (extremely bimodal).
  if (extremes + middle === 0) return null;
  const bimodalScore = Math.max(0, (extremes - middle) / 100);
  return { histogram: h, bimodalScore };
}

// Review-date clustering: fake-review campaigns often post many reviews in
// a short burst. With only a handful of visible reviews per page load this
// is a weak signal on its own, so it's weighted lightly in the composite.
function dateBurstScore(reviews) {
  const dates = reviews.map((r) => r.date).filter(Boolean).sort((a, b) => a - b);
  if (dates.length < MIN_REVIEWS_FOR_ANALYSIS) return null;
  const spanMs = dates[dates.length - 1] - dates[0];
  const spanDays = spanMs / (1000 * 60 * 60 * 24);
  // All visible reviews within a 7-day window is treated as a burst signal.
  if (spanDays <= 7) return 1;
  if (spanDays >= 180) return 0;
  return 1 - (spanDays - 7) / (180 - 7);
}

function wordShingles(text, size) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  const shingles = new Set();
  for (let i = 0; i + size <= words.length; i++) {
    shingles.add(words.slice(i, i + size).join(' '));
  }
  return shingles;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const x of a) if (b.has(x)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

// Duplicate-phrase rate: average pairwise 3-word-shingle similarity across
// all visible review texts. High similarity across many reviews is a known
// template/bot signature.
function duplicatePhraseRate(reviews) {
  const texts = reviews.map((r) => r.text).filter((t) => t && t.length > 20);
  if (texts.length < MIN_REVIEWS_FOR_ANALYSIS) return null;
  const shingleSets = texts.map((t) => wordShingles(t, 3));
  let total = 0;
  let pairs = 0;
  for (let i = 0; i < shingleSets.length; i++) {
    for (let j = i + 1; j < shingleSets.length; j++) {
      total += jaccard(shingleSets[i], shingleSets[j]);
      pairs++;
    }
  }
  return pairs === 0 ? null : total / pairs;
}

// Composite: combine sub-scores into a 0-100 trust score and A-F grade.
// Each sub-score is shown to the user individually (see ui.js) — the whole
// point, per the validation doc, is that the reasoning is visible, not a
// black box.
function computeGrade(subscores) {
  const weights = {
    verifiedRatio: 0.4, // higher is better
    bimodal: 0.2, // higher (more bimodal) is worse
    dateBurst: 0.15, // higher (more bursty) is worse
    duplicatePhrase: 0.25, // higher is worse
  };

  const parts = [];
  let weightedSum = 0;
  let weightTotal = 0;

  if (subscores.verifiedRatio != null) {
    weightedSum += subscores.verifiedRatio * 100 * weights.verifiedRatio;
    weightTotal += weights.verifiedRatio;
    parts.push({
      key: 'verifiedRatio',
      label: 'Verified purchases',
      value: `${Math.round(subscores.verifiedRatio * 100)}%`,
      good: subscores.verifiedRatio >= 0.7,
    });
  }
  if (subscores.bimodal != null) {
    const inverted = 1 - subscores.bimodal;
    weightedSum += inverted * 100 * weights.bimodal;
    weightTotal += weights.bimodal;
    parts.push({
      key: 'bimodal',
      label: 'Rating distribution',
      value: subscores.bimodal > 0.4 ? 'Polarized (many 5★ + 1★, few in between)' : 'Normal taper',
      good: subscores.bimodal <= 0.4,
    });
  }
  if (subscores.dateBurst != null) {
    const inverted = 1 - subscores.dateBurst;
    weightedSum += inverted * 100 * weights.dateBurst;
    weightTotal += weights.dateBurst;
    parts.push({
      key: 'dateBurst',
      label: 'Review timing',
      value: subscores.dateBurst > 0.6 ? 'Clustered in a short window' : 'Spread over time',
      good: subscores.dateBurst <= 0.6,
    });
  }
  if (subscores.duplicatePhrase != null) {
    const inverted = 1 - subscores.duplicatePhrase;
    weightedSum += inverted * 100 * weights.duplicatePhrase;
    weightTotal += weights.duplicatePhrase;
    parts.push({
      key: 'duplicatePhrase',
      label: 'Duplicate phrasing',
      value: `${Math.round(subscores.duplicatePhrase * 100)}% similarity`,
      good: subscores.duplicatePhrase <= 0.2,
    });
  }

  if (weightTotal === 0) return null; // not enough data — caller shows fallback

  const score = Math.round(weightedSum / weightTotal);
  let letter;
  if (score >= 85) letter = 'A';
  else if (score >= 70) letter = 'B';
  else if (score >= 55) letter = 'C';
  else if (score >= 40) letter = 'D';
  else letter = 'F';

  return { score, letter, parts };
}

function analyze(reviews, histogramPercents) {
  if (!reviews || reviews.length < MIN_REVIEWS_FOR_ANALYSIS) {
    return { insufficientData: true };
  }
  const subscores = {
    verifiedRatio: verifiedPurchaseRatio(reviews),
    bimodal: ratingHistogramSkew(histogramPercents)?.bimodalScore ?? null,
    dateBurst: dateBurstScore(reviews),
    duplicatePhrase: duplicatePhraseRate(reviews),
  };
  const grade = computeGrade(subscores);
  if (!grade) return { insufficientData: true };
  return { insufficientData: false, ...grade, sampleSize: reviews.length };
}

const TrueGradeScorer = {
  MIN_REVIEWS_FOR_ANALYSIS,
  verifiedPurchaseRatio,
  ratingHistogramSkew,
  dateBurstScore,
  duplicatePhraseRate,
  computeGrade,
  analyze,
};

if (typeof window !== 'undefined') {
  window.TrueGradeScorer = TrueGradeScorer;
}
if (typeof module !== 'undefined') {
  module.exports = TrueGradeScorer;
}

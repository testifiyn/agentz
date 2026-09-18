// Plain-node test, no dependencies: `node build/test/scorer.test.js`
const assert = require('assert');
const Scorer = require('../src/scorer.js');

function makeReview({ verified = true, rating = 5, daysAgo = 0, text = 'Great product, works as expected and arrived on time.' }) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return { verified, rating, date, text };
}

// --- verifiedPurchaseRatio ---
{
  const reviews = [makeReview({ verified: true }), makeReview({ verified: true }), makeReview({ verified: false })];
  const ratio = Scorer.verifiedPurchaseRatio(reviews);
  assert.strictEqual(ratio, 2 / 3);
}

// --- ratingHistogramSkew: bimodal distribution flagged ---
{
  const bimodal = Scorer.ratingHistogramSkew({ 5: 60, 4: 5, 3: 5, 2: 5, 1: 25 });
  assert.ok(bimodal.bimodalScore > 0.3, 'expected bimodal distribution to score > 0.3');

  const healthy = Scorer.ratingHistogramSkew({ 5: 40, 4: 30, 3: 20, 2: 5, 1: 5 });
  assert.ok(healthy.bimodalScore < bimodal.bimodalScore, 'healthy taper should score lower than bimodal');
}

// --- dateBurstScore: reviews clustered within a week score near 1 ---
{
  const burst = [makeReview({ daysAgo: 0 }), makeReview({ daysAgo: 1 }), makeReview({ daysAgo: 2 })];
  const burstScore = Scorer.dateBurstScore(burst);
  assert.strictEqual(burstScore, 1);

  const spread = [makeReview({ daysAgo: 0 }), makeReview({ daysAgo: 90 }), makeReview({ daysAgo: 200 })];
  const spreadScore = Scorer.dateBurstScore(spread);
  assert.strictEqual(spreadScore, 0);
}

// --- duplicatePhraseRate: near-identical reviews score high ---
{
  const templated = [
    makeReview({ text: 'This product is amazing and works perfectly every single time I use it' }),
    makeReview({ text: 'This product is amazing and works perfectly every single time I use it!' }),
    makeReview({ text: 'This product is amazing and works perfectly every single time I use it.' }),
  ];
  const templatedRate = Scorer.duplicatePhraseRate(templated);
  assert.ok(templatedRate > 0.5, `expected high duplicate rate for templated reviews, got ${templatedRate}`);

  const organic = [
    makeReview({ text: 'Shipping took a while but the item itself works fine for my kitchen setup.' }),
    makeReview({ text: 'Not what I expected honestly, the color is off and it feels cheap.' }),
    makeReview({ text: 'Solid buy for the price, would recommend to a friend looking for something basic.' }),
  ];
  const organicRate = Scorer.duplicatePhraseRate(organic);
  assert.ok(organicRate < templatedRate, 'organic reviews should score lower duplicate rate than templated ones');
}

// --- analyze: end-to-end with insufficient data returns a flag, not a wrong grade ---
{
  const tooFew = [makeReview({}), makeReview({})];
  const result = Scorer.analyze(tooFew, { 5: 80, 4: 10, 3: 5, 2: 3, 1: 2 });
  assert.strictEqual(result.insufficientData, true);
}

// --- analyze: end-to-end with a healthy-looking sample yields a decent grade ---
{
  const healthySample = [
    makeReview({ verified: true, daysAgo: 5, text: 'Really useful gadget, does exactly what it says on the box.' }),
    makeReview({ verified: true, daysAgo: 40, text: 'Took a bit to arrive but works well once set up.' }),
    makeReview({ verified: false, daysAgo: 90, text: 'Decent quality for the price point, minor complaints about size.' }),
    makeReview({ verified: true, daysAgo: 150, text: 'Would buy again, solid daily use item for our household.' }),
  ];
  const result = Scorer.analyze(healthySample, { 5: 45, 4: 30, 3: 15, 2: 6, 1: 4 });
  assert.strictEqual(result.insufficientData, false);
  assert.ok(['A', 'B', 'C'].includes(result.letter), `expected a decent grade, got ${result.letter}`);
  assert.ok(Array.isArray(result.parts) && result.parts.length > 0);
}

console.log('All scorer tests passed.');

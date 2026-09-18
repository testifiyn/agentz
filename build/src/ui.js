// Renders the TrueGrade badge/panel. Per validation pass 3, failure must be
// LOUD and visible to the user, never silent — a wrong or stale grade
// silently shown is worse than no grade at all for a product whose entire
// pitch is trustworthiness.

const TRUEGRADE_METHODOLOGY_URL = 'https://github.com/PLACEHOLDER/truegrade#methodology';

function trueGradeCreatePanel() {
  const panel = document.createElement('div');
  panel.id = 'truegrade-panel';
  panel.setAttribute('role', 'complementary');
  panel.setAttribute('aria-label', 'TrueGrade review trust score');
  return panel;
}

function trueGradeRenderFallback(panel, reason) {
  panel.innerHTML = '';
  panel.classList.add('truegrade-fallback');
  const msg = document.createElement('div');
  msg.className = 'truegrade-fallback-msg';
  msg.textContent = `TrueGrade: can't analyze this page yet (${reason}).`;
  panel.appendChild(msg);
}

function trueGradeRenderResult(panel, result) {
  panel.innerHTML = '';
  panel.classList.remove('truegrade-fallback');

  const header = document.createElement('div');
  header.className = 'truegrade-header';

  const badge = document.createElement('div');
  badge.className = `truegrade-badge truegrade-grade-${result.letter}`;
  badge.textContent = result.letter;
  header.appendChild(badge);

  const headerText = document.createElement('div');
  headerText.className = 'truegrade-header-text';
  const title = document.createElement('div');
  title.className = 'truegrade-title';
  title.textContent = `TrueGrade: ${result.score}/100`;
  const subtitle = document.createElement('div');
  subtitle.className = 'truegrade-subtitle';
  subtitle.textContent = `Based on ${result.sampleSize} visible reviews on this page`;
  headerText.appendChild(title);
  headerText.appendChild(subtitle);
  header.appendChild(headerText);

  panel.appendChild(header);

  const list = document.createElement('ul');
  list.className = 'truegrade-parts';
  result.parts.forEach((part) => {
    const li = document.createElement('li');
    li.className = part.good ? 'truegrade-part-good' : 'truegrade-part-bad';
    li.textContent = `${part.label}: ${part.value}`;
    list.appendChild(li);
  });
  panel.appendChild(list);

  const footer = document.createElement('div');
  footer.className = 'truegrade-footer';

  const methodLink = document.createElement('a');
  methodLink.href = TRUEGRADE_METHODOLOGY_URL;
  methodLink.target = '_blank';
  methodLink.rel = 'noopener noreferrer';
  methodLink.textContent = 'How this grade is computed (open source)';
  footer.appendChild(methodLink);

  const disclosure = document.createElement('div');
  disclosure.className = 'truegrade-disclosure';
  disclosure.textContent =
    'TrueGrade is free and open source. If you buy after clicking through this page, we may earn a small commission via the Amazon Associates program — this never affects your grade.';
  footer.appendChild(disclosure);

  panel.appendChild(footer);
}

const TrueGradeUI = {
  createPanel: trueGradeCreatePanel,
  renderFallback: trueGradeRenderFallback,
  renderResult: trueGradeRenderResult,
};

if (typeof window !== 'undefined') {
  window.TrueGradeUI = TrueGradeUI;
}

const form = document.querySelector('#checker-form');
const input = document.querySelector('#url-input');
const submittedUrl = document.querySelector('#submitted-url');
const riskBadge = document.querySelector('#risk-badge');
const statusTitle = document.querySelector('#status-title');
const formNote = document.querySelector('#form-note');

const setDemoResult = (value) => {
  submittedUrl.textContent = value;
  riskBadge.textContent = 'Demo result';
  riskBadge.className = 'risk-badge suspicious';
  statusTitle.textContent = 'This demo does not assess whether the link is safe.';
  formNote.textContent = 'Demo result — not a live security scan.';
};

input.addEventListener('focus', () => {
  form.classList.remove('is-invalid');
  form.classList.add('is-focused');
  formNote.textContent = 'Enter a complete URL to try the demo.';
});

input.addEventListener('blur', () => form.classList.remove('is-focused'));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();

  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Invalid protocol');
  } catch {
    form.classList.remove('is-focused');
    form.classList.add('is-invalid');
    formNote.textContent = 'Demo validation: enter a valid http:// or https:// URL.';
    return;
  }

  form.classList.remove('is-invalid');
  form.classList.add('is-loading');
  formNote.textContent = 'Checking demo link…';

  window.setTimeout(() => {
    form.classList.remove('is-loading');
    setDemoResult(value);
  }, 500);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const form = document.querySelector('#checker-form');
const input = document.querySelector('#url-input');
const submittedUrl = document.querySelector('#submitted-url');
const riskBadge = document.querySelector('#risk-badge');
const statusTitle = document.querySelector('#status-title');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = input.value.trim();
  if (!value) {
    submittedUrl.textContent = 'https://account-review.example/verify';
    return;
  }

  submittedUrl.textContent = value;
  riskBadge.textContent = 'Demo result';
  riskBadge.className = 'risk-badge suspicious';
  statusTitle.textContent = 'This demo does not assess whether the link is safe.';
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

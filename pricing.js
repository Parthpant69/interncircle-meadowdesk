'use strict';

const billingButtons = document.querySelectorAll('button[data-period]');
const prices = document.querySelectorAll('.price-amount');
const billingStatus = document.querySelector('#billing-status');
const priceFormat = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

function setBillingPeriod(period) {
  const unit = period === 'yearly' ? 'per year' : 'per month';

  for (const amount of prices) {
    amount.textContent = priceFormat.format(Number(amount.dataset[period]));
    amount.nextElementSibling.textContent = unit;
  }

  for (const button of billingButtons) {
    const selected = button.dataset.period === period;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  }

  billingStatus.textContent = period === 'yearly'
    ? 'Prices updated to yearly billing.'
    : 'Prices updated to monthly billing.';
}

for (const button of billingButtons) {
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'false') {
      setBillingPeriod(button.dataset.period);
    }
  });
}

const compactLayout = window.matchMedia('(max-width: 799px)');
const starter = document.querySelector('#starter');
const popular = document.querySelector('#pro');

function orderPlans() {
  const first = compactLayout.matches ? popular : starter;
  const second = compactLayout.matches ? starter : popular;
  if (first.nextElementSibling === second) return;

  const focused = document.activeElement;
  second.before(first);
  if (first.contains(focused)) focused.focus({ preventScroll: true });
}

orderPlans();
compactLayout.addEventListener('change', orderPlans);

const preview = document.querySelector('#plan-preview');
const previewTitle = document.querySelector('#preview-title');
const previewPrice = document.querySelector('#preview-price');

for (const button of document.querySelectorAll('.plan .choose-plan')) {
  button.addEventListener('click', () => {
    const plan = button.closest('.plan');
    const name = plan.querySelector('h2').textContent;
    const amount = plan.querySelector('.price-amount').textContent;
    const unit = plan.querySelector('.price-unit').textContent;

    previewTitle.textContent = `${name} plan`;
    previewPrice.textContent = `${amount} ${unit}`;
    preview.showModal();
  });
}

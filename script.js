'use strict';

const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
const cards = Array.from(document.querySelectorAll('[data-categories]'));

for (const button of filterButtons) {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(item => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
    cards.forEach(card => {
      const categories = (card.dataset.categories || '').split(' ');
      card.hidden = selected !== 'all' && !categories.includes(selected);
    });
  });
}

const navButton = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navButton && navLinks) {
  navButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navButton.setAttribute('aria-expanded', String(isOpen));
    navButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navButton.setAttribute('aria-expanded', 'false');
    navButton.setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      navLinks.classList.remove('open');
      navButton.setAttribute('aria-expanded', 'false');
      navButton.setAttribute('aria-label', 'Open navigation');
    }
  });
}

const year = document.getElementById('copyright-year');
if (year) year.textContent = new Date().getFullYear();

const progress = document.querySelector('.reading-progress');
if (progress) {
  let queued = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress.style.transform = `scaleX(${ratio})`;
    queued = false;
  };
  window.addEventListener('scroll', () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }, {passive:true});
  update();
}

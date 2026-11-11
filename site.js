(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
    if (header) header.classList.add('solid');
    return;
  }

  // The header floats clear over the sky, then turns solid once the hero is behind it.
  if (header && hero) {
    new IntersectionObserver(([e]) => header.classList.toggle('solid', !e.isIntersecting), { rootMargin: '-90px 0px 0px 0px' }).observe(hero);
  } else if (header) {
    header.classList.add('solid');
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv').forEach(el => { if (reduce) el.classList.add('in'); else io.observe(el); });
})();

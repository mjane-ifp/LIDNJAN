/* ============================================
   LINDJAN · js/main.js
   Entry point – inicialitza tots els mòduls
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initAnimations();
  initSlider();
  initForms();
  initSmoothScroll();
  initFilterGrid();
});

/* Smooth scroll per ancles interns */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* Filtre de targetes (pàgina projectes) */
function initFilterGrid() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.projects-grid .projecte-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.opacity       = show ? '1' : '0.2';
        card.style.transform     = show ? '' : 'scale(0.95)';
        card.style.pointerEvents = show ? '' : 'none';
      });
    });
  });
}

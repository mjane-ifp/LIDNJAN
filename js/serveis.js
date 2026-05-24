/* ============================================
   LINDJAN · js/serveis.js
   Animacions i interaccions per a productes.html
   i installacions.html
   Carrega DESPRÉS de main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initProgressiveReveal();
  initStaggeredGroups();
  initCounterAnimations();
  initTimelineHighlight();
  initCardTilt();
  initServiceListHover();
  initHeroParallax();
});

/* ── 1. Progressive reveal individual ─────────
   Cerca elements amb classe .srv-reveal i els
   fa aparèixer amb IntersectionObserver.
────────────────────────────────────────────── */
function initProgressiveReveal() {
  const elements = document.querySelectorAll('.srv-reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => {
          entry.target.classList.add('srv-visible');
        }, delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ── 2. Stagger per grups de cards ────────────
   Parent: [data-stagger]
   Fills:  [data-stagger-item]
   Efecte: aparició progressiva amb retard entre
   cada targeta (120ms per defecte).
────────────────────────────────────────────── */
function initStaggeredGroups() {
  const groups = document.querySelectorAll('[data-stagger]');
  if (!groups.length) return;

  groups.forEach((group) => {
    const items    = group.querySelectorAll('[data-stagger-item]');
    const stepMs   = parseInt(group.dataset.stagger || '120', 10);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('srv-visible');
            }, i * stepMs);
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(group);
  });
}

/* ── 3. Counter animation ──────────────────────
   Atributs HTML:
     data-counter="200"   (valor numèric final)
     data-suffix="%"      (sufix opcional)
   Animació ease-out cúbica en 1.6s.
────────────────────────────────────────────── */
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target   = parseFloat(el.dataset.counter);
  const suffix   = el.dataset.suffix  || '';
  const prefix   = el.dataset.prefix  || '';
  const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : 0;
  const duration = 1600;
  const start    = performance.now();

  function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value    = eased * target;
    el.textContent = prefix + value.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ── 4. Timeline: activa pas quan és visible ───
   Afegeix la classe .active a .timeline-item
   quan entra al viewport (≥40% visible).
────────────────────────────────────────────── */
function initTimelineHighlight() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('active', entry.isIntersecting);
      });
    },
    { threshold: 0.45 }
  );

  items.forEach((item) => observer.observe(item));
}

/* ── 5. Card tilt suau (desktop only) ──────────
   Actiu en cards amb atribut [data-tilt].
   Esborra la transformació en mouseleave.
   Deshabilitat en dispositius tàctils.
────────────────────────────────────────────── */
function initCardTilt() {
  if (window.matchMedia('(hover: none)').matches) return;

  const MAX_TILT = 5.5; // graus màxims de rotació

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', onCardMouseMove);
    card.addEventListener('mouseleave', onCardMouseLeave);
  });

  function onCardMouseMove(e) {
    const card = e.currentTarget;
    const rect  = card.getBoundingClientRect();
    const x     = (e.clientX - rect.left) / rect.width  - 0.5;
    const y     = (e.clientY - rect.top)  / rect.height - 0.5;
    const rotX  = (-y * MAX_TILT).toFixed(2);
    const rotY  = ( x * MAX_TILT).toFixed(2);
    card.style.transform =
      `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  }

  function onCardMouseLeave(e) {
    e.currentTarget.style.transform = '';
  }
}

/* ── 6. Service list: ressaltat lateral ────────
   .service-list-card → ressalta l'icona en
   entrar el cursor i torna a l'estat base en
   sortir.
────────────────────────────────────────────── */
function initServiceListHover() {
  document.querySelectorAll('.service-list-card').forEach((card) => {
    const icon = card.querySelector('.service-list-icon');
    if (!icon) return;

    card.addEventListener('mouseenter', () => {
      icon.style.background = 'var(--c-orange)';
      icon.style.color      = 'var(--c-white)';
    });
    card.addEventListener('mouseleave', () => {
      icon.style.background = '';
      icon.style.color      = '';
    });
  });
}

/* ── 7. Parallax subtil al hero ─────────────────
   Desplaça el fons del .page-hero a 0.3x la
   velocitat de scroll. Desactivat si no hi ha
   .page-hero o si el dispositiu és mòbil.
────────────────────────────────────────────── */
function initHeroParallax() {
  const hero = document.querySelector('.page-hero');
  if (!hero || window.innerWidth < 768) return;

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) return;
    hero.style.backgroundPositionY = `calc(50% + ${(window.scrollY * 0.28).toFixed(1)}px)`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

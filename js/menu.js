/* ============================================
   LINDJAN · js/menu.js
   Navbar: scroll effect + menú mòbil
   ============================================ */

function initMenu() {
  const navbar  = document.querySelector('.navbar');
  const toggle  = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  /* Scroll effect */
  const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile toggle */
  toggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  /* Tanca el menú al fer clic en un link */
  document.querySelectorAll('.nav-link:not(.has-dropdown)').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
      toggle?.classList.remove('active');
      toggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* Marca l'enllaç actiu */
  const page = currentPage();
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === page || href.endsWith('/' + page) || (page === '' && href.includes('index'))) {
      link.classList.add('active');
    }
  });
}

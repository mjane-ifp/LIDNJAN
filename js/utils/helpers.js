/* ============================================
   LINDJAN · js/utils/helpers.js
   Funcions utilitàries reutilitzables
   ============================================ */

/**
 * Retorna el nombre de targetes visibles al carrusel
 * basant-se en l'amplada de la finestra.
 */
function getVisibleCards() {
  const w = window.innerWidth;
  if (w < BREAKPOINTS.mobile)  return 1;
  if (w < BREAKPOINTS.desktop) return 2;
  return 3;
}

/**
 * Debounce: evita crides excessives en events ràpids
 */
function debounce(fn, delay = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Obté el nom del fitxer actual
 */
function currentPage() {
  return location.pathname.split('/').pop() || 'index.html';
}

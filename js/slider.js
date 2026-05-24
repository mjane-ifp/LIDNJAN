/* ============================================
   LINDJAN · js/slider.js
   Carrusel de projectes (drag + botons)
   ============================================ */

function initSlider() {
  const track   = document.querySelector('.projectes-track');
  const prevBtn = document.querySelector('.projectes-btn.prev');
  const nextBtn = document.querySelector('.projectes-btn.next');
  if (!track || !prevBtn || !nextBtn) return;

  let current = 0;

  const cardWidth = () => {
    const card = track.querySelector('.projecte-card');
    return card ? card.offsetWidth + CAROUSEL.gap : 0;
  };

  const getMax = () => {
    const cards = track.querySelectorAll('.projecte-card').length;
    return Math.max(0, cards - getVisibleCards());
  };

  const goTo = (idx) => {
    const max = getMax();
    current = Math.max(0, Math.min(idx, max));
    track.style.transform = `translateX(-${current * cardWidth()}px)`;
    prevBtn.style.opacity = current === 0     ? '0.4' : '1';
    nextBtn.style.opacity = current >= max    ? '0.4' : '1';
  };

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  window.addEventListener('resize', debounce(() => goTo(current)));
  goTo(0);
}

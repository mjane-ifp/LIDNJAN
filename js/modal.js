/* ════════════════════════════════════════════════════════════════ */
/* MODAL DE SERVICIOS - FUNCIONALIDAD */
/* ════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
  const servicesBtn = document.querySelector('.services-modal-btn');
  const modalOverlay = document.getElementById('servicesModal');
  const modalClose = document.querySelector('.modal-close');

  // Abrir modal
  if (servicesBtn) {
    servicesBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Cerrar modal con botón
  if (modalClose) {
    modalClose.addEventListener('click', function() {
      closeModal();
    });
  }

  // Cerrar modal al hacer clic en overlay
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Cerrar modal al hacer clic en un servicio (ir a la página)
  const serviceCards = document.querySelectorAll('.service-card a');
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      closeModal();
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

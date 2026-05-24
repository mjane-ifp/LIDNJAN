/* ============================================
   LINDJAN · js/form.js
   Validació i enviament formularis de contacte
   ============================================ */

function initForms() {
  /* Formulari genèric */
  document.querySelectorAll('.contacte-form').forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });

  /* Checkboxes de servei (pàgina contacte) */
  document.querySelectorAll('.servei-check').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      const selected = [...document.querySelectorAll('.servei-check.selected')]
        .map(el => el.dataset.value).join(',');
      const hidden = document.getElementById('serveiHidden');
      if (hidden) hidden.value = selected;
    });
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const btn  = form.querySelector('button[type="submit"]');
  if (!btn) return;

  /* Validació bàsica */
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = '#e74c3c';
      valid = false;
    } else {
      field.style.borderColor = '';
    }
  });
  if (!valid) return;

  /* Feedback visual */
  const original = btn.innerHTML;
  btn.innerHTML   = '✓ Enviat correctament!';
  btn.style.background = '#27ae60';
  btn.disabled    = true;

  setTimeout(() => {
    btn.innerHTML        = original;
    btn.style.background = '';
    btn.disabled         = false;
    form.reset();
    form.querySelectorAll('.servei-check').forEach(c => c.classList.remove('selected'));
    const hidden = document.getElementById('serveiHidden');
    if (hidden) hidden.value = '';
  }, 3500);
}

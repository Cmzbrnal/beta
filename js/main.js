
// Abrir Visor PDF en Modal
function abrirModal(pdfUrl, titulo) {
  document.getElementById('modalTitle').innerText = titulo;
  document.getElementById('pdfFrame').src = pdfUrl;
  document.getElementById('pdfModal').style.display = 'flex';
}

// Cerrar Visor
function cerrarModal() {
  document.getElementById('pdfModal').style.display = 'none';
  document.getElementById('pdfFrame').src = '';
}

// Búsqueda inteligente que auto-despliega acordeones
function buscarDocumento() {
  const filter = document.getElementById('globalSearch').value.toLowerCase();
  const items = document.querySelectorAll('.resource-item');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = 'flex';
      // Abre automáticamente los acordeones padre si coinciden con la búsqueda
      if (filter.length > 1) {
        item.closest('details').open = true;
        item.closest('.accordion-main').open = true;
      }
    } else {
      item.style.display = 'none';
    }
  });
}

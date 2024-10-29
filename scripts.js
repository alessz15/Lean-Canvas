function openModal(title, content) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = content;
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('fade-out'); // Añadimos la clase para la animación de salida
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
        document.body.classList.remove('modal-open');
    }, 300); // Duración de la animación
}

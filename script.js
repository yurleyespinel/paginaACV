// Obtener elementos del DOM
const modal = document.getElementById("myModal");
const btn = document.getElementById("showModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];

// Carrusel
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Índice de la imagen actual
let currentIndex = 0;

// Función para mover el carrusel
function updateCarousel() {
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    const offset = -currentIndex * 100;  // Mover el carrusel según el índice
    carousel.style.transform = `translateX(${offset}%)`;  // Desplazar el carrusel
}

// Cambiar a la imagen anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? 2 : currentIndex - 1; // Volver al final si está en la primera
    updateCarousel();
});

// Cambiar a la imagen siguiente
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 2) ? 0 : currentIndex + 1; // Volver al inicio si está en la última
    updateCarousel();
});

// Mostrar el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
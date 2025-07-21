'use strict'

// carrousel de imágenes navegando con flechas 
const first = document.querySelector('.Carousel-first');
const prevButton = document.querySelector('.Prev');
const nextButton = document.querySelector('.Next');
const slides = Array.from(first.children);
let slideWidth = slides[0].getBoundingClientRect().width;
// recalcula el tamaño del slider al redimensionar la ventana
window.addEventListener('resize', () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  updateCarousel(); 
});
let currentIndex = 0;

function updateCarousel() {
  first.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
}

// avanza la imagen
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// retrocede la imagen
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// valida que la fecha seleccionada no sea domingo
const fechaInput = document.getElementById('fecha');
fechaInput.addEventListener('change', function () {
  const fechaSeleccionada = new Date(this.value);
  const diaSemana = fechaSeleccionada.getDay(); // 0 = domingo

  if (diaSemana === 0) {
    alert('La peluquería está cerrada los domingos. Por favor elige otro día.');
    this.value = ''; // Resetea la fecha
  }
});

// Muestro u oculta el menú en móviles
const menuBtn = document.querySelector('.Hamburger-btn');
const navMenu = document.querySelector('.Header-nav');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
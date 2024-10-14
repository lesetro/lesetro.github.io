// Código para cargar el carrusel
document.addEventListener("DOMContentLoaded", function() {
    var carouselImages = document.querySelector('.carousel-images');
    var images = document.querySelectorAll('.carousel-images img');
    var totalImages = images.length;

    var currentIndex = Math.floor(totalImages / 2); // Empezar en la imagen del medio

    // Copiar el primer y último elemento para lograr el efecto infinito
    var firstClone = images[0].cloneNode(true);
    var lastClone = images[totalImages - 1].cloneNode(true);

    // Añadir imágenes clonadas al principio y al final
    carouselImages.appendChild(firstClone);
    carouselImages.insertBefore(lastClone, images[0]);

    // Definir el ancho del carrusel, tomando en cuenta las imágenes repetidas
    var imgWidth = images[0].clientWidth;
    var totalWidth = imgWidth * (totalImages + 2); // Imágenes originales + 2 clones
    carouselImages.style.width = totalWidth + 'px';

    // Iniciar el carrusel desplazado en la primera imagen original
    carouselImages.style.transform = 'translateX(' + (-imgWidth * (currentIndex + 1)) + 'px)';

    var btnLeft = document.getElementById('btn-left');
    var btnRight = document.getElementById('btn-right');

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        carouselImages.style.transition = 'transform 0.5s ease-in-out';
        carouselImages.style.transform = 'translateX(' + (-imgWidth * (currentIndex + 1)) + 'px)';
    }

    // Función para desactivar temporalmente la transición (cuando se reinicia el carrusel)
    function resetTransition() {
        carouselImages.style.transition = 'none';
    }

    // Evento para avanzar a la derecha
    btnRight.addEventListener('click', function() {
        currentIndex++;
        updateCarousel();
        if (currentIndex >= totalImages) {
            // Si llegamos al final, reiniciamos la posición
            setTimeout(function() {
                resetTransition();
                currentIndex = 0;
                carouselImages.style.transform = 'translateX(' + (-imgWidth * (currentIndex + 1)) + 'px)';
            }, 500); // Tiempo igual a la duración de la transición
        }
    });

    // Evento para retroceder a la izquierda
    btnLeft.addEventListener('click', function() {
        currentIndex--;
        updateCarousel();
        if (currentIndex < 0) {
            // Si llegamos al principio, reiniciamos la posición
            setTimeout(function() {
                resetTransition();
                currentIndex = totalImages - 1;
                carouselImages.style.transform = 'translateX(' + (-imgWidth * (currentIndex + 1)) + 'px)';
            }, 500);
        }
    });

    // Evento que detecta cuando la transición ha terminado, para el bucle infinito
    carouselImages.addEventListener('transitionend', function() {
        // Al llegar al final, saltar al primer elemento sin la transición
        if (currentIndex === totalImages) {
            resetTransition();
            currentIndex = 0;
            carouselImages.style.transform = 'translateX(' + (-imgWidth * (currentIndex + 1)) + 'px)';
        } else if (currentIndex === -1) {
            // Al llegar al principio, saltar al último elemento sin la transición
            resetTransition();
            currentIndex = totalImages - 1;
            carouselImages.style.transform = 'translateX(' + (-imgWidth * (currentIndex + 1)) + 'px)';
        }
    });
});
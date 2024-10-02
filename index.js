const torta = document.getElementById('torta');  
const tortas = [  
    '../TrabajoIntegradoPaginaWeb/imagentorta.png',  
    '../TrabajoIntegradoPaginaWeb/otraImagen.png',  
    '../TrabajoIntegradoPaginaWeb/Sin título.png',  
    '../TrabajoIntegradoPaginaWeb/torta.png',  
    '../TrabajoIntegradoPaginaWeb/tortaCasamiento.png',  
    '../TrabajoIntegradoPaginaWeb/TortaSimpleLinda.png',  
    '../TrabajoIntegradoPaginaWeb/simple.png'  
]; 
const carouselContainer = document.querySelector('.carousel-container');

let scrollInterval; // Guardar el intervalo de scroll

// Detectar cuando el mouse está sobre el carrusel
carouselContainer.addEventListener('mousemove', (e) => {
    const containerWidth = carouselContainer.offsetWidth;
    const mouseX = e.pageX - carouselContainer.offsetLeft;

    // Desplazar hacia la derecha si el mouse está en la mitad derecha del contenedor
    if (mouseX > containerWidth / 2) {
        scrollToDirection('right');
    } 
    // Desplazar hacia la izquierda si el mouse está en la mitad izquierda del contenedor
    else if (mouseX < containerWidth / 2) {
        scrollToDirection('left');
    }
});

// Dejar de desplazarse cuando el mouse salga del contenedor
carouselContainer.addEventListener('mouseleave', () => {
    clearInterval(scrollInterval);
});

// Función para desplazarse automáticamente en la dirección indicada
function scrollToDirection(direction) {
    clearInterval(scrollInterval); // Detener cualquier intervalo activo
    scrollInterval = setInterval(() => {
        if (direction === 'right') {
            carouselContainer.scrollLeft += 2; // Ajustar la velocidad de desplazamiento
        } else if (direction === 'left') {
            carouselContainer.scrollLeft -= 2;
        }
    }, 10); // Ajustar la frecuencia del desplazamiento
} 

// Cambiar imagen y rotar el carrusel al hacer clic  
document.querySelectorAll('.carousel-item img').forEach((img, index) => {  
    img.addEventListener('click', () => {  
        // Cambiar la imagen principal  
        torta.src = tortas[index];  
        torta.style.animation = 'fadeIn 1s';  // Aplicar la animación de entrada  
        setTimeout(() => {  
            torta.style.animation = '';  // Quitar la animación para que se pueda volver a aplicar  
        }, 1000);  
    });  
});  
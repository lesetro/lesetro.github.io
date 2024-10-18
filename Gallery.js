// Código para cargar el carrusel
const imagenesTortas = [
    "./imagenes/imagentorta.png",
    "./imagenes/torta.png", 
    "./imagenes/tortaCasamiento.png",
    "./imagenes/imagentorta.png",
    "./imagenes/torta.png", 
    "./imagenes/TortaSimpleLinda.png",
    
];
let indice = 0;

function next() {
    if (indice == imagenesTortas.length - 1) {
        indice = 0;
    } else {
        indice++;
    }
    document.getElementById("imagen").src = imagenesTortas[indice];
}

function back() {
    if (indice === 0) {
        indice = imagenesTortas.length - 1;
    } else {
        indice--;
    }
    document.getElementById("imagen").src = imagenesTortas[indice];
}
   

    

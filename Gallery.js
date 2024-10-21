// Código para cargar el carrusel
const imagenesTortas = [
    "./imagenes/Sin título.png",
    "./imagenes/torta.png", 
    "./imagenes/tortaCasamiento.png",
    "./imagenes/simple.png",
    "./imagenes/torta.png", 
    "./imagenes/TortaSimpleLinda.png",
    
];


let indice = 0;

// Actualiza 
function actualizar() {
    document.getElementById("imagen").src = imagenesTortas[indice];
}
function next() {
    indice = (indice + 1) % imagenesTortas.length; // cuando sean iguales reinicia
    actualizar(); 
}

// Muestra la imagen anterior
function back() {
    if (indice === 0) {
        indice = imagenesTortas.length - 1;
    } else {
        indice--;
    }
    document.getElementById("imagen").src = imagenesTortas[indice];
}
   
actualizar();

    

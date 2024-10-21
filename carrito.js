function set_carrito(carrito = null) {
    window.localStorage.setItem("carrito", JSON.stringify(
        !carrito ? { lista: [], total: 0 } : carrito
    ))
}

function get_carrito() {
    let carrito = JSON.parse(window.localStorage.getItem("carrito"))
    if (!carrito) {
        set_carrito();
        return get_carrito();
    }
    return carrito;
}

function agregar_al_carrito(torta_id) {
    let torta = tortas.filter(torta => torta.id == torta_id)[0];
    let carrito = get_carrito();
    carrito.lista.push(torta);
    carrito.total += torta.precio;
    set_carrito(carrito);
}

function quitar_del_carrito(torta) {
    let carrito = get_carrito();
    carrito.lista.splice(carrito.lista.indexOf(torta));
    carrito.total -= torta.precio;
    set_carrito(carrito);
}
document.getElementById("agregarCarrito").addEventListener("click", function() {
    let carrito = get_carrito(); 

    let descripcionText = "";
    let idTorta;
    let tortaSeleccionada;

    
    idTorta = new URLSearchParams(window.location.search).get("id");

    if (idTorta) {
        tortaSeleccionada = tortas.filter(torta => torta.id == idTorta)[0];

        if (tortaSeleccionada) {
            carrito.lista.push(tortaSeleccionada);

            let tortasUnicas = [...new Map(carrito.lista.map(torta => [torta.id, torta])).values()];

            descripcionText = "Productos en el carrito:\n";
            tortasUnicas.forEach(torta => {
                descripcionText += `${torta.nombre}, `;
            });
            
            descripcionText = descripcionText.substring(0, descripcionText.length - 2) + '.';

        } else {
            descripcionText = "La torta seleccionada no se encontró.";
        }
    } else {
        descripcionText = "El carrito está vacío.";
    }

    document.getElementById('descripcion').value = descripcionText;
});
 // te pongo el anterior codigo, no me salio, cuando pongo el mas algunas si selecciona otras no
 // y las que selecciona aparece como todo el vector con nombres
 // estuve renegando y me canse, te encargo que lo veas
 function set_carrito(carrito = null) {
    window.localStorage.setItem("carrito", JSON.stringify(
        !carrito ? { lista: [], total: 0 } : carrito
    ))
}

function get_carrito() {
    let carrito = JSON.parse(window.localStorage.getItem("carrito"))
    if (!carrito) {
        set_carrito();
        return get_carrito();
    }
    return carrito;
}

function agregar_al_carrito(torta_id) {
    let torta = tortas.filter(torta => torta.id == torta_id)[0];
    let carrito = get_carrito();
    carrito.lista.push(torta);
    carrito.total += torta.precio;
    set_carrito(carrito);
}

function quitar_del_carrito(torta) {
    let carrito = get_carrito();
    carrito.lista.splice(carrito.lista.indexOf(torta));
    carrito.total -= torta.precio;
    set_carrito(carrito);
}
let idTorta, torta;

idTorta = new URLSearchParams(window.location.search).get("id")
if (idTorta) {
    torta = tortas.filter(torta => torta.id == idTorta)[0];
}

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const nombrePelicula = document.getElementById('nombrePelicula');
const puntuacion = document.getElementById('puntuar');
const correo = document.getElementById('correo');
const reseñasDiv = document.getElementById('reseñas');
const div = document.createElement("div");
const lista = document.createElement("ol")
// la wea del whatsapp
let carrito = get_carrito();
document.getElementById("wpp_link").addEventListener("click", ev => {
    ev.preventDefault();
    const numero_wpp = "549266xxxxxxx"
    //"54266"
    let msg = `Hola, soy ${nombre.value} y me interesaron tus `
    carrito.lista.forEach(torta => msg += torta.nombre + ", ")
    msg = msg.substring(0,msg.length-2) + '.'

    window.open(`https://wa.me/${numero_wpp}?text=${msg}`, "_blank")
});
// Validación y evento onfocus para vaciar el placeholder  
nombre.addEventListener('focus', function () {
    nombre.placeholder = '';
});
nombrePelicula.addEventListener('focus', function () {
    nombrePelicula.placeholder = '';
});
puntuacion.addEventListener('focus', function () {
    puntuacion.placeholder = '';
});
correo.addEventListener('focus', function () {
    correo.placeholder = '';
});

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Validación del nombre  
    if (nombre.value.length > 10 || nombre.value.trim() === '') {
        document.getElementById('errorNombre').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('errorNombre').style.display = 'none';
    }

    // Validación del nombre de la película  
    if (nombrePelicula.value.length > 200 || nombrePelicula.value.trim() === '') {
        document.getElementById('errorPelicula').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('errorPelicula').style.display = 'none';
    }

    // Validación de la puntuación  
    if (puntuacion.value < 1 || puntuacion.value > 10 || puntuacion.value.trim() === '') {
        document.getElementById('errorPuntuacion').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('errorPuntuacion').style.display = 'none';
    }
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.value && !emailExp.test(correo.value)) {
        document.getElementById('errorEmail').style.display = 'inline';
        valid = false;
    } else {
        document.getElementById('errorEmail').style.display = 'none';
    }




    if (valid) {
        agregarReseña(nombre.value, nombrePelicula.value, puntuacion.value, correo.value);
        alert("Formulario enviado correctamente");
        formulario.reset();
        reseñasDiv.style.display = 'block';
    }
});

function agregarReseña(nombre, nombrePelicula, puntuacion, correo) {
    const reseñaDiv = document.createElement('div');
    reseñaDiv.classList.add('divCreado');
    reseñaDiv.innerHTML = `  
      <p>${nombre} dice que "${nombrePelicula}" tiene una puntuación de ${puntuacion}. Contacto: ${correo || 'No proporcionado'}.</p>  
    `;

    reseñasDiv.appendChild(reseñaDiv);
}
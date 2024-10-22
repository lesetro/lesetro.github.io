
const nombre = document.getElementById('nombre');  
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const descripcion = document.getElementById('descripcion');
const correo = document.getElementById('correo');  
const formulario = document.getElementById('formulario');
const obtenerID = document.getElementById('obtenerID'); 
const contador = document.getElementById('contador');
const maxLength = 700;

// Event listeners for focus to clear placeholder  
nombre.addEventListener('focus', function () {  
    nombre.placeholder = '';  
});  
apellido.addEventListener('focus', function () {  
    apellido.placeholder = '';  
});  
telefono.addEventListener('focus', function () {  
    telefono.placeholder = '';  
});  
correo.addEventListener('focus', function () {  
    correo.placeholder = '';  
});  
descripcion.addEventListener('focus', function () {  
    descripcion.placeholder = '';  
});  



// Validation on form submit  
formulario.addEventListener('submit', function (e) {  
    e.preventDefault();  
    let valid = true;  
    const telefonoExp = /^(?!15)(?!0)\d{6,10}$/;
    const apellidoExp = /^[a-zA-ZÀ-ÿ\s]+$/;
    const nombreExp = /^[a-zA-ZÀ-ÿ\s]+$/;
    const emailExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 

    // Validación del nombre  
    if (nombre.value.trim() === '' || !nombreExp.test(nombre.value)) {  
        document.getElementById('errorNombre').style.display = 'inline'; 
        nombre.value = ""; 
        valid = false;  
    } else {  
        document.getElementById('errorNombre').style.display = 'none';  
    }  

    // Validación del apellido  
    if (apellido.value.trim() === '' || !apellidoExp.test(apellido.value)) {  
        document.getElementById('errorApellido').style.display = 'inline';  
        apellido.value = "";
        valid = false;  
    } else {  
        document.getElementById('errorApellido').style.display = 'none';  
    }  

    if (!telefonoExp.test(telefono.value) || telefono.value.trim() === "" ) {  
        document.getElementById('errorTelefono').style.display = 'inline';  
        telefono.value = "";
        valid = false;  
    } else {  
        document.getElementById('errorTelefono').style.display = 'none';  
    }  
     // Validación de la descripción
     const longitudActual = descripcion.value.length;
     if (longitudActual> maxLength || longitudActual<100) {
         document.getElementById('errorDescripcion').style.display = 'inline'; 
         valid = false;  
     } else {
         document.getElementById('errorDescripcion').style.display = 'none';  
     }
    
    // Validación del correo  
     
    if (correo.value.trim() === "" || !emailExp.test(correo.value)) {  
        document.getElementById('errorEmail').style.display = 'inline'; 
        correo.value = ""; 
        valid = false;  
    } else {  
        document.getElementById('errorEmail').style.display = 'none';  
    }  

    // Si todos son válidos, enviar el formulario  
    if (valid) {  
        confirmarEnvio(nombre.value, apellido.value, telefono.value, descripcion.value, correo.value);  
        alert("Formulario enviado correctamente");
        formulario.reset();  
        document.getElementById("divCreado").style.display = 'block'; 
        contador.textContent = ` 0/${maxLength} caracteres`; // Reiniciar el contador 
    }  
});  

// Confirmar envío de datos  
function confirmarEnvio(nombre, apellido, telefono,descripcion, correo) {  
    const reseñasDiv = document.getElementById("divCreado")  
    const reseñaDiv = document.createElement('div');  
    reseñaDiv.classList.add('divCreado');  
    reseñaDiv.innerHTML = 
    `<p id="textoDiv">${nombre} ${apellido} Gracias por ponerte en contacto con "TortasAmanda".   
    En breve nos comunicaremos al ${telefono} o bien al correo ${correo || 'No proporcionado'}.</p>`;
  

    reseñasDiv.appendChild(reseñaDiv);  
}

descripcion.addEventListener('input', function() {
    const longitud = descripcion.value.length; // Obtener longitud actual
    const caracteresRestantes = maxLength - longitud; // Calcular caracteres restantes
    contador.textContent = `${caracteresRestantes}/${maxLength} caracteres`; // Actualiza el contador

    if (longitud > maxLength) {
        document.getElementById('errorDescripcion').style.display = 'inline';
    } else {
        document.getElementById('errorDescripcion').style.display = 'none';
    }
});
// si se selecciono una imagene en consulta obtener el id como dato
let idTorta;

document.getElementById("obtenerID").addEventListener("click",function(){
const params = new URLSearchParams(window.location.search);
idTorta = params.get('id');

if (idTorta) {
    document.getElementById("descripcion").value = `usted ha seleccionado torta con id = ${idTorta}`;
} 
});

function buscarTortas() {
    const tipo = document.getElementById('tipo').value;
    const evento = document.getElementById('evento').value;

    const tortasFiltradas = [];

    for (let i = 0; i < tortas.length; i++) {
        let cumpleCriterios = true; // Restablecer para cada torta
        const torta = tortas[i];

        // Verificar si el tipo coincide, o si el usuario seleccionó "todo"
        if (tipo !== 'todo' && torta.tipo !== tipo) {
            cumpleCriterios = false;
        }

        // Verificar si el evento coincide, o si el usuario seleccionó "todo"
        if (evento !== 'todo' && torta.evento !== evento) {
            cumpleCriterios = false;
        }

        // Si cumple ambos criterios, agregar a la lista filtrada
        if (cumpleCriterios) {
            tortasFiltradas.push(torta);
        }
    }

    mostrarTortas(tortasFiltradas);
}


function mostrarTortas(tortasAMostrar) {
    const tortaContainer = document.getElementById('tortaContainer');
    tortaContainer.innerHTML = ''; // Limpiar contenedor 

    if (tortasAMostrar.length === 0) {
        tortaContainer.innerHTML = '<p>No se encontraron tortas para esta combinación.</p>';
        return;
    }

    for (let i = 0; i < tortasAMostrar.length; i++) {
        const torta = tortasAMostrar[i];  // para obtener la torta actual

        const tortaElement = document.createElement('div');
        tortaElement.classList.add('Seleccionador');

        tortaElement.innerHTML = `
            <img src="${torta.img}" alt="${torta.nombre}">
            <h3>${torta.nombre}</h3>
            <p>Relleno: ${torta.relleno}</p>
            <p>Precio: $${torta.precio}</p>
            <p>Precio por kg: $${torta.precioPorKg}/kg</p>
            <button class="orden_button" onclick="llamarFormulario(${torta.id})">hace tu consulta</button>
        
        `;
        tortaContainer.appendChild(tortaElement);
    }
}



function llamarFormulario(id = null) {
    let url = "./contacto.html"
    if (id)
        url += `?id=${id}`
    window.location.href = url;
}

// Muestra todas las tortas al cargar la página
mostrarTortas(tortas);

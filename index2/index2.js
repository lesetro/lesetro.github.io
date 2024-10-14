
const tortas = [
    {
        tipo: 'chocolate',
        evento: 'cumpleaños',
        img: '../imagenes/torta.png',
        nombre: 'Torta de Chocolate',
        relleno: 'Chocolate y crema',
        precio: 2000,
        precioPorKg: 1000
    },
    {
        tipo: 'vainilla',
        evento: 'casamiento',
        img: '../imagenes/TortaSimpleLinda.png',
        nombre: 'Torta de Vainilla',
        relleno: 'Crema de vainilla',
        precio: 1500,
        precioPorKg: 800
    },
    {
        tipo: 'chocolate',
        evento: 'egresados',
        img: '../imagenes/otraImagen.png',
        nombre: 'Torta de Chocolate para Egresados',
        relleno: 'Chocolate y crema',
        precio: 2000,
        precioPorKg: 1000
    },
    {
        tipo: 'vainilla',
        evento: 'bautismo',
        img: '../imagenes/simple.png',
        nombre: 'Torta de Vainilla para Bautismo',
        relleno: 'Crema de vainilla',
        precio: 1500,
        precioPorKg: 800
    },
    
    {
        tipo: 'frutas',
        evento: 'aniversario',
        img: '../imagenes/otraImagen.png',
        nombre: 'Torta de Frutas Frescas',
        relleno: 'Frutas de temporada',
        precio: 2500,
        precioPorKg: 1200
    },
    {
        tipo: 'vainilla',
        evento: 'presentación',
        img: '../imagenes/torta.png',
        nombre: 'Torta de Vainilla Especial',
        relleno: 'Crema de vainilla con frutas',
        precio: 1800,
        precioPorKg: 900
    },
    {
        tipo: 'frutas',
        evento: 'aniversario',
        img: '../imagenes/otraImagen.png', 
        nombre: 'Torta de Frutas Frescas con almendras',
        relleno: 'Frutas de temporada con almendras',
        precio: 2500,
        precioPorKg: 1200
    },
    {
        tipo: 'vainilla',
        evento: 'casamiento',
        img: '../imagenes/torta.png', 
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 1800,
        precioPorKg: 900
    }
];


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
            <button class="orden_button" onclick="llamarFormulario()">hace tu consulta</button>
        `;

        tortaContainer.appendChild(tortaElement);
    }
}


   
    function llamarFormulario() {
        window.location.href = '../index3/index3.html';
    }

    // Muestra todas las tortas al cargar la página
    mostrarTortas(tortas);

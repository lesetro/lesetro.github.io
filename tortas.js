const tortas = [
    {
        id: 1,
        tipo: 'chocolate',
        evento: 'cumpleaños',
        img: './imagenes/TortaCumpleaños.png',
        nombre: 'Torta de Chocolate',
        relleno: 'Chocolate y crema',
        precio: 30000,
        precioPorKg: 10000
    },
    {
        id: 2,
        tipo: 'vainilla',
        evento: 'casamiento',
        img: './imagenes/tortaCasamiento.png',
        nombre: 'Torta de Vainilla',
        relleno: 'Crema de vainilla',
        precio: 300000,
        precioPorKg: 15000
    },
    {
        id: 3,
        tipo: 'Frutas',
        evento: 'casamiento',
        img: './imagenes/otraImagen.png',
        nombre: 'Torta de frutas',
        relleno: 'Crema de vainilla',
        precio: 250000,
        precioPorKg: 15000
    },
    {
        id: 4,
        tipo: 'chocolate',
        evento: 'egresados',
        img: './imagenes/simple.png',
        nombre: 'Torta de Chocolate para Egresados',
        relleno: 'Chocolate y crema',
        precio: 150000,
        precioPorKg: 16000
    },
    {
        id: 5,
        tipo: 'vainilla',
        evento: 'bautismo',
        img: './imagenes/bautismo.png',
        nombre: 'Torta de Vainilla para Bautismo',
        relleno: 'Crema de vainilla',
        precio: 220000,
        precioPorKg: 12000
    },

    {
        id: 6,
        tipo: 'frutas',
        evento: 'aniversario',
        img: './imagenes/TortaSimpleLinda.png',
        nombre: 'Torta con relleno de Frutas Frescas',
        relleno: 'Frutas de temporada',
        precio: 180000,
        precioPorKg: 11000
    },
    {
        id: 7,
        tipo: 'Frutas',
        evento: 'presentacion',
        img: './imagenes/presentacionLinda.png',
        nombre: 'Torta de frutas',
        relleno: 'Crema de vainilla',
        precio: 220000,
        precioPorKg: 12000
    },
    {
        id: 8,
        tipo: 'vainilla',
        evento: 'casamiento',
        img: './imagenes/torta.png',
        nombre: 'Torta de Vainilla Especial',
        relleno: 'Crema de vainilla con frutas',
        precio: 450000,
        precioPorKg: 15000
    },
    {
        id: 9,
        tipo: 'frutas',
        evento: 'aniversario',
        img: './imagenes/aniversario1.png',
        nombre: 'Torta de Frutas Frescas con almendras',
        relleno: 'Frutas de temporada con almendras',
        precio: 130000,
        precioPorKg: 11000
    },
    {
        id: 10,
        tipo: 'vainilla',
        evento: 'casamiento',
        img: './imagenes/casamiento3.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 350000,
        precioPorKg: 15000
    },
    {
        id: 11,
        tipo: 'vainilla',
        evento: 'casamiento',
        img: './imagenes/casamiento2.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 480000,
        precioPorKg: 15000
    },
    {
        id: 12,
        tipo: 'vainilla',
        evento: 'aniversario',
        img: './imagenes/aniversario2.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 54000,
        precioPorKg:11000
    },
    {
        id: 13,
        tipo: 'vainilla',
        evento: 'egresados',
        img: './imagenes/egresados.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 140000,
        precioPorKg: 16000
    },
    {
        id: 14,
        tipo: 'vainilla',
        evento: 'egresados',
        img: './imagenes/egresados3.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 110000,
        precioPorKg: 16000
    },
    {
        id: 15,
        tipo: 'vainilla',
        evento: 'presentacion',
        img: './imagenes/presentacion1.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 280000,
        precioPorKg: 12000
    },
    {
        id: 16,
        tipo: 'vainilla',
        evento: 'casamiento',
        img: './imagenes/casamiento3.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 260000,
        precioPorKg: 15000
    },
    {
        id: 17,
        tipo: 'vainilla',
        evento: 'bautismo',
        img: './imagenes/bautismo1.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 208000,
        precioPorKg: 12000
    },
    {
        id: 18,
        tipo: 'vainilla',
        evento: 'bautismo',
        img: './imagenes/Cumpleaños5.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 290000,
        precioPorKg: 12000
    },
    {
        id: 19,
        tipo: 'vainilla',
        evento: 'casamiento',
        img: './imagenes/casamiento4.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 980000,
        precioPorKg: 15000
    },
    {
        id: 20,
        tipo: 'vainilla',
        evento: 'aniversario',
        img: './imagenes/aniversario3.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 380000,
        precioPorKg: 11000
    },
    {
        id: 21,
        tipo: 'vainilla',
        evento: 'aniversario',
        img: './imagenes/aniversario4.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 490000,
        precioPorKg: 11000
    },
    {
        id: 22,
        tipo: 'vainilla',
        evento: 'casamiento',
        img: './imagenes/casamiento5.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 480000,
        precioPorKg: 15000
    },
    {
        id: 23,
        tipo: 'vainilla',
        evento: 'aniversario',
        img: './imagenes/tortaChocolate.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 290000,
        precioPorKg: 11000
    },
    {
        id: 24,
        tipo: 'vainilla',
        evento: 'egresados',
        img: './imagenes/egresados4.png',
        nombre: 'Torta de Vainilla Especial con chispas',
        relleno: 'Crema de vainilla con frutas y chispas de chocolate',
        precio: 320000,
        precioPorKg: 11000
    }
];

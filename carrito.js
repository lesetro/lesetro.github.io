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


let productos = [];


function generarId() {
    return productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
}


function agregarProducto(nombre, precio, cantidad, descripcion) {
    let id = generarId();
    productos.push({
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        descripcion: descripcion
    });
    alert(`Producto agregado: ${nombre}`);
}


function duplicarProducto(id) {
    let productoOriginal = productos.find(producto => producto.id === id);
    if (productoOriginal) {
        let sufijo = ' Copy';
        let nombre = productoOriginal.nombre + sufijo;
        let duplicado = {
            id: generarId(),
            nombre: nombre,
            precio: productoOriginal.precio,
            cantidad: productoOriginal.cantidad,
            descripcion: productoOriginal.descripcion
        };
        productos.push(duplicado);
        alert(`Producto duplicado: ${nombre}`);
    } else {
        alert(`No se encontró ningún producto con el ID ${id}`);
    }
}


function mostrarProductos() {
    console.log("Productos en inventario:");
    productos.forEach(producto => console.log(producto));
}


while (true) {
    let opcion = prompt("¿Qué desea hacer?\n1. Agregar producto\n2. Duplicar producto\n3. Mostrar productos\n4. Salir");

    switch(opcion){
        case "1":
            let nombreProducto = prompt("Ingrese el nombre del producto:");
            let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
            let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto:"));
            let descripcionProducto = prompt("Ingrese la descripción del producto:");

            agregarProducto(nombreProducto, precioProducto, cantidadProducto, descripcionProducto);
            break;

        case "2":
            let idProducto = parseInt(prompt("Ingrese el ID del producto a duplicar:"));
            duplicarProducto(idProducto);
            break;

        case "3":
            mostrarProductos();
            break;

        case "4":
            alert("Gracias por usar nuestro sistema");
            break;

        default:
            alert("Opción inválida");
            break;

    }
    if (opcion === "4") {
        break;
    }

}

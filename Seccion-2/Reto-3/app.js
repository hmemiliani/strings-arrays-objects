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

//funcion de busqueda
function buscarEventoPorId() {//buscar
    let nombre = parseInt(prompt("Ingrese el ID del producto a buscar:"));
    let productosEncontrados = productos.find(productos => productos.id === id);

    if (productosEncontrados.length > 0) {
        console.log("Productos encontrados:");
        productosEncontrados.forEach(productos => {
            console.log(`ID: ${productos.id}, Nombre: ${productos.nombre}, Precio: ${productos.precio}, Cantidad: ${productos.cantidad}, Descripcion: ${productos.descripcion}`);
        });
    } else {
        alert("No se encontraron productos con ese ID.");
    }
}


//funcion de actualizacion
function actualizarproductos() {//actualizar
    let id = parseInt(prompt("Ingrese el ID del producto a actualizar:"));
    let productos = productos.find(productos => productos.id === id);

    if (productos) {
        let nombre = prompt("Ingrese el nombre del producto:");
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
        let descripcion = prompt("Ingrese la descripción del producto:");

        productos.nombre = nombre;
        productos.precio = precio;
        productos.cantidad = cantidad;
        productos.descripcion = descripcion;

        alert("Evento actualizado correctamente.");
    } else {
        alert("No se encontro ningun evento con ese ID.");
    }
}

//funcion de eliminar
//funcion inventario y verificacion de existencia
//venta de productos
//compra de productos
//valor total del inventario
//organizacion de productos
//verificacion malas palabras
//reporte general de los productos


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

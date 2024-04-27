let productos = [];

function generarId() {
    return productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
}


//Crear productos -----------------------------------

function agregarProducto(nombre, precio, cantidad, descripcion) {
    if (nombre && precio && cantidad && descripcion) {
        let id = generarId();
        productos.push({
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            descripcion: descripcion
        });
        alert(`Producto agregado: ${nombre}`);
    } else {
        alert("Por favor complete todos los campos para agregar un producto.");
    }
}


//Duplicar poductos -----------------------------------

function duplicarProducto(id) {
    if (!id || isNaN(id)) {
        alert("Por favor ingrese un ID valido.");
        return;
    }

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
        alert(`No se encontro ningun producto con el ID ${id}`);
    }
}


//mostrar productos -----------------------------------

function mostrarProductos(productosArray = productos) {
    if (productosArray.length === 0) {
        console.log("No hay productos en inventario.");
    } else {
        console.log("Productos en inventario:");
        productosArray.forEach(producto => console.log(producto));
    }
}


//buscar por nombre -----------------------------------

function buscarPorNombre(nombre) {
    return productos.filter(product => product.nombre.includes(nombre));
}


//buscar por precio -----------------------------------

function buscarPorPrecio(min, max) {
    return productos.filter(product => product.precio >= min && product.precio <= max);
}


//actualizas -----------------------------------

function actualizarProducto() {
    let id = parseInt(prompt("Ingrese el ID del producto a actualizar:"));
    if (!id || isNaN(id)) {
        alert("Por favor ingrese un ID valido.");
        return;
    }

    let producto = productos.find(producto => producto.id === id);

    if (producto) {
        let nombre = prompt("Ingrese el nombre del producto:");
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
        let descripcion = prompt("Ingrese la descripcion del producto:");

        if (nombre && precio && cantidad && descripcion) {
            producto.nombre = nombre;
            producto.precio = precio;
            producto.cantidad = cantidad;
            producto.descripcion = descripcion;

            alert("Producto actualizado correctamente.");
        } else {
            alert("Por favor complete todos los campos para actualizar el producto.");
        }
    } else {
        alert("No se encontro ningun producto con ese ID.");
    }
}


//eliminar -----------------------------------

function eliminarProducto(id) {
    if (!id || isNaN(id)) {
        alert("Por favor ingrese un ID valido.");
        return;
    }

    productos = productos.filter(producto => producto.id !== id);
}


//veridicar existencia -----------------------------------

function verificarExistenciaProducto(id, cantidad) {
    if (!id || isNaN(id) || !cantidad || isNaN(cantidad)) {
        alert("Por favor ingrese un ID y una cantidad validos.");
        return false;
    }

    return productos.some(producto => producto.id === id && producto.cantidad >= cantidad);
}


//vender -----------------------------------

function venderProducto(id, cantidad) {
    if (!id || isNaN(id) || !cantidad || isNaN(cantidad)) {
        alert("Por favor ingrese un ID y una cantidad validos.");
        return;
    }

    const producto = productos.find(producto => producto.id === id);
    if (producto) {
        producto.cantidad -= cantidad;
    }
}


//comprar -----------------------------------

function comprarProducto(id, cantidad) {
    if (!id || isNaN(id) || !cantidad || isNaN(cantidad)) {
        alert("Por favor ingrese un ID y una cantidad validos.");
        return;
    }

    const producto = productos.find(producto => producto.id === id);
    if (producto) {
        producto.cantidad += cantidad;
    }
}



//valor total -----------------------------------

function calcularValorTotal() {
    return productos.reduce((total, product) => total + (product.precio * product.cantidad), 0);
}


//ordenar-precio -----------------------------------

function ordenarPorPrecio(ascendente = true) {
    return productos.slice().sort((a, b) => ascendente ? a.precio - b.precio : b.precio - a.precio);
}


//ordenar-cantidad -----------------------------------

function ordenarPorCantidad(ascendente = true) {
    return productos.slice().sort((a, b) => ascendente ? a.cantidad - b.cantidad : b.cantidad - a.cantidad);
}

//malas palabras encontradas en internet xd
const badWords = ['maldito', 'joder', 'cabrón', 'pendejo', 'coño', 'puta', 'gilipollas', 'mierda', 'cagar', 'perra', 'chingar', 'coger', 'zorra', 'desgraciado', 'chingada', 'idiota', 'malparido', 'maricón', 'marica', 'puto', 'pajero', 'culero', 'baboso', 'estúpido', 'tarado', 'imbécil', 'inútil', 'pendeja', 'cabrona', 'cojones', 'cojonudo', 'chingón', 'pendeja', 'pendejo', 'pendejas', 'pendejos', 'putita', 'putito', 'cabronazo', 'cabronaza', 'cojonudo', 'coñazo', 'capullo', 'cagada', 'cagalera', 'cagarla', 'cabrón', 'cabrona', 'cabrones', 'cabronas', 'cojonuda', 'cojonudas', 'cagón', 'cagones', 'cagada', 'cagadas', 'mamón', 'mamona', 'mamones', 'mamonas', 'mamada', 'mamadas', 'mamar', 'cojudo', 'putazo', 'putaza', 'culo', 'culos', 'culito', 'culotes', 'culear', 'culo', 'culero', 'culera', 'culeras', 'culeros', 'culonas', 'culón', 'culitos', 'culón', 'culazos', 'culo de la leche', 'culo del mundo', 'me cago'];



//buscar malas palabras -----------------------------------

function identificarMalasPalabras() {
    const blacklistedProducts = [];
    productos.forEach(product => {
        const productCopy = Object.assign({}, product);
        badWords.forEach(word => {
            productCopy.descripcion = productCopy.descripcion.replace(new RegExp(word, 'gi'), '***');
        });
        blacklistedProducts.push(productCopy);
    });
    return blacklistedProducts;
}


//reporte -----------------------------------

function generarReporte() {
    const totalProducts = productos.length;
    const totalInventoryValue = calcularValorTotal();
    const mostExpensiveProducts = ordenarPorPrecio(false).slice(0, 5);
    const cheapestProducts = ordenarPorPrecio(true).slice(0, 5);
    const mostAvailableProducts = ordenarPorCantidad(false).slice(0, 5);
    const leastAvailableProducts = ordenarPorCantidad(true).slice(0, 5);
    const productsWithBadWords = identificarMalasPalabras();
    
    return {
        totalProducts,
        totalInventoryValue,
        mostExpensiveProducts,
        cheapestProducts,
        mostAvailableProducts,
        leastAvailableProducts,
        productsWithBadWords
    };
}





//inicio -----------------------------------

while (true) {
    let opcion = prompt("¿Que desea hacer?\n1. Agregar producto\n2. Duplicar producto\n3. Mostrar productos\n4. Actualizar producto\n5. Eliminar producto\n6. Venta de producto\n7. Compra de producto\n8. Verificar existencia de producto\n9. Buscar producto por nombre\n10. Buscar producto por rango de precio\n11. Valor total del inventario\n12. Ordenar productos por precio\n13. Ordenar productos por cantidad\n14. Generar reporte general\n15. Salir");

    switch(opcion){
        case "1":
            let nombreProducto = prompt("Ingrese el nombre del producto:");
            let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
            let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto:"));
            let descripcionProducto = prompt("Ingrese la descripcion del producto:");

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
            actualizarProducto();
            break;

        case "5":
            let idEliminar = parseInt(prompt("Ingrese el ID del producto a eliminar:"));
            eliminarProducto(idEliminar);
            break;

        case "6":
            let idVenta = parseInt(prompt("Ingrese el ID del producto a vender:"));
            let cantidadVenta = parseInt(prompt("Ingrese la cantidad a vender:"));
            if (verificarExistenciaProducto(idVenta, cantidadVenta)) {
                venderProducto(idVenta, cantidadVenta);
                alert(`Venta realizada con exito.`);
            } else {
                alert(`No hay suficiente cantidad del producto con ID ${idVenta} en el inventario.`);
            }
            break;

        case "7":
            let idCompra = parseInt(prompt("Ingrese el ID del producto a comprar:"));
            let cantidadCompra = parseInt(prompt("Ingrese la cantidad a comprar:"));
            comprarProducto(idCompra, cantidadCompra);
            alert(`Compra realizada con exito.`);
            break;

        case "8":
            let idVerificar = parseInt(prompt("Ingrese el ID del producto a verificar:"));
            let cantidadVerificar = parseInt(prompt("Ingrese la cantidad a verificar:"));
            if (verificarExistenciaProducto(idVerificar, cantidadVerificar)) {
                alert(`¡El producto con ID ${idVerificar} tiene suficiente cantidad en el inventario!`);
            } else {
                alert(`No hay suficiente cantidad del producto con ID ${idVerificar} en el inventario.`);
            }
            break;

        case "9":
            let nombreBuscar = prompt("Ingrese el nombre del producto a buscar:");
            let productosEncontradosNombre = buscarPorNombre(nombreBuscar);
            if (productosEncontradosNombre.length > 0) {
                console.log("Productos encontrados:");
                productosEncontradosNombre.forEach(producto => console.log(producto));
            } else {
                console.log("No se encontraron productos con ese nombre.");
            }
            break;

        case "10":
            let precioMin = parseFloat(prompt("Ingrese el precio minimo del rango:"));
            let precioMax = parseFloat(prompt("Ingrese el precio maximo del rango:"));
            let productosEncontradosPrecio = buscarPorPrecio(precioMin, precioMax);
            if (productosEncontradosPrecio.length > 0) {
                console.log("Productos encontrados:");
                productosEncontradosPrecio.forEach(producto => console.log(producto));
            } else {
                console.log("No se encontraron productos dentro de ese rango de precios.");
            }
            break;

        case "11":
            let valorTotal = calcularValorTotal();
            alert(`El valor total del inventario es: ${valorTotal}`);
            break;

        case "12":
            let ordenPrecio = prompt("¿Desea ordenar de forma ascendente o descendente? (asc/desc)").toLowerCase();
            let ascendentePrecio = ordenPrecio === 'asc' ? true : false;
            mostrarProductos(ordenarPorPrecio(ascendentePrecio));
            break;

        case "13":
            let ordenCantidad = prompt("¿Desea ordenar de forma ascendente o descendente? (asc/desc)").toLowerCase();
            let ascendenteCantidad = ordenCantidad === 'asc' ? true : false;
            mostrarProductos(ordenarPorCantidad(ascendenteCantidad));
            break;

        case "14":
            let reporte = generarReporte();
            console.log(reporte);
            break;

        case "15":
            alert("Gracias por usar nuestro sistema");
            break;

        default:
            alert("Opcion invalida");
            break;

    }
    if (opcion === "15") {
        break;
    }
}
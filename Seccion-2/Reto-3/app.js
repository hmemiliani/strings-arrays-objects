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
function mostrarProductos() {
    return productos;
}

function buscarPorNombre(nombre) {
    return productos.filter(product => product.name.includes(nombre));
}

function buscarPorPrecio(min, max) {
    return productos.filter(product => product.price >= min && product.price <= max);
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
function eliminarProducto(id) {
    productos = productos.filter(product => product.id !== id);
}

//funcion inventario y verificacion de existencia
function verificarProducto(id, cantidad) {
    const productExists = productos.some(product => product.id === id);
    const enoughQuantity = productos.filter(product => product.id === id && product.quantity >= cantidad).length > 0;
    return productExists && enoughQuantity;
}

//venta de productos
//compra de productos
function venderProducto(id, cantidad) {
    const product = productos.find(product => product.id === id);
    if (product) {
        product.quantity -= cantidad;
    }
}

function comprarProducto(id, cantidad) {
    const product = productos.find(product => product.id === id);
    if (product) {
        product.quantity += cantidad;
    }
}

//valor total del inventario
function calcularValorTotal() {
    return productos.reduce((total, product) => total + (product.price * product.quantity), 0);
}

//organizacion de productos
function ordenarPorPrecio(ascendente = true) {
    return productos.sort((a, b) => ascendente ? a.price - b.price : b.price - a.price);
}

function ordenarPorCantidad(ascendente = true) {
    return productos.sort((a, b) => ascendente ? a.quantity - b.quantity : b.quantity - a.quantity);
}

//verificacion malas palabras
//verificar, esta vaina no me da ni haciendo brujeria
const badWords = ['palabra-niidea-1', 'palabra-niidea-2', 'palabra-niidea-3', 'palabra-niidea-4', 'palabra-niidea-5'];

function identificarMalasPalabras() {
    const blacklistedProducts = [];
    productos.forEach(product => {
        const productCopy = Object.assign({}, product);
        badWords.forEach(word => {
            productCopy.description = productCopy.description.replace(new RegExp(word, 'gi'), '***');
        });
        blacklistedProducts.push(productCopy);
    });
    return blacklistedProducts;
}

//reporte general de los productos
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
            mostrarProductos();
            break;

        case "5":
            mostrarProductos();
            break;

        case "5":
            mostrarProductos();
            break;

        case "6":
            mostrarProductos();
            break;

        case "7":
            mostrarProductos();
            break;

        case "8":
            mostrarProductos();
            break;

        case "9":
            mostrarProductos();
            break;

        case "10":
            mostrarProductos();
            break;

        case "11":
            mostrarProductos();
            break;

        case "12":
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

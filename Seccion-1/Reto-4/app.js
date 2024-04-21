let eventos = [];


function generarId() { //identificador
    return eventos.length + 1;
}

function crearEvento() { //crear
    let nombre = prompt("Ingrese el nombre del evento:");
    let fecha = prompt("Ingrese la fecha del evento (YYYY-MM-DD):");
    let descripcion = prompt("Ingrese la descripcion del evento:");

    let evento = {
        id: generarId(),
        nombre: nombre,
        fecha: fecha,
        descripcion: descripcion
    };

    eventos.push(evento);
    alert("Evento creado correctamente.");
}


function mostrarEventos() {//mostrar
    console.log("Lista de eventos:");
    eventos.forEach(evento => {
        console.log(`ID: ${evento.id}, Nombre: ${evento.nombre}, Fecha: ${evento.fecha}, Descripcion: ${evento.descripcion}`);
    });
}


function buscarEventoPorNombre() {//buscar
    let nombre = prompt("Ingrese el nombre del evento a buscar:");
    let eventosEncontrados = eventos.filter(evento => evento.nombre.toLowerCase().includes(nombre.toLowerCase()));

    if (eventosEncontrados.length > 0) {
        console.log("Eventos encontrados:");
        eventosEncontrados.forEach(evento => {
            console.log(`ID: ${evento.id}, Nombre: ${evento.nombre}, Fecha: ${evento.fecha}, Descripcion: ${evento.descripcion}`);
        });
    } else {
        alert("No se encontraron eventos con ese nombre.");
    }
}


function actualizarEvento() {//actualizar
    let id = parseInt(prompt("Ingrese el ID del evento a actualizar:"));
    let evento = eventos.find(evento => evento.id === id);

    if (evento) {
        let nombre = prompt("Ingrese el nuevo nombre del evento:");
        let fecha = prompt("Ingrese la nueva fecha del evento (YYYY-MM-DD):");
        let descripcion = prompt("Ingrese la nueva descripcion del evento:");

        evento.nombre = nombre;
        evento.fecha = fecha;
        evento.descripcion = descripcion;

        console.log("Evento actualizado correctamente.");
    } else {
        console.log("No se encontro ningun evento con ese ID.");
    }
}


function eliminarEvento() {//eliminar
    let id = parseInt(prompt("Ingrese el ID del evento a eliminar:"));
    let indice = eventos.findIndex(evento => evento.id === id);

    if (indice !== -1) {
        eventos.splice(indice, 1);
        console.log("Evento eliminado correctamente.");
    } else {
        console.log("No se encontro ningun evento con ese ID.");
    }
}

while (true){
    
    let choise = parseInt(prompt("\nBienvenido al salon de eventos\n\t1.  Crear Evento\n\t2.  Mostrar Eventos\n\t3.  Buscar Evento\n\t4.  Actualizar Evento\n\t5.  Eliminar Evento\n\t6.  Salir \nIngrese una opcion:"));

    switch (choise) {
        case 6: //Salir
            break;
        case 1: //crear evento
            crearEvento();
            break;
        case 2: //Mostrar eventos
            mostrarEventos();
            break;
        case 3: //Buscar evento
            buscarEventoPorNombre();
            break;
        case 4: //Actualizar evento
            actualizarEvento();
            break;
        case 5: //Eliminar evento
            eliminarEvento();
            break;
        default: //error
            alert("Opcion invalida, intente nuevamente")
            
        
    }
    if (choise == 6){
        break;
    }
}
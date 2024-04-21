

while (true) {
    
    let calificacionesInput = prompt("Ingrese las calificaciones de los estudiantes separadas por comas:");

    let calificaciones = calificacionesInput.split(",").map(Number);
    let promedio = calificaciones.reduce((sum, calificacion) => sum + calificacion, 0) / calificaciones.length;

    //uso Math.max() para la calificacion maxima 
    let calificacionMaxima = Math.max(...calificaciones);

    //uso Math.min() para la calificacion minima 
    let calificacionMinima = Math.min(...calificaciones);

    // Calcular numeros mayores o iguales a 70
    let aprobados = calificaciones.filter(calificacion => calificacion >= 70).length;

    // Calcular numeros menores a 70
    let reprobados = calificaciones.filter(calificacion => calificacion < 70).length;

    let calificacionesOrdenadas = calificaciones.sort((a, b) => b - a); //sort() organiza


    console.log("Estadisticas de calificaciones:");
    console.log("Promedio de calificaciones:", promedio);
    console.log("Calificacion Maxima:", calificacionMaxima);
    console.log("Calificacion Minima:", calificacionMinima);
    console.log("Numero de Aprobados:", aprobados);
    console.log("Numero de Reprobados:", reprobados);
    console.log("Lista de Calificaciones Ordenadas de Mayor a Menor:", calificacionesOrdenadas);


    let exit = confirm("Desea comprobar otras calificaciones?");
    if (!exit) {
        break;
    }
}

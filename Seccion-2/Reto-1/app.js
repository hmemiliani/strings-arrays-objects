while (true) {
    let calificaciones = prompt("Digite sus calificaciones separadas por comas( , )");
    let grades = calificaciones.split(",").map(Number); // Convertir las calificaciones a números

    let gradesSumatory = grades.reduce((sum, grade) => sum + grade, 0); //reduce la suma

    let promedio = gradesSumatory / grades.length;

    alert(`El promedio de calificaciones es: ${promedio}`);

    let exit = confirm("Desea comprobar otras calificaciones?");
    if (!exit) {
        break;
    }
}

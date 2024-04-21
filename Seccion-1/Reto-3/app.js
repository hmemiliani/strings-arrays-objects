var email = prompt("Por favor correo electronico:");


function validarCorreo(email) {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//Regex es  el estandard 
    if (emailRegex.test(email)) {
        // miro si el correo cumple con las condiciones del @ y el punto
        if (email.indexOf('@') !== -1 && email.indexOf('.') !== -1 && email.indexOf('@') < email.lastIndexOf('.')) { //indexOf se usa para buscar un caracter en un string y regresa su ubicacion

            console.log("Correo electronico valido");
        } else {
            console.log("El correo electronico no cumple con todas las condiciones.");
        }
    } else {
        console.log("Formato de correo electronico invalido");
    }
}


while(true){
    validarCorreo(email);
    let check = confirm("quieres agregar otro usuario?");
    if(!check){
        break
    }
}

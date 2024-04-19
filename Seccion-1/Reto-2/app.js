    function validatePassword(password){
        let hasLength = password.length >= 8;
        let hasNumber = /\d/.test(password);// \d es una secuencia de escape que coincide con cualquier dígito del 0 al 9.
        let hasLetter = /[a-zA-Z]/.test(password);
        let hasSpecialChar = /[!@#$%^&*()+=_\-{}\[\]:;"'?<>,.|/\\~`]/.test(password);

        let noCumple = [];// Array para almacenar las condiciones que no cumple

        if(!hasLength){
            noCumple.push("debe tener al menos 8 caracteres");
        }if(!hasNumber){
            noCumple.push("debe tener al menos un numero");
        }if(!hasLetter){
            noCumple.push("debe tener al menos una letra");
        }if(!hasSpecialChar){
            noCumple.push("debe tener al menos un caracter especial");
        }

        if (noCumple.length === 0){
            alert("Contraseña segura");
        } else {
            alert("Contraseña insegura");
            console.log("Debe cumplir con las siguientes condiciones:");
            noCumple.forEach(condicion => {
                console.log(`- ${condicion}`);
            });
        }
    }

    while (true) {
        let password1 = prompt("Ingrese su contraseña").trim();
        let password2 = prompt("Repita su contraseña").trim();
        if(password1==password2){
            validatePassword(password1);
            let seguir = confirm("Quiere probar otra contraseña?");
            if (!seguir) {
                break;
            }
        }
        else {
            alert("No coinciden las contraseñas intentelo de nuevo");
        }
    }
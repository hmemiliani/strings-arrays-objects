
users = {};
function userNameAndEmailGenerator(){
    
    let fullName = prompt("Ingrese y apellido").toLowerCase();

    let [firstName, lastName] = fullName.split(" ");

    let userName = firstName.slice(0,3) + lastName.slice(0,3); //esto es para separar y concatenar los tres primeros digitos de nombre y apellido

    let email = `${userName}@myDomain.com`;

    //prueba para verificar unicidad

    if(userName in users){
        let count = 1;
        while((userName + count) in users) {
            count++;
        }
        userName += count;
        email= `${userName}@myDomain.com`;
    }

    //se guarda en users
    users[userName]=email;

    console.log(`Nombre de Usuario: ${userName}`);
    console.log(`Correo Electronico: ${email}`);

}


while(true){
    userNameAndEmailGenerator();
    let check = confirm("quieres agregar otro usuario?");
    if(!check){
        break
    }
}

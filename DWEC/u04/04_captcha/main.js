function comprobar() {
    let arrayErrores=new Array();
    let valido=true;
    arrayErrores.push(comprobarNombre());
    arrayErrores.push(comprobarEdad());
    arrayErrores.push(comprobarGenero());
    arrayErrores.push(comprobarFecha());
    arrayErrores.push(comprobarProvincia());
    //arrayErrores.push(comprobarCaptcha());
    for (let ele of arrayErrores){
        if (!ele){
            valido=false;
        }
    }
    //si el valor de la variable valido es true, los datos se envían.
    //por el contrario si el valor es false, no se realiza el submit
    return valido
}

function comprobarNombre() {
    let check = true;
    //el método checkValidity() comprueba si el dato cumple los requisitos
    //establecidos en la etiqueta de html
    if (!document.getElementById("nombre").checkValidity()) {
        document.getElementById("errorNombre").innerHTML = document.getElementById("nombre").validationMessage;
        //el método validationMessage() visualiza el mensaje acorde
        //con el error cometido
        check = false;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
    }
    return check;
}
function comprobarEdad() {
    let check = true;
    if (!document.getElementById("edad").checkValidity()) {
        document.getElementById("errorEdad").innerHTML = document.getElementById("edad").validationMessage;
        check = false;
    } else {
        document.getElementById("errorEdad").innerHTML = "";
    }
    return check;
}
function comprobarFecha() {
    let check = true;
    if (!document.getElementById("fecha").checkValidity()) {
        document.getElementById("errorFecha").innerHTML = document.getElementById("fecha").validationMessage;
        check = false;
    } else {
        document.getElementById("errorFecha").innerHTML = "";
    }
    return check;
}

function comprobarGenero() {
    let check = false;
    //recorrer los elementos cuyo atributo name es 'genero'
    for (let ele of document.getElementsByName("genero")) {
        if (ele.checked == true) {
            check = true
        }
    }
    if (!check) {
        document.getElementById("errorGenero").innerHTML = "Completa este campo";

    } else {
        document.getElementById("errorGenero").innerHTML = "";
    }
    return check;
}


function comprobarProvincia() {
    let check = false;
    if (document.getElementById("provincia").selectedIndex == 0) {
        document.getElementById("errorProvincia").innerHTML = "completa este Campo";

    } else {
        document.getElementById("errorProvincia").innerHTML = "";
        check = true;
    }
    return check;
}
// function comprobarCaptcha(){
//     let check = false;
//     if(grecaptcha.getResponse()==""){
//         document.getElementById("errorCaptcha").innerHTML = "completa este Campo";
//     } else {
//         document.getElementById("errorCaptcha").innerHTML = "";
//         check=true;
//     }
//     return check;
// }


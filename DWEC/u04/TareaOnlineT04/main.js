"user strict";

var formulario, nombre, genero, email, tlfno, provincia;
var fechaReserva, fechaSalida, intentos, acookies;

document.cookie = "contador= 0";

window.addEventListener("load", function () {

    //document.cookie="visitas =;expires = Thu, 01 Jan 1970 00:00:01 GMT";

    // Establecemos los objetos del from

    // Ya que el formulario no tiene id lo podemos llamar mediante el nombre de su clase
    // formulario = document.getElementsByClassName("contact_form");

    // O por el primer form que encuentra
    formulario = document.forms[0];
    nombre = formulario.elements[0];
    genero = document.getElementById("genero");
    email = document.getElementById("email");
    tlfno = document.getElementById("tlfno");
    provincia = document.getElementById("provincia");
    fechaReserva = document.getElementById("fechaReserva");
    fechaSalida = document.getElementById("fechaSalida");
    intentos = document.getElementById("intentos");


    // Elimina el evento por defecto del submit (comentado en el foro)
    // Le añado el nuevo evento para realizar las comprobaciones
    formulario.addEventListener("submit", function (event) {
        event.preventDefault()
    });
    formulario.addEventListener("submit", comprobar);

    // Nommbre en mayúscual al perder el foco
    nombre.addEventListener("blur", convertirMayusculas);
    // Patrón de email
    email.addEventListener("blur", comprobarPatronEMail);
    // Keypress teléfono
    tlfno.addEventListener("keypress", keypressTelefono);
    // Valida fechaReserva
    fechaReserva.addEventListener("blur", validaFechaReserva);
    // Keypress fechaSalida
    fechaSalida.addEventListener("keypress", keypressFechaSalida);
    // Valida fechaSalida
    fechaSalida.addEventListener("blur", validaFechaSalida);


});

// FUNCIONES

function loadCookie() {
    /*  3. Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo 
    y mostrar un mensaje en el contenedor "Nº de intentos en el envío de datos:  X". 
    Es decir, cada vez que se pulsa el botón de enviar y los datos son correctos, 
    tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido en el div antes mencionado. 
    Nota: para poder actualizar el contenido de un contenedor o div, la propiedad ha modificar 
    para ese objeto es innerHTML.
    */

    var todasCookies = document.cookie;

    // console.log(todasCookies);

    // Si no existe 
    // if (!todasCookies) {
    //     intentos.innerHTML = 'Es la primera vez que visita la página';
    //     // Crea la cookie
    //     document.cookie = "contador= 0";
    // }
    // else 
    // {

    acookies = todasCookies.split(';');
    let number = parseInt(acookies[0].split('=')[1]) + 1;
    document.cookie = "contador= " + number;
    intentos.innerHTML = document.cookie;
    intentos.innerHTML = 'Nº de intentos en el envío de datos: ' + number;

    //}

    // // Bucle para recorrer array de cookies
    // for (var i = 0; i < acookies.length; i++) {
    //     name = acookies[i].split('=')[0];
    //     value = acookies[i].split('=')[1];
    //     document.write("Clave: " + name + " Valor: " + value);
    // }
}

// function borrarC() {
//     document.cookie="visitas =0 ;expires = Thu, 01 Jan 1970 00:00:01 GMT";
// }


function convertirMayusculas() {
    /*  4. [x] Cada vez que el campo Nombre y Apellidos pierda el foco, 
    el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
    nombre.addEventListener("blur", convertirMayusculas);
    */
    nombre.value = nombre.value.toUpperCase();
}

function comprobarPatronEMail() {
    /*  5. [x] Validar mediante expresión regular el e-mail  
    Si se produce algún error mostrar el mensaje en el span  y 
    no permitir que el campo pierda el foco
    email.addEventListener("blur", comprobarPatronEMail);
    */
    let patronEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$");
    //validar si el email coincide con el patron
    if (!patronEmail.test(email.value)) {
        document.getElementById("errorEmail").innerHTML = " Formato no correcto";
        email.focus();
    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }

}

function validarNum(e) {
    // Para que puda usarse por cualquier navegador
    let evento = e || event;
    if (evento.which < 48 || evento.which > 57) { //error

        evento.preventDefault(); // Invalida la aparación de caracter
    }

}


function keypressTelefono(e) {
    /* 6. [x] Validar el Teléfono no permitiendo visualizar nada más que números y el espacio, 
     utilizando el método keypress.
     tlfno.addEventListener("keypress", keypressTelefono);
    */
    let evento = e || event;
    let longitud = this.value.length;

    if (longitud != 3 && longitud != 6 && longitud != 9) {
        validarNum(evento);
        //} else if (evento.key != " ") { //  (evento.which != 58)
    } else if (evento.which != 32) { //  :
        evento.preventDefault();
    }
}


function keypressFechaSalida(e) {
    /* 8. Validar el campo Fecha salida utilizando el método keypress 
    (no se mostrarán nada más que números y '/'. Debe cumplir el formato: dd/mm/aaaa.
     tlfno.addEventListener("keypress", keypressTelefono);
    */
    let evento = e || event;
    let longitud = this.value.length;

    if (longitud > 9) { // Para el máximo de caracteres
        evento.preventDefault();
    }
    else if (longitud != 2 && longitud != 5) {
        validarNum(evento);

    } else if (evento.key != "/") {
        evento.preventDefault();
    }


}

function validaFechaReserva() {

    // dd/mm/yyyy
    //let patronFecha =  /^([0-2][0-9]|3[0-1])(\/)(0[1-9]|1[012])(\/)([2]\d{3})$/; // solo siglo XI
    let patronFecha = /^([0-2][0-9]|3[0-1])(\/)(0[1-9]|1[012])(\/)(\d{4})$/;

    /*
    ^ Al inicio de una cadena

    GRUPO DIA ([0-2][0-9]|3[0-1])
    - [0-2][0-9] Primeros dos dígitos 0-2 y 0-9 (01, 19 , 29) 
    - | operador lógico "OR"
    - 3[0-1] Si el primero es un 3 los siguientes solo puende ser 0 o 1 (30 0 31) 

    GRUPO BARRA
    - (\/) 

    GRUPO MES (0[1-9]|1[0-2])
    - 0[1-9] Si empieza por 0 el segundo podrá ser del 1 al 9 (Enero a Septiembre)
    - | operador lógico "OR"
    - 1[0-2] Si empieza por 1 el segundo podrá ser del 0 al 2 (10, 11 o 12)

    GRUPO BARRA
    - (\/) 

    GRUPO AÑO (\d{4})
    - Cuatro dígitos del YYYY

    $ Al final de la cadena
    */


    // Valida el test de la expresión regular
    if (!patronFecha.test(fechaReserva.value) || fechaHoy(fechaReserva.value)) {
        document.getElementById("errorfechaReserva").innerHTML = " Formato fecha no correcto";
        document.getElementById("errorfechaReserva").innerHTML += " o fecha anterior a la actual.";
        fechaReserva.value = '';
        fechaReserva.focus();
    }

    else {
        document.getElementById("errorfechaReserva").innerHTML = "";

    }

}

function validaFechaSalida() {
    // Revisa que sea una fecha correcta mediante la función fechaCorrecta()
    if (!fechaCorrecta(fechaSalida.value)) {
        document.getElementById("errorfechaSalida").innerHTML = " Formato fecha no correcto";
        fechaSalida.value = '';
        fechaSalida.focus();
    }

    else {
        document.getElementById("errorfechaSalida").innerHTML = "";

    }
    // Revisa que sea posterior a la reserva mediante la función fechaEntradaSalida()
    if (fechaEntradaSalida(fechaReserva.value, fechaSalida.value)) {
        document.getElementById("errorfechaSalida").innerHTML = " La fecha debe ser posterior a la reserva";
        fechaSalida.value = '';
        fechaSalida.focus();
    }

    else {
        document.getElementById("errorfechaSalida").innerHTML = "";

    }

}


function fechaCorrecta(fechaRev) {
    /**
     * Comprueba si los datos de las cajas de fecha son correctos
     * @param  {String} fecha Campos de textos de la Fechas del formulario.
     * @return {Boolean}    True/false.
    **/

    let check = false
    var aFecha = fechaRev.split("/");
    var dia = aFecha[0];
    var mes = aFecha[1];
    var annio = aFecha[2];
    var d = new Date(annio, mes, dia);

    if (d.toString() != 'Invalid Date' && (d instanceof Date) == true) {
        check = true;
    }

    return check;
}

function fechaHoy(fechaRev) {

    /**
     * Comprueba si la fecha de llegada es igual o mayor que la actual
     * @param  {String} fecha Campos de textos de la Fechas del formulario.
     * @return {Boolean}    True si es igual.
    **/

    let check = false

    let fechaActualTotal = new Date();
    let fechaActual = new Date(fechaActualTotal.getFullYear(), fechaActualTotal.getMonth(), fechaActualTotal.getDate());

    let aFecha = fechaRev.split("/");
    let dia = aFecha[0];
    let mes = aFecha[1] - 1;
    let annio = aFecha[2];
    let fecha = new Date(annio, mes, dia)

    let resta = (fecha - fechaActual);
    if (resta < 0) { // si es igual 0 (hoy) o mayor

        check = true; // devuelve que es igual
    }

    return check;

}


function fechaEntradaSalida(feEntrada, feSalida) {

    /**
     * Comprueba si la fecha de salida es mayor a la de entrada
     * @param  {String} fecha Campos de textos de la Fechas del formulario.
     * @param  {String} fecha Campos de textos de la Fechas del formulario.
     * @return {Boolean}    True si es igual.
    **/

    let check = false

    // Crea fecha de entrada
    let aFecha1 = feEntrada.split("/");
    let dia1 = aFecha1[0];
    let mes1 = aFecha1[1] - 1;
    let annio1 = aFecha1[2];
    let fecha1 = new Date(annio1, mes1, dia1);
    console.log(fecha1);

    // Crea fecha de salida
    let aFecha2 = feSalida.split("/");
    let dia2 = aFecha2[0];
    let mes2 = aFecha2[1] - 1;
    let annio2 = aFecha2[2];
    let fecha2 = new Date(annio2, mes2, dia2);
    console.log(fecha2);

    let resta = (fecha2 - fecha1);
    console.log(resta);
    if (resta <= 0) { // si es igual 0 (hoy) o menor

        check = true; // devuelve que es igual
    }

    return check;

}



// COMPROBACIÓN (SUBMIT)

function comprobar() {
    let arrayErrores = new Array();
    let valido = true;
    arrayErrores.push(comprobarNombre());
    arrayErrores.push(comprobarGenero());
    arrayErrores.push(comprobarEMail());
    arrayErrores.push(comprobarTelefono());
    arrayErrores.push(comprobarProvincia());
    arrayErrores.push(comprobarFechaReserva());
    arrayErrores.push(comprobarFechaSalida());
    //arrayErrores.push(comprobarCaptcha());


    for (let ele of arrayErrores) {
        if (!ele) {
            valido = false;
        }
    }

    // Lanza confirm
    if (valido) {
        if (confirm("¿Estas seguro de enviar los datos de este formulario?")) {
            alert('Formulario enviado');
            formulario.reset(); // Limpia el formulario
            loadCookie(); // Gestión de cookies para visitas
        } else {
            alert('Formulario no enviado');
        }

    }
    // si el valor de la variable valido es true, los datos se envían.
    // por el contrario si el valor es false, no se realiza el submit
    return valido
}


function comprobarNombre() {
    let check = true;

    if (nombre.value == '') {
        document.getElementById("errorNomApe").innerHTML = " Completa este campo";

        check = false;
    } else {
        document.getElementById("errorNomApe").innerHTML = "";
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
        document.getElementById("errorGenero").innerHTML = " Completa este campo"; // No usamos el validationMessage

    } else {
        document.getElementById("errorGenero").innerHTML = "";
    }
    return check;
}

function comprobarEMail() {
    /*Comprueba que el valor esté completo
    */
    let check = true;

    if (email.value == '') { // o !email.value
        document.getElementById("errorEmail").innerHTML = " Completa este campo";
        check = false;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
    }
    return check;
}


function comprobarTelefono() {

    let check = true;

    if (tlfno.value == '') {
        document.getElementById("errorTelefono").innerHTML = " Completa este campo";
        //el método validationMessage() visualiza el mensaje acorde
        //con el error cometido
        check = false;
    } else {
        document.getElementById("errorTelefono").innerHTML = "";
    }
    return check;
}



function comprobarProvincia() {
    let check = false;
    if (provincia.selectedIndex == 0) {
        document.getElementById("errorProvincia").innerHTML = " Completa este campo";

    } else {
        document.getElementById("errorProvincia").innerHTML = "";
        check = true;
    }
    return check;
}

function comprobarFechaReserva() {
    /*
    5. Validar mediante expresión regular el e-mail  
    Si se produce algún error mostrar el mensaje en el span  
    y no permitir que el campo pierda el foco
    */
    let check = true;
    if (!fechaReserva.value) {

        document.getElementById("errorfechaReserva").innerHTML = " Completa este campo";
        check = false;
    } else {
        document.getElementById("errorfechaReserva").innerHTML = "";
    }
    return check;
}

function comprobarFechaSalida() {
    let check = true;
    if (!fechaSalida.value) {
        document.getElementById("errorfechaSalida").innerHTML = " Completa este campo";

    }

    else {
        document.getElementById("errorfechaSalida").innerHTML = "";
    }
    return check;
}

// function comprobarCaptcha() {
//     let check = false;
//     if (grecaptcha.getResponse() == "") {
//         document.getElementById("errorCaptcha").innerHTML = "Completa este campo";
//     } else {
//         document.getElementById("errorCaptcha").innerHTML = "";
//         check = true;
//     }
//     return check;
// }

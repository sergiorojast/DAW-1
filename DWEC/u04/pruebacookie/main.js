"user strict";

var intentos, acookies;

//document.cookie = "contador= 0";

window.addEventListener("load", function () {

    intentos = document.getElementById('intentos');

    // Función de manejo de cookies
    loadCookie();

    // 2 Añade visita cada vez que carga
    // Dependerá de submit
    //addCookie();

});


function addCookie() {
    var todasCookies = document.cookie;

    acookies = todasCookies.split(';');
    let number = parseInt(acookies[0].split('=')[1]) + 1;
    document.cookie = "contador= " + number;
    intentos.innerHTML = document.cookie;

}



function loadCookie() {
    // Carga cookies por primera vez
    var todasCookies = document.cookie;

    // console.log(todasCookies);

    // Si no existe 
    if (!todasCookies) {
        intentos.innerHTML = 'Es la primera vez que visita la página';
        // Crea la cookie
        document.cookie = "contador= 0";
    }
    else {

        acookies = todasCookies.split(';');
        let number = parseInt(acookies[0].split('=')[1]) + 1;
        document.cookie = "contador= " + number;
        intentos.innerHTML = document.cookie;
        intentos.innerHTML = 'Nº de intentos en el envío de datos: ' + number;
    }

    // // Bucle para recorrer array de cookies
    // for (var i = 0; i < acookies.length; i++) {
    //     name = acookies[i].split('=')[0];
    //     value = acookies[i].split('=')[1];
    //     document.write("Clave: " + name + " Valor: " + value);
    // }
}


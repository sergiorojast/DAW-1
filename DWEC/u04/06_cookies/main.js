"user strict";

let oClave, oValor, capaLista;

window.addEventListener("load", function () {
    // establecer los objetos

    oClave = document.getElementById("clave");
    oValor = document.getElementById("valor");
    capaLista = document.getElementById("listar");

    // Tablecer los veneots de valores
    document.getElementById("crearCookie").addEventListener("click", crearC);
    document.getElementById("mostrarCookie").addEventListener("click", mostrarC);
    document.getElementById("borrarCookie").addEventListener("click", borrarC);
    document.getElementById("listarCookie").addEventListener("click", listarC);

});

function crearC() {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + 5000000);
    document.cookie = oClave.value + "=" + oValor.value + "; expires =" + fecha.toGMTString();
}

function mostrarC() {
    let buscar = "La cokkie no existe";
    if (document.cookie != "") {
        let aCookies = document.cookie.split("; ");
        for (let ele of aCookies) {
            let aDatos = ele.split("=");
                if (aDatos[0] == oClave.value) {
                    buscar = aDatos[1];
                }
        }
    }
    oValor.value = buscar;
}

function borrarC() {

    document.cookie=oClave.value + "=;expires = Thu, 01 Jan 1970 00:00:01 GMT";

}

function listarC() {
    let aCookies;

    if (document.cookie != "") {


        aCookies = document.cookie.split(";");
        //limpia capa

        capaLista.innerHTML = '';
        //recorremos el array aCookies para mostra en la capa
        for (ele of aCookies) {
            capaLista.innerHTML += ele + "br";
        }
    } else {
        capaLista.innerHTML = 'No hay cookies que lista';
    }
}
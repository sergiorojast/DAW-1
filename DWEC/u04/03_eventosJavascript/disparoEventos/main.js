"use strict";

window.addEventListener("load", function () {
    // Objetos n variables objetos
    document.getElementById("capa1").addEventListener("click", accionCapa1, false) // captura
    document.getElementById("capa2").addEventListener("click", accionCapa2) // captura
})

function accionCapa1() {
    alert("Ha realziado clic en capa 1");
}


// function accionCapa2() {
//     alert("Ha realziado clic en capa 2");
// }

function accionCapa2(e) {
    let evento = e || event;
    alert("Ha realziado clic en capa 2");
    evento.stopPropagation(); // Solo para burbujeo finaliza la propagacion del evento
}
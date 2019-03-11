"use strict"
var miCanvas;
window.addEventListener("load", function () {
    miCanvas = document.getElementById("micanvas");
    dibujarTexto
});



function dibujarTexto() {

    var miCanvas = document.getElementById("lienzo_texto");

    var dibTexto = miCanvas.getContext("2d");

    dibTexto.textBaseline = "ideographic";
    dibTexto.textAlign = "center";
    //dibTexto.font = "2em Nueva";
    dibTexto.fillStyle = "purple";
    dibTexto.fillText("TEXTO DE PRUEBA", 150, 75);

}



"use strict"
var miCanvas;
window.addEventListener("load", function () {
    miCanvas = document.getElementById("micanvas");
    dibujaRec();
    dibujarCirculo();
    dibujarTriangulo();
    dibujarCirculoDegradado();
});



function dibujaRec() {
    //let miCanvas = document.getElementById("micanvas");
    let rectangulo = miCanvas.getContext('2d');
    if (rectangulo) {
        rectangulo.fillRect(300, 300, 50, 50);
    }
}

function dibujarCirculo() {
    //let miCanvas = document.getElementById("micanvas");
    let circulo = miCanvas.getContext('2d');
    if (circulo) {
        circulo.fillStyle = "rgb(0,255,127)";
        circulo.arc(50, 50, 40, 0, 2 * Math.PI, true);
        circulo.fill();
    }


}

function dibujarTriangulo() {
    //creamos el objeto que referencia al canvas.

    // creamos el contexto
    let dibujo = miCanvas.getContext('2d');

    // inicializamos el dibujo
    dibujo.beginPath();
    //definimos punto de inicio.
    dibujo.moveTo(50, 200);

    //línea hasta las coordenadas 200, 120
    dibujo.lineTo(200, 50);

    //línea hasta las coordenadas 90,120
    dibujo.lineTo(50, 0);
    dibujo.closePath();

    // cierra el trazado definido y rellena la figura.

    // Efectos
    dibujo.fillStyle = "#4B0082";
    dibujo.shadowBlur = 40;
    dibujo.shadowColor = "black";
    dibujo.shadowOffsetX = 20;
    dibujo.shadowOffsetY = 10;

    dibujo.fill();
}

function dibujarCirculoDegradado() {

    let dibujo = miCanvas.getContext('2d');
    let grd = dibujo.createRadialGradient(50, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "OrangeRed");
    grd.addColorStop(1, "Gold");
    dibujo.fillStyle = grd;
    dibujo.arc(250, 250, 60, 0, 2 * Math.PI, true);
    dibujo.fill();
}
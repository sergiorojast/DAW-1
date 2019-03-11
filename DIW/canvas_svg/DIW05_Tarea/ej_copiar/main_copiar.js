"use stric";

var micanvas;

window.addEventListener("load", function () {
    miCanvas = document.getElementById("micanvas");
    dibujaDosCirculos();
})

function dibujaDosCirculos() {
    let circulo = miCanvas.getContext("2d");

    circulo.fillStyle = "gold";

    circulo.arc(120, 80, 30, 0, 2 * Math.PI, true);
    circulo.fill();

    circulo.translate(90, 70);
    circulo.arc(120, 80, 40, 0, 2 * Math.PI, true);
    circulo.fill();

    let dibujo = miCanvas.getContext("2d");
    dibujo.fillStyle = "blue";
    dibujo.fillRect(100, 250, 50, 50);
    dibujo.translate(10, 10);
    dibujo.rotate(20,17);
    dibujo.fillRect(10, 10, 100, 50);
}
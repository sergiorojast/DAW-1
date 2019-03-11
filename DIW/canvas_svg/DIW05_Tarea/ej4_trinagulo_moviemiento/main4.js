"use strict"

var avance = 0;

window.addEventListener("load", inicio);

function inicio() {
    setInterval(dibujarTriangulo, 20);
}


function dibujarTriangulo() {
    var canvas = document.getElementById("lienzo");
    var triangulo = canvas.getContext("2d");


    if (triangulo) {
        triangulo.clearRect(0, 0, 500, 500);
        triangulo.save();
        triangulo.fillStyle = "blue";
        triangulo.translate(150, 150);
        triangulo.rotate(avance);


        triangulo.beginPath();
        triangulo.moveTo(50 / 2, 10 / 2);
        triangulo.lineTo(10 / 2, 150 / 2);
        triangulo.lineTo(150 / 2, 150 / 2);
        triangulo.lineTo(50 / 2, 10 / 2);
        triangulo.fill();
        triangulo.stroke();


        triangulo.restore();
        avance += 0.05;
        if (avance > Math.PI * 2)
            avance = 0;
    }
}



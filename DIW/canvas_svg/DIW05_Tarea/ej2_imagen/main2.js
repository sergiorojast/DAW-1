"use strict"

window.addEventListener("load", function () {
  dibujar();
})

function dibujar() {
  var canvas = document.getElementById("lienzo");

  if (canvas.getContext) {
    var lienzo = canvas.getContext("2d");
    var img = new Image();
    img.src = "kenny.jpg";
    lienzo.drawImage(img, 0, 0);
    img.onload = function () {
      lienzo.drawImage(img, 0, 0);
      lienzo.drawImage(img, 400, 0, 50, 50);
      lienzo.drawImage(img, 0, 200, 70, 130);
    }
  } else {
    alert("Su navegador no soporta canvas:O");
  }

}
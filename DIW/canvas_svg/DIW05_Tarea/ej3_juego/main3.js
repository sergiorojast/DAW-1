"use strict";

var pos1 = 350;
var pos2 = 300;

window.addEventListener("load", function () {
  dibujar();

})

function dibujar() {
  var miCanvas = document.getElementById("lienzo");

  // Fondo
  var lienzo_fondo = miCanvas.getContext("2d");
  var fondo = new Image();
  fondo.src = "fondo.png";
  fondo.onload = function () {
    lienzo_fondo.drawImage(fondo, 0, 0)
  }

  // Kenny
  var lienzo = miCanvas.getContext("2d");
  var img2 = new Image();
  img2.src = "kenny.png";
  img2.onload = function () {
    lienzo.drawImage(img2, pos1, pos2, 80, 80)
  }

  // Eventos para botones
  document.getElementById("izquierda").addEventListener("click", mueveIzquierda);
  document.getElementById("derecha").addEventListener("click", mueveDerecha);
  document.getElementById("arriba").addEventListener("click", mueveArriba);
  document.getElementById("abajo").addEventListener("click", mueveAbajo);

  function mueveIzquierda() {
    lienzo.clearRect(0, 0, 800, 450);
    lienzo_fondo.drawImage(fondo, 0, 0);
    fondo.onload = function () {
      lienzo_fondo.drawImage(fondo, 0, 0)
    }

    pos1 -= 50;
    lienzo.drawImage(img2, pos1, pos2, 80, 80);
    img2.onload = function () {
      lienzo.drawImage(img2, pos1, pos2, 80, 80)
    }
  }
  function mueveDerecha() {

    pos1 += 50;
    lienzo.clearRect(0, 0, 800, 450);
    lienzo_fondo.drawImage(fondo, 0, 0);
    fondo.onload = function () {
      lienzo_fondo.drawImage(fondo, 0, 0)
    }

    lienzo.drawImage(img2, pos1, pos2, 80, 80);
    img2.onload = function () {
      lienzo.drawImage(img2, pos1, pos2, 80, 80)
    }
  }

  function mueveArriba() {
    lienzo.clearRect(0, 0, 800, 450);
    lienzo_fondo.drawImage(fondo, 0, 0);

    fondo.onload = function () {
      lienzo_fondo.drawImage(fondo, 0, 0)
    }

    pos2 -= 50;
    lienzo.drawImage(img2, pos1, pos2, 80, 80);
    img2.onload = function () {
      lienzo.drawImage(img2, pos1, pos2, 80, 80)
    }
  }
  function mueveAbajo() {
    lienzo.clearRect(0, 0, 800, 450);
    lienzo_fondo.drawImage(fondo, 0, 0);
    fondo.onload = function () {
      lienzo_fondo.drawImage(fondo, 0, 0)
    }
    pos2 += 50;
    lienzo.drawImage(img2, pos1, pos2, 80, 80);
    img2.onload = function () {
      lienzo.drawImage(img2, pos1, pos2, 80, 80)
    }
  }
}
"use strict";

// Variables

var colorFondo = "blue",
  intervalo;

// Declrar funciones

function cambiarColor() {
  // cambiar color al body
  document.body.bgColor = colorFondo;
  if (colorFondo == "blue") {
    colorFondo = "green";
  } else {
    colorFondo = "blue";
  }
}


function iniciar() {
  // No le ponemos () ya que si no lo ejecutaría antes de hacer clic
  // lo asignamos a la varible intervalo para poder pararlo en parar()
  intervalo = setInterval(cambiarColor, 1000);
  //intervalo = setTimeout(cambiarColor, 2000);
}

function parar() {
  clearInterval(intervalo);
  //clearTimeout(intervalo);
}

var fecha = new Date();
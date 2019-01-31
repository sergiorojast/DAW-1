/*
Ejercicio 1.- 
Realizar una aplicación web con un script en un fichero externo que permita mover una ventana secundaria:
- La ventana principal tendrá dos botones: Iniciar y Parar
- El botón Iniciar, creará una ventana secundaria con el mensaje "Ventana en movimiento". 
- El tamaño de la ventana será 250pxX250px.
- Esta ventana se irá moviendo por toda la pantalla cada 2 segundos.
- El botón Parar, parará el movimiento de la ventana secundaria y aparecerá el siguiente mensaje: "Ventana en reposo"
*/

"use strict"; //obliga a declarar variables

// Variables
var ventana, intervalo;
var x = 5,
  y = 5; //Coordenadas iniciales de la ventana
var min = -400,
  max = 400; // rando para números coordenadas aleatroias

// Función para crear números aleatorios entre un máximo y un mínimo
function generaNumAleatorio() {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Función mueve la ventana según coordenadas aleatorias
function mover() {
  ventana.moveBy(generaNumAleatorio(), generaNumAleatorio());
}

// Función de que inicia el movimiento de una ventana
function iniciar() {
  // Si la ventana no está definida o la ventana está cerrada
  if (ventana == undefined || ventana.closed == true) {
    ventana = window.open(
      "",
      "Ventana en movimiento",
      "width= 250, height=250"
    );

    ventana.moveTo(x, y); // Posición inicial de ventana

    ventana.document.write("<div id='mensaje'>Ventana en movimiento</div>");
  } else {
    // Si la ventana ya está abierta o creada...
    ventana.document.getElementById("mensaje").innerHTML =
      "Ventana en movimiento";
  }

  ventana.focus(); // Foco a ventana

  // Repite la función mover cada 2 segundo
  intervalo = setInterval(mover, 2000);
}

// Función que para el movimiento de la ventana
function parar() {
  clearInterval(intervalo); // Borra intervalo
  ventana.focus(); // Foco a ventana
  // Actualiza texto de div mensaje
  ventana.document.getElementById("mensaje").innerHTML = "Ventana en reposo";
}

"use strict";

/*
Pide una serie de números (6)
Los guarda en un array aNumeros
Muestra usaod for, for in for of
*/


var aNumeros = new Array();
var num;

//funciones
function entradaDatos() {
  for (let i = 0; i < 6; i++) {
    num = prompt("Número " + (i + 1));
    aNumeros[i] = num;
  }
}
function mostrarArray() {
  document.write("<h2>LISTADO DEL ARRAY aNumeros</h2>");
  for (let i = 0; i < aNumeros.length; i++) {
    document.write("Indice = " + i + " = " + aNumeros[i] + "<br>");
  }

  document.write("<h2>LISTADO DEL ARRAY aNumeros con FOR IN</h2>");
  for (let i in aNumeros) {
    document.write("Indice = " + i + " = " + aNumeros[i] + "<br>");
  }

  document.write("<h2>LISTADO DEL ARRAY aNumeros con FOR of</h2>");
  for (let ele of aNumeros) {
    document.write("Dato = " + ele + "<br>");
  }
}

// -----------Main--------------

entradaDatos();
mostrarArray();

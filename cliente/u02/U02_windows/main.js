"use strict";

// variables gobales

var ventana, ventanaII, ventanaIII;

function abrir() {

    // abrir ventana

    ventana = window.open();
    ventana.document.write("<h1>Ventana secundaria</h1>");
}


// // abrir ventana 2

// ventanaII = window.open("http://www.iestrassierra.com/");

// // abrir ventana 3
// ventanaIII = window.open("ventana3.html", "ventana3", "width= 300, height=300");
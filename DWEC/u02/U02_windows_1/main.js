"use strict";

// variables gobales

// var ventana, ventanaII, ventanaIII;
var ventana;

function abrir() {

    // abrir ventana
    //console.log(ventana);
    if (ventana == undefined || ventana.closed == true) { // Avisa que la ventana secundaria 


        ventana = window.open("", "Ventana secundaria", "width= 300, height=300");
        ventana.document.write("<h1>Ventana secundaria</h1>");

        // establecer botón de cerrar en la ventana secundaria

        ventana.document.write("<button onclick='self.close();'>Cerrar ventana secundaria</button>");
    } else {
        alert('Ventana secuntaria está abierta')
    }

}

function cerrar() {

    if (ventana == undefined || ventana.closed) {
        if (confirm("¿Desea cerrar la ventana?") ) {
            self.close(); // cerrar ventana principal
        }
    } else {
        alert("No se puede cerrar. La ventana secundaria no está cerrada")
    }

}



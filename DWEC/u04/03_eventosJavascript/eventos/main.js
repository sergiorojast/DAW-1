"use strict";

var pulsaII;
document.getElementById("pulsarII");

/// al cargar el documento, establecer los eventos

window.addEventListener("load", function () {
    // estblecer eventos clic a todos lo botones y enlace
    pulsaII = document.getElementById("pulsarII");
    document.getElementById("pulsarI").addEventListener("click", function () {
        alert("pulsar I");
    });

    pulsaII.addEventListener("click", clickPulsarII);
    // pulsaII.addEventListener("click", clickPulsarIV);

    document.getElementById("enlace").addEventListener("click", function () {
            alert("Este enlace no te lleva a Google");
            event.preventDefault(); //anula la acción del objeto
        }


    )
    document.getElementById("pulsarIV").addEventListener("click", clickPulsarIV);
})

function clickPulsarII() {
    alert("pulsa II");
}

function clickPulsarIV() {
    //document.getElementById("pulsarIV").value = "Prueba de eventos";
    this.value = "Prueba de eventos"; // Llama al evento que lo está llamando
}
"use strict";

let oNumber, notNumber, ohoras;

window.addEventListener("load", function () {
    // Objetos n variables objetos
    oNumber = document.getElementById("numeros");
    notNumber = document.getElementById("noNumeros");
    ohoras = document.getElementById("hora");

    oNumber.addEventListener("keypress", validarNum);
    notNumber.addEventListener("keypress", validarNoNum);
    ohoras.addEventListener("keypress", validarHoras);

    // estabclecer el fo en numeros
    oNumber.focus();
})

function validarNum(e) {
    // Para que puda usarse por cualquier navegador
    let evento = e || event;
    if (evento.which < 48 || evento.which > 57) { //error

        evento.preventDefault(); // Ivalida la aparación de caracter
    }

}

function validarNoNum(e) {
    // Para que puda usarse por cualquier navegador
    let evento = e || event;
    if (evento.which >= 48 && evento.which <= 57) { //error

        evento.preventDefault(); // Ivalida la aparación de números
    }

}

// Solo número menos la posición 3 solo :
function validarHoras(e) {
    let evento = e || event;
    let longitud = this.value.length;

    if (longitud != 2) {
        validarNum(evento);
    } else if (evento.which != 58) { // (evento.key!":")
        evento.preventDefault();
    }


}
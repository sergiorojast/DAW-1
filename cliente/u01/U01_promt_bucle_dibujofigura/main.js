"use strict"; //obliga a declarar variables

var caracter, numFila, numColumna; // no es necesario inicializarla porque n o se van a ser cálculos


// pide carácter
caracter = prompt("Carácter (debe ser * o +");

while (caracter != "*" && caracter != "+") { // isNaN si no es un número o es vacio
    caracter = prompt("Error, deben * o + \nCarácter (debe ser * o +");
}

numFila = prompt("Nº de filas");

while (isNaN(numFila) || numFila == "" || numFila < 1 || numFila > 10) {
    numFila = prompt("Error, deben ser números\nNº de filas");
}

numColumna = prompt("Nº de columnas");

while (isNaN(numColumna) || numColumna == "" || numColumna < 1 || numColumna > 10) {
    numColumna = prompt("Error, deben ser números\nNº de columnas");
}

// dibuja
for (let i = 0; i < numFila; i++) {

    for (let i = 0; i < numColumna; i++) {
        document.write(caracter + " ")
    }
    document.write("<br>")

}
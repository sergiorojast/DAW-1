"use strict"; //obliga a declarar variables

// Todas las variables globales arriba

var numVeces, suma = 0;

// Pedir el número de num a introducir
numVeces = prompt("¿Cuántos números desea introducir?");

while (isNaN(numVeces) || numVeces == "") { // isNaN si no es un número o es vacio
    numVeces = prompt("Error, deben ser números \n¿Cuántos números desea introducir?");
}

console.log(typeof numVeces); // visualizar en consola el tiepo de variable. Nos ha devuelto string

//hacemos el bucle para pedir los números

for (let i = 0; i < numVeces; i++) { // let variable del blouqe var sería global
    let num = prompt("Introduzca número");

    while (isNaN(num) || num == "") { // isNaN si no es un número o es vacio
        num = prompt("Error, deben ser números \nIntroduzca números");
    }

    suma += parseInt(num); // atento que prompt es tipo string (ver consolo.log)
// declaramos dentro la variable del número porque no la vamos a usar
// el contador sí

}



document.write("La media es " + (suma / numVeces))

// F12 Abre depurador
// Resources
// Añadir puntos de ruptura resources
// F10 continua
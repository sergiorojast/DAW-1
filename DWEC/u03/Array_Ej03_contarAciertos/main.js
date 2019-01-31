"use strict";

var aciertos = 0;

var aNumeros = new Array();
var aAleatorio = new Array();

for (let i = 0; i < 6; i++) {
  aAleatorio[i] = i + 2;
}

for (let i = 0; i < 6; i++) {
  aNumeros[i] = i + 1;
}

console.log("Muestra acierto");
console.log(aciertos);

for (let i = 0; i < aNumeros.length; i++) {
  if (aAleatorio.includes(aNumeros[i])) {
    aciertos += 1;
    console.log(i);
    console.log(aNumeros[i]);
    console.log(aciertos);
  }
}

// }

var mensaje = "";
mensaje += aNumeros + "\n";
mensaje += aAleatorio + "\n";
mensaje += aciertos + "\n";

alert(mensaje);

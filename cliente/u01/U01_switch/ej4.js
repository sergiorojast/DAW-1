"use strict"; //obliga a declarar variables

// Variables globales

var nota, textoNota;

// Pedir nota
nota = prompt("Introduce la nota (0-10): ");

// Indica si el valr de la nota no es correcto
while (isNaN(nota) || nota == "" || nota < 0 || nota > 10) {
  nota = prompt(
    "Error, deben ser números entre 0 y 10 \nIntroduce la nota (0-10)"
  );
}

switch (true) {
  case nota >= 0 && nota < 3:
    textoNota = "Muy deficiente";
    break;
  case nota >= 3 && nota < 5:
    textoNota = "Insuficiente";
    break;
  case nota >= 5 && nota < 6:
    textoNota = "Suficiente";
    break;
  case nota >= 6 && nota < 7:
    textoNota = "Bien";
    break;
  case nota >= 7 && nota < 9:
    textoNota = "Notable";
    break;
  case nota >= 9 && nota <= 10:
    textoNota = "Sobresaliente";
}

// Mensaje con la calificación
alert("Nota final: " + textoNota);

/*
- Crear un programa con un script en fichero externo que pemita salir a la “Lotería primitiva”. 
- Se pedirá al usuario que introduzca 6 números enteros comprendidos entre el 1 y el 49 ambos incluidos, otro dato será incorrecto
- Se utilizará un bucle para controlar que el dato sea correcto. 
- No estará permitido repetir número. 
- Una vez elegidos los seis números el programa nos mostrará nuestros 6 números así como la combinación ganadora (ordenada de menor a mayor)
- Esta combinación constará de 6 números entre 1 y 49 elegidos al azar por el programa. 
- Finalmente nos dirá cuántos aciertos hemos tenido y nos preguntará si queremos volver a salir. 
- No se empleará en este ejercicios arrays.
*/

"use strict"; //obliga a declarar variables

// ----------Variables----------
var num1, ale1;

var num1_ok = false;

var aciertos = 0;
var resultados = "";
var numeros = "Números seleccionados: ";
var salir = true;

// ---------Funciones----------

// Función para validar número. Debe ser numérico, no nulo o vacío
function revNum(num) {
  if (isNaN(num) || num == "" || num == null) {
    return true;
  } else {
    return false;
  }
}

// Función para validar rango de número
function revRango(num) {
  if (num < 1 || num > 49) {
    return true;
  } else {
    return false;
  }
}

// Función para validar comparación entre números
function revIgual(numA, numB) {
  if (numA == numB) {
    return true;
  } else {
    return false;
  }
}

// Función número aleatorio entre 1 y 49
function generaAleatorio() {
  return Math.floor(Math.random() * 49) + 1;
}

// Función para ordenar números


// ----------Programa----------

// Mientras salir sea true se sigue jugando
while (salir) {
  // Solicita el Nº 1
  num1 = parseInt(prompt("Nº 1 (entero entre 1 y 49)"));

  while (num1_ok == false) {
    if (revNum(num1) || revRango(num1)) {
      num1 = parseInt(prompt("Error\nNº 1 (entero entre 1 y 49)"));
    } else {
      num1_ok = true;
      numeros += num1;
    }
  }

  

  // ----------Generación de números aleatorios----------

  ale1 = generaAleatorio();

//   ale2 = generaAleatorio();
//   while (ale2 == ale1) {
//     ale2 = generaAleatorio();
//   }




  // ----------Calcula aciertos----------

  if (
    num1 == ale1
  ) {
    aciertos += 1;
  }

  

  // ----------Presenta resultados----------
  resultados += "LOTERIA PRIMITIVA\n";
//   resultados +=
//     "Numeros Elegidos: " +
//     ordenarNumeros(num1, num2, num3, num4, num5, num6) +
//     "\n";
//   resultados +=
//     "Combinación ganadora: " +
//     ordenarNumeros(ale1, ale2, ale3, ale4, ale5, ale6) +
//     "\n";
//   resultados += "Has acertado: " + aciertos + " números";

  var salir = confirm(resultados + "\n¿Desea probar de nuevo?");
  resultados = "";
}

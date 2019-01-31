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

var num1, num2, num3, num4, num5, num6;

var num1_ok = false,
  num2_ok = false,
  num3_ok = false,
  num4_ok = false,
  num5_ok = false,
  num6_ok = false;

var ale1 = 0,
  ale2 = 0,
  ale3 = 0,
  ale4 = 0,
  ale5 = 0,
  ale6 = 0;

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
// Códifo obtenido y adaptado de la siguiente entrada
// https://www.lawebdelprogramador.com/foros/Java/1621861-Ordenar-numeros-con-IF.html
function ordenarNumeros(n1, n2, n3, n4, n5, n6) {
  if (n1 < n2) {
    n1 += n2;
    n2 = n1 - n2;
    n1 -= n2;
  }
  if (n1 < n3) {
    n1 += n3;
    n3 = n1 - n3;
    n1 -= n3;
  }
  if (n1 < n4) {
    n1 += n4;
    n4 = n1 - n4;
    n1 -= n4;
  }
  if (n1 < n5) {
    n1 += n5;
    n5 = n1 - n5;
    n1 -= n5;
  }

  if (n1 < n6) {
    n1 += n6;
    n6 = n1 - n6;
    n1 -= n6;
  }
  if (n2 < n3) {
    n2 += n3;
    n3 = n2 - n3;
    n2 -= n3;
  }
  if (n2 < n4) {
    n2 += n4;
    n4 = n2 - n4;
    n2 -= n4;
  }
  if (n2 < n5) {
    n2 += n5;
    n5 = n2 - n5;
    n2 -= n5;
  }

  if (n2 < n6) {
    n2 += n6;
    n6 = n2 - n6;
    n2 -= n6;
  }

  if (n3 < n4) {
    n3 += n4;
    n4 = n3 - n4;
    n3 -= n4;
  }
  if (n3 < n5) {
    n3 += n5;
    n5 = n3 - n5;
    n3 -= n5;
  }
  if (n3 < n6) {
    n3 += n6;
    n6 = n3 - n6;
    n3 -= n6;
  }

  if (n4 < n5) {
    n4 += n5;
    n5 = n4 - n5;
    n4 -= n5;
  }

  if (n4 < n6) {
    n4 += n6;
    n6 = n4 - n6;
    n4 -= n6;
  }

  if (n5 < n6) {
    n5 += n6;
    n6 = n5 - n6;
    n5 -= n6;
  }

  return n6 + " " + n5 + " " + n4 + " " + n3 + " " + n2 + " " + n1;
}

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

  // Solicita el Nº 2
  num2 = parseInt(
    prompt(numeros + "\nNº 2 (entero entre 1 y 49) y no repetido")
  );

  while (num2_ok == false) {
    if (revNum(num2) || revRango(num2) || revIgual(num2, num1)) {
      numeros = numeros;
      num2 = parseInt(
        prompt(numeros + "\nError\nNº 2 (entero entre 1 y 49) y no repetido")
      );
    } else {
      num2_ok = true;
      numeros += ", " + num2;
    }
  }

  // Solicita el Nº 3
  num3 = parseInt(
    prompt(numeros + "\nNº 3 (entero entre 1 y 49) y no repetido")
  );

  while (num3_ok == false) {
    if (
      revNum(num3) ||
      revRango(num3) ||
      revIgual(num3, num1) ||
      revIgual(num3, num2)
    ) {
      numeros = numeros;
      num3 = parseInt(
        prompt(numeros + "\nError\nNº 3 (entero entre 1 y 49) y no repetido")
      );
    } else {
      num3_ok = true;
      numeros += ", " + num3;
    }
  }
  // Solicita el Nº 4
  num4 = parseInt(
    prompt(numeros + "\nNº 4 (entero entre 1 y 49) y no repetido")
  );

  while (num4_ok == false) {
    if (
      revNum(num4) ||
      revRango(num4) ||
      revIgual(num4, num1) ||
      revIgual(num4, num2) ||
      revIgual(num4, num3)
    ) {
      numeros = numeros;
      num4 = parseInt(
        prompt(numeros + "\nError\nNº 4 (entero entre 1 y 49) y no repetido")
      );
    } else {
      num4_ok = true;
      numeros += ", " + num4;
    }
  }

  // Solicita el Nº 5
  num5 = parseInt(
    prompt(numeros + "\nNº 5 (entero entre 1 y 49) y no repetido")
  );

  while (num5_ok == false) {
    if (
      revNum(num5) ||
      revRango(num5) ||
      revIgual(num5, num1) ||
      revIgual(num5, num2) ||
      revIgual(num5, num3) ||
      revIgual(num5, num4)
    ) {
      numeros = numeros;
      num5 = parseInt(
        prompt(numeros + "\nError\nNº 5 (entero entre 1 y 49) y no repetido")
      );
    } else {
      num5_ok = true;
      numeros += ", " + num5;
    }
  }

  // Solicita el Nº 6
  num6 = parseInt(
    prompt(numeros + "\nNº 6 (entero entre 1 y 49) y no repetido")
  );

  while (num6_ok == false) {
    if (
      revNum(num6) ||
      revRango(num6) ||
      revIgual(num6, num1) ||
      revIgual(num6, num2) ||
      revIgual(num6, num3) ||
      revIgual(num6, num4) ||
      revIgual(num6, num5)
    ) {
      numeros = numeros;
      num6 = parseInt(
        prompt(numeros + "\nError\nNº 6 (entero entre 1 y 49) y no repetido")
      );
    } else {
      num6_ok = true;
      numeros += ", " + num6;
    }
  }

  // ----------Generación de números aleatorios----------

  ale1 = generaAleatorio();

  ale2 = generaAleatorio();
  while (ale2 == ale1) {
    ale2 = generaAleatorio();
  }


  ale3 = generaAleatorio();
  while (ale3 == ale1 || ale3 == ale2) {
    ale3 = generaAleatorio();
  }

  ale4 = generaAleatorio();
  while (ale4 == ale1 || ale4 == ale2 || ale4 == ale3) {
    ale4 = generaAleatorio();
  }


  ale5 = generaAleatorio();
  while (ale5 == ale1 || ale5 == ale2 || ale5 == ale3 || ale5 == ale4) {
    ale5 = generaAleatorio();
  }


  ale6 = generaAleatorio();
  while (
    ale6 == ale1 ||
    ale6 == ale2 ||
    ale6 == ale3 ||
    ale6 == ale4 ||
    ale6 == ale5
  ) {
    ale6 = generaAleatorio();
  }

  // ----------Calcula aciertos----------

  if (
    num1 == ale1 ||
    num1 == ale2 ||
    num1 == ale3 ||
    num1 == ale4 ||
    num1 == ale5 ||
    num1 == ale6
  ) {
    aciertos += 1;
  }

  if (
    num2 == ale1 ||
    num2 == ale2 ||
    num2 == ale3 ||
    num2 == ale4 ||
    num2 == ale5 ||
    num2 == ale6
  ) {
    aciertos += 1;
  }

  if (
    num3 == ale1 ||
    num3 == ale2 ||
    num3 == ale3 ||
    num3 == ale4 ||
    num3 == ale5 ||
    num3 == ale6
  ) {
    aciertos += 1;
  }

  if (
    num4 == ale1 ||
    num4 == ale2 ||
    num4 == ale3 ||
    num4 == ale4 ||
    num4 == ale5 ||
    num4 == ale6
  ) {
    aciertos += 1;
  }

  if (
    num5 == ale1 ||
    num5 == ale2 ||
    num5 == ale3 ||
    num5 == ale4 ||
    num5 == ale5 ||
    num5 == ale6
  ) {
    aciertos += 1;
  }

  if (
    num6 == ale1 ||
    num6 == ale2 ||
    num6 == ale3 ||
    num6 == ale4 ||
    num6 == ale5 ||
    num6 == ale6
  ) {
    aciertos += 1;
  }

  // ----------Presenta resultados----------
  resultados += "LOTERIA PRIMITIVA\n";
  resultados +=
    "Numeros Elegidos: " +
    ordenarNumeros(num1, num2, num3, num4, num5, num6) +
    "\n";
  resultados +=
    "Combinación ganadora: " +
    ordenarNumeros(ale1, ale2, ale3, ale4, ale5, ale6) +
    "\n";
  resultados += "Has acertado: " + aciertos + " números";

  var salir = confirm(resultados + "\n¿Desea probar de nuevo?");
  resultados = "";
}

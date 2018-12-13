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

// --------- VARIABLES ----------

var num;
var num_ok = false;
var aciertos = 0;
var aNumeros = new Array();
var aAleatorio = generaArrayAleatorios();

// var aNumeros = new Array (1,2,3,4,5,6);
// var aAleatorio = new Array (6,7,8,9,10,11);

var salir = true;

// --------- FUNCIONES ----------

/**
 * Función para validar número. Debe ser numérico, no nulo o vacío
 * @function revNum
 * @param  {int} num Número
 * @return {boolean}     True/False
 */
function revNum(num) {
  if (isNaN(num) || num == "" || num == null) {
    return true;
  } else {
    return false;
  }
}

/**
 * Función para validar rango de número (1-49)
 * @function revRango
 * @param  {int} num Número
 * @return {Boolean}     True/False
 */
function revRango(num) {
  if (num < 1 || num > 49) {
    return true;
  } else {
    return false;
  }
}

/**
 * Función para validar que el número no está repetido
 * @function revRepetido
 * @param  {int} num Número
 * @return {boolean}     True/False
 */
function revRepetido(num) {
  if (aNumeros.includes(num)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Función entradaArrayDatos
 * @function  entradaArrayDatos()
 */
function entradaArrayDatos() {
  for (let i = 0; i < 6; i++) {
    // Solicita el N

    num = parseInt(prompt("Nº " + (i + 1) + " (entero entre 1 y 49)"));

    if (revRango(num) || revNum(num) || revRepetido(num)) {
      alert("Error\nFormato incorrecto, fuera de rango o repetido");
      i--;
    } else {
      aNumeros[i] = num;

      // Forma 1: Va calculando aciertos
      if (aAleatorio.includes(num)) {
        aciertos++;
      }
    }
  }

  /// Forma 2:Usando inclues dentro de un for NO FUNCIONA!!!!!!
  // for (let i = 0; i < aNumeros.length; i++) {
  //   if (aAleatorio.includes(aNumeros[i])) {
  //     aciertos++;
  //   }
  // }

  // Forma 3: Pasando los dos arrays y comparando por posición
  // Ordena el array para poder comparar por posición
  // aNumeros.sort(function(a, b) {
  //   return a - b;
  // });
  // for (let i = 0; i < aNumeros.length; i++) {
  //   for (let j = 0; j < aAleatorio.length; j++) {
  //     if (aNumeros[i] == aAleatorio[j]) {
  //       aciertos++;
  //     }
  //   }
  // }
}

/**
 * Función array de aleatorio  1 y 49
 * @function generaArrayAleatorio
 * @return {Array}     Array de 6 enteros no repetidos
 */
function generaArrayAleatorios() {
  let aAleatorios = new Array();

  for (let i = 0; i < 6; i++) {
    let numAle = Math.floor(Math.random() * 49) + 1;

    // si el número no está en aleatorio lo añade al array
    while (!aAleatorios.includes(numAle)) {
      aAleatorios[i] = numAle;
    }
  }

  // Ordena el array de Aletatorio
  aAleatorios.sort(function(a, b) {
    return a - b;
  });

  return aAleatorios;
}

/**
 * Función muestra resultados
 * @function mostrarResultados
 * @return {String}     Cadena con resultados
 */

function mostrarResultados() {
  let resultados = "Resultados de Lotería\n";
  resultados +=
    "Apuesta: " +
    // Ordena array
    aNumeros.sort(function(a, b) {
      return a - b;
    }) +
    "\n";

  resultados += "Combinación ganadora: " + aAleatorio + "\n";
  resultados += "Número de aciertos: " + aciertos + "\n";

  return resultados;
}

// --------- PROGRAMA ----------

// Mientras salir sea true se sigue jugando
do {
  // Bucle para pedir los seis números
  entradaArrayDatos();

  // Pregunta para salir/continuar
  var salir = confirm(mostrarResultados() + "\n¿Desea probar de nuevo?");

  /// Limpiamos arrays y aciertos y reiniciamos aciertos
  aNumeros = new Array();
  aAleatorio = generaArrayAleatorios();
  aciertos = 0;
} while (salir);

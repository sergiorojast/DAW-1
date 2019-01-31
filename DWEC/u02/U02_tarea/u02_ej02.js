/*
Ejercicio 2.- 

- Crear un script en fichero externo donde se introduzca un nombre y la fecha de nacimiento mediante el método prompt(). 
- La fecha tendrá el formato mmm dd, yyyy. 
- Los 3 primeros caracteres representan las 3 primeras letras del mes en inglés. 
- Si la cadena introducida no se reconoce como fecha se mostrará un mensaje indicando el error y se volverá a pedir el dato. 
- La entrada de datos se repetirá hasta que el usuario desee acabar, para ello se utilizará el método confirm(). 
- Cuidado cuando el día y/o mes de la fecha de nacimiento es superior a la fecha actual.


- Devolver en una ventana con el siguiente mensaje: "XXXXXXXX tiene XX años" . 
*/
"use strict"; //obliga a declarar variables

// ----------Variables----------

var nombre, fechaString, fechaDate, fechaHoy, fechaSplit;
var checkFecha = false;
var checkNombre = false;
var salir = true;

// ----------Funciones----------

// Función que devuelve años
function calcualaedadEnAnnios(fechaEdad) {
  // datos de fecha de nacimiento
  var dia = fechaEdad.getDate();
  var mes = fechaEdad.getMonth();
  var ano = fechaEdad.getYear();

  // fecha hoy
  var fecha_hoy = new Date();

  var ahora_ano = fecha_hoy.getYear();
  var ahora_mes = fecha_hoy.getMonth();
  var ahora_dia = fecha_hoy.getDate();

  var edadEnAnnios = ahora_ano + 1900 - ano;

  if (ahora_mes < mes - 1) {
    edadEnAnnios--;
  }
  if (mes - 1 == ahora_mes && ahora_dia < dia) {
    edadEnAnnios--;
  }
  if (edadEnAnnios > 1900) {
    edadEnAnnios -= 1900;
  }

  return edadEnAnnios;
}

// Función para devolver texto mes en inglés
function mes(numMes) {
  switch (numMes) {
    case 0:
      return "jan";
    case 1:
      return "feb";
    case 2:
      return "mar";
    case 3:
      return "apr";
    case 4:
      return "may";
    case 5:
      return "jun";
    case 6:
      return "jul";
    case 7:
      return "aug";
    case 8:
      return "sep";
    case 9:
      return "oct";
    case 10:
      return "nov";
    case 11:
      return "dec";
  }
}

// Función para indicar si las fechas son iguales.
function comparaFechas(fecha1, fecha2) {
  var coincide = false;

  // Para el mismo día/mes/año o superior a la fecha actual
  if (
    fecha1.getDate() >= fecha2.getDate() &&
    fecha1.getMonth() >= fecha2.getMonth() &&
    fecha1.getFullYear() >= fecha2.getFullYear()
  ) {
    coincide = true;
    alert("Error\n La fecha es igual o superior a la actual");
  }
  return coincide;
}

// ----------Programa----------

while (salir) {
  // Entrada de nombre mediante el método prompt().
  nombre = prompt("Introduzca su nombre");

  // Bucle para nombre
  while (checkNombre == false) {
    if (nombre == "" || nombre == null) {
      nombre = prompt("Error\nIntroduzca de nuevo su nombre");
    } else {
      checkNombre = true;
    }
  }

  // Entrada de fecha mediante el método prompt().
  fechaString = prompt("Introduzca fecha de nacimiento mmm dd, yyyy");
  // Conversión cadena a fcha
  fechaDate = new Date(fechaString);
  fechaHoy = new Date();

  // Bucle para fecha

  while (checkNombre == true && checkFecha == false) {
    if (
      fechaString == "" ||
      fechaString == null ||
      comparaFechas(fechaDate, fechaHoy)
    ) {
      nombre = confirm(
        prompt("Error\nIntroduzca de nuevo la fecha de nacimiento mmm dd, yyyy")
      );
    } else {
      checkFecha = true;
    }
  }

  // Comprueba si es fecha es checkFecha
  if (fechaDate != "Invalid Date") {
    // Traer las diferentes partes de la cadena
    fechaSplit = fechaString.split(" ");

    if (
      fechaSplit[0].length == 3 &&
      fechaSplit[1].length == 3 &&
      fechaSplit[2].length == 4 &&
      fechaSplit[1].indexOf("," == 2)
    ) {
      // compara Fecha tb sbstr
      if (
        fechaSplit[1].slice(0, 2) == fechaDate.getDate() &&
        fechaSplit[2] == fechaDate.getFullYear() &&
        fechaSplit[0].toLowerCase() == mes(fechaDate.getMonth())
      ) {
        checkFecha = true;
      }
    }
  }

  if (checkFecha) {
    // Devolver en una ventana con el siguiente mensaje: "XXXXXXXX tiene XX años" .

    if (calcualaedadEnAnnios(fechaDate) == 1900) {
      // indica que todavía no ha cumplido 1 año
      alert(nombre + " tiene 0 años.");
    } else {
      alert(nombre + " tiene " + calcualaedadEnAnnios(fechaDate) + " años.");
    }
  } else {
    alert("Fecha incorrecta");
  }

  var salir = confirm("¿Desea probar de nuevo?");
}

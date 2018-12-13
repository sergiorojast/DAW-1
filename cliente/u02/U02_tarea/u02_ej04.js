"use strict"; //obliga a declarar variables

// Ejercicio 4.- Crear un script en un fichero externo que mediante los métodos aportados por el objeto string permita

var frase = "JavaScript se está comiendo al mundo";

document.write("<ul>");

// Mostrar la longitud de la frase.
document.write("<li>Longitud de la frase: " + frase.length + "</li>");

// Mostrar en que posición empieza la palabra comiendo.
var pos = frase.indexOf("comiendo");
document.write(
  "<li>Posición empieza la palabra comiendo: " +
    frase.indexOf("comiendo") +
    "</li>"
);

// Extraer en una variable, la palabra JavaScript.
var ini_pos = frase.indexOf("JavaScript");
var longitud = "JavaScript".length;
var palabra = frase.substr(ini_pos, longitud);
document.write(
  "<li>Extraer en una variable, la palabra JavaScript: " + palabra + "</li>"
);

// Mostrar la primera posición de la letra "o".
document.write(
  "<li>Primera posición de la letra 'o': " + frase.indexOf("o") + "</li>"
);

// Mostrar la última posición de la letra "o".
document.write(
  "<li>Última posición de la letra 'o': " + frase.lastIndexOf("o") + "</li>"
);

// Mostrar la frase en mayúsculas
document.write("<li>Frase en mayúsculas: " + frase.toUpperCase() + "</li>");

// Mostrar la frase en minúsculas.
document.write("<li>Frase en minúsculas: " + frase.toLowerCase() + "</li>");

// Reemplazar la palabra "JavaScript" por "lenguaje script".

var frase_replace = frase.replace("JavaScript", "lenguaje script");
document.write(
  '<li>Reemplazar la palabra "JavaScript" por "lenguaje script": ' +
    frase_replace +
    "</li>"
);

// Eliminar todos los espacios en blanco de la frase.
var frase_sinespacios = frase.replace(/ /g, "");
document.write(
  "<li>Eliminar todos los espacios en blanco de la frase: " +
    frase_sinespacios +
    "</li>"
);

// Eliminar todas las e, tanto mayúsculas como minúsculas.
var frase_sines = frase.replace(/e/gi, "");
document.write(
  "<li>Eliminar todas las e, tanto mayúsculas como minúsculas : " +
    frase_sines +
    "</li>"
);

// Mostrar el redondeo al número más cercano del 57.49.
var num = 57.49;

document.write(
  "<li>Mostrar el redondeo al número más cercano del 57.49 : " +
    num.toFixed(0) +
    "</li>"
);

// Mostrar un número aleatorio entre 5 y 26.
var max = 26,
  min = 5;
var aleatorio = Math.random() * (max - min) + min;
document.write(
  "<li>Mostrar un número aleatorio entre 5 y 26 : " +
    parseInt(aleatorio) +
    "</li>"
);

// Mostrar el número mayor de (4, 300, -1, 76, 55).

var mayor = Math.max(4, 300, -1, 76, 55);
document.write(
  "<li>Mostrar el número mayor de (4, 300, -1, 76, 55) : " + mayor + "</li>"
);

document.write("</ul>");

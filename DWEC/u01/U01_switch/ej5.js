"use strict"; //obliga a declarar variables

// Definimos las variables globales
var check = false,
  dni_num,
  div_entera,
  letra;

do {
  // Hasta que chek no pase a ser true (dato del DNI correcto) continúa preguntado

   dni_num = prompt("Introduce número de DNI");

  while (check == false) {
    //dni_num = prompt("Introduce número de DNI");

    if (isNaN(dni_num) || dni_num < 0 || dni_num > 99999999 || dni_num < "") {
      alert("Incorrecto");
    } else {
      div_entera = dni_num % 23;

      check = true; // sale del bucle while
    }
  }

  // Según el dato de  div_entera se le asignara un valor a letra

  switch (div_entera) {
    case 0:
      letra = "T";
      break;
    case 1:
      letra = "R";
      break;
    case 2:
      letra = "W";
      break;
    case 3:
      letra = "A";
      break;
    case 4:
      letra = "G";
      break;
    case 5:
      letra = "M";
      break;
    case 6:
      letra = "Y";
      break;
    case 7:
      letra = "F";
      break;
    case 8:
      letra = "P";
      break;
    case 9:
      letra = "D";
      break;
    case 10:
      letra = "X";
      break;

    case 11:
      letra = "B";
      break;

    case 12:
      letra = "N";
      break;

    case 13:
      letra = "J";
      break;

    case 14:
      letra = "Z";
      break;

    case 15:
      letra = "S";
      break;

    case 16:
      letra = "Q";
      break;

    case 17:
      letra = "V";
      break;

    case 18:
      letra = "H";
      break;

    case 19:
      letra = "L";
      break;

    case 20:
      letra = "C";
      break;

    case 21:
      letra = "K";
      break;
    case 22:
      letra = "E";
  }

  // Había utilizado este código pero se comentó en clase que debíamos usar swich...case
  // var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  // letra = letras.substring(div_entera, div_entera + 1);

  if (dni_num) {
    alert("El DNI es = " + dni_num + "-" + letra);
  }
} while (dni_num);

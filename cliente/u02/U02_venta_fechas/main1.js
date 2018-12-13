"user strict";

// Variables

var ventana, cadena;

// Función para crear dato aleatorio entre max y min
function creaAletorio() {
  var max = 200,
    min = 500;
  var nunAle = Math.random() * (max - min) + min;
  return nunAle.toFixed(0);
}

// Funión para crear ventana
function abrirVentana() {
  ventana = window.open(
    "",
    "Ventana",
    "height=" + creaAletorio() + ", width=" + creaAletorio()
  );

  var fechaHoy = new Date();
  // variables de la fecha
  var diasem = fechaHoy.getDay();
  var ndia = fechaHoy.getDate();
  var nummes = fechaHoy.getMonth();
  var annio = fechaHoy.getFullYear();
  var hora = fechaHoy.getHours();
  var minutos = fechaHoy.getMinutes();

  cadena =
    "Hoy es " +
    devuelveDia(diasem) +
    ", " +
    ndia +
    " de " +
    devuelveMes(nummes) +
    " de " +
    annio;
  cadena += " y son las " + hora + ":" + minutos;
  ventana.document.write(cadena);
}

// Función para devolver dia en texto
function devuelveDia(numdia) {
  var diatxt;
  switch (numdia) {
    case 0:
      diatxt = "Domingo";
      break;

    case 1:
      diatxt = "Lunes";
      break;

    case 2:
      diatxt = "Martes";
      break;
    case 3:
      diatxt = "Miércoles";
      break;
    case 4:
      diatxt = "Jueves";
      break;

    case 5:
      diatxt = "Viernes";
      break;
    case 6:
      diatxt = "Sábado";
      break;
  }
  return diatxt;
}

// Función para devolver mes en texto
function devuelveMes(nummes) {
  var mestxt;
  switch (nummes) {
    case 0:
      mestxt = "Enero";
      break;

    case 1:
      mestxt = "Febrero";
      break;

    case 2:
      mestxt = "Marzo";
      break;
    case 3:
      mestxt = "Abril";
      break;
    case 4:
      mestxt = "Mayo";
      break;

    case 5:
      mestxt = "Junio";
      break;
    case 6:
      mestxt = "Julio";
      break;
    case 7:
      mestxt = "Agosto";
      break;
    case 8:
      mestxt = "Septiembre";
      break;
    case 9:
      mestxt = "Octubre";
      break;
    case 10:
      mestxt = "Noviembre";
      break;
    case 11:
      mestxt = "Diciembre";
      break;
  }
  return mestxt;
}

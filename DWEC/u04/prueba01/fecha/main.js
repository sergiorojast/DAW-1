"user strict";



function fechaHoy(fechaRev) {

  //   /**
  //    * Comprueba si la fecha de llegada es igual o mayor que la actual
  //    * @param  {String} fecha Campos de textos de la Fechas del formulario.
  //    * @return {Boolean}    True si es igual.
  //   **/

  let check = false

  let fechaActualTotal = new Date();
  let fechaActual = new Date(fechaActualTotal.getFullYear(), fechaActualTotal.getMonth(), fechaActualTotal.getDate());

  let aFecha = fechaRev.split("/");
  let dia = aFecha[0];
  let mes = aFecha[1] - 1;
  let annio = aFecha[2];
  let fecha = new Date(annio, mes, dia)

  let resta = (fecha - fechaActual);
  if (resta >= 0) { // si es igual 0 (hoy) o mayor

    check = true; // devuelve que es igual
  }

  return check;
}

// var fechaActualTotal = new Date();
// var fechaActual = new Date(fechaActualTotal.getFullYear(), fechaActualTotal.getMonth(), fechaActualTotal.getDate());
// console.log(fechaActual);
// var fechaLlegada1 = new Date("2019", "00", "28");
// console.log(fechaLlegada1);
// var fechaLlegada2 = new Date("2019", "00", "29");
// console.log(fechaLlegada2);
// var fechaLlegada3 = new Date("2019", "00", "27");
// console.log(fechaLlegada3);

// console.log(fechaLlegada1 - fechaActual)
// console.log(fechaLlegada2 - fechaActual)
// console.log(fechaLlegada3 - fechaActual)

console.log(fechaHoy("27/01/2019"));
console.log(fechaHoy("28/01/2019"));
console.log(fechaHoy("29/01/2019"));



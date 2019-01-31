/**
 * Calcula la letra de un DNI.
 */
function calculaLetra() {
  var check = false;

  while (check == false) {
    var dni_num = prompt("Introduce número de DNI");

    if (isNaN(dni_num) || dni_num < 0 || dni_num > 99999999) {
      alert("Incorrecto");
    } else {
      var div_entera = dni_num % 23;
      alert("El DNI es = " + dni_num + "-" + letra(div_entera));
      check = true;
      document.getElementById("letra").innerHTML = letra(div_entera);
    }
  }
}

/**
 * Devuelve la letra
 * @param {number} div División entera.
 * @return {string} Letra.
 */
function letra(div) {
  var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  return letras.substring(div, div + 1);
}

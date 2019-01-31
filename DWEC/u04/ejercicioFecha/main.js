"use strict";
//fechaString es la fecha que introducimos, fechaDate la fecha en formato Date a la que la convertimos,
//y fechaSplit los cortes que hacemos para mes, dia y año
var fechaString, fechaDate, fechaSplit;
var correcta = false;



//switch para hacer cuadrar los números de mes con los tres primeros caracteres
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

//entrada de fecha
fechaString = prompt("Introduzca fecha de nacimiento mmm dd, yyyy");



//arriba hacer un bucle por si es incorrecta

//conversión de cadena a fecha
fechaDate = new Date(fechaString);
console.log(fechaDate);


if (fechaDate != "Invalid Date") {
    //extraer las diferentes partes de la cadena
    fechaSplit = fechaString.split(" ");
    console.log(fechaSplit);

    //comprobamos el formato
    if (fechaSplit[0].length == 3 && fechaSplit[1].length == 3 && fechaSplit[2].length == 4 && fechaSplit[1].indexOf(",") == 2) {


        //el slice coje las dos primeras letras, para quitar la coma
        if (fechaSplit[1].slice(0, 2) == fechaDate.getDate() && fechaSplit[2] == fechaDate.getFullYear() && fechaSplit[0] == mes(fechaDate.getMonth())) {
            correcta = true;
          
        }
    }
}
if (correcta == true) {

    alert("Fecha correcta"+ fechaDate);

}

if (correcta == false) {

    alert("Fecha incorrecta");
}
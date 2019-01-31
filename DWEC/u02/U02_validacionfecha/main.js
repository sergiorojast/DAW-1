"user strict";
// Variables

var fechaString, fechaDate, fechaSplit;
var correcta = false;

//funciones

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

// Entrada de fecha

fechaString = prompt("Introduzca fecha de nacimiento mmm dd, yyyy");
// hacerle bucle 

// Conversión cadena a fcha

fechaDate = new Date(fechaString);

// Comprueba si es fecha es correcta
if (fechaDate != "Invalid Date") {

    // Traer las diferentes partes de la cadena
    fechaSplit = fechaString.split(" ");
    console.log(fechaSplit);
    console.log(fechaSplit[0].length);
    console.log(fechaSplit[1].length);
    console.log(fechaSplit[2].length);


    if (fechaSplit[0].length == 3 && fechaSplit[1].length == 3 && fechaSplit[2].length == 4 && fechaSplit[1].indexOf("," == 2)) {
        // compara Fecha tb sbstr
        if (fechaSplit[1].slice(0, 2) == fechaDate.getDate() && fechaSplit[2] == fechaDate.getFullYear() && fechaSplit[0].toLowerCase() == mes(fechaDate.getMonth())) {
            correcta = true;
        }
    }
}

if (correcta) {
    alert("Fecha correcta");

} else {
    alert("Fecha incorrecta");
}
console.log(fechaDate);
"user strict";

// var num = Math.floor(Math.random() * (10 - 5) ) + 5;  // Del 5 al 9
//var num = Math.floor(Math.random() * (10 - 5 + 1) ) + 5;  // Del 5 al 10

var num = Math.round(Math.random() * (10 - 5) ) + 5;  // Del 5 al 10

document.getElementById("capa").innerHTML= num;
// document.write("Número aletorio 5 - 10: " + aletorio);

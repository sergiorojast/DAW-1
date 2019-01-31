"use strict";

var aAletarios = new Array();
var aPares = new Array();
var aImpares = new Array();
var aAletariosFin = new Array();

function crearAleatorio() {
  let numAletorio = Math.floor(Math.random() * 200 + 1);
  return numAletorio;
}

function parImpar (numero){
    if (numero % 2 == 0) {
        return 0;
    } else {
        return 1;
    }
}
// document.write('El número 11 es ' + parImpar(11) +'<br>');
// document.write('El número 10 es ' + parImpar(10) +'<br>');

var totalNumArra = 0;

while (totalNumArra < 20) {
  let num = crearAleatorio();
  if (aAletarios.indexOf(num) === -1) {
    //aAletarios.push([parImpar(num), num]);
    aAletarios.push(num);
    totalNumArra += 1;
  }
}


aAletarios.forEach(element => {
  if(parImpar(element) == 0){
    aPares.push(element);
  } else {
    aImpares.push(element);
  }
});

document.write("Pares<br>");
// Ordenamos
aPares.sort(function(a,b){return a-b});
aPares.forEach(element => {
  document.write(element + "<br>");
});

document.write("Impares<br>");
// Ordenamos
aImpares.sort(function(a,b){return a-b});
aImpares.forEach(element => {
  document.write(element + "<br>");
});

// ordena como letras
//aAletarios.sort();

// ordena como numeros
//aAletarios.sort(function(a,b){return a - b});

// ordena multidimensional 1 campo
// aAletarios.sort(function(a,b){return a[0] - b[0]});

// Concatenamos los arrays
aAletariosFin = aPares.concat(aImpares);


document.write("Fin<br>");
aAletariosFin.forEach(element => {
  document.write(element + "<br>");
});
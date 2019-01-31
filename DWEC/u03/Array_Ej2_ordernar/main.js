"use strict";

/*
Distintos ejemplos de ordenación de arrays
*/

var aNombres = new Array("Fernando", "María", "Ana", "Zacarías", "Pedro");
var aNumeros = new Array(6, 4, 22, 1, 8);

function ordenNombres() {
    //forma ascendente
    aNombres.sort();
    //descente
    aNombres.reverse();

    document.write("<h2> Orden de Nombres</h2>")
    for (let ele of aNombres) {
        document.write(ele + " <br>")
    }
}

function ordenNumeros() {
    //forma ascendente
   aNumeros.sort(function (a,b){return a-b});
   // ordenación ascendente
    // aNumeros.sort(function (a,b){
    //     if (a>b){
    //         return 1;
    //     }else if (a<b){
    //         return -1
    //     }else return 0
        
    // }) 


    //ordenación descendente

    aNumeros.sort(function (a,b){return b-a});
    // aNumeros.reverse();
    
    // aNumeros.sort(function (a,b){
    //     if (a>b){
    //         return -1;
    //     }else if (a<b){
    //         return 1
    //     }else return 0
        
    // })
    //descente

    document.write("<h2> Orden de Numeros</h2><br>")
    for (let ele of aNumeros) {
        document.write(ele + " <br>")
    }
}

ordenNombres();
ordenNumeros();
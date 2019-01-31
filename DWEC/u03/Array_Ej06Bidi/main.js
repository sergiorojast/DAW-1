"use strict";
var aAlumnos = new Array();


function entradaDatos() {
    let nombre = "",
        edad, apellidos, i = 0;
    nombre = prompt("Introduzca nombre *-Fin");
    while (nombre != "*") {
        //crear la estructura unidimen a la fila
        aAlumnos[i] = new Array();
        //    //introducir el nombre al array
        //    aAlumnos[i][0] =nombre;
        //    aAlumnos[i][1]=prompt("Introduzca Apellidos");
        //    aAlumnos[i][2]=prompt ("Introduzca edad");
       
        apellidos = prompt("Introduzca Apellidos");
        edad = prompt("Introduzca edad");
        aAlumnos[i].push(nombre, apellidos, edad)
             i++;
        nombre = prompt("Introduzca nombre *-Fin");
    }
}

function mostrarDatos() {
 for (let i=0; i<aAlumnos.length; i++){
     for (let j=0; j<aAlumnos[i].length; j++){
        document.write(aAlumnos[i][j] + " ")
     }
     document.write("<br>")
 }

    for (let fila of aAlumnos){
        for (let ele of fila ){
            document.write(ele + " ")
        }
        document.write("<br>")
    }
}

function ordenar(){ //ordenar por apellidos de forma ascendente
    aAlumnos.sort(function(a,b){
        if (a[1]>b[1]){
            return 1
        }else if (a[1]<b[1]){
            return -1
        }else{
            return 0
        }
    })
}
//principal

entradaDatos();
ordenar();
mostrarDatos();
"use strict";
//declaración de variables y clases
let aEquipos = new Array();

class Equipos {
    constructor(nom, num, jug) {
        this.nomEquipo = nom;
        this.numJug = num;
        this.aNomJug = jug;
    }
    ordenAlfDesEquipo() {
        this.aNomJug.sort();
    }
    mostrarEquipo() {
        document.write("<center><h2>Equipo: " + this.nomEquipo + "</h2><br>");
        for (let index in this.aNomJug) {
            document.write("<b>Jugador/a " +(parseInt(index)+1) +": </b>"+ this.aNomJug[index] + "<br>")
        }
        document.write("<hr/>")
    }
}
//funciones de usuario
//función que comprueba que el dato solo debe ser un número
function validarNum(texto) {
    let num = prompt(texto);
    while (isNaN(num) || num == "" || num == null) {
        num = prompt("¡¡ERROR!!. El dato no es correcto\n" + texto)
    }
    return parseInt(num);
}

function entradaJugadores(num) {
    //función que permite la introducción de los jugadores
    let aJugadores = new Array();
    for (let i = 0; i < num; i++) {
        aJugadores.push(prompt("Introduzca Apellidos y nombre del jugador " + (i + 1)));
    }
    return aJugadores;
}

function ordenarDatos() {
    //ordenar los equipos en función del número de jugadores
    aEquipos.sort(function (a, b) {
        if (a.numJug < b.numJug) {
            return 1;
        } else return a.numJug > b.numJug ? -1 : 0;
    })
  // Ordenar los jugadores por apellidos y nombre
    for (let ele of aEquipos) {
        ele.ordenAlfDesEquipo();
    }
}

function entradaDatosEquipo() {
    let nom, num;
    nom = prompt("Introduzca nombre Equipo (*->Fin)");
    while (nom != "*") {
        num = validarNum("Introduzca número de jugadores");
        //Entrada de datos al array aEquipos con la estructura de la clase Equipos
        aEquipos.push(new Equipos(nom, num, entradaJugadores(num)));

        nom = prompt("Introduzca nombre Equipo (*->Fin)");
    }

}

function mostrarDatosEquipo() {
    //mostrar los datos de cada equipo
    for (let ele of aEquipos) {
        ele.mostrarEquipo();
    }
}

//parte principal
entradaDatosEquipo();
ordenarDatos();
mostrarDatosEquipo();
"use strict";
var objeto, nombre, apel, edad, aProfesores = new Array();
class Persona {
    constructor(nom, ape, anios) {
        this.nombre = nom;
        this.apellidos = ape;
        this.edad = anios;
    }
    mostrarDatos() {
        document.write("<br>nombre=" + this.nombre + ", apellidos =" + this.apellidos + ", edad =" + this.edad);
    }
}

class Profesor extends Persona {
    constructor(nom, ape, anios, esp, fechaAlt) {
        super(nom, ape, anios);
        this.especialidad = esp;
        this.fechaAlta = fechaAlt;
    }
    //método
    datosProfe() {
        document.write("<br>La especialidad es " + this.especialidad + " Fecha de Alta " + this.fechaAlta)
    }
}
//funciones usuario
function entradaDatos() {
    let i = 0;
    let nombre = prompt("Introduzca nombre de profesor, *->Fin");
    while (nombre != "*") {
        //preparar el array para manejar las propiedad del objeto
        aProfesores[i] = new Profesor();
        aProfesores[i].nombre=nombre;
        aProfesores[i].apellidos=prompt("Introduza apellidos");
        aProfesores[i].edad=prompt("Introduza edad");
        aProfesores[i].especialidad=prompt("Introduza especialidad");
        aProfesores[i].fechaAlta=prompt("Introduza FechaAlta");
        i++;

        nombre = prompt("Introduzca nombre de profesor, *->Fin");
    }
}
function ordenar(){
    aProfesores.sort(function(a,b){
        if(a.apellidos>b.apellidos){
            return 1;
        }else  if(a.apellidos<b.apellidos){
            return -1;
        }else return 0;

    })
}
function mostrarDatos(){
    for (let ele of aProfesores){
        ele.mostrarDatos(); // datos persona
        ele.datosProfe(); // datos profesor
    }


}



//parte principal
entradaDatos();
ordenar();
mostrarDatos();
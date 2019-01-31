"use strict";
var objeto, nombre, apel, edad;
function Persona(nom, ape, anios){
    //propiedades
    this.nombre=nom;
    this.apellidos=ape;
    this.edad=anios;

    // método
    // this.mostrarDatos=visualizar;

    // function visualizar(){
    //     document.write ("nombre="+ this.nombre+ ", apellidos ="+ this.apellidos+ ", edad ="+ this.edad);
      this.mostrarDatos=function(){
        document.write ("nombre="+ this.nombre+ ", apellidos ="+ this.apellidos+ ", edad ="+ this.edad);
    }
}

function Profesor(esp, fechaAlt){
    this.especialidad=esp;
    this.fechaAlta=fechaAlt;

    //método
    this.datosProfe=function(){
        document.write("<br>La especialidad es "+ this.especialidad + " Fecha de Alta "+ this.fechaAlta)
    }
}

//Profesor hereda de Persona



//parte principal


// nombre="María";
// apel="García";
// edad=33;
// objeto=new Persona(nombre, apel, edad);
// //mostrar los datos del objeto
// objeto.mostrarDatos();
Profesor.prototype=new Persona("Manuela", "Pérez García", 45,);
objeto=new Profesor( "Informática", "15/11/2018");
objeto.mostrarDatos();
objeto.datosProfe();

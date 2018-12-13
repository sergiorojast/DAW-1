"use strict";
var objeto;
function Persona(){
    //propiedades
    this.nombre="";
    this.apellidos="";
    this.edad=0;

    // método
    // this.mostrarDatos=visualizar;

    // function visualizar(){
    //     document.write ("nombre="+ this.nombre+ ", apellidos ="+ this.apellidos+ ", edad ="+ this.edad);
    // }
    this.mostrarDatos=function(){
        document.write ("nombre="+ this.nombre+ ", apellidos ="+ this.apellidos+ ", edad ="+ this.edad);
    }
}

//parte principal

objeto=new Persona();
objeto.nombre="María";
objeto.apellidos="García";
objeto.edad=33;
//mostrar los datos del objeto
objeto.mostrarDatos();



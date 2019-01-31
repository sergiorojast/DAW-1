"user strict";

var caja;

caja = document.getElementById("nombre");


function convertirMayusculas() {
    /*
        En este ejemplo accedemos a la propiedad value de un objeto con id nombre y le asignamos 
        su contenido actual pero convertido a mayúsculas con el método toUpperCase() del objeto String.
    */
   caja.value = caja.value.toUpperCase();
    //document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
}
"user strict";


// var actores;
// actores = document.getElementsByTagName("actores");


function mostrarDatos() {
    for (var i = 0; i < document.formulario.actores.length; i++) {
        if (document.formulario.actores[i].checked)
            alert(document.formulario.actores[i].value);
    }

    


}
"user strict";

let texto, boton;
window.addEventListener("load", function () {
    // establecer los objetos

    texto = document.getElementById("texto");
    boton = document.getElementById("miBoton");

    boton.addEventListener("click", validarHoras);

});


function validarHoras() {
    //let patronHora=/^([0-1][0-9]|2[0-3]):([0-5][0-9)])$/;
    let patronHora = new RegExp("^([0-1][0-9]|2[0-3]):([0-5][0-9)])$");

    //validar si el texto coincide con el patron
    if (patronHora.test(texto.value)) {
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }

    // pasar fo a la cja texto

    texto.focus();
}
function validar() {
    //establecer el patrón

    // let patron = /^perro|gato/;
    // inicia y finaliza
    //let patron = /^(perro|gato)$/; //Solo permite perro o gato
    // contenga solo ltras y que no esté vacio
    //let patron = /^[a-z]$/; // Un caracter
    // let patron = /^[a-z]+$/; // 1 a varios
    //let patron = /^[a-z\s]+$/; // 1 a varios o espacio en balnco
    //let patron = /^[a-z\sñá-ú]+$/; // 1 a varios o espacio en balnco, ñ, á ú
    //let patron = /^[a-z\sñá-úAZÑ]+$/; // 1 a varios o espacio en balnco, ñ, á ú
    //let patron = /^[a-z\sñá-ú]+$/i; // 1 a varios o espacio en balnco, ñ, á ú, i mayúsculas
    //let patron = /^[a-z\sñá-ú]{1,}$/i; // 1 a varios o espacio en balnco, ñ, á ú, i mayúsculas como minu un cracter
    //let patron = /^[a-z\sñá-ú]{1,10}$/i; // 1 a varios o espacio en balnco, ñ, á ú, i mayúsculas como minu un cracter

    //Numeros
    // let patron =/^\d{1,3}$/ //1 2 o 3 cifras  // digitos /^[0-9]{3}$/ siempre 3

    //Formato de hora



    //validar si el texto coincide con el patron
    if (patron.test(texto.value)) {
        alert("Correcto");
    } else {
        alert("Incorrecto");
    }

    // pasar fo a la cja texto

    texto.focus();
}
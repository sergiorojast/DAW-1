function pulsar() {

    //mostrar el nº de formularios que hay
    document.getElementById("mostrar").innerHTML += `<br>El número de formularios es:  ${document.forms.length}`;
    
    //mostrar el nº de objetos que hay el formulario1
    document.getElementById("mostrar").innerHTML = "El número de elementos del formulario 1 es: " + document.getElementById("formulario1").length;
    
    //muestra el id del formulario2
    document.getElementById("mostrar").innerHTML += `<br>El id del formulario2 es: ${document.forms["formulario2"].id}`;

    //recorre los formularios y a su vez los elementos que compone cada formulario
    for (let j = 0; j < document.forms.length; j++) {
        document.getElementById("mostrar").innerHTML += ("<br>Formulario Id " + document.forms[j].id);

        let formulario = document.forms[j];
        for (let i = 0; i < formulario.elements.length; i++) {
            document.getElementById("mostrar").innerHTML += ("<br> tipo del objeto " + formulario.elements[i].type);
        }
    }

}
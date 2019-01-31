function pulsar() {
    //diferentes formas para acceder al valor de la caja de texto

    //acceder mediante los name del formulario y de la caja de texto.
    document.getElementById("mostrar").innerHTML = document.formNameBusqueda.entradaName.value;
    //acceder mediante la colección elements del formulario
    document.getElementById("mostrar").innerHTML += `<br> ${document.formNameBusqueda.elements[0].value}`;
    //acceder mediante la colección de formularios y de elementos del formulario
    document.getElementById("mostrar").innerHTML += `<br> ${document.forms["formNameBusqueda"].elements["entradaName"].value}`;
    document.getElementById("mostrar").innerHTML += `<br> ${document.forms[0].entradaName.value}`;
    //acceder mediante el id del control
    document.getElementById("mostrar").innerHTML += `<br> ${document.getElementById("entrada").value}`;
}
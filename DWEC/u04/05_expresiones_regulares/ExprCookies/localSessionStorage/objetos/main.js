var nombre = document.getElementById("nombre"),
    edad = document.getElementById("edad");

//asignar eventos
document.getElementById("crearCookie").addEventListener("click", crear);
document.getElementById("listarCookie").addEventListener("click", listar);

function crear() {
    var objeto = {
        nombre: nombre.value,
        edad: edad.value
    }
    //TRANSFORMar A STRING Y GUARDAR
    objeto = JSON.stringify(objeto);
    localStorage.setItem("persona" + (localStorage.length+1), objeto);

    nombre.value = "";
    edad.value = ""
}

function listar() {
    document.getElementById("listar").innerHTML = ""
    for (let i = 0; i < localStorage.length; i++) {
        var objeto = localStorage.getItem("persona" + (i+1));
        objeto = JSON.parse(objeto);//parsear a JSON
      
        document.getElementById("listar").innerHTML += "Nombre=" + objeto.nombre + " |  edad=" + objeto.edad+ "<br>";
    }
}




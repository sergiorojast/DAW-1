var clave = document.getElementById("clave"),
    valor = document.getElementById("valor");

//asignar eventos
document.getElementById("crearCookie").addEventListener("click", crear);
document.getElementById("borrarCookie").addEventListener("click", borrar);
document.getElementById("mostrarCookie").addEventListener("click", mostrar);
document.getElementById("listarCookie").addEventListener("click", listar);

function crear() {
    localStorage.setItem(clave.value, valor.value)
    clave.value = "";
    valor.value = ""
}

function listar() {
    document.getElementById("listar").innerHTML=""
    for (let i = 0; i < localStorage.length; i++) {
        document.getElementById("listar").innerHTML += localStorage.key(i) + "=" + localStorage[localStorage.key(i)] + "<br>"
    }
}

function mostrar() {
   if(localStorage[clave.value]==undefined){
       valor.value="No existe la cookie"
   }else{
       valor.value=localStorage[clave.value]
   }
}
function borrar(){
    if(localStorage[clave.value]==undefined){
        valor.value="No existe la cookie"
    }else{
       
        localStorage.removeItem(clave.value)
        valor.value="Cookie borrada"
    }
}


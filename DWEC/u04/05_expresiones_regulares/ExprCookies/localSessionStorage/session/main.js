var buscarClave = document.getElementById("clave"),
    buscarValor = document.getElementById("valor");

//asignar eventos
document.getElementById("crearCookie").addEventListener("click", crear);
document.getElementById("borrarCookie").addEventListener("click", borrar);
document.getElementById("mostrarCookie").addEventListener("click", mostrar);
document.getElementById("listarCookie").addEventListener("click", listar);

function crear() {
    sessionStorage.setItem(clave.value, valor.value)
    buscarClave.value = "";
    buscarValor.value = ""
}

function listar() {
    document.getElementById("listar").innerHTML=""
    for (let i = 0; i < sessionStorage.length; i++) {
        document.getElementById("listar").innerHTML += sessionStorage.key(i) + "=" + sessionStorage[sessionStorage.key(i)] + "<br>"
    }
}

function mostrar() {
   if(sessionStorage[clave.value]==undefined){
       valor.value="No existe la cookie"
   }else{
       valor.value=sessionStorage[clave.value]
   }
}
function borrar(){
    if(sessionStorage[clave.value]==undefined){
        valor.value="No existe la cookie"
    }else{
       
        sessionStorage.removeItem(clave.value)
        valor.value="Cookie borrada"
    }
}


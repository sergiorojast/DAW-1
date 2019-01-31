function consultar() {
    var objProvincias = document.getElementById("provincias");
    var texto = objProvincias.options[objProvincias.selectedIndex].text; // Texto
    var valor = objProvincias.options[objProvincias.selectedIndex].value; // value
    alert("Datos de la opción seleccionada:Texto: " + texto + " Valor: " + valor);
}
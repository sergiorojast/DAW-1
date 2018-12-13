//variables
var coches = new Array();
var coche;
//creacion objeto coche
class Coche{
    constructor (matricula, marca, modelo, kms) {
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.kms = kms;
    }
}
//entrada de datos, para cuando introduces una F o f en matricula.
    function entrada() {
        var matri = prompt("Introduce matricula: ");
        while (matri != ("F" && "f")) {
            var marc = prompt("Introduce marca: ");
            var mode = prompt("Introduce modelo: ");
            var km = parseInt(prompt("Introduce kms: "));
            //construye coche
            coche = new Coche(matri, marc, mode, km);
            //lo introduce en array
            coches.push(coche);
            matri = prompt("Introduce matricula: ");
        }
    }

//funcion minimo que iguala menos al primer valor de km, y lo va sustituyendo si le llegan dm mas bajos
function minKm() {
    coches.sort(function (a, b) {
        return (a.kms - b.kms);
    });
    document.write("El coche con menos kms es " + coches[0].matricula + ", " + coches[0].marca + ", " + coches[0].modelo + ", " + coches[0].kms + ".<br/>");
}
//Funcion para mostrar los coches de forma descendente por kms.
function ordenaKmsDescendente() {
    coches.sort(function (a, b) {
        return (b.kms - a.kms);
    });
    document.write("<h2>Los coches ordenados por km descendentes son:</h2>");
    for (var i in coches) {
        document.write("La matricula es " + coches[i].matricula + "<br/>" +
            "La marca es " + coches[i].marca + "<br/>" + "El modelo es " + coches[i].modelo + "<br/>" +
            "Los kilometros son es: " + coches[i].kms + "<br/>");
    }
}

entrada();
ordenaKmsDescendente();
minKm();
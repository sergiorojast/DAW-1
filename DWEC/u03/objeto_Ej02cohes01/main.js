// Escribe un script que creee una array de objetos de tipo Coche
// Mastrícula, Marca, Modelo y km

// Variables

var matricula, marca, modelo, coche;
var km = 0;
var aCoches = new Array();

// Clase

class Coche {
  constructor(matricula, marca, modelo, km) {
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.km = km;
  }
  verCoche() {
    return (
      "La matricula es " +
      this.matricula +
      "<br>La marca es " +
      this.marca +
      "<br>El modelo es " +
      this.modelo +
      "<br>Los km son " +
      this.km +
      "<br>--------------------------<br>"
    );
  }
}

var coche1 = new Coche("222 BBB", "Renault", "Clio", 15000);
aCoches.push(coche1);
var coche2 = new Coche("333 BBB", "Renault", "Clio", 20000);
aCoches.push(coche2);
var coche3 = new Coche("444 BBB", "Opel", "Astra", 100000);
aCoches.push(coche3);

// Funciones

// matricula = prompt('Indica matricula (F para terminar): ');

// while (matricula != 'F') {
//     marca = prompt('Indica marca: ');
//     modelo = prompt('Indica modelo: ');
//     km = prompt('Indica km: ');
//     coche = new Coche(matricula, modelo, marca, km);
//     aCoches.push(coche);
//     matricula = prompt('Indica matricula (F para terminar): ');
// }

// Ordenamos para después coger el primero
aCoches.sort(function(a, b) {
  return a.km - b.km;
});

aCoches.forEach(c => {
  document.write(c.verCoche());
});

document.write(
  `El coche con menos km (${aCoches[0].km}) tiene la matrícula ${
    aCoches[0].matricula
  }`
);

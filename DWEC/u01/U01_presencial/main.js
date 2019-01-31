"use stric"; // Declaración obligada de variables

// Variables globales

var num1,
  num2,
  suma = 0,
  check = false,
  check2 = false;

// Solicita el primer número
num1 = parseInt(prompt("Introduzca un número"));

// Primer bucle
while (check == false) {
  if (isNaN(num1) || num1 == "" || num1 == null) {
    num1 = parseInt(prompt("Error\nIntroduzca de nuevo un número"));
  } else {
    check = true;
  }
}

// Solicita el segundo número

num2 = parseInt(
  prompt("Introduzca Segundo número. Debe ser superior al número " + num1)
);

// Segundo bucle
while (check2 == false) {
  if (isNaN(num2) || num2 == "" || num2 == null || num2 <= num1) {
    num2 = parseInt(
      prompt(
        "Error\nIntroduzca Segundo número. Debe ser superior al número " + num1
      )
    );
  } else {
    check2 = true;
  }
}

// Mensaje de salida

document.write(
  "La suma de los números " + num1 + " entre " + num2 + " es: <br>"
);

for (let index = 0; index <= num2 - num1; index++) {
  var numSeguido = index + parseInt(num1);
  
  suma += numSeguido; // suma de valores
  console.log(numSeguido);
  console.log(suma);
  
  // uso de condicional para solucionar la impresión del último +
  if (index < num2 - num1) {
    // Imprime los valores de la suma.
    document.write(numSeguido + " + ");
  } else {
    document.write(numSeguido);
  }
}

// Añade la suma
document.write(" = " + suma);

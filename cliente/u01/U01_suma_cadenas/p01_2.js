 // Declaramos las variables.
 var nombre, apellidos, edad, hermanos;

 nombre = "Rafa";
 apellidos = "Martínez Díaz";
 edad = 38;
 hermanos = 3;

 console.log(typeof(nombre));

 // Imprimo el nombre y los apellidos.
 document.write("Hola " + nombre + " " + apellidos);

 // Imprimo un salto de línea.
 document.write("<br/>");

 // Imprime la edad y el número de hermanos.
 document.write(nombre + " tienes " + edad + " años y además tienes " + hermanos + " hermanos.<br/>");

 // Fíjate en la diferencia entre las dos siguientes lineas.
 document.write("Dentro de 15 años tu edad será " + edad + 15 + ".<br/>");
 document.write("Dentro de 15 años tu edad será " + (edad + 15) + ".<br/>");

 // Tu nombre escrito 50 veces.
 for (let i = 1; i <= 50; i++) {
     document.write(nombre + ",");
 }
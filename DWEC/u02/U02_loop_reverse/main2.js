"use strict";

// Variables

var frase;
frase = prompt("Introduce una frase");

var ok = false;

while (ok == false) {
    if (frase == "" || frase == null) {
        frase = prompt("Error\nIntroduce una frase");
    } else {

        ok = true;
    }
}

var frasemin = frase.toLowerCase();
var long = frasemin.length;
var fraserev;

// for (let i = 0; i < long; i++) {
       
// }

for (let i = long - 1; i >= 0; i--)
{
    document.write(frasemin[i]);
}



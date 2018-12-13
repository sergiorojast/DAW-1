// Se repite una serie de veces el bucle 
 
 function* generador() {
     let i = 0;
     while (i < 3) {
         yield i++; // retonar el valos
     }
 }
 let gen = generador();
 document.write("<br>" + gen.next().value);
 document.write("<br>" + gen.next().value);
 document.write("<br>" + gen.next().value);
 document.write("<br>" + gen.next().value);
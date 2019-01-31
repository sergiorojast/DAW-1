// Número de parámetos independientes

function mostrar(...conjunto){
     for (let ele of conjunto){
         document.write(`${ele}<br>`)
     }
 }

 
 mostrar("uno", "dos");
 mostrar("tres","cuatro", "cinco");
 mostrar("seis");
 

 
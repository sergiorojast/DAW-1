let conjunto = new Set(); // Conjunto, instnaciado con set

//asignar us add en vez de push
conjunto.add("javascript");
conjunto.add("php");
conjunto.add("c#").add("jsp");

console.log(conjunto);

document.write(`Existe php ${conjunto.has('php')}`); // devuele tru o false si se encuentra

document.write(`<br>Existe Python ${conjunto.has('python')}`);

document.write(`<br>Nº de elementos ${conjunto.size}`); // cuáto elementos tiene el conjunto

document.write(`<br>Borrar php ${conjunto.delete('php')}`); // borra

document.write(`<br>Nº de elementos ${conjunto.size}`);

//recorrer los elementos
document.write("<br>-----Listado del conjunto ----")
for (let ele of conjunto) {
    document.write("<br>" + ele);
}
document.write("<br>-----Listado del conjunto ----")
conjunto.forEach( // recorre
    // function(ele){ // función anómina
    //      document.write("<br>" + ele)
    // }
    (ele)=>document.write("<br>" + ele) // usa función de flecha
    
);
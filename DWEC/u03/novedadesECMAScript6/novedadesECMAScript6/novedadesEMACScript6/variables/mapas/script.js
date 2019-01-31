let mapa=new Map(); // mapa

function logMapElements(value, key, map) {
    document.write(`${key} = ${value}<br>`);
}
//asignar datos
mapa.set("nombre","María"); // set apa añadir como si fuera un objeto
mapa.set("apellidos", "López");
mapa.set("edad", 16);


//mostrar solo un miembro del mapa
document.write(`El nombre es ${mapa.get("nombre")}<br>`); // set lo devuelve indicando la clave

//mostrar todo los miembros
mapa.forEach(logMapElements); // en este caso llama a una funcuion
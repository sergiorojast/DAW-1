# En línea

No uses el modelo de registro de eventos en línea

```javascript
<a href="pagina.html" onClick="alertar()">Pulsa aqui</a>

function alertar(){
     alert("Has pulsado en el enlace");
}
```

# Modelo tradicional

```javascript
elemento.onclick = hacerAlgo;  // cuando el usuario haga click en el objeto, se llamará a la función hacerAlgo()

elemento.onclick = null; // liminar un gestor de eventos de un elemento u objeto, le asignaremos null

elemento.onclick(); // llamamos al evento de forma manual
```

# Modelo de registro avanzado de eventos según W3C. addEventListener().

Este método tiene tres argumentos:

- el tipo de evento
- la función a ejecutar
- un valor booleano (true o false), que se utiliza para indicar cuando se debe capturar el evento:
  -  en la fase de captura (true)
  -  de burbujeo (false)

```javascript

element.addEventListener('click', function () {
     this.style.backgroundColor = '#cc0000';
}, false)


document.getElementById("mienlace").addEventListener('click',alertar,false);

function alertar(){
     alert("Te conectaremos con la página: "+this.href); 
}

```

## Listado de atributos de eventos

- onblur: Un elemento pierde el foco.
- onchange: El contenido de un campo cambia.
- onclick: Se hace click con el ratón en un objeto.
- ondblclick: Se hace doble click con el ratón sobre un objeto.
- onerror: Ocurre algún error cargando un documento o una imagen.
- onfocus: Un elemento tiene el foco.
- onkeydown: Se presiona una tecla del teclado.
- onkeypress: Se presiona una tecla o se mantiene presionada.
- onkeyup: Cuando soltamos una tecla.
- onload: Una página o imagen terminaron de cargarse.
- onmousedown: Se presiona un botón del ratón.
- onmousemove: Se mueve el ratón.
- onmouseout: Movemos el ratón fuera de un elemento.
- onmouseover: El ratón se mueve sobre un elemento
- onmouseup: Se libera un botón del ratón.
- onresize: Se redimensiona una ventana o frame
- onselect: Se selecciona un texto.
- onunload: El usuario abandona una página.
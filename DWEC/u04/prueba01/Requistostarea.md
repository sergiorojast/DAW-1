La tarea tendrá que cumplir los siguientes requisitos:

1. [x] Programar el código de JavaScript en un fichero independiente. La única modificación que se permite realizar en el fichero .HTML es la de escribir la referencia al fichero de JavaScript y el fichero de estilo que se adjunta a la tarea. Ver punto Información de interés.
   
2. Insertar un reCaptcha en el formulario.
   
3. Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y mostrar un mensaje en el contenedor "Nº de intentos en el envío de datos:  X". Es decir, cada vez que se pulsa el botón de enviar y los datos son correctos, tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido en el div antes mencionado. Nota: para poder actualizar el contenido de un contenedor o div, la propiedad ha modificar para ese objeto es innerHTML.
   
4. [x] Cada vez que el campo Nombre y Apellidos pierda el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
   
5. Validar mediante expresión regular el e-mail  Si se produce algún error mostrar el mensaje en el span  y no permitir que el campo pierda el foco
   
6. Validar el Teléfono no permitiendo visualizar nada más que números y el espacio, utilizando el método keypress.
   
7. Validar el campo Fecha llegada utilizando una expresión regular. Debe cumplir el formato: dd/mm/aaaa. Se pide validar que sea una fecha de calendario correcta antes de perder el foco Si se produce algún error mostrar el mensaje en el span y poner el foco en el campo Fecha llegada. Explicar las partes de la expresión regular mediante comentarios. 
   
8. Validar el campo Fecha salida utilizando el método keypress (no se mostrarán nada más que números y '/'. Debe cumplir el formato: dd/mm/aaaa. Se pide validar que sea una fecha de calendario correcta antes de perder el foco. Si se produce algún error mostrar el mensaje en el span y poner el foco en el campo Fecha salida. 
   
9.  Antes de enviar los datos se comprobará que todos los datos son requeridos, excepto observaciones. En caso contrario se mostrará el texto de error en la etiqueta span correspondiente.
    
10. Pedir confirmación de envío del formulario si todos los datos son correctos
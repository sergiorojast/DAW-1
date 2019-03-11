"use stric";

var micanvas1;

window.addEventListener("load", function () {
    micanvas1 = document.getElementById("micanvas1");


    dibujarKenny();
})


function dibujarKenny() {

    let contexto1 = micanvas1.getContext('2d');

    var img = new Image();
    img.src = "kenny.png";
    contexto1.drawImage(img, 0, 0);
    img.onload = function () {
      contexto1.drawImage(img, 0, 0);
      contexto1.drawImage(img, 400, 0, 50, 50);
      contexto1.drawImage(img, 0, 200, 70, 130);

    }

}
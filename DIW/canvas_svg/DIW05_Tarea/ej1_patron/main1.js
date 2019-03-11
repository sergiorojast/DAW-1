"use strict"

window.addEventListener("load", function () {
    dibujar();
})

function retornarLienzo(x) {
    var canvas = document.getElementById(x);
    if (canvas.getContext) {
      var lienzo = canvas.getContext("2d");   
      return lienzo;
    } else
      return false;
  }
  
  function dibujar() {
    var lienzo1=retornarLienzo("lienzo1");
    if (lienzo1) {

      lienzo1.rect(10,10,50,50); 
      lienzo1.fill(); 

      var lienzo2=retornarLienzo("lienzo2");

      if (lienzo2) {
        var patron = lienzo2.createPattern(lienzo1.canvas,'repeat');
        lienzo2.fillStyle = patron;
        lienzo2.fillRect(0,0,500,500);            
      }  
    }  
  }
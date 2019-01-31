 function mostrar(nombre, precio, unidad){
     
         document.write(`${nombre}<br>`);
         document.write(`${precio}<br>`);
         document.write(`${unidad}<br>`);
    
 }

 let param=["tomates", 100, 50]
 
 mostrar(...param);
 

 
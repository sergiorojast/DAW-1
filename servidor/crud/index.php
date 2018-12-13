<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <a href="descarga.php" target="_blank">Descarga</a>
        <?php

        require_once 'controlador/ControladorCoche.php';
        
        $controlador = ControladorCoche::getControlador();
        $aCoches = $controlador->listarCoches();
        
        foreach ($aCoches as $coche) {
            echo $coche 
                    . "<a href=read.php?id=".$coche->getId() . "> Ver coche</a>"
                    . "<a href=delete.php?id=".$coche->getId() . "> Borrar coche</a>";
        }
        
        ?>
    </body>
</html>

<?php

require_once 'controlador/ControladorCoche.php';

$fichero = "fichero_descarga.txt";

header("Content-disposition:attachment; filename=hola.txt");

$controlador = ControladorCoche::getControlador();

$aCoches = $controlador->listarCoches();

foreach ($aCoches as $coche) {
    echo $coche->getMatricula() . "\r\n";
}
?>



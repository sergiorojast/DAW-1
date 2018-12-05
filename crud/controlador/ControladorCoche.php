<?php

/**
 * Description of ControladorCoche
 *
 * @author pasoriano
 */
require_once 'controladorDB.php';
require_once './modelo/Coche.php';

class ControladorCoche {

    static private $instancia = null;

    private function __construct() {
        
    }

    public static function getControlador() {

        if (self::$instancia == null) {
            self::$instancia = new ControladorCoche();
        }
        return self::$instancia;
    }

    public function listarCoches() {
        $aObjetos = [];
        $db = ControladorDB::getControlador();
        $db->abrirDB();
        $consulta = "SELECT * from coches";
        $filas = $db->selectDB($consulta);
        if ($filas->rowCount() > 0) {
            while ($fila = $filas->fetch()) {
                $coche = new Coche($fila['ID'], $fila['Matricula'], $fila['Marca']);
                $aObjetos[] = $coche;
            }
        } else {
            echo 'Nada';
        }
        $db->cerrarDB();
        return $aObjetos;
    }

    public function verCoche($id) {

        $db = ControladorDB::getControlador();
        $db->abrirDB();
        $consulta = "SELECT * from coches where ID=" . $id;

        $filas = $db->selectDB($consulta);
        if ($filas->rowCount() > 0) {
            while ($fila = $filas->fetch()) {
                $coche = new Coche($fila['ID'], $fila['Matricula'], $fila['Marca']);
            }
        } else {
            echo 'Nada';
        }
        $db->cerrarDB();
        return $coche;
    }

    public function borrarCoche($id) {

        $db = ControladorDB::getControlador();
        $db->abrirDB();
        $consulta = "delete from coches where ID=" . $id;

        $estado = $db > actualizarDB($consulta);
        $db->cerrarDB();
        return $estado;
    }

}

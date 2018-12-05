<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Coche
 *
 * @author pasoriano
 */
class Coche {

    private $id;
    private $matricula;
    private $marca;

    function __construct($id, $matricula, $marca) {
        $this->id = $id;
        $this->matricula = $matricula;
        $this->marca = $marca;
    }

    function getId() {
        return $this->id;
    }

    function getMatricula() {
        return $this->matricula;
    }

    function getMarca() {
        return $this->marca;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setMatricula($matricula) {
        $this->matricula = $matricula;
    }

    function setMarca($marca) {
        $this->marca = $marca;
    }

        
    public function __toString() {
        
        return $this->id ." " . $this->matricula . " "  . $this->marca . "<br>";
        
    }


}

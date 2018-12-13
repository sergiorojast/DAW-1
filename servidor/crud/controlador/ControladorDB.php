<?php

/**
 * Description of ControladorDB
 *
 * @author pasoriano
 */
class ControladorDB {

    private $host = 'localhost';
    private $dbname = 'presencial2';
    private $username = 'root';
    private $pw = '';
    private $db;
    private $rs;
    static private $instancia = null;

    private function __construct() {
        
    }

    public static function getControlador() {

        if (self::$instancia == null) {
            self::$instancia = new ControladorDB();
        }
        return self::$instancia;
    }

    public function abrirDB() {
        try {
            $this->db = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->pw);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $exc) {
            die('No ha isod posible conectarse' . $exc->getMessage());
        }
    }

    public function selectDB($consulta) {
        if ($this->rs = $this->db->query($consulta)) {
            return $this->rs;
        } else {
            echo ' No se ha podido realziar la consulta $consulta' . $this->db->error;
        }
    }

    public function cerrarDB() {
        $this->db = null;
        $this->rs = null;
    }

    public function actualizaDB($consulta) {
        if ($this->db->exec($consulta) != 0) {
            return true;
        } else {
            return false;
        }
    }

}

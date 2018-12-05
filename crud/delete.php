<?php
require_once 'controlador/ControladorCoche.php';
$controlador = ControladorCoche::getControlador();

$id = trim($_GET['id']);

$estado = $controlador->borrarCoche($id);

if ($estado) {
    header ("location: index.php");
} else {
    header ("location: error.php");
}
?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Prueba Presencial</title>
        <link rel="icon" type="image/png" href="http://www.sacschool.com/wp-content/uploads/sites/4/2014/01/form-icon.png">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js"></script>
        
        <script type="text/javascript">
            $(document).ready(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
        </script>
    </head>
    <body>
         <!-- Código de la página -->
         <div class="wrapper">
            <div class="container-fluid">
        
                <div class="row">
                    <div class="col-md-12">
                        <div class="page-header">
                            <h1>Borrar Coche</h1>
                        </div>
                        <!-- Muestro los datos del coche-->
                        <div class="form-group">
                            <label>ID</label>
                            <p class="form-control-static"></p>
                        </div>
                        <div class="form-group">
                            <label>Matrícula</label>
                            <p class="form-control-static"></p>
                        </div>
                        <div class="form-group">
                            <label>Marca</label>
                            <p class="form-control-static"></p>
                        </div>
                       
                        <form action="" method="post">
                            <div class="alert alert-danger fade in">
                                <input type="hidden" name="" value=""/>
                                <p>¿Está seguro que desea borrar este coche?</p><br>
                                <p>
                                    <button type="submit" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span>  Borrar</button>
                                    <a href="index.php" class="btn btn-primary"><span class="glyphicon glyphicon-chevron-left"></span> Volver</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>        
            </div>
        </div>
        <!-- Fin Código de la página -->
</body>
</html>
<!-- Footer -->
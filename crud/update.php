<!-- Cabecera de las páginas web común a todos -->

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
                            <h2>Modificar Coche</h2>
                        </div>
                        <p>Por favor edite la nueva información para actualizar la ficha.</p>
                        <form action="" method="post">
                            <div class="">
                                
                                <div class="form-group">
                                <label>ID</label>
                                <p class="form-control-static"></p>
                                </div>
                                
                                <!-- Matrícula-->
                                <label>Matrícula</label>
                                <input type="" name="" class="form-control" value="">
                                <span class="help-block"></span>
                            </div>
                            <!-- Marca -->
                            <div class="">
                                <label>Matrícula</label>
                                <input type="" name="" class="form-control" value="">
                                <span class="help-block"></span>
                            </div>
                            <input type="hidden" name="" value=""/>
                            <button type="submit" class="btn btn-warning"> <span class="glyphicon glyphicon-refresh"></span>  Modificar</button>
                            <a href="index.php" class="btn btn-primary"><span class="glyphicon glyphicon-chevron-left"></span> Volver</a>
                        </form>
                    </div>
                </div>        
            </div>
        </div>
    <br>
        <!-- Fin Código de la página -->
</body>
</html>
<!-- Footer -->
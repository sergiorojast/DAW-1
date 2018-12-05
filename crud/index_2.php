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
                        <div class="page-header clearfix">
                            <h2 class="pull-left">Fichas de Coches</h2>
                        </div>
                            <!-- Aquí va el nuevo botón para dar de alta, podría ir al final -->
                            <a href="" class="btn btn-success pull-right"><span class="glyphicon glyphicon-user"></span>  Añadir Coche</a>    
                    </div>
                    <!-- Linea para dividir -->
                    <div class="page-header clearfix">        
                    </div>
                    <table class='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Matrícula</th>
                                <th>Marca</th>
                             <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
       
                                <td>
                                    <a href='' title='Ver Alumno/a' data-toggle='tooltip'><span class='glyphicon glyphicon-eye-open'></span></a>
                                    <a href='' title='Actualizar Alumno/a' data-toggle='tooltip'><span class='glyphicon glyphicon-pencil'></span></a>
                                    <a href='' title='Borar Alumno/a' data-toggle='tooltip'><span class='glyphicon glyphicon-trash'></span></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>        
        </div>

        <!-- Fin Código de la página -->
</body>
</html>
<!-- Footer -->
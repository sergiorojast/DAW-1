package entradacliente;

import java.math.BigInteger;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class EntradaCliente2 {

    private int numdias, factura;
    private String dni, nombre, fecha, dias, cuenta;
    final String LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

    public EntradaCliente2() {
    }

    public void validarEntrada() {
        // para leer del teclado
        Scanner sc = new Scanner(System.in);
        try {
            System.out.println("Introduce el nombre y los dos apellidos del cliente (en mayúsculas y sin acentos):");
            nombre = sc.nextLine();
            System.out.println("Introduce el DNI del cliente (Formato 00000000A):");
            dni = sc.nextLine();
            System.out.println("Introduce la fecha de entrada (Formato DD/MM/AAAA):");
            fecha = sc.nextLine();
            System.out.println("Introduce los dias de estancia (de 1 a 28):");
            dias = sc.nextLine();
            System.out.println("Introduce El IBAN");
            cuenta = sc.nextLine();
            boolean error = false;

            if (!compruebaNombre(nombre)) {
                System.out.println("El nombre esta mal");
                error = true;
            }
            if (!CompruebaDNI(dni)) {
                System.out.println("El DNI esta mal");
                error = true;
            }
            if (!validarFecha(fecha)) {
                System.out.println("Fecha incorrecta");
                error = true;
            }
            if (!validarDias(dias)) {
                System.out.println("Los días estánn mal");
                error = true;
            }
            if (!comprobarCuenta(cuenta)) { // 
                if (!error) {
                    calcularFacturaYGrabarDatos();
                }
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public boolean compruebaNombre(String nombre) {
        Pattern pat = null;
        Matcher mat = null;
        //pat = Pattern.compile("[a-z]* [a-z]* [a-z]*");
        pat = Pattern.compile("[A-Z]* [A-Z]* [A-Z]*");
        mat = pat.matcher(nombre);
        return mat.matches();
    }

    public boolean CompruebaDNI(String dni) {
        
        Pattern pat = null;
        Matcher mat = null;
        //pat = Pattern.compile("[0-9]*[A-Z]");
        pat = Pattern.compile("\\d{8}[A-Z]?");
        mat = pat.matcher(dni);
        if (mat.matches()) {
            int num = Integer.parseInt(dni.substring(0, 8));
            // String let = dni.substring(9);
            String let = dni.substring(8);
            //return LETRAS_DNI.substring(num % 23, num / 23 + 1).equals(let);
            return LETRAS_DNI.substring(num % 23, num % 23 + 1).equals(let);
        } else {
            return true;
        }
    }

    public boolean validarFecha(String fecha) {
        try {
            // Formato DD/MM/AAAA
            SimpleDateFormat formatoFecha = new SimpleDateFormat("dd/MM/yyyy");
            formatoFecha.setLenient(false);
            formatoFecha.parse(fecha);
        } catch (ParseException e) {
            return false;
        }
        return true;
    }

    public boolean validarDias(String dias) {
        numdias = Integer.parseInt(dias);

        return (numdias > 1 && numdias <= 30);
    }

    public void calcularFacturaYGrabarDatos() {
        // 40 euros por día
        factura = 40 * numdias;
        System.out.println("La factura de su estancia asciende a 40 euros/días: " + factura);
        // si estÃ¡ al menos una semana tiene un 5% de descuento por cada semana completa
        if (numdias > 7) {
            System.out.println("Se aplica un descuento del 5% por cada semana completa");
            factura -= factura * 0.05 * numdias / 7;
            // aÃ±adimos el iva 21%
            factura *= 1.22;
            System.out.println("La factura total con IVA 21% asciende a: " + factura);
            //Imprimimos IBAN
            String IBAN = cuenta;
            System.out.println("Número de cuenta " + IBAN);
            // se simula la grabaciÃ³n
            System.out.println("Los datos se han grabado correctamente");
        }
    }

    public boolean comprobarCuenta(String cuenta) {

        boolean esValido = false;
        int i = 2;
        int caracterASCII = 0;
        int resto = 0;
        int dc = 0;
        String cadenaDc = "";
        BigInteger cuentaNumero = new BigInteger("0");
        BigInteger modo = new BigInteger("97");

        if (cuenta.length() == 24 && cuenta.substring(0, 1).toUpperCase().equals("E")
                && cuenta.substring(1, 2).toUpperCase().equals("S")) {

            do {
                caracterASCII = cuenta.codePointAt(i);
                esValido = (caracterASCII > 47 && caracterASCII < 58);
                i++;
            } while (i < cuenta.length() && esValido);

            if (esValido) {
                cuentaNumero = new BigInteger(cuenta.substring(4, 24) + "142800");
                resto = cuentaNumero.mod(modo).intValue();
                dc = 98 - resto;
                cadenaDc = String.valueOf(dc);
            }

            if (dc < 10) {
                cadenaDc = "0" + cadenaDc;
            }

            // Comparamos los caracteres 2 y 3 de la cuenta (dígito de control IBAN) con cadenaDc
            if (cuenta.substring(2, 4).equals(cadenaDc)) {
                esValido = true;
            } else {
                esValido = false;
            }
        }

        return esValido;
    }

    public static void main(String[] args) {
        //EntradaCliente cliente = new EntradaCliente2();
        //cliente.validarEntrada();
        new EntradaCliente2().validarEntrada();

        System.out.println("Finalizado");
    }
}

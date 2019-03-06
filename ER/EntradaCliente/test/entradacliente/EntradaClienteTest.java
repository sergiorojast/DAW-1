/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entradacliente;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author pasoriano
 */
public class EntradaClienteTest {

    public EntradaClienteTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of validarEntrada method, of class EntradaCliente2.
     */
    @Test
    public void testValidarEntrada() {
        System.out.println("validarEntrada");
        EntradaCliente2 instance = new EntradaCliente2();
        instance.validarEntrada();
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of compruebaNombre method, of class EntradaCliente2.
     */
    @Test
    public void testCompruebaNombre1() {
        System.out.println("compruebaNombre");
        String nombre = "PEPE PEPE PEPE";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = true;
        boolean result = instance.compruebaNombre(nombre);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of compruebaNombre method, of class EntradaCliente2.
     */
    @Test
    public void testCompruebaNombre2() {
        System.out.println("compruebaNombre");
        String nombre = "pepe pepe pepe";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.compruebaNombre(nombre);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testCompruebaNombre3() {
        System.out.println("compruebaNombre");
        String nombre = "PEPE";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.compruebaNombre(nombre);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testCompruebaNombre4() {
        System.out.println("compruebaNombre");
        String nombre = "MARTÍN PEPE PEPE";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.compruebaNombre(nombre);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of CompruebaDNI method, of class EntradaCliente2.
     */
    @Test
    public void testCompruebaDNI1() {
        System.out.println("CompruebaDNI");
        String dni = "30831685R";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = true;
        boolean result = instance.CompruebaDNI(dni);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testCompruebaDNI2() {
        System.out.println("CompruebaDNI");
        String dni = "30831685";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.CompruebaDNI(dni);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testCompruebaDNI3() {
        System.out.println("CompruebaDNI");
        String dni = "30831685T";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.CompruebaDNI(dni);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of validarFecha method, of class EntradaCliente2.
     */
    @Test
    public void testValidarFecha1() {
        System.out.println("validarFecha");
        String fecha = "26/04/2019";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = true;
        boolean result = instance.validarFecha(fecha);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testValidarFecha2() {
        System.out.println("validarFecha");
        String fecha = "2019/04/26";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.validarFecha(fecha);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testValidarFecha3() {
        System.out.println("validarFecha");
        String fecha = "31/04/2019";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.validarFecha(fecha);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testValidarFecha4() {
        System.out.println("validarFecha");
        String fecha = "26-04-1976";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.validarFecha(fecha);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of validarDias method, of class EntradaCliente2.
     */
    @Test
    public void testValidarDias1() {
        System.out.println("validarDias");
        String dias = "2";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = true;
        boolean result = instance.validarDias(dias);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testValidarDias2() {
        System.out.println("validarDias");
        String dias = "30";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = true;
        boolean result = instance.validarDias(dias);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testValidarDias3() {
        System.out.println("validarDias");
        String dias = "1";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.validarDias(dias);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testValidarDias4() {
        System.out.println("validarDias");
        String dias = "31";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.validarDias(dias);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of comprobarCuenta method, of class EntradaCliente2.
     */
    @Test
    public void testComprobarCuenta1() {
        System.out.println("comprobarCuenta");
        String cuenta = "ES6621000418401234567891";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = true;
        boolean result = instance.comprobarCuenta(cuenta);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testComprobarCuenta2() {
        System.out.println("comprobarCuenta");
        String cuenta = "es6621000418401234567891";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = true;
        boolean result = instance.comprobarCuenta(cuenta);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testComprobarCuenta3() {
        System.out.println("comprobarCuenta");
        String cuenta = "ES66210004184012345";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.comprobarCuenta(cuenta);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    @Test
    public void testComprobarCuenta4() {
        System.out.println("comprobarCuenta");
        String cuenta = "006621000418401234567891";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.comprobarCuenta(cuenta);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    public void testComprobarCuenta5() {
        System.out.println("comprobarCuenta");
        String cuenta = "XX6621000418401234567891";
        EntradaCliente2 instance = new EntradaCliente2();
        boolean expResult = false;
        boolean result = instance.comprobarCuenta(cuenta);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of calcularFacturaYGrabarDatos method, of class EntradaCliente2.
     */
    @Test
    public void testCalcularFacturaYGrabarDatos() {
        System.out.println("calcularFacturaYGrabarDatos");
        EntradaCliente2 instance = new EntradaCliente2();
        instance.calcularFacturaYGrabarDatos();
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }

    /**
     * Test of main method, of class EntradaCliente2.
     */
    @Test
    public void testMain() {
        System.out.println("main");
        String[] args = null;
        EntradaCliente2.main(args);
        // TODO review the generated test code and remove the default call to fail.
        //fail("The test case is a prototype.");
    }
}

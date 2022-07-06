/*
 *Para este ejercicio tendréis que crear una función que reciba un precio y devuelva el precio con el IVA incluido.
 */
package ejerciciosesion2;

public class EjercicioSesion2 {
    
    
    static double getPrecioIva(double precio){
        double iva = 0.19;
        double precioFinal = precio + (precio * iva);
        return  precioFinal;
    }
    
    public static void main(String[] args) {
        double resultado = getPrecioIva(200.0);
        System.out.println("El precio final es "+resultado);
         
    }
    
    
    
}

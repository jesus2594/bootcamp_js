/*
En este ejercicio tenéis que crear un bucle que permita concatenar textos e imprima el resultado final por consola.

Tened en cuenta que los textos pueden venir de un array de tipo String. Por ejemplo:

String[] nombres = {"", "", "", ""}
 */
package ejerciciosesion3;


public class EjercicioSesion3 {

    
    public static void main(String[] args) {
        
        String[] nombres = {"Hola", "Mundo", "Hey", "OpenBootcamp"};
        for (int i = 0; i < nombres.length; i++) {
            //System.out.println("");
            System.out.print(nombres[i]+ " ");
           
        }
        
    }
    
}

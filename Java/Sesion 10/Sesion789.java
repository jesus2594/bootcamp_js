import java.io.FileInputStream;
import java.io.InputStream;
import java.io.PrintStream;
import java.util.Scanner;
import java.util.*;

public class Sesion789 {
    
    
    public static class CadenaReves {

        public static void main(String[] args) {

            System.out.println("-------------------- \n Cadena al Reves\n--------------------");

            Scanner scanner = new Scanner(System.in);
            String texto;
            System.out.println("Introduce un texto");
            texto = scanner.nextLine();

            StringBuilder reves = new StringBuilder(texto);
            texto = reves.reverse().toString();

            System.out.println(texto);
        }
    }
    
     public static class ArrayUnidimensional {

        public static void main(String[] args) {

            System.out.println("-------------------- \n Array Unidimensional\n--------------------");

            String textos[] = {"Principio ", "Intermedio ", "Conclusion "};

            for (String texto : textos) {
                System.out.print(texto);
            }
        }
    }
     
     
     public static class ArrayBidimensional {

        public static void main(String[] args) {

            System.out.println("-------------------- \n Array Bidimensional\n--------------------");

            Integer[][] numeros = {
                    {5, 10, 15},
                    {20, 25, 30}
            };

            for (int i = 0; i < numeros.length; i++) {

                for (int y = 0; y < numeros[i].length; y++) {

                    System.out.println("Fila: " + (i + 1) + " | Columna: " + (y + 1) +
                            "\nEl valor es: " + numeros[i][y] + "\n");
                }
            }
        }
    }
     
     public static class EjercicioVector {

        public static void main(String[] args) {

            System.out.println("-------------------- \n Vector\n--------------------");

            Vector vector = new Vector();

            vector.add(1);
            vector.add(2);
            vector.add(3);
            vector.add(4);

            System.out.println("Vector antes de borrar: " + vector);

            vector.remove(2);
            vector.remove(1);

            System.out.println("Vector despues de borrar: " + vector + " -> Eliminados el 2 y 3");

            System.out.println("\n-------------------- \n Respuesta\n--------------------");

            System.out.println("Desperdiciamos mucha memoria del sistema, ya que cada vez que se sobrepasa" +
                    " el limite establecido (Por defecto, 10) la dimension del vector se duplica.");
        }
    }
     
     public static class ArrayString {

        public static void main(String[] args) {

            System.out.println("-------------------- \n Array y LinkedList\n--------------------");

            ArrayList<String> lista = new ArrayList<String>();
            lista.add("Paco");
            lista.add("Ana");
            lista.add("Jesus");
            lista.add("Lucia");

            LinkedList<String> linkedlist = new LinkedList<String>();

            for (int i = 0; i < lista.size(); i++) {
                linkedlist.add(i, lista.get(i));
            }

            System.out.println("Elementos del Array:");
            for (String elementos : lista) {
                System.out.print(elementos + " ");
            }

            System.out.println("\n\nElementos de la LinkedList:");
            for (String elementos : linkedlist) {
                System.out.print(elementos + " ");
            }
        }
    }
     
     public static class ArrayInt {

        public static void main(String[] args) {

            System.out.println("-------------------- \n ArrayInt\n--------------------");

            ArrayList<Integer> lista = new ArrayList<Integer>();

            for (int i = 1; i < 11; i++) {
                lista.add(i);

                for (int num = 0; num < lista.size(); num++) {

                    if (lista.get(num) % 2 == 0) {
                        lista.remove(num);
                    }
                }
            }

            System.out.println(lista);
        }
    }
     
      public static class DividePorCero {

        private static int Dividir(int a, int b) throws ArithmeticException {
            return a / b;
        }

        public static void main(String[] args) {

            System.out.println("-------------------- \n DividePorCero\n--------------------");

            Scanner scanner = new Scanner(System.in);
            System.out.println("Indica los numeros que quieres dividir: ");
            System.out.print("Numero 1: ");
            int a = scanner.nextInt();
            System.out.print("Numero 2: ");
            int b = scanner.nextInt();
            try {
                System.out.println("Resultado: " + Dividir(a, b));
            } catch (ArithmeticException e) {
                System.out.println("Esto no puede hacerse");
            } finally {
                System.out.println("Demo de código");
            }
        }
        
        public static class CopiarFicheros {

            public static void main(String[] args) {

                Scanner scanner = new Scanner(System.in);
                System.out.println("Introduce el fichero de origen: ");
                String fileIn = scanner.nextLine();
                System.out.println("Introduce el fichero de destino: ");
                String fileOut = scanner.nextLine();
                copiar(fileIn, fileOut);
            }

            private static void copiar(String fileIn, String fileOut) {
                try {
                    InputStream in = new FileInputStream(fileIn);
                    byte[] datos = in.readAllBytes();
                    in.close();

                    PrintStream out = new PrintStream(fileOut);
                    out.write(datos);
                    out.close();
                } catch (Exception e) {
                    System.out.println("Excepcion: " + e.getMessage());
                }
            }

        }

    }
    
}

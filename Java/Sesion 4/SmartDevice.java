
package Package;
/*
En este ejercicio tendréis que crear una clase SmartDevice. Dentro crearéis las clases hijas: SmartPhone y SmartWatch.

Agregaréis atributos tal cual tendrían esos objetos en la realidad.

Crear constructor vacío y con todos los parámetros para cada clase.

Desde una clase Main: crearéis objetos de cada una y los utilizaréis para imprimir sus valores por consola.
*/

public class SmartDevice {
    
     String color;
     String marca;
    

    public SmartDevice() {
    }

    public SmartDevice(String color, String marca) {
        this.color = color;
        this.marca = marca;
        
    }
    
    public static class SmartPhone extends SmartDevice {
        private String SO;
        private int memoria;

        public SmartPhone() {
            super();
        }

        public SmartPhone(String color, String marca, String SO , int memoria) {
            super(color, marca);
            this.SO = SO;
            this.memoria = memoria;
        }

        @Override
        public String toString() {
            return "color=" + color +
                    ", marca=" + marca +
                    ", SO=" + SO +
                    ", memoria=" + memoria;
            
        }
    }
    
    public static class SmartWatch extends SmartDevice {
        double pulgadas;
        String conectividad;

        public SmartWatch() {
            super();
        }

        public SmartWatch(String color, String marca, double pulgadas, String conectividad ) {
            super(color, marca);
            this.pulgadas = pulgadas;
            this.conectividad = conectividad;
        }

        @Override
        public String toString() {
            return "color=" + color +
                    ", marca=" + marca +
                    ", pulgadas=" + pulgadas +
                    ", conectividad=" + conectividad;
        }
        
    }
            
   public static void main(String[] args) {
        SmartPhone smartPhone = new SmartPhone("Azul", "Samsung", 
                    "Android", 3);

            SmartWatch smartWatch = new SmartWatch("Negro", "Xiaomi", 
                    3.5, "Bluetooth");

            System.out.println("El smartphone es: " + smartPhone + "\nEl smartwatch es: " + smartWatch);
   }    
        
        
        
    }

    



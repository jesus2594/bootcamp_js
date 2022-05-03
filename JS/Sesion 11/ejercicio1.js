/* 
En este ejercicio tendréis que crearla clase figura que tiene que tener como atributo _color

El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.

Ya que la variable _color es privada, tenéis que crear un getter getColor() y un setter setColor(String).
*/

class Figura{
    #_color
   constructor(color){
        this.#_color = color;
   }

    get getColor() {
       return "El color es " + this.#_color;
   }

   
   set setColor(color){
       this.#_color = color;
   }
}

const cuadrado = new Figura("Blue")
console.log(cuadrado.getColor);
cuadrado.setColor = "Red"
console.log(cuadrado.getColor);

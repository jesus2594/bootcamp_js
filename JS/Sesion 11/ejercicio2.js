/* 
En este segundo ejercicio tendréis que crear dos clases:

Circulo

Rectángulo

las cuales deben de heredar de Figura.

Circulo debe recibir dos parámetros en el constructor: radio (number) y color (String).

Rectángulo debe recibir tres parámetros en el constructor: base (number), altura (number) y color (String).

Los atributos de estas clases deben ser públicos.
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

class Circulo extends Figura{
    constructor(radio, color) {
        super();
        this.radio = radio
        this.color = color
    }
}

class Rectangulo extends Figura{
    constructor(base, altura, color) {
        super();
        this.base = base
        this.altura = altura
        this.color = color
        console.log(`Rectangulo de ${base} de base con una altura de ${altura} y un color ${color}`);
    }
}

const rectangulo = new Rectangulo(2, 10, "azul")

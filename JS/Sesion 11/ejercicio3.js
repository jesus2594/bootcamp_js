/*
Como último ejercicio, tendréis que crear un método calcularArea() en la clase Figura que devuelva el valor -1 para indicar que nuestra figura genérica no tiene área.

Implementa ese mismo método en las clases Circulo y Rectángulo que devuelvan el área de la figura en base a sus atributos.

Para calcular el área del círculo, PI puede ser 3.14 simplemente, sin más decimales. 
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

   calcularArea(){
       return -1
   }
}

class Circulo extends Figura{

    constructor(radio, color) {
        super();
        this.radio = radio
        this.color = color
    }

    calcularArea(){
        return this.radio * this.radio * 3.14
    }
}

class Rectangulo extends Figura{

    constructor(base, altura, color) {
        super();
        this.base = base
        this.altura = altura
        this.color = color
        
    }

    calcularArea(){
        return this.base * this.altura
    }
}

const circulo = new Circulo(5)
console.log(circulo.calcularArea());

const rectangulo = new Rectangulo(2, 10)
console.log(rectangulo.calcularArea());
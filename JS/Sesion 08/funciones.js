/* 
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/

function alwaysTrue(){
    return true
}

async function async(){
    return setTimeout(() => {
        console.log("Hola soy una promesa")
    }, 5000);
}
async()

function* generatePar(){
    let num = 0
    while(true){
        yield num +=2
    }
}
const gen = generatePar()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
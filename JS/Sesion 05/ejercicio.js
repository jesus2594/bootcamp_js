/* 
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

const alturaCM = 170
const alturaM = 1.70
const peso = 90.0
const alturaRed = Math.ceil(alturaM)
const pesoRed = Math.floor(peso)
const esIgual = Number.MAX_VALUE + 1 === Number.MAX_VALUE
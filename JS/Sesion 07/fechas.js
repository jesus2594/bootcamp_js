/* 
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const hoy = new Date()
console.log(hoy);

const nacimiento = new Date(1994, 3, 25)
console.log(nacimiento);

const tarde = hoy > nacimiento
console.log(tarde);

const day = nacimiento.getDate()
console.log(day);

const mes = nacimiento.getMonth()
console.log(mes);

const anio = nacimiento.getFullYear()
console.log(anio);
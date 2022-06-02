/* Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */

const misDatos = {
    nombre : "Jesus",
    apellido : "Marmol",
    edad : 28,
    altura : 1.70,
    eresDesarrollador : true

}

const edad = misDatos.edad
console.log(edad);

const lista = [
    {
        ...misDatos
    }, {
    nombre : "Jessica",
    apellido : "Esquivel",
    edad : 30,
    altura : 1.60,
    eresDesarrollador : false

},
{
    nombre : "Julieth",
    apellido : "Martinez",
    edad : 29,
    altura : 1.67,
    eresDesarrollador : false

} ]



const nuevaLista = lista.sort((a, b) => b.edad - a.edad)
console.log(nuevaLista);
/* 
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

listaCompra = ["huevos", "queso", "arroz", "papa", "ajo"]
console.log(listaCompra);
listaCompra.push("Aceite de Girasol")
console.log(listaCompra);
listaCompra.pop()
console.log(listaCompra);

const peliculas = [
    {titulo: "title1", director: "gabriel", fecha: new Date(2010, 0, 1)}, 
    {titulo: "title2", director: "francisco", fecha: new Date(2010, 0, 2)}, 
    {titulo: "title3", director: "martin", fecha: new Date(2010, 0, 3)}
]
const peliculas2 = peliculas.filter(p => p.fecha > new Date(2010, 0, 1))
console.log(peliculas2);

const directores = peliculas.map(p => p.director)
console.log(directores);

const titulos = peliculas.map(p => p.titulo)
console.log(titulos);

const nuevalista = directores.concat(titulos)
console.log(nuevalista);

const nuevalista2 = [...directores, ...titulos]
console.log(nuevalista2);

/* 
Crea un nuevo fichero JS que contenga las siguientes líneas

- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos
*/

class Estudiante {
    nombre = 'Jesus'
    lista = ['Javascript', 'HTML', 'CSS']

    get obtenDatos(){
        return `El estudiante ${this.nombre} esta estudiando ${this.lista}`
    }
}
const estudiante1 = new Estudiante()
console.log(estudiante1.obtenDatos);
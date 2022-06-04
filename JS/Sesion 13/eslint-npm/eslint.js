/* 
Crea un nuevo proyecto de Node

- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint) *

- Duplica el archivo del ejercicio de la sesión 04-Textos *

- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks) *

- Crea el fichero .eslintrc.json *

- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest" *

- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles *

- Crea un script en el package.json para corregir automáticamente todos los errores

- Ejecuta el script a través del terminal
*/
let nombre = `jesus`;
console.log(nombre);
let apellido = 'marmol'
console.log(apellido);
let estudiante = nombre + " " + apellido
console.log(estudiante);
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus);
let numLetras = estudiante.length
console.log(numLetras);
let primeraLetraNombre = nombre[0]
console.log(primeraLetraNombre);
let ultimaLetraApellido = apellido[apellido.length-1]
console.log(ultimaLetraApellido);
let eliminarEspacios = estudiante.replace(/ /g, "")
console.log(eliminarEspacios);
let nombrecontenido = estudiante.includes(nombre)
console.log(nombrecontenido);
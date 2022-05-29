//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 1
let contador = 1
while (contador <= 10) {
    factorial *= contador
    if (contador <= 10) contador++
    else break
}
console.log(factorial)

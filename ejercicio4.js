/* 
En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta. Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo".
*/
for(let num = 2 ; num <= 10; num++){
    let isPrime = true;

for (let i=2; i <= num-1; i++){
    if(num%i === 0){
        isPrime = false;
        console.log(num)
        break
    }
}
if (isPrime) console.log(`${num} Número primo`);
}



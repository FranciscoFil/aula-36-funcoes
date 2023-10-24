const readline = require("readline-sync")
console.log("---Retornando numeros pares---")
let numeros = []

for( i = 0; i < 5; i++){
    var num = readline.questionFloat(`Informe o numero: `)
    numeros.push(num)
}

var pares = numeros.filter((numero) => numero % 2 == 0)

console.log(`Numeros pares: ${pares.join(",")}`)
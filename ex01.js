const readline = require("readline-sync")

console.log()
console.log("--- Soma de numeros informadodos ---")
console.log()
let informe = readline.questionInt("Informe o numero: ")
let informe2 = readline.questionInt("Informe outro numero: ")
console.clear()
let numeros = [informe, informe2]

let soma = numeros.map((n) => n).reduce((a, b) => a + b);
console.log()
console.log(`--- O resultado da soma de ${informe} + ${informe2} = ${soma} --- `)
console.log()
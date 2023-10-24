const readline = require("readline-sync")

console.log("---Calcule suas médias---")
 let nota1 = readline.questionFloat("Informe a sua nota: ")
 let nota2 = readline.questionFloat("Informe a sua nota: ")
 let nota3 = readline.questionFloat("Informe a sua nota: ")
 let nota4 = readline.questionFloat("Informe a sua nota: ")
console.clear()
 let numeros = [nota1, nota2, nota3, nota4]

 let media = numeros.reduce((a, b) => a + b, 0 ) / numeros.length

 console.log(`A media das notas é: ${media}`)
//map - Ele percorre todo o array/ovjeto. Passa por cada elemento e faz o que eu disse pra fazer na função

 

var numeros = [5,8,7,98,4,5]

 

var pessoas = [

    {id: 5, nome: "Victor", idade: 27},

    {id: 45, nome: "Amanda", idade: 27},

    {id: 10, nome: "Miguel", idade: 5},

    {id: 50, nome: "Tufão", idade: 1}

]

 

var pares = numeros.map((numero)=> numero % 2 == 0 ? numero : "")

console.log(pares)

 

var dobro = numeros.map((n)=> n * 2)

 

// pessoas.map((pessoa)=> console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}`) )

 

 

// console.log(numeros)

// console.log(dobro)
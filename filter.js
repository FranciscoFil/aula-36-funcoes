// filter - Vai passar por cada elemento e vai retornar apenas o que eu passei na callback function. Utilizado para pesquisas.

var numeros = [5,8,7,98,4,5]

var pessoas = [

    {id: 5, nome: "Victor", idade: 27, dirige: true},

    {id: 45, nome: "Amanda", idade: 27, dirige: false},

    {id: 10, nome: "Miguel", idade: 5, dirige: true},

    {id: 50, nome: "Tufão", idade: 1, dirige: true}

]

 

var maiorIdade = pessoas.filter((pessoa) => pessoa.idade > 18 )

var pares = numeros.filter((numero)=> numero % 2 == 0 )

var maiorQue10 = numeros.filter((numero)=> numero < 10)

 

maiorIdade.map((pessoa)=>console.log(pessoa.nome))

console.log(pares)

console.log(maiorQue10)
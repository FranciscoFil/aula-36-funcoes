var nomes = ["Victor", "Joao", "Arão", "Keline", "Ian","Davi"]
var numeros = [5,4,1,10,8,6,7]

var pessoas = [
    {id: 5, nome: "Victor", idade: 27},
    {id: 45, nome: "Amanda", idade: 27},
    {id: 10, nome: "Miguel", idade: 5},
    {id: 50, nome: "Tufão", idade: 1}
]

var alfabetica = nomes.sort();
var crescente = [...numeros].sort((a,b)=>a - b)
var decrescente = [...numeros].sort((a,b)=>b - a)

var crescentee = pessoas.sort((a,b)=>{
    if (a.nome < b.nome) {
        return 1;
      }
      if (a.nome > b.nome) {
        return -1;
      }
      // a must be equal to b
      return 0;
})

console.log(numeros)
console.log(crescente)
console.log(decrescente)
console.log(alfabetica)
console.log(crescentee)
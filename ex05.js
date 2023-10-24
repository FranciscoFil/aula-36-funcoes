let numeros = [5,7,8,4,5]

var total =numeros.reduce((valorAnterior, valorAtual)=> valorAnterior + valorAtual, 0)

console.log(`Soma dos valores: ${total}`)
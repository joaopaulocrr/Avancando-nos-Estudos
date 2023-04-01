let num = [2 ,56, 3, 1]

//console.log(num.length)  mostra quantos elementos tem no array
//num.sort()               organiza os elementos em ordem crescente
//num.push(5)               adiciona o valor 5 ao final do array
console.log(num)
for (var c = 0; c < num.length; c++) {
    console.log(num[c])
}

let nome = ['João', 'Paulo', 'Marcos', 'Miguel']
console.log(nome)
var c = 0

while(c < nome.length) {
    console.log(nome[c])
    c++
}

let carro = ['astra', 'gol', 'palio', 'celta',]
console.log(carro)

var i = 0
do{
    console.log(carro[i])
    i++
}while(i < carro.length)

let carros = ['astra', 'gol', 'palio', 'celta', 'hillux', 's10', 'punto']


let pos = 0
for (let pos in carros) {
    console.log(carros[pos])
}
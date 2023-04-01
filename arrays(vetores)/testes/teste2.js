let carros = ['astra', 'gol', 'palio', 'celta', 'hillux', 's10', 'punto']

let pos = 0
for (let pos in carros) {
    console.log(carros[pos])
}
let tipo = carros.indexOf('hillux')
console.log('A hillux está na posição ' + tipo)

let nTipo = carros.indexOf('camaro')
console.log('O camaro está na posição ' + nTipo)
/*function contar() {
    let inicio = document.getElementById("inicio")
    let i = Number(inicio.value)
    let fim = document.getElementById("fim")
    let f = Number(fim.value)
    let passo = document.getElementById("passo")
    let p = Number(passo.value)
    let res = document.getElementById("res")
    res.innerHTML = `Contando: <br/>`
    
}*/

let inicio = 2
let fim = 20
let passo = 2

for (inicio; inicio <= fim; inicio + passo) {
    console.log (inicio)
}
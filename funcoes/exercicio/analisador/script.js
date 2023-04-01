let num = document.getElementById('txtnum')
let n_element = document.getElementById("numAd")
let resu = document.querySelector("#res")
let conjNum = []


function adicionar() {
    resu.innerHTML = ""

    if (num.value.length == 0) {
        alert("Insira um número para prosseguir.")
    } else {

        let numero = Number(num.value)
        if (numero <= 0 || numero > 100) {
            alert("Valor inválido. Insira um número entre 1 e 100!")
        } else {
            conjNum.push(numero)
            let novo = document.createElement("option")
            novo.text = `O número ${numero} foi adicionado.`
            n_element.appendChild(novo)

        }
        num.value = ""

    }

}

function soma(arr){
    var s = 0
    for(var c = 0; c < arr.length; c++) {
        s = s + arr[c]
        return s
    }
}

console.log(soma(conjNum))


function finalizar() {
    
    if (conjNum.length == 0) {
        alert("Adicione valores para continuar.")
    } else {

       

        resu.innerHTML = `<p>Ao todo temos ${conjNum.length} números cadastrados.</P>`
        resu.innerHTML += `<p>O menor valor informado foi ${conjNum.sort()[0]} .</p>`
       // resu.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
       // resu.innerHTML += `<p>Somando todos os valores temos ${resSoma}. </p>`
        resu.innerHTML += `<p>A média entre os valores digitados foi. </p>`
        
    }
}

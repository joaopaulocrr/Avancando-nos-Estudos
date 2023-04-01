let num = document.getElementById('txtnum')
let n_element = document.getElementById("numAd")
let resu = document.querySelector("#res")
let conjNum = []

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar() {
    resu.innerHTML = ""

    if (num.value.length == 0) {
        alert("Insira um número para prosseguir.")
    } else {

        let numero = Number(num.value)
        if (numero <= 0 || numero > 100 || inLista(numero, conjNum)) {
            alert("Valor inválido. Insira um número entre 1 e 100!")
        } else {
            conjNum.push(numero)
            let novo = document.createElement("option")
            novo.text = `O número ${numero} foi adicionado.`
            n_element.appendChild(novo)

        }
        num.value = ""
        num.focus()
    }

}



console.log(soma(conjNum))


function finalizar() {
    
    if (conjNum.length == 0) {
        alert("Adicione valores para continuar.")
    } else {
        
        let soma = 0
        let maior = conjNum[0]
        let menor = conjNum[0]
        for (let pos in conjNum){
            soma += conjNum[pos]
            if(conjNum[pos] > maior){
                maior = conjNum[pos]
            }
            if (conjNum[pos] < menor){
                menor = conjNum[pos]
            }
        }
        let media = soma / conjNum.length
       

        resu.innerHTML = `<p>Ao todo temos ${conjNum.length} números cadastrados.</P>`
        resu.innerHTML += `<p>O menor valor informado foi ${menor} .</p>`
        resu.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        resu.innerHTML += `<p>Somando todos os valores temos ${soma}. </p>`
        resu.innerHTML += `<p>A média entre os valores digitados foi ${media}. </p>`
        
    }
}

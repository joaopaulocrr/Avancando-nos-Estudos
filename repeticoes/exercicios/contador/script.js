function contar() {
    let inicio = document.getElementById("inicio")
    let i = Number(inicio.value)
    let fim = document.getElementById("fim")
    let f = Number(fim.value)
    let passo = document.getElementById("passo")
    let p = Number(passo.value)
    let res = document.getElementById("res")
    res.innerHTML = `Contando: <br/>🏳`

    if (i > f) {
        alert("[ERRO] Início não pode ser maior que fim.")
    }else{
        for (i; i <= f; i = i + p) {
            if (p == 0) {
                alert('Passo inválido! Considerando passo 1.')
                p = 1
            }
            res.innerHTML += `👉${i} `
        }
        res.innerHTML += "🚩"
    }

}


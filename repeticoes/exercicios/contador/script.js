function contar() {
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    let res = document.getElementById("res")
    res.innerHTML = `Contando: <br/>🏳`

    if (i == "" || f == "") {
        alert("Preencha todos os campos")
        res.innerHTML = `Tente novamente...`
    }else {
        if (i > f) {
            for (i; i >= f; i = i - p) {
                if (p == 0) {
                    alert('Passo inválido! Considerando passo 1.')
                    p = -1
                }
                res.innerHTML += `👉${i} `
            }
        }else{
            for (i; i <= f; i = i + p) {
                if (p == 0) {
                    alert('Passo inválido! Considerando passo 1.')
                    p = 1
                }
                res.innerHTML += `👉${i} `
            }
        }
        res.innerHTML += "🚩"
    }

}


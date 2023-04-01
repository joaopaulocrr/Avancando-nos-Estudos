function contar() {
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")


    let res = document.getElementById("res")
    

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("Preencha todos os campos")
        res.innerHTML = `Tente novamente...`
    } else {
        res.innerHTML = `Contando: <br/>🏳`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i > f) {
            for (i; i >= f; i = i - p) {
                if (p <= 0) {
                    alert('Passo inválido! Considerando passo 1.')
                    p = -1
                }
                res.innerHTML += `👉${i} `
            }
        } else {
            for (i; i <= f; i = i + p) {
                if (p == 0) {
                    alert('Passo inválido! Considerando passo -1.')
                    p = 1
                }
                res.innerHTML += `👉${i} `
            }
        }
        res.innerHTML += "🚩"
    }

}


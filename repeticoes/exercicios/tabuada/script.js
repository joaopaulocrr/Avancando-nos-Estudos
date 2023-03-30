function gerar() {
    let number = document.getElementById("num")
    num = Number(number.value)



    for (var i = 1; i < 11; i++) {
        let rSub = num * i
        let resultado = `${num} x ${i} = ${rSub} `
        
    }
}
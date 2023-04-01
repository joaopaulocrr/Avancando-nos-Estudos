function gerar(){
    
    let number = document.getElementById("num")
    let select = document.querySelector("#tab")
    if (number.value.length == 0) {
        alert ("Digite um número.")
    }else {
        select.innerHTML = ""
        for (var i = 1; i < 11; i++) {
        num = Number(number.value)
        let rSub = num * i
        let option = document.createElement("option")
        option.innerHTML = `${num}x${i}=${rSub}`
        option.value = `tab ${i}`
        select.appendChild(option)
        
        }
    }

}
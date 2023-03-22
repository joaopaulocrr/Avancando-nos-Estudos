function qualDia() {
    let dia = document.getElementById("idia")
    let res = document.getElementsByClassName("resposta")
    let corpo = document.getElementsByTagName('body')

    switch (dia) {
        case "domingo":
            res.style.background = 'black'
            break;
    
        default:
            break;
    }
}
let hours = document.querySelector('p#hora')
let horaAtual = new Date()
let horas = horaAtual.getHours()
let img = document.getElementById('imagem')
let corpo = document.querySelector("body")

hours.innerHTML = `<p>Agora são ${horas} hora(s).</p>`

if (horas < 6) {
    hours.innerHTML += '<p>Boa madrugada!</p>'
    img.style.backgroundImage = 'url("imagens/madrugada.webp")'
    corpo.style.background = "maroon"

} else if (horas >= 6 & horas <= 12) {
    hours.innerHTML += '<p>Bom dia!</p>'
    img.style.backgroundImage = 'url("imagens/manha.jpg")'
    corpo.style.background = "gold"

} else if (horas > 12 & horas <= 18) {
    hours.innerHTML += '<p>Boa tarde!</p>'
    img.style.backgroundImage = 'url("imagens/tarde.jpg")'
    corpo.style.background = "orangered"

} else if (horas > 18 & horas < 24) {
    hours.innerHTML += '<p>Boa noite!</p>'
    img.style.backgroundImage = 'url("imagens/noite.jpg")'
    corpo.style.background = "darkblue"

} else {
    hours.innerHTML += '<p>[ERRO] Hora inválida</p>'
}



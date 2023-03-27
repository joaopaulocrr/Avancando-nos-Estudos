let hours = document.querySelector('p#hora')
let horaAtual = new Date()
let horas = horaAtual.getHours()


hours.innerHTML = `Agora são ${horas} horas.`

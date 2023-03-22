

function verificar() {
  let veloc = document.getElementById('vel')
  let velNum = Number(veloc.value)
  let result = document.getElementById('res')

    if (velNum > 80) {
      result.innerHTML = `<p>Sua velocidade atual é <strong>${velNum} Km/h.</strong></p>`
      result.innerHTML += "<strong>CUIDADO!!!</strong> Você ultrapassou o limite de velocidade."
      result.style.background = 'red'
      result.classList.add("btn-pisca")
      
    }else if (velNum == 80) {
      result.innerHTML = `<p>Sua velocidade atual é <strong>${velNum} Km/h.</strong></p>`
      result.innerHTML += "<strong>ALERTA!!!</strong> Você está no limite da velocidade permitida"
      result.classList.remove("btn-pisca")
      result.style.background = 'yellow'
    }else{
      result.innerHTML = `<p>Sua velocidade atual é <strong>${velNum} Km/h.</strong></p>`
      result.innerHTML += "<strong>PARABÉNS!!!</strong> Você está dentro do limite de velocidade."
      result.style.background = 'green'
      result.classList.remove("btn-pisca")

    }
}


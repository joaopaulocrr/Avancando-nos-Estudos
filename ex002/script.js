let evento = document.querySelector('div#evento')
evento.addEventListener('click', clicar)
evento.addEventListener('mouseenter', entrar)
evento.addEventListener('mouseout', sair)


function clicar(){
  //let event = document.querySelector('div#evento')
  evento.innerHTML = 'Evento de clicar'
  evento.style.background = 'green'
}

function entrar(){
  //let event = document.querySelector('div#evento')
  evento.innerHTML = 'Evento de entrar'
  evento.style.background = 'orange'
}

function sair(){
  //let event = document.querySelector('div#evento')
  evento.innerHTML = 'Evento de sair'
  evento.style.background = 'purple'
}


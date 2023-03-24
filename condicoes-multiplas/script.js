function qualDia() {
    let resu = document.getElementById("res")
    let dia = document.querySelector("#idia")
   
    
    resu.innerHTML = `<p>Hoje é ${dia.value}.</p>`

    switch (dia.value) {
        case "domingo":
            resu.innerHTML += "<p>Dia de FUTEBOL.</p>"
            document.body.style.backgroundImage = "url('imagens/futebol.jpg')" ;
            document.body.style.color = 'white'
            break;

        case "segunda":
            resu.innerHTML += "<p>Dia de ESTUDAR.</p>"
            document.body.style.backgroundImage = "url('imagens/estudos.jpg')" ;
            document.body.style.color = 'black'
            break;
            
        case "terça":
            resu.innerHTML += "<p>Dia de IGREJA.</p>"
            document.body.style.backgroundImage = "url('imagens/igreja.jpg')" ;
            document.body.style.color = 'white'
            break;

        case "quarta":
            resu.innerHTML += "<p>Dia de CINEMA.</p>"
            document.body.style.backgroundImage = "url('imagens/cinema.jpg')" ;
            document.body.style.color = 'white'
            break;

        case "quinta":
            resu.innerHTML += "<p>Dia de TRABALHAR.</p>"
            document.body.style.backgroundImage = "url('imagens/trabalho.jpg'" ;
            document.body.style.color = 'white'
            break;

        case "sexta":
            resu.innerHTML += "<p>Dia dos AMIGOS.</p>"
            document.body.style.backgroundImage = "url('imagens/amigos.jpg')" ;
            document.body.style.color = 'white'
            break;

        case "sábado":
            resu.innerHTML += "<p>Dia de FAMÍLIA.</p>"
            document.body.style.backgroundImage = "url('imagens/familia.jpg')" ;
            document.body.style.color = 'black'
            break;

        default:
            resu.innerHTML = '[ERRO] Dia inválido'
            document.body.style.backgroundImage = "url('imagens/erro.jpg')" ;
            document.body.style.color = 'white'
            break;
    }
}
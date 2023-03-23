function qualDia() {
    let resu = document.getElementById("res")
    let dia = document.querySelector("#idia")
   
    
    resu.innerHTML = `<p>Hoje é ${dia.value}.</p>`

    switch (dia.value) {
        case "domingo":
            resu.innerHTML += "<p>Dia de FUTEBOL.</p>"
            document.body.style.backgroundImage = "url('imagens/futebol.jpg')" ;
            break;

        case "segunda":
            resu.innerHTML += "<p>Dia de ESTUDAR.</p>"
            document.body.style.backgroundImage = "url('imagens/estudos.jpg')" ;
            break;
            
        case "terça":
            resu.innerHTML += "<p>Dia de IGREJA.</p>"
            document.body.style.backgroundImage = "url('imagens/igreja.jpg')" ;
            break;

        case "quarta":
            resu.innerHTML += "<p>Dia de CINEMA.</p>"
            document.body.style.backgroundImage = "url('imagens/cinema.jpg')" ;
            break;

        case "quinta":
            resu.innerHTML += "<p>Dia de TRABALHAR.</p>"
            document.body.style.backgroundImage = "url('imagens/trabalho.jpg')" ;
            break;

        case "sexta":
            resu.innerHTML += "<p>Dia dos AMIGOS.</p>"
            document.body.style.backgroundImage = "url('imagens/amigos.jpg')" ;
            break;

        case "sábado":
            resu.innerHTML += "<p>Dia de FAMÍLIA.</p>"
            document.body.style.backgroundImage = "url('imagens/familia.jpg')" ;
            break;

        default:
            resu.innerHTML = '[ERRO] Dia inválido'
            document.body.style.backgroundImage = "url('imagens/.jpg')" ;
            break;
    }
}

function verificar() {

    let mens = document.getElementById("res")
    let img = document.getElementById("imagem")
    let anoN = document.getElementById("ano").value
    let anoNasc = Number(anoN)
    let ano = new Date()
    let anoAtual = ano.getFullYear()
    if (anoNasc < 1900 || anoNasc > anoAtual) {
        alert('[ERRO] Data inválida')

    } else if (anoNasc == anoAtual) {
        mens.innerHTML = `Foi detectado um bebê com menos de um ano de idade.`
        img.style.backgroundImage = "url(imagens/bebe.jpg)"
    } else {

        let idade = anoAtual - anoNasc
        let sexo = document.getElementsByName("sex")

        if (idade <= 4) {
            mens.innerHTML = `Foi detectado(a) um(a) bebê com ${idade} anos de idade.`
            img.style.backgroundImage = "url('imagens/bebe.jpg')"

        } else if (sexo[0].checked) {
            if (idade > 4 && idade <= 12){
                mens.innerHTML = `Foi detectado um garoto com ${idade} anos de idade.`
                img.style.backgroundImage = "url('imagens/menino.jpg')"
                

            }else if (idade > 12 && idade <= 20){
                mens.innerHTML = `Foi detectado um adolescente com ${idade} anos de idade.`
                img.style.backgroundImage = "url('imagens/adolescenteM.jpg')"

            }else if (idade > 20 && idade <= 60){
                mens.innerHTML = `Foi detectado um ${sexo[0].value} com ${idade} anos de idade.`
                img.style.backgroundImage = "url('imagens/homem.jpg')"

            }else{
                mens.innerHTML = `Foi detectado um senhor com ${idade} anos de idade.`
                img.style.backgroundImage = "url('imagens/senhor.jpg')"
            }
           

        } else if (sexo[1].checked) {
            if (idade > 4 && idade <= 12){
                mens.innerHTML = `Foi detectada uma garota com ${idade} anos de idade.`
                img.style.backgroundImage = "url('imagens/menina.jpg')"

            }else if (idade > 12 && idade <= 20){
                mens.innerHTML = `Foi detectada uma adolescente com ${idade} anos de idade.`
                img.style.backgroundImage = "url('imagens/adolescenteF.jpg')"

            }else if (idade > 20 && idade <= 60){
                mens.innerHTML = `Foi detectada uma ${sexo[1].value} com ${idade} anos de idade.`
                img.style.backgroundImage = "url('imagens/mulher.jpg')"

            }else{
                mens.innerHTML = `Foi detectada uma senhora com ${idade} anos de idade.`
                img.style.backgroundImage = "url('imagens/senhora.jpg')"
            }
        }else{
            alert('Escolha uma opção de gênero.')
        }

    }

}
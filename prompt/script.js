//alert('Olá, seja bem vindo ao Javascript!');
//confirm('Você vai conhecer um mundo sem limites!')
let nome = prompt('Qual é o seu nome? ')
let sal = prompt('Qual é o seu salário? ')
let msg = document.getElementsByTagName('p')[0]
msg.innerText = `Seja bem-vindo(a) ${nome}, seu salário atual é R$${sal} reais.`




//Função void (vazia)
function mostrar(){
    console.log("Você usou a função")
}
mostrar()


//Função com parametro (s)
function mostrarN(n){
    console.log("Você usou a função para mostrar o número " + n)
}
mostrarN(258)


//Função return
function somarN(n1, n2){
    const res = n1 + n2
    return res
}
const soma1 = somarN(258,584)
const soma2 = somarN(300,12)
console.log("O resultado da soma é " + soma1)
console.log("O resultado da soma é " + soma2)


//Função Arrow/ Arrow function
const multi = (n1, n2) => {
    const res = n1 * n2
    return res
}

const multi1 = multi(5,10)
console.log("O resultado da multiplicação é " + multi1)

//posso escrever a arrow function tudo na mesma linha

const menos = (n1, n2) => n1 - n2 //funciona como se tivesse um return 

const sub = menos(10,9)
console.log ("O resultado da subtração é " +sub)
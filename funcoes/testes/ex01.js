

function parImp(n) {
    if (n % 2 == 0){
        console.log('O valor é par')
    }else{
        console.log('O valor é ímpar')
    }
}

parImp(50)

function somar(n1=0,n2=0) {  //se um dos parametros não for passado, vai considerar 0
    return n1 + n2
    
}

let res = somar(215)
console.log(res)

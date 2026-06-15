//CRIAR UMS FUNÇÃO QUE RECEBE 2 NÚMEROS 
// E 1 BOLEANO ('SIM OU NÃO') A FUNÇÃO PRECISA SOMAR
//OS NÚMEROS E SE O BOLEANO FOR 'SIM' PRECISA ELEVAR 
// O RESULTADO AO QUADRADO E RETORNAR 

function calcula(numero1, numero2, boleano){
    let soma = numero1 + numero2
    if(boleano == 'Sim'){
        let raizQuadrada = soma**2
        return raizQuadrada
    }
    return soma
}

console.log(calcula(2,4,'sim'))

//Você vão criar uma função para verificar a entrada de um usuário. Se ele tiver idade maior ou igual a 18 anos ele poderá entrar. Se el tiver entre 16 a 18 anos ele poderá entar desde que esteja acompanhado. Se for menor 16 não poderá entar de forma alguma

function verificarEntrada(idade, acompanhado){
    if(idade >= 18){
        return 'Pode entrar, Seja Bem-vindo!'
    } else if(idade >= 16 && idade < 18){
        if(acompanhado){
            return 'Pode entrar! Voce está acompanhado'
        } else {
            return 'Não pode entrar, precisa estar acompanhado'
        }
    } else {
        return 'Não pode entrar'
    }
}

console.log(verificarEntrada(17,'Sim'))
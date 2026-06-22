// const nome = prompt("Qual é o seu nome?")
// const sobrenome = prompt("Qual seu sobrenome?")
// const idade = prompt("Qual sua idade?")
// const altura = prompt("Qual sua altura? (em metros, ex: 1.75)")
// const peso = prompt("Qual seu peso? (em kg)")

// //calculo de imc
// const imc = peso / (altura * altura)

// const paragrafo = document.getElementById("paragrafo")
// const sobrenomeP = document.getElementById("sobrenome")
// const idadeP = document.getElementById("idade")
// const alturaP = document.getElementById("altura")
// const pesoP = document.getElementById("peso")
// const imcP = document.getElementById("imc")

// paragrafo.innerHTML = nome + " " + sobrenome
// idadeP.innerHTML = "Idade: " + idade
// alturaP.innerHTML = "Altura: " + altura + " m"
// pesoP.innerHTML = "Peso: " + peso + " kg"
// imcP.innerHTML = "IMC: " + imc

//const nome = prompt("Digite o seu nome: ")
//const tamanhoNome = nome.length
//const segundaLetra = nome.charAt(1)
//const primeiraLetra = nome.charAt(0)
//const nomeMAIUSCULO = nome.toUpperCase()
//const nomeminusculo = nome.toLowerCase()

//document.body.innerHTML += `O seu nome é: ${nome} <br>`
//document.body.innerHTML += `O seu nome tem ${tamanhoNome} letras <br>`
//document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br>`
//document.body.innerHTML += `A primeira letra do seu nome é: ${primeiraLetra} <br>`
//document.body.innerHTML += `Seu nome em MAIUSCULO: ${nomeMAIUSCULO} <br>`
//document.body.innerHTML += `Seu nome em minusculo: ${nomeminusculo} <br>`

// const respostaPrompt = prompt('Digite um número: ');

// const numero = Number(respostaPrompt);

// const numeroTitulo = document.getElementById("numero-titulo");
// numeroTitulo.innerHTML = respostaPrompt;

// const ehNaN = Number.isNaN(numero) || respostaPrompt.trim() === "";

// if (ehNaN) {
//     document.getElementById('nan').innerHTML = "Sim";
//     document.getElementById('raiz').innerHTML = "Não é um número válido";
//     document.getElementById('inteiro').innerHTML = "Não é um número válido";
//     document.getElementById('cima').innerHTML = "Não é um número válido";
//     document.getElementById('baixo').innerHTML = "Não é um número válido";
//     document.getElementById('decimais').innerHTML = "Não é um número válido";
// } else {

//     document.getElementById('nan').innerHTML = "Não";

//     if (numero >= 0) {
//         document.getElementById('raiz').innerHTML = Math.sqrt(numero);
//     } else {
//         document.getElementById('raiz').innerHTML = "Não existe raiz real de número negativo";
//     }

//     const ehInteiro = numero % 1 === 0;
//     document.getElementById('inteiro').innerHTML = ehInteiro ? "Sim" : "Não";

//     document.getElementById('cima').innerHTML = Math.ceil(numero);

//     document.getElementById('baixo').innerHTML = Math.floor(numero);

//     document.getElementById('decimais').innerHTML = numero.toFixed(2);
// }

function validaForm(){
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  let pessoas = []

  form.onsubmit = function(evento){
    evento.preventDefault()
    const nome = document.querySelector('.nome')
    const sobrenome = document.querySelector('.sobrenome')
    const peso = document.querySelector('.peso')
    const altura = document.querySelector('.altura')
    //console.log(nome.value, sobrenome.value, peso.value, altura.value)
    const fabricaPessoas = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    }
      pessoas.push(fabricaPessoas)

      resultado.innerHTML += `<p> Nome: ${fabricaPessoas.nome} <br>
      Sobrenome: ${fabricaPessoas.sobrenome} <br>
      Altura: ${fabricaPessoas.altura} <br>
      Peso: ${fabricaPessoas.peso} <br>
      </p>`

  }

}

validaForm()
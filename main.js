const nome = prompt("Qual é o seu nome?")
const sobrenome = prompt("Qual seu sobrenome?")
const idade = prompt("Qual sua idade?")
const altura = prompt("Qual sua altura? (em metros, ex: 1.75)")
const peso = prompt("Qual seu peso? (em kg)")

//calculo de imc
const imc = peso / (altura * altura)

const paragrafo = document.getElementById("paragrafo")
const sobrenomeP = document.getElementById("sobrenome")
const idadeP = document.getElementById("idade")
const alturaP = document.getElementById("altura")
const pesoP = document.getElementById("peso")
const imcP = document.getElementById("imc")

paragrafo.innerHTML = nome + " " + sobrenome
idadeP.innerHTML = "Idade: " + idade
alturaP.innerHTML = "Altura: " + altura + " m"
pesoP.innerHTML = "Peso: " + peso + " kg"
imcP.innerHTML = "IMC: " + imc
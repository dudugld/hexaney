//Tipo de variáveis
//let, const, var

//const mantém a variável constante
// const nome = "Tiago"
// nome = "João Gabryel"
// console.log(nome)

// let nome = "Tiago"
// nome = "João Gabryel"
// console.log(nome)

//Se não declarar o tipo, entende que é let
// nome = "Tiago"
// nome = "João Gabryel"
// console.log(nome)

// VAR não é mais utilizado
// var nome = "Tiago"
// nome = "João Gabryel"
// console.log(nome)

// Tipos primitivos de dados
// String
// let nome = "Tiago" //aspas duplas
// nome = 'Tiago' //aspas simples
// nome = `Tiago` // template string (crase)

// //Number
let idade = 30 //Number
idade = 30.6 //Number

// // Nulo (null)
// let sobrenome = null
// console.log(sobrenome)

//Undefined
// let nomeDoMeio
// console.log(nomeDoMeio)

// true ou false
// let aprovado = true
// aprovado = false

// console.log(typeof idade)

// Outros tipos de dados
// Arrays (listas)
// const alunos = ['Salomão', 'Gabriel', 'Clara']
// console.log(alunos[0])

// //Objetos (Dicionários)
// const pessoa = {
//     nome: "Tiago",
//     sobrenome: "Barreto",
//     idade: 30
// }
// console.log(pessoa.idade)

// Operações no javascript
//Soma
// let salario = 2999
// let bonus = 500
// console.log(salario + bonus)
// // Subtração
// let deducao = 200
// console.log(salario - deducao)
// // Multiplicação
// let aumento = 1.2
// console.log(salario * aumento)
// //Divisao
// let divisor = 2
// console.log(salario/divisor)
// //Potenciação
// console.log(salario ** 2)
// // Resto da divisão
// console.log(salario % 2)

//Utilizando contador em JS
// let contador = 1
// contador = contador + 1
// console.log(contador)

// let contador = 1
// contador++
// console.log(contador)

// let contador = 1
// contador++
// contador++
// console.log(contador++)
// console.log(contador)

//Decrementar
// let contador = 3
// contador--
// contador--
// console.log(contador--)

// let contador = 0
// let passo = 2

// contador = contador + passo
// contador = contador + passo
// contador = contador + passo
// console.log(contador)

let contador = 0
let passo = 2

contador += passo
contador += passo
contador += passo

console.log(contador)
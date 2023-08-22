
/*
let nomeUser = undefined
let idadeUser = undefined

console.log(nomeUser)
console.log(idadeUser)

console.log(typeof nomeUser)
console.log(typeof idadeUser)*/

//Quando os valores das variáveis nomeUser e idadeUser não são definidas, os tipos são nulos ou indefinidos.

let nomeUser = prompt('Qual seu nome?')
let idadeUser = Number(prompt('Qual sua idade?'))

console.log(nomeUser)
console.log(idadeUser)
console.log(typeof nomeUser)
console.log(typeof idadeUser)

//Quando o usuário preenche os dados no prompt, as duas variáveis são impressas como strings (nome e idade).
//Para corrigir isso precisamos precisamos mudar o tipo de variável idadeUser.

console.log(`Olá, ${nomeUser}, você tem ${idadeUser} anos.`)
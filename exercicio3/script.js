
const nome = "Nome completo:"
const dataNascimento = "Data de nascimento(utilize as /):"
const endereco = "Endereço:"
const cpf = "CPF:"
const escolaridade = "Escolaridade:"
const cnh = "Possui CNH?"
const filhos = "Quantos filhes possui?"
const cargo = "Cargo atual:"
const salario = "Salário:"
const comissao = "Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel"
const admissao = "Informe o ano de admissão:"

let respostaNome = prompt(nome)
let respostaDataNascimento = prompt(dataNascimento)
let respostaEndereco = prompt(endereco)
let respostaCpf = prompt(cpf)
let respostaEscolaridade = prompt(escolaridade)
let respostaCnh = prompt(cnh)
let respostaFilhos = Number(prompt(filhos))
let respostaCargo = prompt(cargo)
let respostaSalario = prompt(salario)
let respostaComissao = confirm(comissao)
let respostaAdmissao = Number(prompt(admissao))

console.log(nome , respostaNome)
console.log(typeof nome , typeof respostaNome)

console.log(dataNascimento , respostaDataNascimento)
console.log(typeof dataNascimento , typeof respostaDataNascimento)

console.log(endereco , respostaEndereco)
console.log(typeof endereco , typeof respostaEndereco)

console.log(cpf , respostaCpf)
console.log(typeof cpf , typeof respostaCpf)

console.log(escolaridade , respostaEscolaridade)
console.log(typeof escolaridade , typeof respostaEscolaridade)

console.log(cnh , respostaCnh)
console.log(typeof cnh , typeof respostaCnh)

console.log(filhos , respostaFilhos)
console.log(typeof filhos , typeof respostaFilhos)

console.log(cargo , respostaCargo)
console.log(typeof cargo , typeof respostaCargo)

console.log(salario , respostaSalario)
console.log(typeof salario , typeof respostaSalario)

console.log(comissao , respostaComissao)
console.log(typeof comissao , typeof respostaComissao)

console.log(admissao , respostaAdmissao)
console.log(typeof admissao , typeof respostaAdmissao)
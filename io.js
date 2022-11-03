const process = require('process') //ja vem no Node

//console.log(process.argv)

//process.stdout.write('Qual o seu nome')
console.log('Digite seu nome: ')

//stdin.on para receber dados 'data' obrigatório pro Node
//keyuboard o nome da variavel que ira guardar esses addos
process.stdin.on('data', (keyboard) => {
    
    process.stdout.write(`Nome do usuario: ${keyboard}`)
    process.exit()
})

//process.stdout.write mais simples que o console logo
//console.log chama ele porem com coisas a mais pra pular linha e etc
 
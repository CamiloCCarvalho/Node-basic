const fs = require('fs') // ja vem no Node

//writeFile: cria o arquivo, passa o conteudo e tem uma função e caso de erro
//ele sobreescreve todo o arquivo apagando o que estava antes
fs.writeFile('test.txt', 'Olá NodeJS', err => {
    console.log(err)
})

//Ira escrever na frente do texto anterior continuando a linha
fs.appendFile('test.txt', 'Olá NodeJS', err => {
    console.log(err)
})

//ira renomear o arquivo
fs.rename('test.txt', 'test2.txt', err => console.log(err))

//ira remover o arquivo 
fs.unlink('test.txt', err => console.log(err))

console.log(__dirname) // __dirname é uma variavel de ambiente sempre disponivel pro Node saber em que pasta ele esta . 
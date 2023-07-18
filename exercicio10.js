// 10. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

let prompt = require("prompt-sync")()


// //WHILE
// let numero = parseFloat(prompt("Digite um número: "))

// while (numero != 0) {
//     numero = parseFloat(prompt("Digite um número: "))
// }


//DO WHILE
let numero;

do {
    numero = parseFloat(prompt("Digite um número: "))
} while (numero != 0)
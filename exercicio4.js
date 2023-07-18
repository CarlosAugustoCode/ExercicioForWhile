// 4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

let prompt = require("prompt-sync")()

let tabuada = parseInt(prompt("A tabuada de qual número você quer: "))

for (numero = 1; numero <= 10; numero++) {
    console.log(tabuada + " x " + numero + " = " + (tabuada * numero))
}
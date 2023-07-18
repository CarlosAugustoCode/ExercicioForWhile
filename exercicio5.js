// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let contador = 2; contador <= 9; contador++) {
  fibonacci[contador] = fibonacci[contador - 2] + fibonacci[contador - 1];
}
console.log(fibonacci);
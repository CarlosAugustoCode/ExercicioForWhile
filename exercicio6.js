// 6. Imprimir números pares de 0 a 20 utilizando o loop while.

let pares = 0

while (pares <= 20) {
    let resto = pares % 2;
    if (resto == 0) {
        console.log(pares)
    }
    pares = pares + 1;
}

// let contador = 0;

// while (contador <= 20) {
//     console.log(contador)
//     contador += 2
// }

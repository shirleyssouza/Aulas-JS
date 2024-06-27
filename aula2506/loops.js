// Estruturas de repetição = loops = laços
/* Essas estruturas possuem:
    - Condição de parada
    - Valor inicial / (variável de controle, contador)
    - Atualização
 */
// While = Enquanto
/*
    while (condição) {
    //o código que será repetido
    }
 */

// Loop infinito    
// while(true) {
//     console.log("Batata")
//}

let numero = 0 // Valor inicial

while(numero < 10) {
    console.log(numero);
    numero++; // Atualização
}



let numero3 = 100;

while(numero3 > 0) {
    console.log(numero3);
    numero3--; // numero3 = numero3 - 1
}
console.log(numero3);

// Soma 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = ?
let cont = 1;
soma = 0;

//Do 1 até 10
while(cont <= 10) {
    soma = soma + cont;
    cont++;
}
console.log(soma)

console.log("FIM")
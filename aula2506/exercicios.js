/*1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.*/
let numero = 1;

while(numero <= 10) {
    numero += 1;
    if (numero % 2 == 0) {
        console.log(numero);
    }
}

/*2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70*/

let cont2 = 1;

while(cont2 <= 10) {
    tabuada = 7 * cont2
    console.log("7 X " + cont2 + " = " + tabuada )
    cont2 += 1
}

/*3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.*/

let numero3 = 0;
let soma = 0;

while (numero3 < 1000) {
    numero3 += 1;
    if (numero3 % 2 == 1 || numero3 == 1) {
        soma = soma + numero3;
        console.log(soma);
    }
} 

/*4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.*/

let numero4 = 0;
let cont4 = 0; 

while(numero4 <= 1000) {
    numero4 += 1
    if (numero4 % 9 == 0) {
        console.log(numero4)
        cont4++;
    }
}
console.log(cont4 + " números são divisíveis por 9.");

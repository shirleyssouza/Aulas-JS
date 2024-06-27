/*1. Faça a tabuada completa utilizando o loop for.*/

for(let cont = 1; cont <= 10; cont++) {
    for( let n1 = 1; n1 <= 10; n1++) {
        console.log(`${cont} X ${n1} = ${cont*n1}`)
    }
}

/*2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.*/
// NÃO CONSEGUI FAZE ESSA SOZINHA, ESPEREI A RESOLUÇÃO EM AULA PARA ENTREGAR A TAREFA.

let termoAnterior = 0;
let termoAtual = 1;

for(let c = 0; c < 10; c++) {
    let proximoTermo = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
    console.log(termoAnterior);
}

/*3. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).*/

for(let cont = 10; cont >= 1; cont--) {
    console.log(cont)
}

/*4. Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.*/

let numero4 = 5;
let fatorial = 1;

for (let cont = 1; cont <= numero4; cont++) {
    fatorial = fatorial * cont
}
console.log(fatorial);

/*5. Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.*/

for(let cont = 1; cont <= 100; cont++) {
    if(cont % 7 === 0) {
        console.log(cont)
    }
}

/*6. Mostre a soma do 50 até o número 100 usando loop for.*/

let soma = 0

for(let cont = 50; cont <= 100; cont++) {
    soma = soma + cont;
}
console.log(soma)

/*7. Mostre a seguinte figura com utilização de laços:
*
**
***
****
*****
*/

let soma7 = ""

for(let cont = 1; cont <= 5; cont++) {
    soma7 += "*"
    console.log(soma7)
}
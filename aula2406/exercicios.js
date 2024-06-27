// 1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8

let farenheit = 90;
C = (farenheit - 32) / 1.8;
// Concatenação = juntar valores de variáveis no texto
console.log("A temperatura em celcius é: " + C.toFixed(1) +"°C")

// 2. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5.

let nota1 = 4
let nota2 = 8
let nota3 = 7
let nota4 = 6
let nota5 = 3

let media = (3*nota1 + 2*nota2 + nota3 + 4*nota4 + 5*nota5) / 15
console.log("A média ponderada é: " +media.toFixed(2))
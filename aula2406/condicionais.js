/* Estruturas condicionais (If-Else) 

    if (condição) {
        instruções caso verdadeiro    
    }

    else {
        instruções caso falso
    }
*/

let idade = 15;

if (idade > 18) { // bloco se verdadeiro
    console.log("Você é maior de 18 anos!")
}
else {
    console.log("Você é menor de idade.")
} 

let media = 7.0;
let sabeIngles = true;
let aprovado = media >= 7;

if (aprovado) {
    console.log("Parabéns! Você foi aprovado!")
} else {
    console.log("Que pena! Continue tentando!")
}

if (aprovado && sabeIngles) {
    console.log("Você foi contratado!")
} else {
    console.log("Você não foi contratado.")
}

// Positivo, Negativo ou Zero
let numero = -15;

if (numero > 0) { // caso o número seja positivo
    console.log("O número " + numero + " é positivo.")
} else if (numero < 0) {
    console.log("O número " + numero + " é negativo.");
} else {
    console.log("O número é zero.")
}

// É par (divisivel por 2) ou impar (não for divisivel por 2)

let n = 7;

if (n % 2 == 0) {
    console.log("O número é par!")
} else {
    console.log("O número é impar!")
}

// 1 - Domingo, 2 - Segunda, 3 - Terça, ..., 7 - Sábado

let dia = 4;

if (dia == 1) {
    console.log("Hojé é domingo!")
}
else if (dia == 2) {
    console.log("Hojé é segunda!")
}
else if (dia == 3) {
    console.log("Hojé é terça!")
}
else if (dia == 4) {
    console.log("Hojé é quarta!")
}
else if (dia == 5) {
    console.log("Hojé é quinta!")
}
else if (dia == 6) {
    console.log("Hojé é sexta!")
}
else if (dia == 7) {
    console.log("Hojé é sábado!")
} else {
    console.log("Não existe esse dia da semana.")
}

console.log("FIM")
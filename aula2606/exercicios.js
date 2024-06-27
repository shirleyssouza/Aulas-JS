/*1. Escreva um programa que inverte uma string*/

let palavra = "Exercicio";
let invertida = "";

for(let i = palavra.length -1; i >= 0; i--) {
    invertida = invertida + palavra[i]
}
console.log(invertida)

/*2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"*/

let frase = "Exercicio de strings no JavaScript";

console.log(frase.replace("strings", "###"));

/*3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com*/

let email = "shirley@soulcode.com";

if(email.endsWith("soulcode.com") || email.endsWith("soulcodeacademy.com")) {
    console.log("Você já tem email da SoulCode!");
} else {
    console.log("Seu email ainda não é da SoulCode.");
}
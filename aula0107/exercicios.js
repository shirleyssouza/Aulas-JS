/*1. Crie uma função arrow que recebe dois números e retorna o maior deles.*/

const quest1 = (a, b) => {
    if(a > b) {
        return `O número ${a} é maior que ${b}.`;
    } else {
        return `O número ${b} é maior que ${a}.`;
    }
}
console.log(quest1(1,3))

/*2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.*/

let palavras = ["macaco", "capivara", "cobra", "golfinho"];
palavras.forEach(p => console.log(p.replace(p[0], p[0].toUpperCase())));


/*3. Use map para transformar um array de números, multiplicando cada número por 5.*/

let num3 = [5, 6, 3, 4];
const quest3 = num3.map((n) => n*5);

console.log(quest3);

/*4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.*/

let idades = [25, 15, 36, 8, 12, 43];
const quest4 = idades.filter((i) => i > 18);

console.log(quest4);

/*5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.*/

let livro = {
    titulo: "javscript",
    autor: "soulcode",
    publicacao: 
        {editora: "internet", ano: "2024"}
}
console.log(livro.publicacao.editora);

/*6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.*/

let frutas = ["banana", "morango"];
const [amarela, vermelha] = frutas.slice("");

console.log(amarela, vermelha)

/*7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.*/

// Quest 1

let numeros = [8, 15, 9, 12, 6, 7];

const numerosPares = numeros.filter((n) => n % 2 == 0);
console.log(numerosPares)

// Quest 2
let soma = 0;
numeros.forEach(n => soma += n);
console.log(soma);

//Quest 3

const palindromo = (string) => string == string.split("").reverse().join("") 
console.log(palindromo("ARARA"));



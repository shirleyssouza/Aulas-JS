/*
Operadores lógicos -> boolean
&& -> E (AND)
|| -> OU (OR)
! -> NÂO (NOT)
*/

console.log(true);
console.log(false);

// AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(true && true && true && false); // false
console.log(false && true); //false

// or (||)
console.log(true || true); // true
console.log(true || false); //true
console.log(true || false || false || false); //true
console.log(false || false); // false

// NOT(!)
console.log(!true) //false
console.log(!false) //true

// Ordem: ! > && > ||
console.log(!true || false); // false
console.log(true || true && false) // true
console.log(!false && true || false) //true

let idade = 80;
// Idade entre 18 e 59 anos
console.log(idade >= 18 && idade <= 59);

let media = 7.0;
let sabeIngles = true;
let aprovado = media >= 7;
console.log(aprovado)

let contratado = aprovado && sabeIngles;
console.log("Contratado? " + contratado)

let reprovado = !aprovado; // Inverte o valor lógico dentro de aprovado
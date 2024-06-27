let nums = [];

// Adiciona elemento ao final do array
nums.push(4);
nums.push(5);
nums.push(10);
console.log(nums);
nums.push(1000);
console.log(nums);

// Removendo o último elemento
nums.pop(); // removeu o 1000
nums.pop(); // removeu o 10
console.log(nums);

// Inserir no ínicio
let notas = [6.5, 7.9, 9];
console.log(notas)
notas.unshift(8.0);
notas.unshift(4.5);
notas.unshift(7.0);
console.log(notas);

// Remover do ínicio
notas.shift(); // Removeu o 7.0
notas.shift(); // Removeu o 4.5
console.log(notas);

// Juntar o array e montar uma string
let endereçoIP = [192, 168, 1, 1];
console.log(endereçoIP.join("."));

let data = ["27", "06", "2024"];
let dataString = data.join("/");
console.log(dataString);

// Concatenando arrays
let p1 = ["Mouse", "Monitor",  "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p1.concat(p2); // Novo array com os dois combinados
console.log(p3);

// Array reverso
let n = [1, 2, 3];
let nInvertido = n.reverse();
console.log(nInvertido); 

// Includes
let pessoas = ["joão", "josé", "ana"];

if (pessoas.includes("josé")) {
    console.log("josé está presente");
} else {
    console.log("josé não está presente");
}

// Split
let frase = "Eu vou estudar React";
let dataInicio = "26/06/2000";
let palavraEspecial = "BATATA"

let fraseArray = frase.split(" ");
console.log(fraseArray);

let dataArray = dataInicio.split("/");
console.log(dataArray);

// Inverter a string
console.log(palavraEspecial.split("").reverse().join(""));

// indexOf -> retornar o indice de um elemento
let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];

console.log(figuras.indexOf("ok")); // 2
console.log(figuras.indexOf("joinha")); // 4
console.log(figuras.indexOf("batata")); // -1 -> não encontrou o elemento no array

// Recortar uma parte do array

let fig1 = figuras.slice(1,3); //posição 1 a 2
console.log(fig1);

let fig2 = figuras.slice(3); // corta 3 até o final do array
console.log(fig2);

// Último elemento
console.log(figuras.slice(-1)); // mostra o elemento na lista
console.log(figuras[figuras.length -1]); //busca o elemento da lista


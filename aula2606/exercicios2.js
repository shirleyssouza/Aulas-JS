/*1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.*/

function imc(altura, peso) {
    let calculo = peso / altura**2;
    return calculo;
}

let numeroImc = imc(1.70, 50);
console.log(`Seu IMC é ${numeroImc.toFixed(2)}.`);

function indice(numeroImc) {
    if(numeroImc <= 18.5) {
        console.log("Você está abaixo do peso desejado.")
    } else if(numeroImc >= 18.6 && numeroImc <= 24.9) {
        console.log("Você está dentro do peso desejado")
    } else {
        console.log("Você está acima do peso desejado!")
    }
}
indice(numeroImc);


/*2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%*/

function porcentagem(a) {
    let calculo = a * 100 + "%";
    return calculo
}

let calculoPorcentagem = porcentagem(0.584);
console.log(`Valor ${calculoPorcentagem.toFixed(1)}`);

/*3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true*/

function ehNegativo(numero) {
    if(numero < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(ehNegativo(-2))

/*4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.*/

function contar(numero) {
    for(let c = 1; c <= numero; c++) {
        console.log(c)
    }
}
contar(10);

/*5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.*/

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Shirley", "Souza"));

/*6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.*/

function circulo(raio) {
    let area = 3.14 * raio**2;
    return area;
}

let valorArea = circulo(2.4);
console.log(`A área do circulo é ${valorArea.toFixed(1)}mt.`);


/*7. Crie uma função que recebe a área de um circulo e mostra o nível:
Entre 1 e 20 => Nível I
Entre 21 e 40 => Nível II
Qualquer outro diâmetro => Nível inválido*/

function nivelCirculo(area) {
    if(area >= 1 && area <= 20) {
        console.log("Nível I");
    } else if (area >= 21 && area <= 40) {
        console.log("Nível II");
    } else {
        console.log("Nível inválido.")   
    }
}
nivelCirculo(valorArea);

/*8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.*/

function palavra(a) {
    return a.toLowerCase();
}
console.log(palavra("Amanhã"));

/*9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.*/

function contarCaractere(palavra, caractere) {
    let ocorrencias = 0;
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === caractere){
            ocorrencias++
        }
    }
    return ocorrencias;
}
console.log(contarCaractere("batata", "a"))
/*1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.*/
//PENDENTE

/*2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.*/

function quest2(array) {
    let quadrado = 0
    let arrayQuadrado = [];
    for(let i = 0; i < array.length; i++) {
        quadrado = array[i]**2;
        arrayQuadrado.push(quadrado);
    }
    return arrayQuadrado;
}
let numeros = [8, 5, 7, 6];
console.log(quest2(numeros));

/*3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar /apenas os nomes de arquivo que forem dessa extensão.*/

function quest3(array, extensao) {
    let listaNova = [];
    for(i of array) {
        if(i.endsWith(extensao)) {
            listaNova.push(i);
        }
    }
    return listaNova;
}
let arquivos = ["musica.mp3", "index.html", "pagina.js", "audio.mp3"];
console.log(quest3(arquivos, "mp3"));

/*4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.*/

let quest4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i of quest4) {
    console.log(i);
}

for(let i = 0; i < quest4.length; i++) {
    console.log(quest4[i]);
}

/*5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.*/

function quest5(array) {
    novaLista = [];
    for(i of array) {
        if(i.length > 5) {
            novaLista.push(i);
        }
    }
      return novaLista;
}
let nomes = ["maria", "rita", "fellipe", "marcelo", "diego", "matheus"];
console.log(nomes);

/*6. Crie um array com 7 números. Percorra e indique qual o maior número deles.*/
// PENDENTE

/*7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.*/

function quest7(cpf) {
    let array = cpf.split("");
    return array.slice(-2).join("");
}

console.log(quest7("111.777.666.25"));

/*8. Crie uma função que inverte uma string. Retorna ela invertida.*/

function quest8(palavra) {
    return palavra.split("").reverse().join("");
}

console.log(quest8("comida"));

/*9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.*/

function quest9(palavra, num) {
    let cont = 0;
    let string = "";
    while(cont < num) {
        string = string + palavra;
        cont++;
    }
    return string;
}
console.log(quest9("computador", 5));

/*10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.*/

function quest10(str1, str2) {
    if(str1 === str2) {
        return true;
    } else {
        return false;
    }
}
console.log(quest10("amor", "roma"))

/*11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'*/

function quest11(array, a) {
     return array.join(a);
}

let data = [27, 6, 2024]
console.log(quest11(data, "/"));

/*12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'*/

function quest12(array, busca, msg_retorno) {
    if(array.includes(busca)) {
        console.log(busca);
    } else {
        console.log(msg_retorno);
    }
}
let musicas = ["amanhã", "desalento", "carinhoso", "amado", "estrela"];
quest12(musicas, "carinhoso", "Não disponivel!");
/*1 -  Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.*/

function quest1(array) {
    let pares = [];
    for(i of array) {
        if(i % 2 === 0) {
            pares.push(i);
        }
    }
    return pares;
}
let num1 = [15, 598, 16, 17, 9, 13, 795, 4, 3];
console.log(quest1(num1));

// Criar uma função para percorrer cada item da lista e depois um if para identificar quais items dessa lista são pares, depois juntar todos numa nova variável.

/*2 - Escreva uma função que receba um array de números e retorne a soma de todos os números.*/

function quest2(array) {
    let soma = 0;
    for(let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
}
let num2 = [8, 6, 15, 19, 4, 7];
console.log(quest2(num2));

// Criar uma função que recebe uma lista de numeros, percorrer cada item dessa lista e criar uma equação para somar cada item, retornar só o resultado.

/*3 - Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.*/

function quest3(string) {
    let reversa = string.split("").reverse().join("");
    if(string === reversa) {
        return true;
    } else {
        return false;
    }
}
console.log(quest3("arara"));

//pensei em transformar a palavra num array mas testei e vi que ele tbm identifica se uma string é exatamente igual a outra, então só precisei reverter a string e comparar as duas.

/*4 - Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.*/

function quest4(string) {
    let vogais = ["a", "e", "i", "o", "u"];
    let separada = string.split("");
    let cont = 0;
    for(let i = 0; i < separada.length; i++) {
        if(vogais.includes(separada[i])) {
        cont += 1
        }
    }
    return `A palavra ${string} contém ${cont} vogais.`;
}
console.log(quest4("macaco"));

// Pensei em identificar as vogais na string, mas ele só leria o primeiro caractere caso a vogal fosse repetida, então criei dois arrays para poder comprar se cada um doa itens estava incluido no outro.

/*5 - Escreva uma função que receba um array de números e retorne o menor número do array.*/

function quest5(array) {
    let menor = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < menor) {
            menor = array[i]
        }
    }
    return menor;
}
num5 = [8, -5, 100, -50, 9, 0];
console.log(quest5(num5));

// Tranformar a variavel "menor" sempre no menor número da lista por meio de comparação com os outros itens, no final ela guardará o valor do menor número entre os testados.

/*6 - Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3*/

function quest6(array) {
    let soma = 0;
    for (i of array) {
        soma += i;
    }
    return soma / array.length;
}

let num6 = [8, 6, 4, 7, 5, 2];
console.log(quest6(num6));

// Criar uma função de soma (acumulação) para somar cada numero da lista e depois dividir pelo numero de itens dessa lista.

/*7 -  Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.*/

function quest7(string) {
    let dicionario = {};
    for(let caractere of string) {
        dicionario[caractere] = 0;
    }
    for(let caractere of string) {
        dicionario[caractere]++;
    }        
    console.log(dicionario)
}
quest7("macaco")

/*8 - Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.*/

function quest8(email) {
    let divisao = email.split("@");
    let nome = divisao[0];
    let parteUm = nome.slice(0, 2);
    let parteDois = nome.slice(2);
    for (i of parteDois) {
        parteDois = parteDois.replace(i, "*");
    }
    return parteUm + parteDois + "@" + divisao[1];
}
console.log(quest8("shirley@mensa.org.br"));

// Desestruturação
const ofuscarEmail = (email) => {
    const [usuario, dominio] = email.split("@");
    return usuario[0] + "******" + "@" + dominio;
}
console.log(ofuscarEmail("shirley@mensa.org.br"))

//Essa ficou grande e não sei se tem uma forma menor de fazer, eu pensei que tinha que separar do resto do email os caracteres que quero esconder e transformar eles no simbolo que quero, depois juntar tudo de novo.
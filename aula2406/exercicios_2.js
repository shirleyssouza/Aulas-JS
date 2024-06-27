/* 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação
*/
let nota1 = 8
let nota2 = 4
let nota3 = 2

let media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    console.log("Sua nota final foi " + media.toFixed(1) + " e você está aprovado!")
}
else if (media >= 5 && media < 7) {
    console.log("Sua nota final foi " + media.toFixed(1) + " e você está em recuperação!")
}
else if (media < 5) {
    console.log("Sua nota final foi " + media.toFixed(1) + " e você está reprovado!")
}

/*2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.*/

let peso = 64
let altura = 1.68

let imc = (peso / (altura**2))

if (imc < 17) {
    console.log("Seu IMC é " + imc.toFixed(2) + " e você está abaxo do peso ideal.")
}
else if (imc >= 17 && imc < 25) {
    console.log("Seu IMC é " + imc.toFixed(2) + " e você está no peso ideal.")
}
else if (imc >= 25) {
    console.log("Seu IMC é " + imc.toFixed(2) + " e você está acima do peso ideal.")
}

/*3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!*/

let numa = 6;
let numb = 6;

if (numa > numb) {
    console.log("O número A é maior que o número B.")
} 
else if (numa < numb) {
    console.log("O número A é menor que o número B.")
} 
else if (numa === numb) {
    console.log("O número A é igual ao número B.")
} 

/*4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.*/

let salario = 1500
let quantidadeDependentes = 7

if (quantidadeDependentes === 0) {
    console.log("Você não tem dependentes e não terá direito ao reajuste salarial.");
} else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    let reajuste = (30 / 100) * salario;
    salario = salario + reajuste;
    console.log("Você tem " + quantidadeDependentes + " dependentes e terá direito a um resjuste de 30% no seu salário, o novo valor será de: R$" + salario.toFixed(2) + ".");
} else if (quantidadeDependentes > 5) {
    let reajuste = (40 / 100) * salario;
    salario = salario + reajuste;
    console.log("Você tem " + quantidadeDependentes + " dependentes e terá direito a um resjuste de 40% no seu salário, o novo valor será de: R$" + salario.toFixed(2) + ".");
}

/*5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.*/

let diaDaSemana = 6;

if (diaDaSemana === 1 || diaDaSemana === 7) {
    console.log("Aproveite o final de semana!")
}
else if (diaDaSemana >= 2 && diaDaSemana <= 6) {
    console.log("Hoje é considerado dia útil!")
}
else {
    console.log("Dia digitado inválido, digite de 1 a 7.")
}

/*6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.*/

let ano = 2024;

if (ano % 4 == 0 && ano % 100 != 0) {
    console.log("O ano " + ano + " é um ano bissexto!")
}
else if (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0) {
    console.log("O ano " + ano + " é um ano bissexto!")
}
else {
    console.log("O ano " + ano + " NÃO é um ano bissexto!");
}

/*7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.*/

let idade = 65;

if (idade > 0 && idade <= 130) {
    console.log("Sua idade é válida!")
}
else {
    console.log("Idade digitada inválida!")
}

/*8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.*/

let turnoAula = "M";

if (turnoAula === "M") {
    console.log("Bom dia!")
}
else if (turnoAula === "V") {
    console.log("Boa tarde!")
}
else if (turnoAula === "N") {
    console.log("Boa noite!")
}
else {
    console.log("Valor inválido!")
}
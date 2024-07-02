// Objetos -> são estruturas para representar dados
let pessoa = {
    nome: "José Almir",
    cpf: "999.999.999-99",
    dataNascimento: "10/01/2000",
    contato: {
        email: "jose-almir@soulcode.com",
        telefone: "(99) 9-9999-9999",
        fax: "+9 999 999 9999"
    },
    endereco: {
        cidade: "Fortaleza",
        estado: "CE",
        cep: "99999-99",
        rua: "Rua x",
        numero: "271"
    },
    objetivosProfissionais: ["Home Office", "Desenvolvidor Senior", "Exterior"],
    formacao: [
        {nome: "Ensino médio", periodo: "2000-2003"}, // 0
        {nome: "Técnico em Informática", periodo: "2003-2005"}, // 1
        {nome: "Bacharelado em computação", periodo: "2005-2010"} // 2
    ]
}
console.log(pessoa.contato);
console.log(pessoa.contato.email);
console.log(pessoa.endereco.estado);
pessoa.objetivosProfissionais.push("Dólar");
console.log(pessoa.objetivosProfissionais);
pessoa.objetivosProfissionais.forEach(objetivo => console.log(objetivo));
pessoa.formacao.push({nome: "Mestrado em IA", periodo: "2010-2012"});
console.log(pessoa.formacao[0].nome);

for(let f of pessoa.formacao) {
    console.log("Formação: " + f.nome);
    console.log("Período: " + f.periodo);
}

// Crie um objeto para representar um aluno
aluno = {
    nome: "Shirley Souza",
    serie: "segundo ano",
    materias: [
        {nome: "matemática", nomeProfessor: "José"},
        {nome: "português", nomeProfessor: "Alexandre"},
        {nome: "história", nomeProfessor: "Tereza"}
    ],
    notas: [8.0, 7.3, 5.4]
}
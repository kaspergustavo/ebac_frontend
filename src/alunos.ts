const alunos = [
    { nome: "Zezinho", nota: 6 },
    { nome: "Joãozinho", nota: 7 },
    { nome: "Pedro", nota: 8 },
    { nome: "Lionel", nota: 5 },
    { nome: "Arrascaeta", nota: 3 },
    { nome: "Geromel", nota: 10 }
];

function filtroAlunosAprovados(alunos) {
    return alunos.filter(alunos => alunos.nota >= 6);
}

const alunosAprovados = filtroAlunosAprovados(alunos);

console.log("Alunos Aprovados");
alunosAprovados.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}, nota: ${aluno.nota}`);
});
"use strict";

var alunos = [{
  nome: "Zezinho",
  nota: 6
}, {
  nome: "Joãozinho",
  nota: 7
}, {
  nome: "Pedro",
  nota: 8
}, {
  nome: "Lionel",
  nota: 5
}, {
  nome: "Arrascaeta",
  nota: 3
}, {
  nome: "Geromel",
  nota: 10
}];
function filtroAlunosAprovados(alunos) {
  return alunos.filter(function (alunos) {
    return alunos.nota >= 6;
  });
}
var alunosAprovados = filtroAlunosAprovados(alunos);
console.log("Alunos Aprovados");
alunosAprovados.forEach(function (aluno) {
  console.log("Nome: ".concat(aluno.nome, ", nota: ").concat(aluno.nota));
});
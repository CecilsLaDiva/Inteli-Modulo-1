// Controle de notas de alunos
var nota1 = 7;
var nota2 = 5;
var nota3 = 8; // Adicione a nota3 para testar diferentes cenários

// Verificando se o aluno passou, reprovou ou está em recuperação
var mediaParaPassar = 6;
var media = (nota1 + nota2 + nota3) / 3;

var alunoPassou = media >= mediaParaPassar;
var alunoReprovou = media < mediaParaPassar && media >= 4; // Supondo que a nota mínima para recuperação seja 4
var alunoEmRecuperacao = media < 4;

// Exibindo resultado
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Média para passar:", mediaParaPassar);

console.log("Média do aluno:", media);

if (alunoPassou) {
  console.log("Aluno passou!");
} else if (alunoReprovou) {
  console.log("Aluno reprovou.");
} else if (alunoEmRecuperacao) {
  console.log("Aluno em recuperação.");
} else {
  console.log("Erro ao avaliar o aluno.");
}
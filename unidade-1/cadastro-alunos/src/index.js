const prompt = require("prompt-sync")();

function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

function classificarSituacao(media, frequencia) {
    if (media >= 70 && frequencia >= 75) {
        return "Aprovado";
    } else if (media >= 40 && media < 70 && frequencia >= 75) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

const quantidadeAlunos = Number(
    prompt("Quantos alunos serão cadastrados?")
);

const alunos = [];

for (let i = 0; i < quantidadeAlunos; i++) {
    console.log(`\nCadastro do aluno ${i + 1}`);

    const nome = prompt("Nome:");
    const matricula = prompt("Matrícula:");

    const nota1 = Number(prompt("Nota 1:"));
    const nota2 = Number(prompt("Nota 2:"));
    const nota3 = Number(prompt("Nota 3:"));

    const frequencia = Number(
        prompt("Frequência (%):")
    );

    const notas = [nota1, nota2, nota3];

    const media = calcularMedia(notas);

    const situacao = classificarSituacao(
        media,
        frequencia
    );

    alunos.push({
        nome,
        matricula,
        media,
        frequencia,
        situacao
    });
}

let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

console.log("\n===== RESULTADO DOS ALUNOS =====");

for (const aluno of alunos) {
    console.log(
        `Nome: ${aluno.nome} | ` +
        `Matrícula: ${aluno.matricula} | ` +
        `Média: ${aluno.media.toFixed(2)} | ` +
        `Situação: ${aluno.situacao}`
    );

    if (aluno.situacao === "Aprovado") {
        aprovados++;
    } else if (aluno.situacao === "Recuperação") {
        recuperacao++;
    } else {
        reprovados++;
    }
}

console.log("\n===== RESUMO =====");
console.log(`Aprovados: ${aprovados}`);
console.log(`Em recuperação: ${recuperacao}`);
console.log(`Reprovados: ${reprovados}`);

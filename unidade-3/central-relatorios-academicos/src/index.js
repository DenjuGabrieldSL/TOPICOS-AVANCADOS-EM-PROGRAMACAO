import {
    cadastrarAluno,
    buscarAlunoPorMatricula,
    removerAlunoPorMatricula
} from "./aluno.js";

import {
    calcularMedia,
    calcularSituacao,
    obterDadosAcademicos
} from "./calculos.js";

import {
    criarFiltroPorMediaMinima,
    criarFiltroPorCurso
} from "./filtros.js";

import {
    gerarRelatorio,
    formatarAlunoComMedia,
    formatarAlunoCSV,
    criarResumoPorCurso,
    formatarResumoCurso
} from "./relatorios.js";

const alunos = [];

cadastrarAluno(alunos, {
    id: 1,
    matricula: "2026001",
    nome: "João da Silva",
    email: "joao@email.com",
    curso: "Sistemas de Informação",
    notas: [8, 7, 9]
});

cadastrarAluno(alunos, {
    id: 2,
    matricula: "2026002",
    nome: "Maria Souza",
    email: "maria@email.com",
    curso: "Sistemas de Informação",
    notas: [5, 4, 6]
});

cadastrarAluno(alunos, {
    id: 3,
    matricula: "2026003",
    nome: "Carlos Santos",
    email: "carlos@email.com",
    curso: "Administração",
    notas: [7, 8, 6]
});

cadastrarAluno(alunos, {
    id: 4,
    matricula: "2026004",
    nome: "Ana Oliveira",
    email: "ana@email.com",
    curso: "Administração",
    notas: []
});

const alunosComDados = alunos.map(aluno =>
    obterDadosAcademicos(aluno)
);

console.log("\n===== DADOS ACADÊMICOS =====");

alunosComDados.forEach(aluno => {
    console.log(
        `${aluno.nome} | Média: ${
            aluno.media === null
                ? "Sem notas"
                : aluno.media.toFixed(2)
        } | Situação: ${aluno.situacao}`
    );
});

console.log("\n===== 1. APROVADOS POR NOME =====");

const aprovados = gerarRelatorio(
    alunosComDados,
    criarFiltroPorMediaMinima(6),
    formatarAlunoComMedia,
    (a, b) => a.nome.localeCompare(b.nome)
);

console.log(aprovados);

console.log("\n===== 2. REPROVADOS =====");

const reprovados = gerarRelatorio(
    alunosComDados,
    aluno =>
        aluno.media !== null &&
        aluno.media < 6,
    formatarAlunoComMedia,
    (a, b) => a.media - b.media
);

console.log(reprovados);

console.log("\n===== 3. ALUNOS DE SISTEMAS DE INFORMAÇÃO - CSV =====");

const alunosCurso = gerarRelatorio(
    alunosComDados,
    criarFiltroPorCurso("Sistemas de Informação"),
    formatarAlunoCSV
);

console.log("matricula,nome,email,curso");
console.log(alunosCurso.join("\n"));

console.log("\n===== 4. RESUMO POR CURSO =====");

const resumo = criarResumoPorCurso(
    alunosComDados,
    calcularMedia
);

const resumoFormatado = resumo.map(formatarResumoCurso);

console.log(resumoFormatado);

console.log("\n===== BUSCA POR MATRÍCULA =====");

const encontrado = buscarAlunoPorMatricula(
    alunos,
    "2026001"
);

console.log(encontrado);

console.log("\n===== REMOÇÃO POR MATRÍCULA =====");

const removido = removerAlunoPorMatricula(
    alunos,
    "2026004"
);

console.log(
    removido
        ? "Aluno removido com sucesso."
        : "Aluno não encontrado."
);

console.log("\n===== TESTES DE VALIDAÇÃO =====");

try {
    cadastrarAluno(alunos, {
        id: 5,
        matricula: "2026001",
        nome: "Pedro Teste",
        email: "pedro@email.com",
        curso: "Engenharia",
        notas: [8, 8, 8]
    });
} catch (erro) {
    console.log("Matrícula duplicada:", erro.message);
}

try {
    cadastrarAluno(alunos, {
        id: 6,
        matricula: "2026006",
        nome: "Jo",
        email: "jo@email.com",
        curso: "Engenharia",
        notas: [8, 8, 8]
    });
} catch (erro) {
    console.log("Nome inválido:", erro.message);
}

try {
    cadastrarAluno(alunos, {
        id: 7,
        matricula: "2026007",
        nome: "Pedro Teste",
        email: "email-invalido",
        curso: "Engenharia",
        notas: [8, 8, 8]
    });
} catch (erro) {
    console.log("E-mail inválido:", erro.message);
}

try {
    cadastrarAluno(alunos, {
        id: 8,
        matricula: "2026008",
        nome: "Pedro Teste",
        email: "pedro8@email.com",
        curso: "Engenharia",
        notas: [11, 8, 8]
    });
} catch (erro) {
    console.log("Nota inválida:", erro.message);
}

console.log("\n===== TESTE DE CURSO INEXISTENTE =====");

const cursoInexistente = gerarRelatorio(
    alunosComDados,
    criarFiltroPorCurso("Medicina"),
    formatarAlunoCSV
);

console.log(
    cursoInexistente.length === 0
        ? "Nenhum aluno encontrado."
        : cursoInexistente
);

console.log("\n===== TESTE DE COLEÇÃO VAZIA =====");

const relatorioVazio = gerarRelatorio(
    [],
    () => true,
    formatarAlunoCSV
);

console.log(
    relatorioVazio.length === 0
        ? "Coleção vazia tratada corretamente."
        : relatorioVazio
);

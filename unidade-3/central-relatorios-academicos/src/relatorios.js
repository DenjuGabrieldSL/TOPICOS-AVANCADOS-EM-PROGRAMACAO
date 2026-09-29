export function gerarRelatorio(
    alunos,
    filtrar,
    formatar,
    comparar
) {
    let resultado = [...alunos];

    if (typeof filtrar === "function") {
        resultado = resultado.filter(filtrar);
    }

    if (typeof comparar === "function") {
        resultado.sort(comparar);
    }

    return resultado.map(formatar);
}

export function formatarAlunoComMedia(aluno) {
    return `${aluno.nome} - Média: ${aluno.media.toFixed(2)}`;
}

export function formatarAlunoCSV(aluno) {
    return `${aluno.matricula},${aluno.nome},${aluno.email},${aluno.curso}`;
}

export function formatarResumoCurso(resumo) {
    return `${resumo.curso}: ${resumo.quantidade} aluno(s) - Média geral: ${resumo.mediaGeral.toFixed(2)}`;
}

export function criarResumoPorCurso(alunos, calcularMedia) {
    const cursos = {};

    alunos.forEach(aluno => {
        if (!cursos[aluno.curso]) {
            cursos[aluno.curso] = {
                curso: aluno.curso,
                quantidade: 0,
                somaMedias: 0,
                alunosComNotas: 0
            };
        }

        cursos[aluno.curso].quantidade++;

        const media = calcularMedia(aluno);

        if (media !== null) {
            cursos[aluno.curso].somaMedias += media;
            cursos[aluno.curso].alunosComNotas++;
        }
    });

    return Object.values(cursos).map(curso => ({
        curso: curso.curso,
        quantidade: curso.quantidade,
        mediaGeral:
            curso.alunosComNotas === 0
                ? 0
                : curso.somaMedias / curso.alunosComNotas
    }));
}

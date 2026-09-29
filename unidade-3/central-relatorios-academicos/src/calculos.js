export function calcularMedia(aluno) {
    if (!aluno.notas || aluno.notas.length === 0) {
        return null;
    }

    const soma = aluno.notas.reduce(
        (total, nota) => total + nota,
        0
    );

    return soma / aluno.notas.length;
}

export function calcularSituacao(aluno, mediaMinima = 6) {
    const media = calcularMedia(aluno);

    if (media === null) {
        return "Sem notas";
    }

    return media >= mediaMinima ? "Aprovado" : "Reprovado";
}

export function obterDadosAcademicos(aluno, mediaMinima = 6) {
    return {
        ...aluno,
        media: calcularMedia(aluno),
        situacao: calcularSituacao(aluno, mediaMinima)
    };
}

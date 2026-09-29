import { calcularMedia } from "./calculos.js";

export function criarFiltroPorMediaMinima(mediaMinima) {
    return function (aluno) {
        const media = calcularMedia(aluno);

        return media !== null && media >= mediaMinima;
    };
}

export function criarFiltroPorCurso(curso) {
    const cursoNormalizado = String(curso)
        .trim()
        .toLowerCase();

    return function (aluno) {
        return aluno.curso.toLowerCase() === cursoNormalizado;
    };
}

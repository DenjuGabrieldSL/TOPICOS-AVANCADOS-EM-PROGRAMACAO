import { VinculoNaTurma } from "./VinculoNaTurma.js";

export class Turma {
    #vinculos = [];

    constructor(codigo, componenteCurricular) {
        this.codigo = codigo;
        this.componenteCurricular = componenteCurricular;
    }

    matricular(estudante) {
        const jaMatriculado = this.#vinculos.some(
            vinculo => vinculo.estudante.matricula === estudante.matricula
        );

        if (jaMatriculado) {
            throw new Error("Este estudante já está matriculado na turma.");
        }

        const vinculo = new VinculoNaTurma(estudante);

        this.#vinculos.push(vinculo);

        return vinculo;
    }

    listarMatriculados() {
        return this.#vinculos.map(vinculo => vinculo.resumo());
    }

    resumo() {
        return {
            codigo: this.codigo,
            componenteCurricular: this.componenteCurricular,
            quantidadeEstudantes: this.#vinculos.length,
            matriculados: this.listarMatriculados()
        };
    }
}
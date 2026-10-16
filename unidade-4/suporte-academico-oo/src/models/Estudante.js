export class Estudante {
    #matricula;
    #notas = [];

    constructor(matricula, nome, curso) {
        this.#matricula = matricula;
        this.nome = nome;
        this.curso = curso;
    }

    get matricula() {
        return this.#matricula;
    }

    adicionarNota(nota) {
        if (nota < 0 || nota > 10) {
            throw new Error("A nota deve estar entre 0 e 10.");
        }

        this.#notas.push(nota);
    }

    calcularMedia() {
        if (this.#notas.length === 0) {
            return 0;
        }

        const soma = this.#notas.reduce((total, nota) => total + nota, 0);

        return soma / this.#notas.length;
    }

    listarNotas() {
        return [...this.#notas];
    }

    resumo() {
        return {
            matricula: this.#matricula,
            nome: this.nome,
            curso: this.curso,
            notas: this.listarNotas(),
            media: this.calcularMedia()
        };
    }
}
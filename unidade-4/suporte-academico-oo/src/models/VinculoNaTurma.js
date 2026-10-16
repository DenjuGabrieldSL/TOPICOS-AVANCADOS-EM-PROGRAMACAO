export class VinculoNaTurma {
    constructor(estudante, frequencia = 100) {
        this.estudante = estudante;
        this.dataEntrada = new Date();
        this.frequencia = frequencia;
    }

    atualizarFrequencia(frequencia) {
        if (frequencia < 0 || frequencia > 100) {
            throw new Error("A frequência deve estar entre 0 e 100.");
        }

        this.frequencia = frequencia;
    }

    resumo() {
        return {
            nome: this.estudante.nome,
            matricula: this.estudante.matricula,
            dataEntrada: this.dataEntrada.toLocaleDateString("pt-BR"),
            frequencia: this.frequencia + "%"
        };
    }
}
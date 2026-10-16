export class Chamado {
    #status = "ABERTO";
    #responsavel = null;

    constructor(id, titulo, solicitante) {
        this.id = id;
        this.titulo = titulo;
        this.solicitante = solicitante;
    }

    get status() {
        return this.#status;
    }

    get responsavel() {
        return this.#responsavel;
    }

    iniciarAtendimento(responsavel) {
        if (this.#status !== "ABERTO") {
            throw new Error("Somente chamados abertos podem ser atendidos.");
        }

        this.#responsavel = responsavel;
        this.#status = "EM_ATENDIMENTO";
    }

    finalizar() {
        if (this.#status !== "EM_ATENDIMENTO") {
            throw new Error("Somente chamados em atendimento podem ser finalizados.");
        }

        this.#status = "FINALIZADO";
    }

    resumo() {
        return {
            id: this.id,
            titulo: this.titulo,
            solicitante: this.solicitante.nome,
            responsavel: this.#responsavel,
            status: this.#status
        };
    }
}
/**
 * Representa um chamado de atendimento acadêmico.
 */
export class Chamado {
    constructor(id, solicitante, descricao) {
        this.id = id;
        this.solicitante = solicitante;
        this.descricao = descricao;
        this.emAtendimento = false;
    }
    iniciarAtendimento() {
        this.emAtendimento = true;
    }
}

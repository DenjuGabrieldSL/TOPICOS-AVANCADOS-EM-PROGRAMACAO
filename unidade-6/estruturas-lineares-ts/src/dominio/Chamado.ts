
/**
 * Representa um chamado de atendimento acadêmico.
 */
export class Chamado {
    public emAtendimento: boolean = false;

    constructor(
        public id: number,
        public solicitante: string,
        public descricao: string
    ) {}

    iniciarAtendimento(): void {
        this.emAtendimento = true;
    }
}

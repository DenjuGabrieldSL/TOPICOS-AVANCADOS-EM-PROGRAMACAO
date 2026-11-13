/**
 * Representa uma alteração realizada em um formulário.
 */
export class AlteracaoCampo {
    constructor(campo, valorAnterior, valorNovo) {
        this.campo = campo;
        this.valorAnterior = valorAnterior;
        this.valorNovo = valorNovo;
    }
}


/**
 * Representa uma alteração realizada em um formulário.
 */
export class AlteracaoCampo {
    constructor(
        public campo: string,
        public valorAnterior: string,
        public valorNovo: string
    ) {}
}

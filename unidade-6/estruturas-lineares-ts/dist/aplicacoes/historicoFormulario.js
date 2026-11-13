import { ArrayStack } from "../estruturas/ArrayStack.js";
/**
 * Gerencia o histórico de alterações de um formulário.
 * Utiliza uma pilha para permitir desfazer alterações.
 */
export class HistoricoFormulario {
    constructor() {
        this.historico = new ArrayStack();
    }
    registrarAlteracao(alteracao) {
        this.historico.push(alteracao);
        console.log(`Alteração registrada: ${alteracao.campo}`);
    }
    desfazerAlteracao() {
        const alteracao = this.historico.pop();
        if (alteracao === null) {
            console.log("Não existem alterações para desfazer.");
            return null;
        }
        console.log(`Desfazendo ${alteracao.campo}: ${alteracao.valorNovo} -> ${alteracao.valorAnterior}`);
        return alteracao;
    }
    quantidadeAlteracoes() {
        return this.historico.size();
    }
}

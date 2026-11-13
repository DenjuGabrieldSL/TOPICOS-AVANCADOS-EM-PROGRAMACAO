
import { ArrayStack } from "../estruturas/ArrayStack.js";
import { AlteracaoCampo } from "../dominio/AlteracaoCampo.js";

/**
 * Gerencia o histórico de alterações de um formulário.
 * Utiliza uma pilha para permitir desfazer alterações.
 */
export class HistoricoFormulario {
    private historico: ArrayStack<AlteracaoCampo> =
        new ArrayStack<AlteracaoCampo>();

    registrarAlteracao(alteracao: AlteracaoCampo): void {
        this.historico.push(alteracao);

        console.log(`Alteração registrada: ${alteracao.campo}`);
    }

    desfazerAlteracao(): AlteracaoCampo | null {
        const alteracao = this.historico.pop();

        if (alteracao === null) {
            console.log("Não existem alterações para desfazer.");
            return null;
        }

        console.log(
            `Desfazendo ${alteracao.campo}: ${alteracao.valorNovo} -> ${alteracao.valorAnterior}`
        );

        return alteracao;
    }

    quantidadeAlteracoes(): number {
        return this.historico.size();
    }
}


import { IndexQueue } from "../estruturas/IndexQueue.js";
import { Chamado } from "../dominio/Chamado.js";

/**
 * Gerencia o atendimento de chamados acadêmicos.
 * Utiliza uma fila que segue o princípio FIFO.
 */
export class FilaChamados {
    private fila: IndexQueue<Chamado> =
        new IndexQueue<Chamado>();

    adicionarChamado(chamado: Chamado): void {
        this.fila.enqueue(chamado);

        console.log(`Chamado ${chamado.id} adicionado à fila.`);
    }

    atenderChamado(): Chamado | null {
        const chamado = this.fila.dequeue();

        if (chamado === null) {
            console.log("Não existem chamados aguardando.");
            return null;
        }

        chamado.iniciarAtendimento();

        console.log(
            `Atendendo chamado ${chamado.id} - ${chamado.solicitante}`
        );

        return chamado;
    }

    proximoChamado(): Chamado | null {
        return this.fila.front();
    }

    quantidadeChamados(): number {
        return this.fila.size();
    }
}

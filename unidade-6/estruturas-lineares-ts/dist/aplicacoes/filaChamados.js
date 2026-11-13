import { IndexQueue } from "../estruturas/IndexQueue.js";
/**
 * Gerencia o atendimento de chamados acadêmicos.
 * Utiliza uma fila que segue o princípio FIFO.
 */
export class FilaChamados {
    constructor() {
        this.fila = new IndexQueue();
    }
    adicionarChamado(chamado) {
        this.fila.enqueue(chamado);
        console.log(`Chamado ${chamado.id} adicionado à fila.`);
    }
    atenderChamado() {
        const chamado = this.fila.dequeue();
        if (chamado === null) {
            console.log("Não existem chamados aguardando.");
            return null;
        }
        chamado.iniciarAtendimento();
        console.log(`Atendendo chamado ${chamado.id} - ${chamado.solicitante}`);
        return chamado;
    }
    proximoChamado() {
        return this.fila.front();
    }
    quantidadeChamados() {
        return this.fila.size();
    }
}

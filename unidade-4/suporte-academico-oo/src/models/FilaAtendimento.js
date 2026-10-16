export class FilaAtendimento {
    #chamados = [];

    adicionar(chamado) {
        this.#chamados.push(chamado);
    }

    retirarProximo() {
        if (this.#chamados.length === 0) {
            return null;
        }

        return this.#chamados.shift();
    }

    get tamanho() {
        return this.#chamados.length;
    }

    relatorio() {
        return this.#chamados.map(chamado => chamado.resumo());
    }
}
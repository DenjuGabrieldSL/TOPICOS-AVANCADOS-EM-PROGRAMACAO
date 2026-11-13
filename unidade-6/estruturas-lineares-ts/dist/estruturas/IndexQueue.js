/**
 * Fila genérica baseada em índices de início e fim.
 *
 * enqueue: O(1) amortizado.
 * dequeue: O(1).
 * front: O(1).
 * isEmpty: O(1).
 * size: O(1).
 */
export class IndexQueue {
    constructor() {
        this.elementos = [];
        this.inicio = 0;
        this.fim = 0;
    }
    enqueue(elemento) {
        this.elementos[this.fim] = elemento;
        this.fim++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const elemento = this.elementos[this.inicio];
        delete this.elementos[this.inicio];
        this.inicio++;
        if (this.isEmpty()) {
            this.elementos = [];
            this.inicio = 0;
            this.fim = 0;
        }
        return elemento ?? null;
    }
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elementos[this.inicio] ?? null;
    }
    isEmpty() {
        return this.inicio === this.fim;
    }
    size() {
        return this.fim - this.inicio;
    }
}

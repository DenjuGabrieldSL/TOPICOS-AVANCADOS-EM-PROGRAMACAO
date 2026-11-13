/**
 * Fila genérica baseada em array e shift().
 *
 * enqueue: O(1) amortizado.
 * dequeue: O(n), devido ao deslocamento dos elementos.
 * front: O(1).
 * isEmpty: O(1).
 * size: O(1).
 */
export class ShiftQueue {
    constructor() {
        this.elementos = [];
    }
    enqueue(elemento) {
        this.elementos.push(elemento);
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elementos.shift() ?? null;
    }
    front() {
        return this.elementos[0] ?? null;
    }
    isEmpty() {
        return this.elementos.length === 0;
    }
    size() {
        return this.elementos.length;
    }
}

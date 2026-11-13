/**
 * Pilha genérica baseada em array.
 *
 * push: O(1) amortizado.
 * pop: O(1).
 * peek: O(1).
 * isEmpty: O(1).
 * size: O(1).
 */
export class ArrayStack {
    constructor() {
        this.elementos = [];
    }
    push(elemento) {
        this.elementos.push(elemento);
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elementos.pop() ?? null;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elementos[this.elementos.length - 1] ?? null;
    }
    isEmpty() {
        return this.elementos.length === 0;
    }
    size() {
        return this.elementos.length;
    }
}

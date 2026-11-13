
import { Stack } from "./Stack.js";

/**
 * Pilha genérica baseada em array.
 *
 * push: O(1) amortizado.
 * pop: O(1).
 * peek: O(1).
 * isEmpty: O(1).
 * size: O(1).
 */
export class ArrayStack<T> implements Stack<T> {
    private elementos: T[] = [];

    push(elemento: T): void {
        this.elementos.push(elemento);
    }

    pop(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.elementos.pop() ?? null;
    }

    peek(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.elementos[this.elementos.length - 1] ?? null;
    }

    isEmpty(): boolean {
        return this.elementos.length === 0;
    }

    size(): number {
        return this.elementos.length;
    }
}

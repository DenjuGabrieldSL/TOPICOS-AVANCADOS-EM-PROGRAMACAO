
import { Queue } from "./Queue.js";

/**
 * Fila genérica baseada em array e shift().
 *
 * enqueue: O(1) amortizado.
 * dequeue: O(n), devido ao deslocamento dos elementos.
 * front: O(1).
 * isEmpty: O(1).
 * size: O(1).
 */
export class ShiftQueue<T> implements Queue<T> {
    private elementos: T[] = [];

    enqueue(elemento: T): void {
        this.elementos.push(elemento);
    }

    dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.elementos.shift() ?? null;
    }

    front(): T | null {
        return this.elementos[0] ?? null;
    }

    isEmpty(): boolean {
        return this.elementos.length === 0;
    }

    size(): number {
        return this.elementos.length;
    }
}

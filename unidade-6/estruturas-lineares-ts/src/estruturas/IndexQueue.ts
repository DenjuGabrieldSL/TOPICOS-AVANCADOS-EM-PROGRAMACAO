
import { Queue } from "./Queue.js";

/**
 * Fila genérica baseada em índices de início e fim.
 *
 * enqueue: O(1) amortizado.
 * dequeue: O(1).
 * front: O(1).
 * isEmpty: O(1).
 * size: O(1).
 */
export class IndexQueue<T> implements Queue<T> {
    private elementos: T[] = [];
    private inicio: number = 0;
    private fim: number = 0;

    enqueue(elemento: T): void {
        this.elementos[this.fim] = elemento;
        this.fim++;
    }

    dequeue(): T | null {
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

    front(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.elementos[this.inicio] ?? null;
    }

    isEmpty(): boolean {
        return this.inicio === this.fim;
    }

    size(): number {
        return this.fim - this.inicio;
    }
}

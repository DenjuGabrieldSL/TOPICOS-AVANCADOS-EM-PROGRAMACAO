
/**
 * Contrato genérico de uma fila.
 * Segue o princípio FIFO:
 * O primeiro elemento inserido é o primeiro a sair.
 */
export interface Queue<T> {
    enqueue(elemento: T): void;
    dequeue(): T | null;
    front(): T | null;
    isEmpty(): boolean;
    size(): number;
}

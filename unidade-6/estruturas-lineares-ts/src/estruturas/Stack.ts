
/**
 * Contrato genérico de uma pilha.
 * Segue o princípio LIFO:
 * O último elemento inserido é o primeiro a sair.
 */
export interface Stack<T> {
    push(elemento: T): void;
    pop(): T | null;
    peek(): T | null;
    isEmpty(): boolean;
    size(): number;
}

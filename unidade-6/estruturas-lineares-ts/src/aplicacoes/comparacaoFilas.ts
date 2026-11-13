
import { ShiftQueue } from "../estruturas/ShiftQueue.js";
import { IndexQueue } from "../estruturas/IndexQueue.js";

/**
 * Compara duas implementações de fila.
 * A ShiftQueue utiliza shift(), enquanto a IndexQueue
 * utiliza índices para realizar as remoções.
 */
export function compararFilas(): void {
    const filaIngenua = new ShiftQueue<number>();
    const filaEficiente = new IndexQueue<number>();

    console.log("\n===== COMPARAÇÃO DE FILAS =====");

    for (let i = 1; i <= 5; i++) {
        filaIngenua.enqueue(i);
        filaEficiente.enqueue(i);
    }

    console.log("\nFila utilizando shift():");

    while (!filaIngenua.isEmpty()) {
        console.log(filaIngenua.dequeue());
    }

    console.log("\nFila utilizando índices:");

    while (!filaEficiente.isEmpty()) {
        console.log(filaEficiente.dequeue());
    }

    console.log("\n===== ANÁLISE =====");
    console.log("ShiftQueue: remoção O(n).");
    console.log("IndexQueue: remoção O(1).");

    console.log(
        "A IndexQueue é mais adequada para filas com muitos elementos."
    );
}

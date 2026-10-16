import { Estudante } from "./models/Estudante.js";
import { Chamado } from "./models/Chamado.js";
import { Turma } from "./models/Turma.js";
import { FilaAtendimento } from "./models/FilaAtendimento.js";
import { configuracao } from "./config/configuracao.js";

console.log("==================================");
console.log(" SISTEMA DE SUPORTE ACADÊMICO");
console.log("==================================");

// 1. Criando estudantes

const estudante1 = new Estudante(
    "20261001",
    "João Silva",
    "Análise e Desenvolvimento de Sistemas"
);

const estudante2 = new Estudante(
    "20261002",
    "Maria Santos",
    "Análise e Desenvolvimento de Sistemas"
);

// 2. Adicionando notas

estudante1.adicionarNota(8);
estudante1.adicionarNota(7);
estudante1.adicionarNota(9);

estudante2.adicionarNota(6);
estudante2.adicionarNota(8);
estudante2.adicionarNota(7);

console.log("\n--- ESTUDANTES ---");

console.log(estudante1.resumo());
console.log(estudante2.resumo());

// 3. Criando uma turma

const turma = new Turma("TADS-2026", "Programação Orientada a Objetos");

turma.matricular(estudante1);
turma.matricular(estudante2);

console.log("\n--- TURMA ---");

console.log(turma.resumo());

// 4. Criando chamados

const chamado1 = new Chamado(
    1,
    "Problema de acesso ao SUAP",
    estudante1
);

const chamado2 = new Chamado(
    2,
    "Dúvida sobre matrícula",
    estudante2
);

// 5. Criando fila de atendimento

const fila = new FilaAtendimento();

fila.adicionar(chamado1);
fila.adicionar(chamado2);

console.log("\n--- FILA DE ATENDIMENTO ---");

console.log("Quantidade de chamados:", fila.tamanho);

console.log(fila.relatorio());

// 6. Retirando o próximo chamado

console.log("\n--- ATENDIMENTO ---");

const proximo = fila.retirarProximo();

console.log("Chamado selecionado:", proximo.resumo());

// 7. Iniciando atendimento

proximo.iniciarAtendimento("Técnico Carlos");

console.log("Após iniciar atendimento:");
console.log(proximo.resumo());

// 8. Finalizando chamado

proximo.finalizar();

console.log("Após finalizar:");
console.log(proximo.resumo());

// 9. Conferindo a fila

console.log("\n--- FILA APÓS ATENDIMENTO ---");

console.log("Chamados restantes:", fila.tamanho);

console.log(fila.relatorio());

// 10. Testando fila vazia

console.log("\n--- TESTE DE FILA VAZIA ---");

fila.retirarProximo();

console.log("Próximo chamado:", fila.retirarProximo());

// 11. Configuração

console.log("\n--- CONFIGURAÇÕES ---");

console.log("Média mínima:", configuracao.mediaMinima);

console.log("\n==================================");
console.log(" SISTEMA FINALIZADO");
console.log("==================================");

console.log("\n--- TESTES DE VALIDAÇÃO ---");

// Teste 1: Nota inválida
try {
    estudante1.adicionarNota(11);
} catch (erro) {
    console.log("Nota inválida:", erro.message);
}

// Teste 2: Matrícula duplicada
try {
    turma.matricular(estudante1);
} catch (erro) {
    console.log("Matrícula duplicada:", erro.message);
}

// Teste 3: Finalizar chamado já finalizado
try {
    proximo.finalizar();
} catch (erro) {
    console.log("Finalização inválida:", erro.message);
}
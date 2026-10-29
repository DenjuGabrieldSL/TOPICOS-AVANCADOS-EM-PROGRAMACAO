
import { Estudante } from "./models/Estudante.js";

import {
  Chamado,
  atualizarStatusChamado,
  validarStatusChamado
} from "./models/Chamado.js";

import {
  cadastrarEstudante,
  buscarEstudantePorMatricula,
  listarEstudantes,
  adicionarNota,
  calcularMediaEstudante
} from "./services/estudanteService.js";

import {
  DadosEstudanteEntrada,
  validarEstudante
} from "./validators/validarEstudante.js";

console.log("==================================");
console.log(" SISTEMA DE CADASTRO ACADÊMICO");
console.log("==================================");

const entrada: DadosEstudanteEntrada = {
  nome: "João Silva",
  matricula: "20261001"
};

const resultado = validarEstudante(entrada);

if (resultado.valido && resultado.dados !== undefined) {
  const estudante: Estudante = {
    matricula: resultado.dados.matricula,
    nome: resultado.dados.nome,
    curso: "Análise e Desenvolvimento de Sistemas",
    ativo: true,
    notas: [8, 7]
  };

  cadastrarEstudante(estudante);
}

const estudante2: Estudante = {
  matricula: "20261002",
  nome: "Maria Santos",
  curso: "Análise e Desenvolvimento de Sistemas",
  ativo: true,
  notas: [9, 8]
};

cadastrarEstudante(estudante2);
adicionarNota("20261001", 9);

console.log("\n--- ESTUDANTES CADASTRADOS ---");

for (const estudante of listarEstudantes()) {
  console.log("Nome:", estudante.nome);
  console.log("Matrícula:", estudante.matricula);
  console.log("Curso:", estudante.curso);
  console.log("Média:", calcularMediaEstudante(estudante.matricula));
  console.log("------------------------------");
}

console.log("\n--- CONSULTA ---");

const consulta = buscarEstudantePorMatricula("20261001");

if (consulta !== null) {
  console.log("Estudante encontrado:", consulta.nome);
} else {
  console.log("Estudante não encontrado.");
}

console.log("\n--- CHAMADOS ---");

let chamado: Chamado = {
  id: 1,
  titulo: "Problema no acesso ao sistema acadêmico",
  solicitanteMatricula: "20261001",
  status: "ABERTO"
};

console.log("Status inicial:", chamado.status);

const novoStatus = validarStatusChamado("EM_ATENDIMENTO");

if (novoStatus !== null) {
  chamado = atualizarStatusChamado(chamado, novoStatus);
}

console.log("Novo status:", chamado.status);

const statusInvalido = validarStatusChamado("PENDENTE");

console.log("Status inválido aceito?", statusInvalido !== null);

const statusFinal = validarStatusChamado("FINALIZADO");

if (statusFinal !== null) {
  chamado = atualizarStatusChamado(chamado, statusFinal);
}

console.log("Status final:", chamado.status);

console.log("\nSistema executado com sucesso!");

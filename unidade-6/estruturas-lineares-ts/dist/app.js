import { AlteracaoCampo } from "./dominio/AlteracaoCampo.js";
import { Chamado } from "./dominio/Chamado.js";
import { HistoricoFormulario } from "./aplicacoes/historicoFormulario.js";
import { FilaChamados } from "./aplicacoes/filaChamados.js";
import { compararFilas } from "./aplicacoes/comparacaoFilas.js";
console.log("==================================");
console.log(" BIBLIOTECA DE ESTRUTURAS LINEARES");
console.log("==================================");
// TESTE 1: HISTÓRICO DO FORMULÁRIO
console.log("\n===== HISTÓRICO DO FORMULÁRIO =====");
const historico = new HistoricoFormulario();
historico.registrarAlteracao(new AlteracaoCampo("Nome", "João", "João Pedro"));
historico.registrarAlteracao(new AlteracaoCampo("Curso", "Informática", "TADS"));
historico.registrarAlteracao(new AlteracaoCampo("Período", "1º", "2º"));
console.log("Total de alterações:", historico.quantidadeAlteracoes());
historico.desfazerAlteracao();
historico.desfazerAlteracao();
console.log("Alterações restantes:", historico.quantidadeAlteracoes());
// TESTE 2: FILA DE ATENDIMENTO
console.log("\n===== FILA DE ATENDIMENTO =====");
const filaChamados = new FilaChamados();
filaChamados.adicionarChamado(new Chamado(1, "Maria", "Problema na matrícula"));
filaChamados.adicionarChamado(new Chamado(2, "Pedro", "Dúvida sobre disciplinas"));
filaChamados.adicionarChamado(new Chamado(3, "Ana", "Solicitação de documentos"));
console.log("Total de chamados:", filaChamados.quantidadeChamados());
filaChamados.atenderChamado();
filaChamados.atenderChamado();
console.log("Chamados restantes:", filaChamados.quantidadeChamados());
// TESTE 3: COMPARAÇÃO DAS FILAS
compararFilas();
console.log("\n===== FIM DA EXECUÇÃO =====");

export type StatusChamado =
  | "ABERTO"
  | "EM_ATENDIMENTO"
  | "FINALIZADO";

export interface Chamado {
  readonly id: number;
  readonly titulo: string;
  readonly solicitanteMatricula: string;
  status: StatusChamado;
}

const statusPermitidos: readonly StatusChamado[] = [
  "ABERTO",
  "EM_ATENDIMENTO",
  "FINALIZADO"
];

export function ehStatusChamado(
  valor: unknown
): valor is StatusChamado {
  return statusPermitidos.some((status) => status === valor);
}

export function validarStatusChamado(
  valor: unknown
): StatusChamado | null {
  if (ehStatusChamado(valor)) {
    return valor;
  }

  return null;
}

export function atualizarStatusChamado(
  chamado: Chamado,
  novoStatus: StatusChamado
): Chamado {
  return {
    ...chamado,
    status: novoStatus
  };
}
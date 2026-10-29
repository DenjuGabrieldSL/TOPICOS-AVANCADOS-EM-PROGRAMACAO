
export type DadosEstudanteEntrada = {
  nome?: unknown;
  matricula?: unknown;
};

export type ResultadoValidacao = {
  valido: boolean;
  erros: string[];
  dados?: {
    nome: string;
    matricula: string;
  };
};

export function validarEstudante(
  entrada: DadosEstudanteEntrada
): ResultadoValidacao {
  const erros: string[] = [];

  const nome =
    typeof entrada.nome === "string"
      ? entrada.nome.trim()
      : "";

  const matricula =
    typeof entrada.matricula === "string"
      ? entrada.matricula.trim()
      : "";

  if (nome.length === 0) {
    erros.push("O nome é obrigatório e deve ser um texto.");
  }

  if (matricula.length === 0) {
    erros.push("A matrícula é obrigatória e deve ser um texto.");
  } else if (!/^[A-Za-z0-9.-]{4,20}$/.test(matricula)) {
    erros.push("A matrícula deve ter entre 4 e 20 caracteres válidos.");
  }

  if (erros.length > 0) {
    return {
      valido: false,
      erros
    };
  }

  return {
    valido: true,
    erros: [],
    dados: {
      nome,
      matricula
    }
  };
}


import { Estudante, calcularMedia } from "../models/Estudante.js";

const estudantes: Estudante[] = [];

export function cadastrarEstudante(estudante: Estudante): boolean {
  const existente = estudantes.find(
    (item: Estudante) => item.matricula === estudante.matricula
  );

  if (existente !== undefined) {
    return false;
  }

  estudantes.push({
    ...estudante,
    notas: [...estudante.notas]
  });

  return true;
}

export function buscarEstudantePorMatricula(
  matricula: string
): Estudante | null {
  const estudante = estudantes.find(
    (item: Estudante) => item.matricula === matricula
  );

  if (estudante === undefined) {
    return null;
  }

  return {
    ...estudante,
    notas: [...estudante.notas]
  };
}

export function listarEstudantes(): Estudante[] {
  return estudantes.map((estudante: Estudante) => ({
    ...estudante,
    notas: [...estudante.notas]
  }));
}

export function adicionarNota(
  matricula: string,
  nota: number
): boolean {
  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    return false;
  }

  const indice = estudantes.findIndex(
    (item: Estudante) => item.matricula === matricula
  );

  if (indice === -1) {
    return false;
  }

  const estudante = estudantes[indice];

  if (estudante === undefined) {
    return false;
  }

  estudantes[indice] = {
    ...estudante,
    notas: [...estudante.notas, nota]
  };

  return true;
}

export function calcularMediaEstudante(
  matricula: string
): number | null {
  const estudante = buscarEstudantePorMatricula(matricula);

  if (estudante === null) {
    return null;
  }

  return calcularMedia(estudante.notas);
}

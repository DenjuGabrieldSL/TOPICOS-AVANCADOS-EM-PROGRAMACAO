
export type Estudante = {
  readonly matricula: string;
  nome: string;
  curso: string;
  ativo: boolean;
  readonly notas: readonly number[];
};

export function calcularMedia(notas: readonly number[]): number | null {
  if (notas.length === 0) {
    return null;
  }

  const soma: number = notas.reduce(
    (total: number, nota: number) => total + nota,
    0
  );

  return soma / notas.length;
}

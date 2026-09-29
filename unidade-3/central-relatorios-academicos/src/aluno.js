export function normalizarTexto(texto) {
    return String(texto).trim().replace(/\s+/g, " ");
}

export function normalizarNome(nome) {
    return normalizarTexto(nome)
        .toLowerCase()
        .split(" ")
        .map(palavra => {
            if (palavra.length === 0) {
                return palavra;
            }

            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        })
        .join(" ");
}

export function normalizarEmail(email) {
    return normalizarTexto(email).toLowerCase();
}

export function normalizarCurso(curso) {
    return normalizarTexto(curso);
}

export function normalizarMatricula(matricula) {
    return normalizarTexto(matricula).toUpperCase();
}

export function validarAluno(aluno, alunos = []) {
    if (!aluno.matricula) {
        throw new Error("Matrícula é obrigatória.");
    }

    const matricula = normalizarMatricula(aluno.matricula);

    const matriculaDuplicada = alunos.some(
        outro => outro.matricula === matricula
    );

    if (matriculaDuplicada) {
        throw new Error("Matrícula duplicada.");
    }

    const nome = normalizarNome(aluno.nome);

    if (nome.length < 3) {
        throw new Error("Nome deve possuir pelo menos 3 caracteres.");
    }

    const email = normalizarEmail(aluno.email);

    if (!email.includes("@") || !email.includes(".")) {
        throw new Error("E-mail inválido.");
    }

    const notas = aluno.notas ?? [];

    if (!Array.isArray(notas)) {
        throw new Error("Notas devem ser um array.");
    }

    const notasInvalidas = notas.some(
        nota => typeof nota !== "number" || nota < 0 || nota > 10
    );

    if (notasInvalidas) {
        throw new Error("As notas devem estar entre 0 e 10.");
    }

    return true;
}

export function cadastrarAluno(alunos, dados) {
    validarAluno(dados, alunos);

    const aluno = {
        id: dados.id,
        matricula: normalizarMatricula(dados.matricula),
        nome: normalizarNome(dados.nome),
        email: normalizarEmail(dados.email),
        curso: normalizarCurso(dados.curso),
        notas: [...(dados.notas ?? [])]
    };

    alunos.push(aluno);

    return aluno;
}

export function buscarAlunoPorMatricula(alunos, matricula) {
    const matriculaNormalizada = normalizarMatricula(matricula);

    return alunos.find(
        aluno => aluno.matricula === matriculaNormalizada
    );
}

export function removerAlunoPorMatricula(alunos, matricula) {
    const matriculaNormalizada = normalizarMatricula(matricula);

    const indice = alunos.findIndex(
        aluno => aluno.matricula === matriculaNormalizada
    );

    if (indice === -1) {
        return false;
    }

    alunos.splice(indice, 1);

    return true;
}

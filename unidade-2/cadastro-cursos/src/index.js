const cursos = [];

function inserirCurso(cursos, codigo, nome, cargaHoraria, ativo) {
    const curso = {
        codigo: String(codigo),
        nome: String(nome),
        cargaHoraria: Number(cargaHoraria),
        ativo: Boolean(ativo)
    };

    cursos.push(curso);
}

function listarCursos(cursos) {
    return cursos.map(curso => curso);
}

function filtrarCursosAtivos(cursos) {
    return cursos.filter(curso => curso.ativo);
}

function calcularMediaCargaHoraria(cursosAtivos) {
    if (cursosAtivos.length === 0) {
        return 0;
    }

    const totalCargaHoraria = cursosAtivos.reduce(
        (total, curso) => total + curso.cargaHoraria,
        0
    );

    return totalCargaHoraria / cursosAtivos.length;
}

// Cadastro dos cursos
inserirCurso(cursos, "JS01", "JavaScript", 60, true);
inserirCurso(cursos, "BD01", "Banco de Dados", 80, true);
inserirCurso(cursos, "PW01", "Programação Web", 100, false);
inserirCurso(cursos, "POO01", "Programação Orientada a Objetos", 80, true);

// Relatório de todos os cursos
console.log("===== TODOS OS CURSOS =====");
console.log(listarCursos(cursos));

// Filtrar cursos ativos
const cursosAtivos = filtrarCursosAtivos(cursos);

console.log("\n===== CURSOS ATIVOS =====");
console.log(cursosAtivos);

// Calcular média da carga horária
const mediaCargaHoraria = calcularMediaCargaHoraria(cursosAtivos);

console.log("\n===== RELATÓRIO =====");
console.log(`Total de cursos cadastrados: ${cursos.length}`);
console.log(`Total de cursos ativos: ${cursosAtivos.length}`);
console.log(
    `Média da carga horária dos cursos ativos: ${mediaCargaHoraria.toFixed(2)} horas`
);

let nextId = 1;

module.exports = (estudante, id = nextId++) => {
  if (
    estudante.nome != undefined &&
    estudante.nome != "" &&
    estudante.matricula != undefined &&
    estudante.matricula != "" &&
    estudante.curso != undefined &&
    estudante.curso != "" &&
    estudante.ano != undefined &&
    estudante.ano != "" &&
    !isNaN(estudante.ano) &&
    estudante.ano > 0
  ) {
    return {
      id,
      nome: estudante.nome,
      matricula: estudante.matricula,
      curso: estudante.curso,
      ano: estudante.ano,
    };
  }
};
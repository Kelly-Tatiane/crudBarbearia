const estudante_controller = require("../controllers/estudante_controllers.js");
const livro_controller = require("../controllers/livros_controllers.js");
let nextId = 1;

module.exports = (aluguel, id = nextId++) => {
  if (
    aluguel.dataAluguel != undefined &&
    aluguel.dataAluguel != "" &&
    aluguel.dataDevolucao != undefined &&
    aluguel.dataDevolucao != "" &&
    aluguel.id_estudante !== undefined &&
    estudante_controller.show(aluguel.id_estudante) &&
    aluguel.id_livro !== undefined &&
    livro_controller.show(aluguel.id_livro)
  ) {
    return {
      id,
      id_estudante: aluguel.id_estudante,
      id_livro: aluguel.id_livro,
      dataAluguel: aluguel.dataAluguel,
      dataDevolucao: aluguel.dataDevolucao,
    };
  }
};
let nextId = 1;

module.exports = (livro, id = nextId++) => {
  console.log (livro)
  if (
    livro.titulo != undefined &&
    livro.titulo != "" &&
    livro.autor != undefined &&
    livro.autor != "" &&
    livro.genero != undefined &&
    livro.genero != "" &&
    livro.ano != undefined &&
    livro.ano != "" &&
    !isNaN(livro.ano)
  ) {
    return {
      id,
      titulo: livro.titulo,
      autor: livro.autor,
      genero: livro.genero,
      ano: livro.ano,
    };
  }
};

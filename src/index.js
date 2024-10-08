const express = require("express");
const aluguel_router = require("./router/aluguel_router.js");
const estudante_controller = require("./router/estudante_router.js");
const livro_router = require("./router/livro_router.js");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/aluguel", aluguel_router);
app.use("/estudante", estudante_controller);
app.use("/livro", livro_router);

app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
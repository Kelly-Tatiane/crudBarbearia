const express = require("express");
const router = express.Router();
const aluguel_controller = require("../controllers/aluguel_controllers.js");
const { route } = require("./estudante_router.js");

router.post("/", (req, res) => {
  const aluguel = req.body;
  const code = aluguel_controller.store(aluguel);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const aluguel = aluguel_controller.index();
  res.json(aluguel);
});

router.get("/:id", (req, res) => {
  const aluguel = aluguel_controller.show(req.params.id);
  res.json(aluguel);
});

router.put("/:id", (req, res) => {
    const alterado = aluguel_controller.update(req.body, req.params.id);
    res.status(alterado).json()
});

router.delete("/:id", (req, res) => {
    aluguel_controller.destroy(req.params.id);
    res.json();
})

module.exports = router;
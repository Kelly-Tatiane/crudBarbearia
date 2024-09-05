const express = require("express");
const router = express.Router();
const estudante_controller = require("../controllers/estudante_controllers.js");

router.post("/", (req, res) => {
  const estudante = req.body;
  const code = estudante_controller.store(estudante);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const estudante = estudante_controller.index();
  res.json(estudante);
});

router.get("/:id", (req, res) => {
    const estudante = estudante_controller.show(req.params.id);
    res.json(estudante);
  });
  
  router.put("/:id", (req, res) => {
      const alterado = estudante_controller.update(req.body, req.params.id);
      res.status(alterado).json()
  });
  
  router.delete("/:id", (req, res) => {
      estudante_controller.destroy(req.params.id);
      res.json();
  })

module.exports = router;
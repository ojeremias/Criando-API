const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  res.send(`GET ALL`);
});

router.get("/:id", (req, res) => {
  res.send(`GET ID ${req.params.id}`); // esta linha fara com que recupere o ID
});

router.get("/matricula/:matricula", (req, res) => {
  res.send(`GET Matricula: ${req.params.matricula}`); // esta linha fara com que recupere a matricula
});

router.put("/:id", (req, res) => {
  // atualiza
  res.send(`PUT: ${JSON.stringfy(req.body)}`);
});
router.post("/", (req, res) => {
  //salvar
  res.send(`PUT: ${JSON.stringify(req.body)}`);
});
router.delete("/:id", (req, res) => {
  //delete
  res.send(`PUT: ${req.params.id}`);
});

module.exports = router;

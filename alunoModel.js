const { sequelize, DataTypes } = require("sequelize ");
const db = require("./db");

const Aluno = db.define("Aluno", {
  id: {},
  matricula: {},
  data_nascimento: {},
  pontuacao: {},
});

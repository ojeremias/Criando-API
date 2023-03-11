const { Sequelize, DataTypes } = require("sequelize");
// todas operações do sequelize é assíncrona
const db = require("./db");

const Aluno = db.define(
  "aluno",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matricula: {
      type: DataTypes.STRING,
      unique: true,
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
    },
    pontuacao: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "aluno",
  }
);

module.exports = Aluno;

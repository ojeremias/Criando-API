const sequelize = require("sequelize");

const dbSequelize = new Sequelize("Aluno", "root", "mysql", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = dbSequelize;

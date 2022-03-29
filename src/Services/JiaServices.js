//Arquivo de Exportação dos Cruds que consome o arquivo de DB.js que é a conexão em si.
const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM localcontrolling;", (error, results) => {
        if (error) {
          rejeitado(error);

          aceito(results);

          return;
        }
      });
    });
  },
};

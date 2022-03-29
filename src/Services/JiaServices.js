//Arquivo de Exportação dos Cruds que consome o arquivo de DB.js que é a conexão em si.
const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM localcontrolling;", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }

        aceito(results);
      });
    });
  },

  buscarUnitario: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM localcontrolling WHERE id = ?",
        [id],
        (error, result) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (result.length > 0) {
            aceito(result[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },

  InsertUser: (id, Base_Name, Time_Register, User_Identification, IPadress, Geographic_Coordinates) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO localcontrolling (id, Base_Name, Time_Register, User_Identification, IPadress, Geographic_Coordinates) VALUES (?,?,?,?,?,?)",

        [id, Base_Name, Time_Register, User_Identification, IPadress, Geographic_Coordinates],

        (error, result) => {
          if (error) {
            rejeitado(error);
            aceito(result.InsertUser);
          }
        }
      );
    });
  },
};

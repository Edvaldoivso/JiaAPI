//Arquivo de Exportação dos Cruds que consome o arquivo de DB.js que é a conexão em si.
const db = require("../db");

module.exports = {

//Metodo de Busca geral retornando todos os dados do Banco

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



//Metodo de Busca unitario com base em um ID
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



//Metodo de Inclusão de Dados 
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




//Metodo de Alteração de Dados com base no ID

alterar: (id,Base_Name) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE localcontrolling SET  Base_Name = ? WHERE id = ?",
        [ Base_Name , id],
        (error, result) => {
          if (error) {
            rejeitado(error);
            aceito(result);
          }
        }
      );
    });
  },




//Exclusão de Dado
 deletar: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query("DELETE FROM localcontrolling WHERE id = ?" , [id],
       (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
         aceito(results);
      });
    });
  }



};

//Arquivo para regras de negocio
const JiaServices = require("../Services/JiaServices");

//let nome = User_Identification;
//let local = Base_Name;

module.exports = {
  buscarTodos: async (req, res) => {
    let json = {
      error: "",
      result: []
    };

    let Users = await JiaServices.buscarTodos();

    if (Users) {
      json.result.push({
        nome: Users[i].User_Identification,
        local: Users[i].Base_Name,
      });
    }
     res.json(json);
  },
};

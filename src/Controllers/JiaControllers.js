//Arquivo para regras de negocio
const JiaServices = require("../Services/JiaServices");

module.exports = {
  //Metodo de Busca, ele Desmembra o Json, Trata e retorna o resultado cheio ou vazio
  buscarTodos: async (req, res) => {
    let json = {
      error: "",
      result: [],
    };

    let Users = await JiaServices.buscarTodos();

    for (let i in Users) {
      json.result.push({
        nome: Users[i].User_Identification,
        local: Users[i].Base_Name,
      });
    }
    res.json(json);
  },

  //Metodo de Localização unitaria recebe um ID como parametro e retorna o user se existir
  buscarUnitario: async (req, res) => {
    let json = {
      error: "",
      result: {},
    };

    let id = req.params.id;
    let UserUnit = await JiaServices.buscarUnitario(id);

    if (UserUnit) {
      let XX = req.socket.remoteAddress;
      console.log("REQ SOCKT" + req.socket.remoteAddress);
      json.result = UserUnit;
    }

    res.json(json);
  },

  //Metodo de Insert de registro, neste caso ele cria trata de criar o usuario

  InsertUser: async (req, res) => {
    let json = {
      error: "",
      result: {},
    };
//Recolhe IP
    let IP = req.socket.remoteAddress;
    //console.log("REQ SOCKT" + req.socket.remoteAddress);

      let id = "";
      let Base_Name = req.body.Base_Name;
      let Time_Register = "";
      let User_Identification = req.body.User_Identification;
      let IPadress = IP;
      let Geographic_Coordinates = "";

    if (User_Identification) {
      
      let UserCodigo = await JiaServices.InsertUser(

        id,
        Base_Name,
        Time_Register,
        User_Identification,
        IPadress,
        Geographic_Coordinates
      );

      json.result = {
        id: UserCodigo,
        Base_Name,
        Time_Register,
        User_Identification,
        IPadress,
        Geographic_Coordinates,
      };

    } else {
      json.error = "Campos não Enviados";
    }

    res.json(json);
  },
};

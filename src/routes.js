const express = require("express");
const router = express.Router();



const JiaControllers = require('./Controllers/JiaControllers');

//Get Geral
router.get('/Users' , JiaControllers.buscarTodos);
//Get por ID
router.get('/UserUnit/:id',JiaControllers.buscarUnitario);
//Post Inserir
router.post('/InsertUser',JiaControllers.InsertUser);
//Alteração
router.put('/alterar/:id', JiaControllers.alterar);
//Excluir
router.delete('/deletar/:id' , JiaControllers.deletar);

module.exports = router;
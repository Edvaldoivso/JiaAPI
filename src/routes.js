const express = require("express");
const router = express.Router();



const JiaControllers = require('./Controllers/JiaControllers');


router.get('/Users' , JiaControllers.buscarTodos);














module.exports = router;
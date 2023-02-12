const { Router } = require('express');
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router

//Rotas GET

    .get('/niveis', NivelController.listarNiveis)
    .get('/niveis/:id', NivelController.buscarNivel)

//Rotas POST
    .post('/niveis', NivelController.criarNivel)

//Rotas PUT/PATCH

    .put('/niveis/:id', NivelController.editarNivel)

//Rotas DELETE

    .delete('/niveis/:id', NivelController.deletarNivel)

module.exports = router;
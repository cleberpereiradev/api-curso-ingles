const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController.js');

const router = Router();

router

//Rotas GET
    .get('/turmas', TurmaController.listarTurmas)
    .get('/turmas/:id', TurmaController.buscarTurma)

//Rotas POST
    .post('/turmas', TurmaController.criarTurma)

//Rotas PUT/PATCH

    .put('/turmas/:id', TurmaController.editarTurma)

//Rotas DELETE

    .delete('/turmas/:id', TurmaController.deletarTurma)



module.exports = router;
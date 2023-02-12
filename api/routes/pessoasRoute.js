const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

//rotas GET

 router.get('/pessoas', PessoaController.listarPessoas);
 router.get('/pessoas/:id', PessoaController.listarPessoaPorID);

//rotas GET associadas pessoas->matriculas

 router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.buscarMatricula)

//rotas POST

 router.post('/pessoas', PessoaController.adicionarPessoa);

//rotas POST associadas pessoas->matriculas

router.post('/pessoas/:estudanteId/matriculas', PessoaController.criarMatricula)

//rotas PUT

 router.put('/pessoas/:id', PessoaController.editarPessoa);

//rotas PUT/PATCH associadas pessoa->matricula

router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.editarMatricula)

//rotas DELETE

 router.delete('/pessoas/:id', PessoaController.deletarPessoas);

 //rotas DELETE associadas pessoa->matricula

 router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deletarMatricula)


 module.exports = router;
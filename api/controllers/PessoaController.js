const database = require("../models");//busca o arquivo index.js sem precisar especificá-lo

class PessoaController{

    //métodos GET

    static async listarPessoas(req, res){
        try{

            const listaPessoas = await database.Pessoas.findAll();
            
            return res.status(200).json(listaPessoas);
        }
        catch(error) {

            return res.status(500).json(error.message);

        }
    }

    static async listarPessoaPorID(req, res){
        const { id } = req.params;

        try{
            
            const listarPessoaPorID = await database.Pessoas.findOne({where: {id: Number(id)}});

            return res.status(200).json(listarPessoaPorID);

        } catch(error) {

            return res.status(500).json(error.message);

        }
    }

    //métodos POST

    static async adicionarPessoa(req, res){

        const dadosPessoa = req.body;

        try{

            const pessoaAdicionada = await database.Pessoas.create(dadosPessoa);

            return res.status(200).json(pessoaAdicionada);

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    //métodos PUT/PATCH

    static async editarPessoa(req,res){
        const {id} = req.params;
        const dadosAlterados = req.body;

        try{

            await database.Pessoas.update(dadosAlterados, {where: {id: Number(id)}});

            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });

            return res.status(200).json(pessoaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    //métodos DELETE

    static async deletarPessoas(req,res){

        const {id} = req.params;

        try{

            const deletarPessoas = await database.Pessoas.destroy({where: {id: Number(id)}});

            return res.status(200).json({message: `O ID ${id} foi removido!`});

        } catch (error){

            return res.status(500).json(error.message);

        }
    }


    //Método GET associando pessoa->matrícula
    //exemplo de rota http://localhost:3002/pessoas/:id/matriculas/:id
    //exemplo de rota http://localhost:3002/pessoas/:estudanteId/matriculas/:matriculaId

    static async buscarMatricula(req,res){
        //buscar parâmetros de rotas?
        const {estudanteId, matriculaId} = req.params;

        try{

            const buscarMatricula = await database.Matriculas.findOne({where: {id: estudanteId}, where: {id: matriculaId}});

            return res.status(200).json(buscarMatricula);

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    //Método POST associando pessoa->matrícula

    static async criarMatricula(req, res){
        const {estudanteId} = req.params;
        const dadosMatricula = {... req.body, estudante_id: Number(estudanteId)};

        try{

            const criarMatricula = await database.Matriculas.create(dadosMatricula);

            return res.status(200).json(criarMatricula);

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    //métodos PUT/PATCH associados pessoa->matricula
    //exemplo de rota http://localhost:3002/pessoas/:id/matriculas/:id
    //exemplo de rota http://localhost:3002/pessoas/:estudanteId/matriculas/:matriculaId

    static async editarMatricula(req,res){
        const {estudanteId,matriculaId} = req.params;
        const dadosAlteradosMatricula = {... req.body, estudante_id: Number(estudanteId)};

        try{

            await database.Matriculas.update(dadosAlteradosMatricula, {where: {id: Number(matriculaId)}, where: {estudante_id: Number(estudanteId)}});

            const matriculaAtualizada = await database.Matriculas.findOne({where: {id: matriculaId}})

            return res.status(200).json(matriculaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }



    //Métodos DELETE associando pessoa->matricula

    static async deletarMatricula(req,res){

        const {estudanteId, matriculaId} = req.params;

        try{

            const deletarMatricula = await database.Matriculas.destroy({where: {id: estudanteId}, where: {id: matriculaId}});

            return res.status(200).json({message: `A matricula do aluno com ID: ${estudanteId}, com ID de matricula: ${matriculaId} foi removida!`});

        } catch (error){

            return res.status(500).json(error.message);

        }
    }

}

module.exports = PessoaController;
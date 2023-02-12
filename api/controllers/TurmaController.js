const database = require('../models');

class TurmaController{

    //Métodos GET
    
    static async listarTurmas(req, res){

        try{

            const listarTurmas = await database.Turmas.findAll();

            return res.status(200).json(listarTurmas);

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    static async buscarTurma(req, res){
        const {id} = req.params;

        try{
            const buscarTurma = await database.Turmas.findOne({where: {id: Number(id)}});

            return res.status(200).json(buscarTurma);

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    //Métodos POST

    static async criarTurma(req,res){
        const dadosTurma = req.body;

        try{

            const turmaAdicionada = await database.Turmas.create(dadosTurma);

            return res.status(200).json(turmaAdicionada)

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    //Métodos PUT/PATCH

    static async editarTurma(req,res){
        const {id} = req.params;
        const dadosAlteradosTurma = req.body;

        try{

            await database.Turmas.update(dadosAlteradosTurma, {where: {id: Number(id)}});

            const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id) } });

            return res.status(200).json(turmaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    //Métodos DELETE

    static async deletarTurma(req,res){
        const {id} = req.params;

        try{

            const deletarTurma = await database.Turmas.destroy({where: {id: Number(id)}});

            return res.status(200).json({message: `A turma com ID: ${id}, foi removida da base de dados!`});

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

}

module.exports = TurmaController;
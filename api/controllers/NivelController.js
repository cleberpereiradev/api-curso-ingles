const database = require("../models");//busca o arquivo index.js sem precisar especificá-lo

class NivelController{

    //Métodos GET

    static async listarNiveis(req, res){
        try{

            const listarNiveis = await database.Niveis.findAll();
    
            return res.status(200).json(listarNiveis);

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    static async buscarNivel(req, res){
        const {id} = req.params;

        try{
            const buscarNivel = await database.Niveis.findOne({where: { id: Number(id) } });

            return res.status(200).json(buscarNivel);

        } catch(error){
            
            return res.status(500).json(error.message);

        }
    }

    //Métodos POST

    static async criarNivel(req, res){
        const dadosNivel = req.body;

        try{

            const criarNivel = await database.Niveis.create(dadosNivel);

            return res.status(200).json(criarNivel);

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    //Métodos PUT/PATCH

    static async editarNivel(req, res){
        const {id} = req.params;
        const dadosAlteradosNivel = req.body;

        try{

            await database.Niveis.update(dadosAlteradosNivel, {where: { id: Number(id) } });
            const nivelAlterado = await database.Niveis.findOne({where: {id: Number(id)}});

            return res.status(200).json(nivelAlterado);

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

    //Métodos DELETE

    static async deletarNivel(req,res){
        const {id} = req.params;

        try{

            const deletarNivel = await database.Niveis.destroy({where: {id: Number(id)}});

            return res.status(200).json({message: `O item com ID: ${id}, foi deletado da base de dados`});

        } catch(error){

            return res.status(500).json(error.message);

        }
    }

}

module.exports = NivelController;
const models = require('../models');

module.exports = {
    add: async (req,res,next) =>{
        try {
            const reg = await models.CognitiveModel.create(req.body);

            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async (req,res,next) => {
        try {
            const reg=await models.CognitiveModel.findOne({_id:req.query._id});
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else{
                res.status(200).json(reg);
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    validate: async (req,res,next) => {
        try {
            const reg=await models.CognitiveModel.findOne({domain:req.query.name});
            if (!reg){
                res.status(200).json({
                    valid: true
                });
            } else{
                res.status(200).json({
                    valid: false
                });
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req,res,next) => {
        try {
            let valor=req.query.valor;

            console.log(valor)
            const reg=await models.CognitiveModel.find({ User: valor });

            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) => {
        try {               
            const reg = await models.CognitiveModel.findByIdAndUpdate(...req.body);
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    delete: async (req, res, next) => {
        try {              
            const reg = await models.CognitiveModel.findByIdAndDelete(req.body._id);
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}

const tokenService = require('../services/token');
module.exports = {
    verifyUser: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
}
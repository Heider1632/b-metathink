const routerx = require('express-promise-router');
const userRouter = require('./user');
const cognitiveModelRouter = require('./cognitiveModel');
const router=routerx();


router.use('/user',userRouter);
router.use('/cognitiveModel',cognitiveModelRouter);
module.exports = router;
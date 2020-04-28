import routerx from 'express-promise-router';
import userRouter from './user';
import cognitiveModelRouter from './cognitiveModel'
const router=routerx();


router.use('/user',userRouter);
router.use('/cognitiveModel',cognitiveModelRouter);
export default router;
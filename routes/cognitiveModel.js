import routerx from 'express-promise-router';
import CognitiveModelController from '../controllers/CognitiveModelController';
import auth from '../middlewares/auth';

const router=routerx();

router.post('/add', CognitiveModelController.add);
router.get('/query',CognitiveModelController.query);
router.get('/list', CognitiveModelController.list);
router.put('/update', CognitiveModelController.update);
router.post('/delete', CognitiveModelController.delete);

export default router;
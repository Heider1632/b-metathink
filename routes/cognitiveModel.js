const routerx = require('express-promise-router');
const CognitiveModelController = require('../controllers/CognitiveModelController');
// import auth from '../middlewares/auth';

const router=routerx();

router.post('/add', CognitiveModelController.add);
router.get('/query',CognitiveModelController.query);
router.get('/validate',CognitiveModelController.validate);
router.get('/list', CognitiveModelController.list);
router.put('/update', CognitiveModelController.update);
router.post('/delete', CognitiveModelController.delete);

module.exports = router;
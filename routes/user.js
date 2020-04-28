const routerx = require('express-promise-router');
const userController = require('../controllers/UserController');
const auth = require('../middlewares/auth');
const router=routerx();

router.post('/add', userController.add);
router.get('/query',auth.verifyUser,userController.query);
router.get('/list',auth.verifyUser,userController.list);
router.put('/update',auth.verifyUser,userController.update);
router.delete('/remove',auth.verifyUser,userController.remove);
router.put('/activate',auth.verifyUser,userController.activate);
router.put('/deactivate',auth.verifyUser,userController.deactivate);
router.post('/login', userController.login);

module.exports = router;

const router = require('express').Router();
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');
const propertyController = require('../controllers/propertyController');
const { validateLogin } = require('../validation/authValidation');

router.post('/login', validateLogin, authController.login);
router.get('/properties', propertyController.getProperties);

module.exports = router;

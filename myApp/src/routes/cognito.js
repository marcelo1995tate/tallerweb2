var express = require('express');
var router = express.Router();

const cognitoController = require('../controllers/cognitoController');

router.post('/sign-in', cognitoController.signIn);
router.post('/sign-up' , cognitoController.signUp);
router.post('/forgotPassword' , cognitoController.forgotPassword);
router.post('/confirmNewPassword' , cognitoController.confirmNewPassword);

module.exports = router;
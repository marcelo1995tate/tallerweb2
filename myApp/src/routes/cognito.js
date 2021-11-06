var express = require('express');
var router = express.Router();

const cognitoController = require('../controllers/cognitoController');

router.post('/signin', cognitoController.signIn);

module.exports = router;
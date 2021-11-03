var express = require('express');
var router = express.Router();

const ordersController = require ('../controllers/ordersController');

/* GET users listing. */
router.post('/create',ordersController.create);


module.exports = router;

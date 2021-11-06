var express = require('express');
var router = express.Router();

const ordersController = require ('../controllers/ordersController');

/* GET users listing. */
router.post('/create',ordersController.create);
router.get('/getAll',ordersController.getAll);
router.get('/getById/:id',ordersController.getById);


module.exports = router;

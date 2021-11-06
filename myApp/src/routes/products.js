var express = require('express');
var router = express.Router();


const productsController = require ('../controllers/productsController');

/* GET users listing. */
router.get('/mostar-todos',productsController.getAll);
router.get('/mostar-producto/:id',productsController.getById);

module.exports = router;

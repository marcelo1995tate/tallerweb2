var express = require('express');
var router = express.Router();
var multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = path.join(__dirname, '../../public/images/products');
        cb(null, folder);
    },
    filename: function (req, file, cb) {
        console.log(file);
        console.log(req.body.NOMBRE);
        let imageName = 'product-' + uuidv4() + '-' + path.extname(file.originalname);
        cb(null, imageName);
    }
})
const upload = multer({
    storage, fileFilter: (req, file, cb) => {
        if ((file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg")) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Imagenes en formato .png / .jpg / .jpeg'));
        }
    }
});

const productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/mostar-todos', productsController.getAll);
router.get('/mostar-producto/:id', productsController.getById);
router.post('/create',upload.single('images'),productsController.create);

module.exports = router;

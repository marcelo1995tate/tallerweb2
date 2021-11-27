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
const validaciones ={

    validar: (req, res) => {
        try {
            let precio = parseInt(req.body.PRECIO, 10);

            if (req.body.NOMBRE == '' || req.body.NOMBRE == null) {
                console.log(req.body.NOMBRE+'mideware')                
                console.log('----------------------nomb');
                throw 'campos invalidos'
            }
            if (req.body.DESCRIPCION == null || req.body.DESCRIPCION == '') {
                console.log('----------------------desc');
                throw 'campos invalidos'
            }
            if (req.body.CLASIFICACION == null || req.body.CLASIFICACION == '') {
                console.log('----------------------clase');
                throw 'campos invalidos'
            }
            if (precio == null || typeof (precio) != 'number' || isNaN(precio)) {
                console.log('----------------------precio');
                throw 'campos invalidos'
            }
            if (req.file.filename == null && req.file.filename == '') {
                console.log('----------------------img');
                throw 'campos invalidos'
            }
        }
        catch {
            res.send('CAMPOS INVALIDOS')
        }
    }
}
const productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/mostar-todos', productsController.getAll);
router.get('/mostar-producto/:id', productsController.getById);
router.post('/create',validaciones.validar,  upload.single('images'),productsController.create);






module.exports = router;

const db = require('../../database/models');

const controller = {

    getAll: (req, res) => {
        db.Productos.findAll().then((resultados) => { res.json(resultados) })
    },

    getById: (req, res) => {
        db.Productos.findOne({
            where: {
                ID_PRODUCTO: req.params.id
            }
        }).then((resultados) => {
            if (!resultados) {
                res.send('{Error: "Id invalido"}')
            }
            res.json(resultados);
        });
    },
    create: (req, res) => {
        try {
            console.log(req.body)
            let precio = parseInt(req.body.PRECIO, 10);

            if (req.body.NOMBRE == '' || req.body.NOMBRE == null) {
                console.log('----------------------nomb');
                throw 'El nombre no es valido'
            }
            if (req.body.DESCRIPCION == null || req.body.DESCRIPCION == '') {
                console.log('----------------------desc');
                throw 'La descripción no es valida'
            }
            if (req.body.CLASIFICACION == null || req.body.CLASIFICACION == '') {
                console.log('----------------------clase');
                throw 'La clasificación no es valida'
            }
            if (precio == null || typeof (precio) != 'number' || isNaN(precio)) {
                console.log('----------------------precio');
                throw 'El valor del precio no es valido'
            }
            if (req.file.filename == null && req.file.filename == '') {
                console.log('----------------------img');
                throw 'La imagen no es valida'
            }

            db.Productos.create({ NOMBRE: req.body.NOMBRE, DESCRIPCION: req.body.DESCRIPCION, CLASIFICACION: req.body.CLASIFICACION, IMAGEN: req.file.filename, PRECIO: precio })
            res.send();
        }
        catch (e){
            res.send(JSON.stringify({Message:e}))
        }

    },
}

module.exports = controller;
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
                res.send('ID INEXISTENTE')
            }
            res.json(resultados);
        });
    },
    create: (req, res) => {
        try {
            let precio = parseInt(req.body.PRECIO, 10);

            if (req.body.NOMBRE == '' || req.body.NOMBRE == null) {
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
            
            db.Productos.create({ NOMBRE: req.body.NOMBRE, DESCRIPCION: req.body.DESCRIPCION, CLASIFICACION: req.body.CLASIFICACION, IMAGEN: req.file.filename, PRECIO: precio })
            res.send();
        }
        catch {
            res.send('CAMPOS INVALIDOS ')
        }

    },
}

module.exports = controller;
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
            db.Productos.create({ NOMBRE: req.body.NOMBRE, DESCRIPCION: req.body.DESCRIPCION, CLASIFICACION: req.body.CLASIFICACION, IMAGEN: req.file.filename, PRECIO: precio })
            res.send();
    },
}

module.exports = controller;
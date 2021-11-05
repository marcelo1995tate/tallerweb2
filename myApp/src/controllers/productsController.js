const { SSL_OP_NO_TLSv1_1 } = require('constants');
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
        }).then((resultados)=> {
            if (!resultados) {
                res.send('ID INEXISTENTE')
            }
            res.json(resultados);
        });
    },
    create: (req, res) => {
        db.Productos.create({ NOMBRE:req.body.NOMBRE,DESCRIPCION:req.body.DESCRIPCION,CLASIFICACION:req.body.DESCRIPCION,IMAGEN:req.body.IMAGEN,PRECIO:req.body.PRECIO})
        res.send();
    },
}

module.exports = controller;
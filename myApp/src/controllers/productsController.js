const { SSL_OP_NO_TLSv1_1 } = require('constants');
const { send } = require('process');
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
}

module.exports = controller;
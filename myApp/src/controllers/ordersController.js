const { SSL_OP_NO_TLSv1_1 } = require('constants');
const db = require('../../database/models');
const { QueryTypes } = require('sequelize');

let idUsuario = 1;
let productosComprados=[1,2,3]
const controller = {

    create: (req, res) => {
        db.Pedidos.create({ ID_USUARIO: idUsuario })
            .then((resultados) => {
               db.sequelize.query('SELECT max(`ID_PEDIDO`) FROM `pedido` AS `Pedidos` LIMIT 1;', {
                    type: QueryTypes.SELECT
                  })
                  return resultados.ID_PEDIDO
            })
            .then((idMax)=>{
                productosComprados.forEach(element => {
                    db.Items_Pedidos.create({ ID_PEDIDO: idMax,ID_PRODUCTO: element })
                })
                res.send();
            })
    },

    getAll: (req, res) => {
        db.Pedidos.findAll().then((resultados) => { res.json(resultados) })
    },
    getById: (req, res) => {
        db.Pedidos.findOne({
            where: {
                ID_PEDIDO: req.params.id
            }
        }).then((resultados) => {
            if (!resultados) {
                res.send('ID INEXISTENTE')
            }
            res.json(resultados);
        });
    },

}

module.exports = controller;
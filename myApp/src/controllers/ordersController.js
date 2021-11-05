const { SSL_OP_NO_TLSv1_1 } = require('constants');
const db = require('../../database/models');
const { QueryTypes } = require('sequelize');

let idUsuario = 1;
let productosComprados = [1, 2, 3]
const controller = {

    create: (req, res) => {
        db.Pedidos.create({ ID_USUARIO: idUsuario, FECHA: db.sequelize.fn('NOW')})
            .then((resultados) => {
                db.sequelize.query('SELECT max(`ID_PEDIDO`) FROM `pedido` AS `Pedidos` LIMIT 1;', {
                    type: QueryTypes.SELECT
                })
                return resultados.ID_PEDIDO
            })
            .then((idMax) => {
                productosComprados.forEach(element => {
                    db.Items_Pedidos.create({ ID_PEDIDO: idMax, ID_PRODUCTO: element })
                })
                res.send();
            })
    },

    getAll: (req, res) => {
        db.sequelize.query('select p.ID_PEDIDO,p.FECHA,SUM(pr.PRECIO) as "COSTO" from pedido p inner join item_pedido ip on p.ID_PEDIDO=ip.ID_PEDIDO inner join producto pr on pr.ID_PRODUCTO=ip.ID_PRODUCTO WHERE p.ID_USUARIO=' + idUsuario + ' group by p.ID_PEDIDO', 
        {
            type: QueryTypes.SELECT
        }).then((resultados) => {
            res.json(resultados)
        })
    },

    getById: (req, res) => {
        db.sequelize.query('select p.*,ip.ID_ITEM,pr.* from pedido p inner join item_pedido ip on p.ID_PEDIDO=ip.ID_PEDIDO inner join producto pr on pr.ID_PRODUCTO=ip.ID_PRODUCTO WHERE p.ID_PEDIDO=' + req.params.id, {
            type: QueryTypes.SELECT
        }).then((resultados) => {
            res.json(resultados)
        })
    },

}

module.exports = controller;
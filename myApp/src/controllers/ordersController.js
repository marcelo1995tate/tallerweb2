const db = require('../../database/models');
const { QueryTypes } = require('sequelize');

const controller = {

    create: (req, res) => {
        if (req.body.productos.length == 0) {
            res.status(400).send(JSON.stringify({ mensaje: "Fallo al cargar la orden" }))
            return
        }
        db.Pedidos.create({ ID_TOKEN: req.body.email, FECHA: db.sequelize.fn('NOW') })
            .then((resultados) => {
                db.sequelize.query('SELECT max(`ID_PEDIDO`) FROM `pedido` AS `Pedidos` LIMIT 1;', {
                    type: QueryTypes.SELECT
                })
                return resultados.ID_PEDIDO
            })
            .then((idMax) => {
                req.body.productos.forEach(element => {
                    db.Items_Pedidos.create({ ID_PEDIDO: idMax, ID_PRODUCTO: element.ID_PRODUCTO, CANTIDAD: element.CANTIDAD })
                })
                res.send(JSON.stringify({ mensaje: "Orden cargada correctamente" }));
            })
            .catch((error) => {
                res.send(JSON.stringify({ mensaje: "Fallo al cargar la orden" }));
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
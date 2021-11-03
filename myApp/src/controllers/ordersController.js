const { SSL_OP_NO_TLSv1_1 } = require('constants');
const db = require('../../database/models');

let idUsuario=1;

const controller = {

   create: (req, res) => {
        db.Pedidos.create({ID_PEDIDO:1, ID_USUARIO: 1}).then((resultados) => { res.status(200).send })
    },
    

}

module.exports = controller;
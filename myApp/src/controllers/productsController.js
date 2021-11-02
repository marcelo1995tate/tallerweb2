const { SSL_OP_NO_TLSv1_1 } = require('constants');
const db = require("../database/models")
const controller = {

getAll:(req,res)=>{

    res.send('carlito bala el chapo');

    db.Usuarios.findAll().then((resultados)=>{console.log(resultados)})
}

}

module.exports=controller;
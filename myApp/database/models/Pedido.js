module.exports = (sequelize, dataTypes) => {
    let alias = "Pedidos";
    let cols = {
        ID_PEDIDO: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true        
        },
        ID_USUARIO: {
            type: dataTypes.INTEGER,
        },
        FECHA: {
            type: dataTypes.DATE,
        }

    }

    let config = { tableName: "pedido", timestamps: false };
    const Pedido = sequelize.define(alias, cols, config);

    Pedido.associate = function (models) {
        Pedido.belongsTo(models.Usuarios,
            {
                as:"pedido_usuario",
                foreignKey:"ID_USUARIO"
            })
    };
    return Pedido;
}

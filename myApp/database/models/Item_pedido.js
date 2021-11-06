module.exports = (sequelize, dataTypes) => {
    let alias = "Items_Pedidos";
    let cols = {
        ID_ITEM: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true        
        },        
        ID_PEDIDO: {
            type: dataTypes.INTEGER,      
        },
        ID_USUARIO: {
            type: dataTypes.INTEGER,
        }

    }

    let config = { tableName: "item_pedido", timestamps: false };
    const ItemPedido = sequelize.define(alias, cols, config);

    ItemPedido.associate = function (models) {
        ItemPedido.belongsTo(models.Pedidos,
            {
                as:"item_pedido",
                foreignKey:"ID_PEDIDO"
            })
    };
    ItemPedido.associate = function (models) {
        ItemPedido.belongsTo(models.Productos,
                {
                    as:"item_producto",
                    foreignKey:"ID_PRODUCTO"
                })
    };
        return ItemPedido;
}

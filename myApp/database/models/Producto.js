module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        ID_PRODUCTO: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        NOMBRE:{
            type: dataTypes.STRING,
            allowNull: false
        },
        DESCRIPCION:{
            type: dataTypes.STRING,
            allowNull: false
        },
        CLASIFICACION:{
            type: dataTypes.STRING,
            allowNull: false
        },
        IMAGEN:{
            type: dataTypes.STRING,
            allowNull: true
        },
        PRECIO:{
            type: dataTypes.DOUBLE,
            allowNull: false
        }
    }
    let config = { tableName: "producto", timestamps: false };
    const Producto = sequelize.define(alias, cols, config);
return Producto;
}

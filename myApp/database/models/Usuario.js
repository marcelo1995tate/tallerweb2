module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        ID_USUARIO: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        EMAIL:{
            type: dataTypes.STRING,
            allowNull: false
        },
        CONTRASENA:{
            type: dataTypes.STRING,
            allowNull: false
        },
        NOMBRE:{
            type: dataTypes.STRING,
            allowNull: false
        },
        APELLIDO:{
            type: dataTypes.STRING,
            allowNull: false
        },
        DIRECCION:{
            type: dataTypes.STRING,
            allowNull: false
        },
        ROL:{
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = { tableName: "usuario", timestamps: false };
    const Usuario = sequelize.define(alias, cols, config);
return Usuario;
}

const Sequelize = require('sequelize');
const path = require('path');

// Conexão com o banco de dados
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: path.resolve(__dirname, '../chamados.db') 
    });    


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
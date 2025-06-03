const Sequelize = require('sequelize');

// Conexão com o banco de dados

const sequelize = new Sequelize('todolist', 'root', 'Ibttf4#44', {
    host: 'localhost',
    dialect: 'mysql'
});

// Testa conexão com o banco 

sequelize.authenticate()
    .then(() => {
        console.log("Login deu certo")
    })
    .catch(() => {
        console.log("Login com erro")
    });

// Exporta o modulo

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
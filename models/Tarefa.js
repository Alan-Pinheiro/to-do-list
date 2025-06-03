const db = require('./db');

// Escopo da tabela

const Tarefa = db.sequelize.define('tarefas', {
    descricao: {
        type: db.Sequelize.STRING
    },
    concluido: {
        type: db.Sequelize.BOOLEAN
    }
});

// Força criação da tabela

Tarefa.sync({force: true})

// Exporta o modulo

module.exports = Tarefa
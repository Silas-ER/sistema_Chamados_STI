const db = require('./db');

const Post = db.sequelize.define('chamados', {
    nome: {
        type: db.Sequelize.TEXT
    },
    matricula: {
        type: db.Sequelize.TEXT
    },
    setor: {
        type: db.Sequelize.TEXT
    },
    tipo: {
        type: db.Sequelize.TEXT
    },
    prioridade: {
        type: db.Sequelize.TEXT
    },
    descricao: {
        type: db.Sequelize.TEXT
    },
    status: {
        type: db.Sequelize.BOOLEAN
    }
});

Post.all = function() {
    return Post.findAll(); // Método do Sequelize para buscar todos os registros
};

module.exports = Post; //exporta o model Post para ser usado em outros arquivos
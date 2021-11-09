const Sequelize = require('sequelize');

const sequelize = new Sequelize('bancodedados', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('conexão realizada com sucesso');
}).catch(() => {
    console.log('erro ao realizar conexão');
});

module.exports = sequelize;
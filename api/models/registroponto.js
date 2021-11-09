const Sequelize = require('sequelize');
const db = require('./db');

const registroponto = db.define('pontoimportacao', {
    PI_USUARIO_NOME: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PI_IMEI: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PI_ACAO: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PI_DATA: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PI_HORA: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PI_IDSEGURANCA: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PI_PROCESSADO: {
        type: Sequelize.STRING,
        allowNull: true
    },
    PI_ORIGEM: {
        type: Sequelize.STRING,
        allowNull: true
    }
});


module.exports = registroponto;
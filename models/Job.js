const Sequelize = require('sequelize')
const db = require('../db/connection')

const job = db.define('jobs', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salary: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    email: {

        type: Sequelize.STRING,
        allowNull: false
    },
    new_job: {
        type: Sequelize.INTEGER,
    },
});
module.exports = job;
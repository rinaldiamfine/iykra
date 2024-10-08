var Sequelize = require('sequelize');
const db = require('../../tools/db');

const employeeModel = db.define('employees', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = employeeModel
const { DataTypes } = require('sequelize');
const orm = require('../db/orm');

const Channel = orm.define('channel', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
    },
}, {
    updatedAt: false,
});

module.exports = Channel;
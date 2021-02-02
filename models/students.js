'use strict'

module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define('students', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        age: {
            type: DataTypes.INTEGER,
            required: true
        },
        createdAt: {
            allowNull: false,
            defaultValue: DataTypes.fn('now'),
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            defaultValue: DataTypes.fn('now'),
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    });
    return Students;
};
'use strict'

module.exports = (sequelize, DataTypes) => {
    const StudentsView = sequelize.define('students', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        }
    }, {
        timestamps: false
    });
    return StudentsView;
};
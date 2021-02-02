'use strict'

module.exports = (sequelize, DataTypes) => {
    const StudentsView = sequelize.define('view_students', {
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
        timestamps: false,
    });
    return StudentsView;
};
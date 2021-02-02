'use strict'

const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {};
db.students = require('./models/students')(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
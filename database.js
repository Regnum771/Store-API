const { Sequelize, DataTypes } = require('sequelize');
ssl = process.env.SSL == "true" ? {ssl:{require: true}} : null;
module.exports = new Sequelize({
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    pool: {
        max:5,
        min:0,
        require:30000,
        idle:10000
    },
    dialectOptions:{
        ssl
    }
});

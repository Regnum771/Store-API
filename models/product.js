const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const product = db.define(
	'product', {
		id: {
			type: DataTypes.UUID, 
			defaultValue: DataTypes.UUIDV4, 
			allowNull: false, 
			primaryKey: true
		},
		brand: {
			type: DataTypes.STRING,
			defaultValue: "",
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: "",
			allowNull: false
		},
		price: {
			type: DataTypes.DOUBLE,
			defaultValue: 0,
			allowNull: false
		}
	}, {
		timestamps:false
	});

db.sync()
	.then(() => {console.log("Product table synced")})
	.catch((error) => {
		console.log("Error with Product table:  " + error)
	})	  

module.exports = product;
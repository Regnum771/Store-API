
// const postgres = require("pg")
// const express = require("express")
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const cart = db.define(
    'carts', {
       id: {
          type: DataTypes.UUID, 
          defaultValue: DataTypes.UUIDV4, 
          allowNull: false, 
          primaryKey: true
        },
        total:{
          type: DataTypes.DOUBLE,
          defaultValue: 0,
          allowNull: false,
        }

      }, {
        timestamps:false
      });

db.sync().then(() => {
  console.log("Cart table synced")
})
.catch((error) => {
  console.log("Error with Cart table:  " + error)
})

module.exports = cart;
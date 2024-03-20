
// const postgres = require("pg")
// const express = require("express")
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const order_detail = db.define(
        'order_details', {
           id: {
              type: DataTypes.UUID, 
              defaultValue: DataTypes.UUIDV4, 
              allowNull: false, 
              primaryKey: true
            },
            qty:{
              type: DataTypes.INTEGER,
              defaultValue: 1,
              allowNull: false,
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
  console.log("Order Details table synced")
})
.catch((error) => {
  console.log("Error with Order Details table:  " + error)
})

module.exports = order_detail;
const db = require('../database');
const order_detail = require('./order_details')
const cart = require('./carts')
const product = require('./product')

const setAssociations = function() {
    cart.hasMany(order_detail);
    order_detail.belongsTo(cart);
    order_detail.hasOne(product);
}

db.sync().then(() => {
    console.log("Associations synced")
  })
  .catch((error) => {
    console.log("Error with association table:  " + error)
  })
  
module.exports = setAssociations;